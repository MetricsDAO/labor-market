// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// Testing imports
import {StdCheats} from "forge-std/StdCheats.sol";
import {console} from "forge-std/console.sol";
import {PRBTest} from "prb-test/PRBTest.sol";

// Contracts
import {PaymentToken} from "../Helpers/HelperTokens.sol";
import { BadgerOrganization } from "src/Modules/Badger/BadgerOrganization.sol";
import { Badger } from "src/Modules/Badger/Badger.sol";
import { BadgerScoutInterface } from "src/Modules/Badger/interfaces/BadgerScoutInterface.sol";

import {LaborMarketInterface} from "src/LaborMarket/interfaces/LaborMarketInterface.sol";
import {LaborMarket} from "src/LaborMarket/LaborMarket.sol";

import {LaborMarketFactory} from "src/Network/LaborMarketFactory.sol";
import {LaborMarketNetwork} from "src/Network/LaborMarketNetwork.sol";
import {LaborMarketVersions} from "src/Network/LaborMarketVersions.sol";

import {ReputationModule} from "src/Modules/Reputation/ReputationModule.sol";
import {ReputationModuleInterface} from "src/Modules/Reputation/interfaces/ReputationModuleInterface.sol";

import {ConstantLikertEnforcement} from "src/Modules/Enforcement/ConstantLikertEnforcement.sol";

import {PayCurve} from "src/Modules/Payment/PayCurve.sol";

import {LaborMarketConfigurationInterface} from "src/LaborMarket/interfaces/LaborMarketConfigurationInterface.sol";
import {LaborMarketNetworkInterface} from "src/Network/interfaces/LaborMarketNetworkInterface.sol";

