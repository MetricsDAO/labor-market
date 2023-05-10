/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface ScalableEnforcementInterface extends utils.Interface {
  functions: {
    "MATH_AVG_DECIMALS()": FunctionFragment;
    "enforce(uint256,uint256,uint256,uint256,address)": FunctionFragment;
    "getRemainder(address,uint256)": FunctionFragment;
    "getRewards(address,uint256,uint256)": FunctionFragment;
    "marketToMaxScore(address)": FunctionFragment;
    "remainder(uint256)": FunctionFragment;
    "rewards(uint256,uint256)": FunctionFragment;
    "setConfiguration(uint256[],uint256[],uint256[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "MATH_AVG_DECIMALS"
      | "enforce"
      | "getRemainder"
      | "getRewards"
      | "marketToMaxScore"
      | "remainder"
      | "rewards"
      | "setConfiguration"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MATH_AVG_DECIMALS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enforce",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRemainder",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRewards",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "marketToMaxScore",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "remainder",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfiguration",
    values: [
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[]
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "MATH_AVG_DECIMALS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "enforce", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRemainder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getRewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marketToMaxScore",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remainder", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setConfiguration",
    data: BytesLike
  ): Result;

  events: {
    "EnforcementConfigured(address,uint256[],uint256[],uint256[])": EventFragment;
    "SubmissionReviewed(address,uint256,uint256,uint256,uint256,uint256,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "EnforcementConfigured"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SubmissionReviewed"): EventFragment;
}

export interface EnforcementConfiguredEventObject {
  _market: string;
  _auxiliaries: BigNumber[];
  _alphas: BigNumber[];
  _betas: BigNumber[];
}
export type EnforcementConfiguredEvent = TypedEvent<
  [string, BigNumber[], BigNumber[], BigNumber[]],
  EnforcementConfiguredEventObject
>;

export type EnforcementConfiguredEventFilter =
  TypedEventFilter<EnforcementConfiguredEvent>;

export interface SubmissionReviewedEventObject {
  _market: string;
  _requestId: BigNumber;
  _submissionId: BigNumber;
  intentChange: BigNumber;
  earnings: BigNumber;
  remainder: BigNumber;
  newSubmission: boolean;
}
export type SubmissionReviewedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, boolean],
  SubmissionReviewedEventObject
>;

export type SubmissionReviewedEventFilter =
  TypedEventFilter<SubmissionReviewedEvent>;

