/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC20FreeMint,
  ERC20FreeMintInterface,
} from "../../../src/mocks/ERC20FreeMint";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DECIMALS",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "freeBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "freeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052346200033b576200160b803803806200001d8162000340565b92833981016060828203126200033b5781516001600160401b03908181116200033b57826200004e91850162000366565b90602092838501518281116200033b576040916200006e91870162000366565b9401519360ff85168095036200033b5782518281116200023b576003918254916001958684811c9416801562000330575b888510146200031a578190601f94858111620002c4575b5088908583116001146200025d5760009262000251575b505060001982861b1c191690861b1783555b80519384116200023b5760049586548681811c9116801562000230575b828210146200021b57838111620001d0575b508092851160011462000162575093839491849260009562000156575b50501b92600019911b1c19161790555b60ff1960055416176005556040516112329081620003d98239f35b0151935038806200012b565b92919084601f1981168860005285600020956000905b89838310620001b557505050106200019a575b50505050811b0190556200013b565b01519060f884600019921b161c19169055388080806200018b565b85870151895590970196948501948893509081019062000178565b87600052816000208480880160051c82019284891062000211575b0160051c019087905b828110620002045750506200010e565b60008155018790620001f4565b92508192620001eb565b602288634e487b7160e01b6000525260246000fd5b90607f1690620000fc565b634e487b7160e01b600052604160045260246000fd5b015190503880620000cd565b90889350601f19831691876000528a6000209260005b8c828210620002ad575050841162000294575b505050811b018355620000df565b015160001983881b60f8161c1916905538808062000286565b8385015186558c9790950194938401930162000273565b90915085600052886000208580850160051c8201928b861062000310575b918a91869594930160051c01915b82811062000300575050620000b6565b600081558594508a9101620002f0565b92508192620002e2565b634e487b7160e01b600052602260045260246000fd5b93607f16936200009f565b600080fd5b6040519190601f01601f191682016001600160401b038111838210176200023b57604052565b919080601f840112156200033b5782516001600160401b0381116200023b576020906200039c601f8201601f1916830162000340565b928184528282870101116200033b5760005b818110620003c457508260009394955001015290565b8581018301518482018401528201620003ae56fe608060408181526004918236101561001657600080fd5b600092833560e01c91826306fdde0314610b1157508163095ea7b314610ac957816318160ddd14610a8c57816323b872dd1461095e5781632929abe6146107d55781632e0f262514610795578163313ce56714610795578163395093511461071b57816370a08231146106ba57816390dd070a146104d057816395d89b41146102da5781639883566e14610294578163a457c2d71461018e57508063a9059cbb146101405763dd62ed3e146100ca57600080fd5b3461013c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013c5780602092610104610cb5565b61010c610cdd565b73ffffffffffffffffffffffffffffffffffffffff91821683526001865283832091168252845220549051908152f35b5080fd5b503461013c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013c5760209061018761017d610cb5565b6024359033610d6d565b5160018152f35b9050823461029157827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610291576101c7610cb5565b918360243592338152600160205281812073ffffffffffffffffffffffffffffffffffffffff8616825260205220549082821061020e576020856101878585038733610f83565b60849060208651917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152fd5b80fd5b50503461013c577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610291576102d76102ce610cb5565b602435906110f8565b80f35b83833461013c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013c57805190828454600181811c908083169283156104c6575b602093848410811461049a57838852879594939291811561043f57506001146103c3575b50505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff8411838510176103975750829182610393925282610c4f565b0390f35b806041867f4e487b71000000000000000000000000000000000000000000000000000000006024945252fd5b8888529193925086917f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b5b82841061042957505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f92820101918193610345565b80548885018701528794509285019281016103ee565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016848701525050151560051b830101905081601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0610345565b60248960228c7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b91607f1691610321565b83833461013c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013c57610508610cb5565b73ffffffffffffffffffffffffffffffffffffffff60243591169182156106385782845283602052808420548281106105b5578290848652856020520381852055600254828103908111610589578493927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9260209260025551908152a380f35b6024856011887f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b60848660208451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152fd5b517f08c379a0000000000000000000000000000000000000000000000000000000008152602081860152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608490fd5b50503461013c5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013c578060209273ffffffffffffffffffffffffffffffffffffffff61070c610cb5565b16815280845220549051908152f35b50503461013c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013c5761018760209261078e61075c610cb5565b913381526001865284812073ffffffffffffffffffffffffffffffffffffffff84168252865284602435912054610d31565b9033610f83565b50503461013c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013c5760209060ff600554169051908152f35b9190503461095a57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261095a5767ffffffffffffffff918035838111610956576108269036908301610d00565b6024939193948535908111610952576108429036908501610d00565b9190928282036108f75750865b81811061085a578780f35b6108658183886111bd565b3573ffffffffffffffffffffffffffffffffffffffff811681036108f357610899906108928386886111bd565b35906110f8565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146108c85760010161084f565b86886011877f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8880fd5b517f08c379a0000000000000000000000000000000000000000000000000000000008152602081860152600d818801527f496e76616c696420696e707574000000000000000000000000000000000000006044820152606490fd5b8680fd5b8480fd5b8280fd5b8391503461013c5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013c57610998610cb5565b6109a0610cdd565b91846044359473ffffffffffffffffffffffffffffffffffffffff8416815260016020528181203382526020522054907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610a06575b602086610187878787610d6d565b848210610a2f5750918391610a246020969561018795033383610f83565b9193948193506109f8565b60649060208751917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152fd5b50503461013c57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013c576020906002549051908152f35b50503461013c57807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261013c57602090610187610b07610cb5565b6024359033610f83565b8490843461095a57827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261095a5782600354600181811c90808316928315610c45575b602093848410811461049a57838852879594939291811561043f5750600114610bc85750505003601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682019267ffffffffffffffff8411838510176103975750829182610393925282610c4f565b600388529193925086917fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b5b828410610c2f57505050907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe092601f92820101918193610345565b8054888501870152879450928501928101610bf4565b91607f1691610b57565b60208082528251818301819052939260005b858110610ca1575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b818101830151848201604001528201610c61565b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610cd857565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff82168203610cd857565b9181601f84011215610cd85782359167ffffffffffffffff8311610cd8576020808501948460051b010111610cd857565b91908201809211610d3e57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b73ffffffffffffffffffffffffffffffffffffffff809116918215610eff5716918215610e7b57600082815280602052604081205491808310610df757604082827fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef958760209652828652038282205586815220610dec828254610d31565b9055604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff8091169182156110755716918215610ff15760207f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925918360005260018252604060002085600052825280604060002055604051908152a3565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152fd5b60846040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152fd5b73ffffffffffffffffffffffffffffffffffffffff1690811561115f577fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602082611147600094600254610d31565b60025584845283825260408420610dec828254610d31565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152fd5b91908110156111cd5760051b0190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea26469706673582212204bc1847fa8a2f231848cb9561b0a39a0a47c08a469a127ad452116e295f93c5664736f6c63430008110033";

type ERC20FreeMintConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20FreeMintConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20FreeMint__factory extends ContractFactory {
  constructor(...args: ERC20FreeMintConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20FreeMint> {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    ) as Promise<ERC20FreeMint>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    _decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      overrides || {}
    );
  }
  override attach(address: string): ERC20FreeMint {
    return super.attach(address) as ERC20FreeMint;
  }
  override connect(signer: Signer): ERC20FreeMint__factory {
    return super.connect(signer) as ERC20FreeMint__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20FreeMintInterface {
    return new utils.Interface(_abi) as ERC20FreeMintInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20FreeMint {
    return new Contract(address, _abi, signerOrProvider) as ERC20FreeMint;
  }
}