contract ConstantLikertEnforcementTest is PRBTest, StdCheats {
    Badger public badger;
    BadgerOrganization public badgerMaster;

    BadgerOrganization public repToken;
    PaymentToken public payToken;

    LaborMarket public marketImplementation;
    LaborMarket public constantLikertMarket;

    ReputationModule public reputationModule;

    LaborMarketFactory public factory;

    LaborMarketNetwork public network;

    ConstantLikertEnforcement public constantLikertEnforcement;

    PayCurve public payCurve;

    // Define the tokenIds for ERC1155
    uint256 private constant DELEGATE_TOKEN_ID = 0;
    uint256 private constant REPUTATION_TOKEN_ID = 1;
    uint256 private constant PAYMENT_TOKEN_ID = 2;
    uint256 private constant MAINTAINER_TOKEN_ID = 3;
    uint256 private constant GOVERNOR_TOKEN_ID = 4;
    uint256 private constant CREATOR_TOKEN_ID = 5;
    uint256 private constant REPUTATION_DECAY_RATE = 0;
    uint256 private constant REPUTATION_DECAY_INTERVAL = 0;

    // Deployer
    address private deployer = address(0xDe);

    // Maintainer
    address private bob = address(0x1);

    // Maintainer 2
    address private bobert = address(0x11);

    // User
    address private alice = address(0x2);

    // Evil user
    address private evilUser =
        address(uint160(uint256(keccak256("EVIL_USER"))));

    // Alt delegate
    address private delegate =
        address(uint160(uint256(keccak256("DELEGATOOOR"))));

    // Events
    event LaborMarketConfigured(
        LaborMarketConfigurationInterface.LaborMarketConfiguration indexed configuration
    );

    event RequestWithdrawn(uint256 indexed requestId);

    event LaborMarketCreated(
        address indexed marketAddress,
        address indexed owner,
        address indexed implementation
    );

    event RequestCreated(
        address indexed requester,
        uint256 indexed requestId,
        string indexed uri,
        address pToken,
        uint256 pTokenQ,
        uint256 signalExp,
        uint256 submissionExp,
        uint256 enforcementExp
    );

    event RequestSignal(
        address indexed signaler,
        uint256 indexed requestId,
        uint256 signalAmount
    );

    event ReviewSignal(
        address indexed signaler,
        uint256 indexed quantity,
        uint256 signalAmount
    );

    event RequestFulfilled(
        address indexed fulfiller,
        uint256 indexed requestId,
        uint256 indexed submissionId,
        string _uri
    );

    event RequestReviewed(
        address reviewer,
        uint256 indexed requestId,
        uint256 indexed submissionId,
        uint256 indexed reviewScore
    );

    event RequestPayClaimed(
        address indexed claimer,
        uint256 indexed submissionId,
        uint256 indexed payAmount,
        address to
    );

    event RemainderClaimed(
        address indexed claimer,
        uint256 indexed requestId,
        uint256 remainderAmount
    );

    /*//////////////////////////////////////////////////////////////
                        HELPER FUNCTIONALITY
    //////////////////////////////////////////////////////////////*/
    function setUp() public {
        vm.startPrank(deployer);

        // Create a capacity & reputation token
        payToken = new PaymentToken(deployer);

        // Create badger factory
        badgerMaster = new BadgerOrganization();
        badger = new Badger(address(badgerMaster));

        // Create reputation and role token contract
        repToken = BadgerOrganization(
            payable(badger.createOrganization(
                address(badgerMaster),
                address(deployer),
                "ipfs://000",
                "ipfs://000",
                "MDAO",
                "MDAO"
            )
        ));

        // Deploy an empty labor market for implementation
        marketImplementation = new LaborMarket();

        // Deploy a labor market network
        network = new LaborMarketNetwork({
            _factoryImplementation: address(marketImplementation),
            _capacityImplementation: address(payToken),
            _governorBadge: LaborMarketConfigurationInterface.BadgePair({
                token: address(repToken),
                tokenId: GOVERNOR_TOKEN_ID
            }),
            _creatorBadge: LaborMarketConfigurationInterface.BadgePair({
                token: address(repToken),
                tokenId: CREATOR_TOKEN_ID
            })
        });

        // Deploy a new reputation module
        reputationModule = new ReputationModule(address(network));

        // Create a new pay curve
        payCurve = new PayCurve();

        // Initialize reputation and roles
        address[] memory delegates = new address[](1);
        delegates[0] = address(reputationModule);
        for (uint256 i=0; i <= CREATOR_TOKEN_ID; i++) {
            repToken.setBadge(
                i,
                false,
                true,
                address(this),
                "ipfs/",
                BadgerScoutInterface.PaymentToken({
                    paymentKey: bytes32(0),
                    amount: 0
                }),
                delegates
            );
        }

        // Make deployer a governor and creator
        repToken.leaderMint(address(deployer), GOVERNOR_TOKEN_ID, 1, "0x");
        repToken.leaderMint(address(deployer), CREATOR_TOKEN_ID, 1, "0x");

        // Create enforcement criteria
        constantLikertEnforcement = new ConstantLikertEnforcement();

        // Create a new pay curve
        payCurve = new PayCurve();

        // Create a new labor market configuration for constant likert
        LaborMarketConfigurationInterface.LaborMarketConfiguration
            memory constantLikertConfig = LaborMarketConfigurationInterface
                .LaborMarketConfiguration({
                    marketUri: "ipfs://000",
                    owner: address(deployer),
                    modules: LaborMarketConfigurationInterface.Modules({
                        network: address(network),
                        reputation: address(reputationModule),
                        enforcement: address(constantLikertEnforcement),
                        payment: address(payCurve)
                    }),
                    maintainerBadge: LaborMarketConfigurationInterface.BadgePair({
                        token: address(repToken),
                        tokenId: MAINTAINER_TOKEN_ID
                    }),
                    delegateBadge: LaborMarketConfigurationInterface.BadgePair({
                        token: address(repToken),
                        tokenId: DELEGATE_TOKEN_ID
                    }),
                    reputationBadge: LaborMarketConfigurationInterface.BadgePair({
                        token: address(repToken),
                        tokenId: REPUTATION_TOKEN_ID
                    }),
                    reputationParams: LaborMarketConfigurationInterface.ReputationParams({
                        rewardPool: 5000,
                        signalStake: 5,
                        submitMin: 10,
                        submitMax: 10000e18
                    })
                });

        constantLikertMarket = LaborMarket(
            network.createLaborMarket({
                _implementation: address(marketImplementation),
                _configuration: constantLikertConfig
            })
        );

        // Approve and mint tokens
        repToken.leaderMint(alice, REPUTATION_TOKEN_ID, 100e18, "0x");
        repToken.leaderMint(alice, DELEGATE_TOKEN_ID, 1, "0x");

        changePrank(deployer);
        repToken.leaderMint(bob, REPUTATION_TOKEN_ID, 100000e18, "0x");
        repToken.leaderMint(bob, DELEGATE_TOKEN_ID, 1, "0x");
        payToken.freeMint(bob, 1_000_000e18);
        repToken.leaderMint(bob, MAINTAINER_TOKEN_ID, 1, "0x");
        repToken.leaderMint(bobert, MAINTAINER_TOKEN_ID, 1, "0x");
        repToken.leaderMint(bobert, REPUTATION_TOKEN_ID, 1_000_000e18, "0x");
        repToken.leaderMint(delegate, REPUTATION_TOKEN_ID, 1_000_000e18, "0x");
        repToken.leaderMint(delegate, MAINTAINER_TOKEN_ID, 1, "0x");

        changePrank(bob);
        payToken.approve(address(constantLikertMarket), 1_000e18);

        vm.stopPrank();
    }

    function createSimpleRequest(LaborMarket simpleMarket)
        internal
        returns (uint256)
    {
        uint256 rid = simpleMarket.submitRequest({
            _pToken: address(payToken),
            _pTokenQ: 1000e18,
            _signalExp: block.timestamp + 1 hours,
            _submissionExp: block.timestamp + 1 days,
            _enforcementExp: block.timestamp + 1 weeks,
            _requestUri: "ipfs://222"
        });

        return rid;
    }

    function pseudoRandom(uint256 _n, uint256 _salt) internal view returns (uint256) {
        return
            uint256(
                keccak256(abi.encodePacked(block.timestamp, msg.sender, _n, _salt))
            ) / 1.5e75;
    }

    function randomLikert(uint256 salt) internal view returns (uint256) {
        return (pseudoRandom(123, salt) + uint160(msg.sender)) % 5;
    }

    function test_ConstantLikertRandomReviews() public {
        vm.startPrank(deployer);

        payToken.freeMint(bob, 10000e18);

        changePrank(bob);
        // Create a request
        uint256 requestId = createSimpleRequest(constantLikertMarket);

        // Signal the request on 20 accounts
        for (uint256 i = requestId; i < requestId + 20; i++) {
            address user = address(uint160(1337 + i));

            // Mint required tokens
            changePrank(deployer);
            repToken.leaderMint(user, REPUTATION_TOKEN_ID, 100e18, "0x");
            changePrank(user);

            constantLikertMarket.signal(requestId);
            constantLikertMarket.provide(requestId, "0x");
        }

        changePrank(bob);
        constantLikertMarket.signalReview(requestId, 20);

        changePrank(bobert);
        constantLikertMarket.signalReview(requestId, 20);

        changePrank(delegate);
        constantLikertMarket.signalReview(requestId, 20);

        uint256 salt = 0;
        for (uint256 i = requestId; i < requestId + 20; i++) {
            changePrank(delegate);
            salt = (salt * i + i + 2) % 1000;
            constantLikertMarket.review(requestId, i + 1, randomLikert(salt));
            changePrank(bobert);
            salt = (salt * i + i + 2) % 1000;
            constantLikertMarket.review(requestId, i + 1, randomLikert(salt));
            changePrank(bob);
            salt = (salt * i + i + 2) % 1000;
            constantLikertMarket.review(requestId, i + 1, randomLikert(salt));
        }

        // Keeps track of the total amount paid out
        uint256 totalPaid;
        uint256 totalReputation;

        // Skip to enforcement deadline
        vm.warp(5 weeks);

        // Claim rewards
        for (uint256 i = requestId; i < requestId + 20; i++) {
            address user = address(uint160(1337 + i));
            changePrank(user);

            // Claim
            uint256 repBefore = repToken.balanceOf(user, REPUTATION_TOKEN_ID);
            uint256 paid = constantLikertMarket.claim(i + 1, msg.sender, ""); 
            totalPaid += paid;
            uint256 repAfter = repToken.balanceOf(user, REPUTATION_TOKEN_ID);
            totalReputation += repAfter - repBefore;
        }

        console.log("totalPaid", totalPaid);
        console.log("totalReputation", totalReputation);

        assertAlmostEq(totalPaid, 1000e18, 0.000001e18);
        assertAlmostEq(totalReputation, 5000, 100);
    }

    function test_ConstantLikertMarketSimple() public {
        vm.startPrank(deployer);

        payToken.freeMint(bob, 10000e18);

        changePrank(bob);
        // Create a request
        uint256 requestId = createSimpleRequest(constantLikertMarket);

        // Signal the request on 5 accounts
        for (uint256 i = requestId; i < requestId + 5; i++) {
            address user = address(uint160(1337 + i));

            // Mint required tokens
            changePrank(deployer);
            repToken.leaderMint(user, REPUTATION_TOKEN_ID, 100e18, "0x");
            changePrank(user);

            constantLikertMarket.signal(requestId);
            uint256 subId = constantLikertMarket.provide(requestId, "0x");
        }

        // Have bob review the submissions
        changePrank(bob);

        // The reviewer signals the requestId
        constantLikertMarket.signalReview(requestId, 5);

        uint256 counter = 0;
        for (uint256 i = requestId; i < requestId + 5; i++) {
            constantLikertMarket.review(requestId, i + 1, counter);
            counter++;
        }

        // Keeps track of the total amount paid out
        uint256 totalPaid;
        uint256 totalReputation;

        // Skip to enforcement deadline
        vm.warp(5 weeks);

        // Claim rewards
        for (uint256 i = requestId; i < requestId + 5; i++) {
            address user = address(uint160(1337 + i));
            changePrank(user);

            // Claim
            uint256 repBefore = repToken.balanceOf(user, REPUTATION_TOKEN_ID);
            uint256 paid = constantLikertMarket.claim(i + 1, msg.sender, ""); 
            totalPaid += paid;
            uint256 repAfter = repToken.balanceOf(user, REPUTATION_TOKEN_ID);
            totalReputation += repAfter - repBefore;
        }

        console.log("totalPaid", totalPaid);
        console.log("totalReputation", totalReputation);

        assertAlmostEq(totalPaid, 1000e18, 0.000001e18);
        assertAlmostEq(totalReputation, 5000, 100);
    }

    function test_ConstantLikertMarket() public {
        vm.startPrank(deployer);

        payToken.freeMint(bob, 10000e18);

        changePrank(bob);
        // Create a request
        uint256 requestId = createSimpleRequest(constantLikertMarket);

        // Signal the request on 112 accounts
        for (uint256 i = requestId; i < 113; i++) {
            address user = address(uint160(1337 + i));

            // Mint required tokens
            changePrank(deployer);
            repToken.leaderMint(user, DELEGATE_TOKEN_ID, 1, "0x");
            repToken.leaderMint(user, REPUTATION_TOKEN_ID, 100e18, "0x");
            changePrank(user);

            constantLikertMarket.signal(requestId);
            constantLikertMarket.provide(requestId, "NaN");
        }

        // Have bob review the submissions
        changePrank(bob);

        // The reviewer signals the requestId
        constantLikertMarket.signalReview(requestId, 113);

        // The reviewer reviews the submissions
        for (uint256 i = requestId; i < 113; i++) {
            if (i < 67) {
                // SPAM
                constantLikertMarket.review(requestId, i + 1, 0);
            } else if (i < 100) {
                // BAD
                constantLikertMarket.review(requestId, i + 1, 1);
            } else if (i < 105) {
                // OK
                constantLikertMarket.review(requestId, i + 1, 2);
            } else if (i < 110) {
                // GOOD
                constantLikertMarket.review(requestId, i + 1, 3);
            } else {
                // GREAT
                constantLikertMarket.review(requestId, i + 1, 4);
            }
        }

        // Keeps track of the total amount paid out
        uint256 totalPaid;
        uint256 totalReputation;

        // Skip to enforcement deadline
        vm.warp(5 weeks);

        // Claim rewards
        for (uint256 i = requestId; i < 113; i++) {
            address user = address(uint160(1337 + i));
            changePrank(user);

            // Claim
            uint256 repBefore = repToken.balanceOf(user, REPUTATION_TOKEN_ID);
            uint256 paid = constantLikertMarket.claim(i + 1, msg.sender, ""); 
            totalPaid += paid;
            uint256 repAfter = repToken.balanceOf(user, REPUTATION_TOKEN_ID);
            totalReputation += repAfter - repBefore;
        }

        assertAlmostEq(totalPaid, 1000e18, 0.000001e18);
        assertAlmostEq(totalReputation, 5000, 100);
    }
}