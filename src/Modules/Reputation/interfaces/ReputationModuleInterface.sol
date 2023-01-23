// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.17;

interface ReputationModuleInterface {
    struct MarketReputationConfig {
        address reputationToken;
        uint256 reputationTokenId;
        uint256 signalStake;
        uint256 submitMin;
        uint256 submitMax;
    }

    struct DecayConfig {
        uint256 decayRate;
        uint256 decayInterval;
    }

    struct ReputationAccountInfo {
        uint256 lastDecayEpoch;
        uint256 frozenUntilEpoch;
    }

    function useReputationModule(
          address _laborMarket
        , MarketReputationConfig calldata _repConfig
    )
        external;

    function setMarketRepConfig(
          uint256 _signalStake
        , uint256 _submitMin
        , uint256 _submitMax
    )
        external;

    function freezeReputation(
          address _account
        , address _reputationToken
        , uint256 _reputationTokenId
        , uint256 _frozenUntilEpoch
    )
        external; 

    function useReputation(
          address _account
        , uint256 _amount
    )
        external;

    function mintReputation(
          address _account
        , uint256 _amount
    )
        external;

    function getAvailableReputation(
          address _laborMarket
        , address _account
    )
        external
        view
        returns (
            uint256
        );

    function getPendingDecay(
          address _laborMarket
        , address _account
    )
        external
        view
        returns (
            uint256
        );

    function getMarketReputationConfig(
        address _laborMarket
    )
        external
        view
        returns (
            MarketReputationConfig memory
        );
}