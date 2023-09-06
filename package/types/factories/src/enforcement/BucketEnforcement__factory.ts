/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BucketEnforcement,
  BucketEnforcementInterface,
} from "../../../src/enforcement/BucketEnforcement";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_market",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_auxiliaries",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_alphas",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "_betas",
        type: "uint256[]",
      },
    ],
    name: "EnforcementConfigured",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_market",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "_submissionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "intentChange",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "earnings",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "remainder",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "newSubmission",
        type: "bool",
      },
    ],
    name: "SubmissionReviewed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_submissionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_score",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_availableShare",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_enforcer",
        type: "address",
      },
    ],
    name: "enforce",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "getRemainder",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_market",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_submissionId",
        type: "uint256",
      },
    ],
    name: "getRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "marketToMaxScore",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
    ],
    name: "remainder",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_requestId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_submissionId",
        type: "uint256",
      },
    ],
    name: "rewards",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "requiresSubmission",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_auxilaries",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_ranges",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_weights",
        type: "uint256[]",
      },
    ],
    name: "setConfiguration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523461001b575b6040516112e261002982396112e290f35b610023600080fd5b61000a56fe60806040526004361015610018575b610016600080fd5b005b60003560e01c80630109ab54146100a45780633e7e366e1461009b57806364bf71ff146100925780639d10fe3514610089578063de8db53f14610080578063e2bd00fb146100775763fcc366440361000e576100726104f5565b61000e565b5061007261048d565b506100726103dd565b5061007261037b565b5061007261032b565b506100726101f4565b50610072610153565b600080fd5b805b036100ad57565b905035906100c8826100b2565b565b6001600160a01b031690565b90565b6001600160a01b0381166100b4565b905035906100c8826100d9565b919060a083820312610142575b61010c81846100bb565b9261011a82602083016100bb565b926100d661012b84604085016100bb565b9361013981606086016100bb565b936080016100e8565b61014a600080fd5b610102565b9052565b503461019d575b6101716101683660046100f5565b93929092610d64565b9061019961017e60405190565b92839283901515815262ffffff909116602082015260400190565b0390f35b6101a5600080fd5b61015a565b91906100d6906040848203126101ce575b6101c581856100bb565b936020016100bb565b6101d6600080fd5b6101bb565b9081526040810192916100c8916020905b019015159052565b5034610225575b61020f6102093660046101aa565b906110ea565b9061019961021c60405190565b928392836101db565b61022d600080fd5b6101fb565b909182601f83011215610279575b602082359267ffffffffffffffff841161026c575b01926020830284011161026457565b6100c8600080fd5b610274600080fd5b610255565b610281600080fd5b610240565b60608183031261031e575b6102ae82823567ffffffffffffffff8111610311575b8301610232565b9290936102f36102d483602086013567ffffffffffffffff8111610304575b8601610232565b93909460408101359067ffffffffffffffff82116102f7575b01610232565b9091565b6102ff600080fd5b6102ed565b61030c600080fd5b6102cd565b610319600080fd5b6102a7565b610326600080fd5b610291565b5034610351575b61034c610340366004610286565b9493909392919261095c565b604051005b610359600080fd5b610332565b906100d691602081830312156100bb57610376600080fd5b6100bb565b50346103a8575b61019961039861039336600461035e565b61112d565b6040519182918290815260200190565b6103b0600080fd5b610382565b91906100d6906040848203126103d0575b6101c581856100e8565b6103d8600080fd5b6103c6565b50346103fb575b6101996103986103f53660046103b5565b9061115a565b610403600080fd5b6103e4565b906100d691602081830312156100e857610420600080fd5b6100e8565b6100d6906100ca906001600160a01b031682565b6100d690610425565b6100d690610439565b9061045590610442565b600052602052604060002090565b6100d6916008021c81565b906100d69154610463565b60006104886100d6928261044b565b61046e565b50346104aa575b6101996103986104a5366004610408565b610479565b6104b2600080fd5b610494565b90916060828403126104e8575b6100d66104d184846100e8565b936104df81602086016100bb565b936040016100bb565b6104f0600080fd5b6104c4565b5034610513575b61019961039861050d3660046104b7565b9161114f565b61051b600080fd5b6104fc565b6100d69081565b6100d69054610520565b6100d66100d66100d69290565b0190565b1561054957565b60405162461bcd60e51b815260206004820152603660248201527f4275636b6574456e666f7263656d656e743a3a7365744275636b6574733a20436044820152757269746572696120616c726561647920696e2075736560501b6064820152608490fd5b50634e487b7160e01b600052603260045260246000fd5b916020918110156105d457020190565b6105dc6105ad565b020190565b356100d6816100b2565b156105f257565b60405162461bcd60e51b815260206004820152603060248201527f4275636b6574456e666f7263656d656e743a3a7365744275636b6574733a204d60448201526f185e081cd8dbdc99481b9bdd081cd95d60821b6064820152608490fd5b1561065757565b60405162461bcd60e51b815260206004820152602c60248201527f4275636b6574456e666f7263656d656e743a3a7365744275636b6574733a204960448201526b1b9d985b1a59081a5b9c1d5d60a21b6064820152608490fd5b50634e487b7160e01b600052601160045260246000fd5b60019060001981146106d8570190565b61053e6106b1565b919082039182116106ed57565b6100c86106b1565b919082018092116106ed57565b1561070957565b60405162461bcd60e51b815260206004820152603560248201527f4275636b6574456e666f7263656d656e743a3a7365744275636b6574733a20426044820152741d58dad95d1cc81b9bdd081cd95c5d595b9d1a585b605a1b6064820152608490fd5b90600019905b9181191691161790565b9061078c6100d661079392610531565b825461076c565b9055565b50634e487b7160e01b600052604160045260246000fd5b818102929181159184041417156106ed57565b9160001960089290920291821b911b610772565b91906107e66100d661079393610531565b9083546107c1565b6100c8916000916107d5565b818110610805575050565b8061081360006001936107ee565b016107fa565b909182811061082757505050565b6100c8929061083d905b92600052602060002090565b90810191016107fa565b906100c891600160401b8211610863575b805490828155610819565b61086b610797565b610858565b909161089c61083161088160019390565b9467ffffffffffffffff86116108cd575b6100d68686610847565b92049160005b8381106108af5750505050565b60019060206108c06100d6866105e1565b94019381840155016108a2565b6108d5610797565b610892565b906100c89291610870565b9037565b81835260209261053e919084019384936001600160fb1b038111610911575b029384916108e5565b610919600080fd5b610908565b949290936109406100d6979561094e94606089019189830360008b01526108e9565b9186830360208801526108e9565b9260408185039101526108e9565b91948591939460019533966109746100d6898361044b565b9061097e82610527565b61099a60009161099461099084610531565b9190565b14610542565b6109cb6109b86109b36109ac84610531565b8c8c6105c4565b6105e1565b6109c461099084610531565b14156105eb565b8789856109d9898214610650565b6000855b610a68575b505093610a2086610a639a8a96610a1987610a116109b36002998f9b9d610a0b610a269f610531565b916105c4565b90870161077c565b84016108da565b016108da565b610a507f644aa63559522f8f6f8b506611f6d55d82a2ab57ed2d621aa3a46f4b41de5d7e97610442565b97610a5a60405190565b9687968761091e565b0390a2565b92909394959697989991610a876100d6610a8189610531565b876106e0565b841015610ae457505081610ace88610ac86109906100d66109b387610ab56109b38e9c9b88610ad39c6105c4565b95610a0b610ac28d610531565b8a6106f5565b10610702565b6106c8565b89918b918e9a9998979695946109dd565b91999897969594938193506109e2565b9061045590610531565b15610b0557565b60405162461bcd60e51b815260206004820152603b60248201527f4275636b6574456e666f7263656d656e743a3a7265766965773a20456e666f7260448201527f63657220616c7265616479207375626d697420612072657669657700000000006064820152608490fd5b15610b7757565b60405162461bcd60e51b815260206004820152602860248201527f4275636b6574456e666f7263656d656e743a3a7265766965773a20496e76616c60448201526769642073636f726560c01b6064820152608490fd5b50634e487b7160e01b600052601260045260246000fd5b8115610bee570490565b610bf6610bcd565b0490565b90610c13610831610c09845490565b8084529260200190565b9060005b818110610c245750505090565b909192610c48610c41600192610c3987610527565b815260200190565b9460010190565b929101610c17565b906100d691610bfa565b90601f01601f1916810190811067ffffffffffffffff821117610c7c57604052565b610c84610797565b604052565b906100c8610ca392610c9a60405190565b93848092610c50565b0383610c5a565b906100c8610cb760405190565b9283610c5a565b6100d66060610caa565b906100c8610d066002610cd9610cbe565b94610cea610ce682610527565b8752565b610d00610cf960018301610c89565b6020880152565b01610c89565b6040840152565b6100d690610cc8565b61014f90610531565b6101ec6100c894610d48606094989795610d41608086019a6000870190610d16565b6020850152565b6040830152565b610d5c6100d66100d69290565b62ffffff1690565b909192949394610d72600090565b5033906002848185610d84868361044b565b90610d8e91610af4565b0190610d9991610af4565b906003820192610da98a856110a0565b15610db390610afe565b6001809a81998296610dc5898561044b565b92839290610dd284610527565b821115610dde90610b70565b610de89083610f6d565b508a610df48b8961044b565b90610dfe91610af4565b968891610e0a83610527565b90610e14916106f5565b610e1e908361077c565b88019c610e2a8e610527565b970196610e3688610527565b90610e40916106e0565b610e4a908861077c565b610e5390610527565b90610e5d906110c0565b610e6691610be4565b90610e7090610d0d565b90610e7a916111f1565b610e8490846107ae565b90610e8e90610527565b610e9791610be4565b930192610ea4908461077c565b610ead83610527565b610eb6916106e0565b610ec0908861077c565b610ec987610527565b610ed282610527565b90610edc916106f5565b610ee59161077c565b610eee90610527565b94610ef890610527565b7fadd6277f5dd5b08da7ebd7ded4c856390a25d7794f33307731ed6ad3a927640492610f2390610442565b93610f2d90610531565b94610f3790610531565b95610f4160405190565b928392610f4f928285610d1f565b0390a46100d682610d4f565b6100d69081906001600160a01b031681565b90610f9a610990610f95610f9060006100d696610f88600090565b500194610439565b610f5b565b610531565b611026565b610fbf600191610fad815490565b841015610fc857600052602060002090565b91020190600090565b610fd06105ad565b600052602060002090565b91906107e66100d66107939390565b9061100d6100c892805490600160401b821015611013575b600182018155610f9f565b90610fdb565b61101b610797565b611002565b90610455565b6110376110338383611070565b1590565b15611069576110649161105f906001611058846110548482610fea565b5490565b9301611020565b61077c565b600190565b5050600090565b61108e91600161108992611082600090565b5001611020565b610527565b61109b6109906000610531565b141590565b906110bb610990610f95610f9060006100d696610f88600090565b611070565b6110d660006100d6926110d1600090565b500190565b60006100d6916110e4600090565b50015490565b919060006001611127611064936110ff600090565b503361112161110f838a84611164565b9861111c6002938461044b565b610af4565b01610af4565b016107ee565b906100c860006001611127339561111c6111478289611190565b97600261044b565b6100d6929190611164565b6100d69190611190565b6100d69261118a916111216100d660019561117d600090565b5061111c6002948561044b565b01610527565b61118a6100d66100d69361111c6001946111a8600090565b50600261044b565b60019080156111bd570390565b6111c56106b1565b0390565b90602080916111d6845190565b8110156111e4575b02010190565b6111ec6105ad565b6111de565b90602082019161120083515190565b9260008461121061099083610531565b1461129d57935b61122085610531565b81111561128557815161124b6100d6611247600193611241610a8186610531565b906111c9565b5190565b851015611261575061125c906111b0565b611217565b926100d6955061124794506112419250604061127f91015193610531565b906106e0565b5050604001516100d692611247925061124190610531565b50505050506100d6600161053156fea264697066735822122008328d62728c079fcf9354746adef43813dcd764374b5a8a55637eac59070a3a64736f6c63430008110033";

type BucketEnforcementConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BucketEnforcementConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BucketEnforcement__factory extends ContractFactory {
  constructor(...args: BucketEnforcementConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BucketEnforcement> {
    return super.deploy(overrides || {}) as Promise<BucketEnforcement>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BucketEnforcement {
    return super.attach(address) as BucketEnforcement;
  }
  override connect(signer: Signer): BucketEnforcement__factory {
    return super.connect(signer) as BucketEnforcement__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BucketEnforcementInterface {
    return new utils.Interface(_abi) as BucketEnforcementInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BucketEnforcement {
    return new Contract(address, _abi, signerOrProvider) as BucketEnforcement;
  }
}
