export const abi = [
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "gasLimit",
                "type": "uint256"
              },
              {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              }
            ],
            "internalType": "struct Transaction",
            "name": "transaction",
            "type": "tuple"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "delegate",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "authority",
                    "type": "bytes32"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "enforcer",
                        "type": "address"
                      },
                      {
                        "internalType": "bytes",
                        "name": "terms",
                        "type": "bytes"
                      }
                    ],
                    "internalType": "struct Caveat[]",
                    "name": "caveats",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Delegation",
                "name": "delegation",
                "type": "tuple"
              },
              {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
              }
            ],
            "internalType": "struct SignedDelegation[]",
            "name": "authority",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Invocation[]",
        "name": "batch",
        "type": "tuple[]"
      }
    ],
    "name": "contractInvoke",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "delegate",
            "type": "address"
          },
          {
            "internalType": "bytes32",
            "name": "authority",
            "type": "bytes32"
          },
          {
            "components": [
              {
                "internalType": "address",
                "name": "enforcer",
                "type": "address"
              },
              {
                "internalType": "bytes",
                "name": "terms",
                "type": "bytes"
              }
            ],
            "internalType": "struct Caveat[]",
            "name": "caveats",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct Delegation",
        "name": "delegation",
        "type": "tuple"
      }
    ],
    "name": "getDelegationTypedDataHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "contractName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "version",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "chainId",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "verifyingContract",
        "type": "address"
      }
    ],
    "name": "getEIP712DomainHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "to",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "gasLimit",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bytes",
                    "name": "data",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct Transaction",
                "name": "transaction",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "delegate",
                        "type": "address"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "authority",
                        "type": "bytes32"
                      },
                      {
                        "components": [
                          {
                            "internalType": "address",
                            "name": "enforcer",
                            "type": "address"
                          },
                          {
                            "internalType": "bytes",
                            "name": "terms",
                            "type": "bytes"
                          }
                        ],
                        "internalType": "struct Caveat[]",
                        "name": "caveats",
                        "type": "tuple[]"
                      }
                    ],
                    "internalType": "struct Delegation",
                    "name": "delegation",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bytes",
                    "name": "signature",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct SignedDelegation[]",
                "name": "authority",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct Invocation[]",
            "name": "batch",
            "type": "tuple[]"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "queue",
                "type": "uint256"
              }
            ],
            "internalType": "struct ReplayProtection",
            "name": "replayProtection",
            "type": "tuple"
          }
        ],
        "internalType": "struct Invocations",
        "name": "invocations",
        "type": "tuple"
      }
    ],
    "name": "getInvocationsTypedDataHash",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "gasLimit",
                        "type": "uint256"
                      },
                      {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                      }
                    ],
                    "internalType": "struct Transaction",
                    "name": "transaction",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "address",
                            "name": "delegate",
                            "type": "address"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "authority",
                            "type": "bytes32"
                          },
                          {
                            "components": [
                              {
                                "internalType": "address",
                                "name": "enforcer",
                                "type": "address"
                              },
                              {
                                "internalType": "bytes",
                                "name": "terms",
                                "type": "bytes"
                              }
                            ],
                            "internalType": "struct Caveat[]",
                            "name": "caveats",
                            "type": "tuple[]"
                          }
                        ],
                        "internalType": "struct Delegation",
                        "name": "delegation",
                        "type": "tuple"
                      },
                      {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                      }
                    ],
                    "internalType": "struct SignedDelegation[]",
                    "name": "authority",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Invocation[]",
                "name": "batch",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "nonce",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "queue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct ReplayProtection",
                "name": "replayProtection",
                "type": "tuple"
              }
            ],
            "internalType": "struct Invocations",
            "name": "invocations",
            "type": "tuple"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "internalType": "struct SignedInvocation[]",
        "name": "signedInvocations",
        "type": "tuple[]"
      }
    ],
    "name": "invoke",
    "outputs": [
      {
        "internalType": "bool",
        "name": "success",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "address",
                "name": "delegate",
                "type": "address"
              },
              {
                "internalType": "bytes32",
                "name": "authority",
                "type": "bytes32"
              },
              {
                "components": [
                  {
                    "internalType": "address",
                    "name": "enforcer",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "terms",
                    "type": "bytes"
                  }
                ],
                "internalType": "struct Caveat[]",
                "name": "caveats",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct Delegation",
            "name": "delegation",
            "type": "tuple"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "internalType": "struct SignedDelegation",
        "name": "signedDelegation",
        "type": "tuple"
      }
    ],
    "name": "verifyDelegationSignature",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                      },
                      {
                        "internalType": "uint256",
                        "name": "gasLimit",
                        "type": "uint256"
                      },
                      {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                      }
                    ],
                    "internalType": "struct Transaction",
                    "name": "transaction",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "address",
                            "name": "delegate",
                            "type": "address"
                          },
                          {
                            "internalType": "bytes32",
                            "name": "authority",
                            "type": "bytes32"
                          },
                          {
                            "components": [
                              {
                                "internalType": "address",
                                "name": "enforcer",
                                "type": "address"
                              },
                              {
                                "internalType": "bytes",
                                "name": "terms",
                                "type": "bytes"
                              }
                            ],
                            "internalType": "struct Caveat[]",
                            "name": "caveats",
                            "type": "tuple[]"
                          }
                        ],
                        "internalType": "struct Delegation",
                        "name": "delegation",
                        "type": "tuple"
                      },
                      {
                        "internalType": "bytes",
                        "name": "signature",
                        "type": "bytes"
                      }
                    ],
                    "internalType": "struct SignedDelegation[]",
                    "name": "authority",
                    "type": "tuple[]"
                  }
                ],
                "internalType": "struct Invocation[]",
                "name": "batch",
                "type": "tuple[]"
              },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "nonce",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "queue",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct ReplayProtection",
                "name": "replayProtection",
                "type": "tuple"
              }
            ],
            "internalType": "struct Invocations",
            "name": "invocations",
            "type": "tuple"
          },
          {
            "internalType": "bytes",
            "name": "signature",
            "type": "bytes"
          }
        ],
        "internalType": "struct SignedInvocation",
        "name": "signedInvocation",
        "type": "tuple"
      }
    ],
    "name": "verifyInvocationSignature",
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