export interface ScalableEnforcement extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ScalableEnforcementInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MATH_AVG_DECIMALS(overrides?: CallOverrides): Promise<[BigNumber]>;

    enforce(
      _requestId: PromiseOrValue<BigNumberish>,
      _submissionId: PromiseOrValue<BigNumberish>,
      _score: PromiseOrValue<BigNumberish>,
      _availableShare: PromiseOrValue<BigNumberish>,
      _enforcer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRemainder(
      _market: PromiseOrValue<string>,
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getRewards(
      _market: PromiseOrValue<string>,
      _requestId: PromiseOrValue<BigNumberish>,
      _submissionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    marketToMaxScore(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    remainder(
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rewards(
      _requestId: PromiseOrValue<BigNumberish>,
      _submissionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setConfiguration(
      _auxilaries: PromiseOrValue<BigNumberish>[],
      _ranges: PromiseOrValue<BigNumberish>[],
      _weights: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  MATH_AVG_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

  enforce(
    _requestId: PromiseOrValue<BigNumberish>,
    _submissionId: PromiseOrValue<BigNumberish>,
    _score: PromiseOrValue<BigNumberish>,
    _availableShare: PromiseOrValue<BigNumberish>,
    _enforcer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRemainder(
    _market: PromiseOrValue<string>,
    _requestId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getRewards(
    _market: PromiseOrValue<string>,
    _requestId: PromiseOrValue<BigNumberish>,
    _submissionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  marketToMaxScore(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  remainder(
    _requestId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rewards(
    _requestId: PromiseOrValue<BigNumberish>,
    _submissionId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setConfiguration(
    _auxilaries: PromiseOrValue<BigNumberish>[],
    _ranges: PromiseOrValue<BigNumberish>[],
    _weights: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    MATH_AVG_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    enforce(
      _requestId: PromiseOrValue<BigNumberish>,
      _submissionId: PromiseOrValue<BigNumberish>,
      _score: PromiseOrValue<BigNumberish>,
      _availableShare: PromiseOrValue<BigNumberish>,
      _enforcer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean, number]>;

    getRemainder(
      _market: PromiseOrValue<string>,
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRewards(
      _market: PromiseOrValue<string>,
      _requestId: PromiseOrValue<BigNumberish>,
      _submissionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    marketToMaxScore(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remainder(
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rewards(
      _requestId: PromiseOrValue<BigNumberish>,
      _submissionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean] & { amount: BigNumber; requiresSubmission: boolean }
    >;

    setConfiguration(
      _auxilaries: PromiseOrValue<BigNumberish>[],
      _ranges: PromiseOrValue<BigNumberish>[],
      _weights: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "EnforcementConfigured(address,uint256[],uint256[],uint256[])"(
      _market?: PromiseOrValue<string> | null,
      _auxiliaries?: null,
      _alphas?: null,
      _betas?: null
    ): EnforcementConfiguredEventFilter;
    EnforcementConfigured(
      _market?: PromiseOrValue<string> | null,
      _auxiliaries?: null,
      _alphas?: null,
      _betas?: null
    ): EnforcementConfiguredEventFilter;

    "SubmissionReviewed(address,uint256,uint256,uint256,uint256,uint256,bool)"(
      _market?: PromiseOrValue<string> | null,
      _requestId?: PromiseOrValue<BigNumberish> | null,
      _submissionId?: PromiseOrValue<BigNumberish> | null,
      intentChange?: null,
      earnings?: null,
      remainder?: null,
      newSubmission?: null
    ): SubmissionReviewedEventFilter;
    SubmissionReviewed(
      _market?: PromiseOrValue<string> | null,
      _requestId?: PromiseOrValue<BigNumberish> | null,
      _submissionId?: PromiseOrValue<BigNumberish> | null,
      intentChange?: null,
      earnings?: null,
      remainder?: null,
      newSubmission?: null
    ): SubmissionReviewedEventFilter;
  };

  estimateGas: {
    MATH_AVG_DECIMALS(overrides?: CallOverrides): Promise<BigNumber>;

    enforce(
      _requestId: PromiseOrValue<BigNumberish>,
      _submissionId: PromiseOrValue<BigNumberish>,
      _score: PromiseOrValue<BigNumberish>,
      _availableShare: PromiseOrValue<BigNumberish>,
      _enforcer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRemainder(
      _market: PromiseOrValue<string>,
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getRewards(
      _market: PromiseOrValue<string>,
      _requestId: PromiseOrValue<BigNumberish>,
      _submissionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    marketToMaxScore(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    remainder(
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rewards(
      _requestId: PromiseOrValue<BigNumberish>,
      _submissionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setConfiguration(
      _auxilaries: PromiseOrValue<BigNumberish>[],
      _ranges: PromiseOrValue<BigNumberish>[],
      _weights: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MATH_AVG_DECIMALS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    enforce(
      _requestId: PromiseOrValue<BigNumberish>,
      _submissionId: PromiseOrValue<BigNumberish>,
      _score: PromiseOrValue<BigNumberish>,
      _availableShare: PromiseOrValue<BigNumberish>,
      _enforcer: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRemainder(
      _market: PromiseOrValue<string>,
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getRewards(
      _market: PromiseOrValue<string>,
      _requestId: PromiseOrValue<BigNumberish>,
      _submissionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    marketToMaxScore(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    remainder(
      _requestId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rewards(
      _requestId: PromiseOrValue<BigNumberish>,
      _submissionId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setConfiguration(
      _auxilaries: PromiseOrValue<BigNumberish>[],
      _ranges: PromiseOrValue<BigNumberish>[],
      _weights: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
