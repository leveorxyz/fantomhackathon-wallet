/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  KYCVerification,
  KYCVerificationInterface,
} from "../../contracts/KYCVerification";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "dataframe",
        type: "bytes",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "kycHash",
        type: "string",
      },
      {
        internalType: "address",
        name: "userAddress",
        type: "address",
      },
    ],
    name: "approveKYC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061002d61002261003260201b60201c565b61003a60201b60201c565b6100fe565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610e338061010d6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780638da5cb5b1461005b578063ae474b5314610079578063f2fde38b14610095575b600080fd5b6100596100b1565b005b6100636100c5565b60405161007091906104d9565b60405180910390f35b610093600480360381019061008e919061078a565b6100ee565b005b6100af60048036038101906100aa919061084f565b61022b565b005b6100b96102ae565b6100c3600061032c565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60006100fb8760006103f0565b905060008780519060200120905060006001828989896040516000815260200160405260405161012e949392919061089a565b6020604051602081039080840390855afa158015610150573d6000803e3d6000fd5b5050506020604051035190506101646100c5565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461019b57600080fd5b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146101d357600080fd5b84600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020908161021f9190610b00565b50505050505050505050565b6102336102ae565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036102a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161029990610c55565b60405180910390fd5b6102ab8161032c565b50565b6102b6610490565b73ffffffffffffffffffffffffffffffffffffffff166102d46100c5565b73ffffffffffffffffffffffffffffffffffffffff161461032a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161032190610cc1565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008060005b6014811015610482576008600c8261040e9190610d10565b6104189190610d44565b60ff60f81b86838761042a9190610d10565b8151811061043b5761043a610d86565b5b602001015160f81c60f81b167effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916901c82179150808061047a90610db5565b9150506103f6565b508060001c91505092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104c382610498565b9050919050565b6104d3816104b8565b82525050565b60006020820190506104ee60008301846104ca565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61055b82610512565b810181811067ffffffffffffffff8211171561057a57610579610523565b5b80604052505050565b600061058d6104f4565b90506105998282610552565b919050565b600067ffffffffffffffff8211156105b9576105b8610523565b5b6105c282610512565b9050602081019050919050565b82818337600083830152505050565b60006105f16105ec8461059e565b610583565b90508281526020810184848401111561060d5761060c61050d565b5b6106188482856105cf565b509392505050565b600082601f83011261063557610634610508565b5b81356106458482602086016105de565b91505092915050565b600060ff82169050919050565b6106648161064e565b811461066f57600080fd5b50565b6000813590506106818161065b565b92915050565b6000819050919050565b61069a81610687565b81146106a557600080fd5b50565b6000813590506106b781610691565b92915050565b600067ffffffffffffffff8211156106d8576106d7610523565b5b6106e182610512565b9050602081019050919050565b60006107016106fc846106bd565b610583565b90508281526020810184848401111561071d5761071c61050d565b5b6107288482856105cf565b509392505050565b600082601f83011261074557610744610508565b5b81356107558482602086016106ee565b91505092915050565b610767816104b8565b811461077257600080fd5b50565b6000813590506107848161075e565b92915050565b60008060008060008060c087890312156107a7576107a66104fe565b5b600087013567ffffffffffffffff8111156107c5576107c4610503565b5b6107d189828a01610620565b96505060206107e289828a01610672565b95505060406107f389828a016106a8565b945050606061080489828a016106a8565b935050608087013567ffffffffffffffff81111561082557610824610503565b5b61083189828a01610730565b92505060a061084289828a01610775565b9150509295509295509295565b600060208284031215610865576108646104fe565b5b600061087384828501610775565b91505092915050565b61088581610687565b82525050565b6108948161064e565b82525050565b60006080820190506108af600083018761087c565b6108bc602083018661088b565b6108c9604083018561087c565b6108d6606083018461087c565b95945050505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061093157607f821691505b602082108103610944576109436108ea565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026109ac7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261096f565b6109b6868361096f565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006109fd6109f86109f3846109ce565b6109d8565b6109ce565b9050919050565b6000819050919050565b610a17836109e2565b610a2b610a2382610a04565b84845461097c565b825550505050565b600090565b610a40610a33565b610a4b818484610a0e565b505050565b5b81811015610a6f57610a64600082610a38565b600181019050610a51565b5050565b601f821115610ab457610a858161094a565b610a8e8461095f565b81016020851015610a9d578190505b610ab1610aa98561095f565b830182610a50565b50505b505050565b600082821c905092915050565b6000610ad760001984600802610ab9565b1980831691505092915050565b6000610af08383610ac6565b9150826002028217905092915050565b610b09826108df565b67ffffffffffffffff811115610b2257610b21610523565b5b610b2c8254610919565b610b37828285610a73565b600060209050601f831160018114610b6a5760008415610b58578287015190505b610b628582610ae4565b865550610bca565b601f198416610b788661094a565b60005b82811015610ba057848901518255600182019150602085019450602081019050610b7b565b86831015610bbd5784890151610bb9601f891682610ac6565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000610c3f602683610bd2565b9150610c4a82610be3565b604082019050919050565b60006020820190508181036000830152610c6e81610c32565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000610cab602083610bd2565b9150610cb682610c75565b602082019050919050565b60006020820190508181036000830152610cda81610c9e565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d1b826109ce565b9150610d26836109ce565b9250828201905080821115610d3e57610d3d610ce1565b5b92915050565b6000610d4f826109ce565b9150610d5a836109ce565b9250828202610d68816109ce565b91508282048414831517610d7f57610d7e610ce1565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000610dc0826109ce565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610df257610df1610ce1565b5b60018201905091905056fea264697066735822122059e5439cfa72869f1f65fd59727704b3c68de9d9f3b2f72bd3edb8ed007ddd0364736f6c63430008110033";

type KYCVerificationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KYCVerificationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KYCVerification__factory extends ContractFactory {
  constructor(...args: KYCVerificationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<KYCVerification> {
    return super.deploy(overrides || {}) as Promise<KYCVerification>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): KYCVerification {
    return super.attach(address) as KYCVerification;
  }
  override connect(signer: Signer): KYCVerification__factory {
    return super.connect(signer) as KYCVerification__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KYCVerificationInterface {
    return new utils.Interface(_abi) as KYCVerificationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KYCVerification {
    return new Contract(address, _abi, signerOrProvider) as KYCVerification;
  }
}