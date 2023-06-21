export const abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "marketAddress",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "deployer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "LaborMarketCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_deployer",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_uri",
        "type": "string"
      },
      {
        "internalType": "contract EnforcementCriteriaInterface",
        "name": "_criteria",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "_auxilaries",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_alphas",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "_betas",
        "type": "uint256[]"
      },
      {
        "internalType": "bytes4[]",
        "name": "_sigs",
        "type": "bytes4[]"
      },
      {
        "components": [
          {
            "internalType": "bool",
            "name": "deployerAllowed",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "required",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "contract IERC1155",
                "name": "badge",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "min",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "max",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "points",
                "type": "uint256"
              }
            ],
            "internalType": "struct NBadgeAuthInterface.Badge[]",
            "name": "badges",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct NBadgeAuthInterface.Node[]",
        "name": "_nodes",
        "type": "tuple[]"
      }
    ],
    "name": "createLaborMarket",
    "outputs": [
      {
        "internalType": "address",
        "name": "laborMarketAddress",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const
