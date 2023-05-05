export const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_implementation",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
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
  },
  {
    "inputs": [],
    "name": "implementation",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const
