import { env } from "@/env.mjs"

export const billingContract = {
	get address() {
		switch (env.NEXT_PUBLIC_ENV) {
			case "dev":
				return "0x0d87956500ecbc17a6fa63093b6830458a4ad000"
			case "staging":
				return "0xeff7b1a047f4a7ba0ac74c23459dbb39f8c47597"
			default:
				return "0x0"
		}
	},

	tokenDecimals: 18,

	abi: [
		{ inputs: [], stateMutability: "nonpayable", type: "constructor" },
		{ inputs: [], name: "ErrInvalidArrayLength", type: "error" },
		{
			anonymous: false,
			inputs: [
				{
					indexed: false,
					internalType: "uint8",
					name: "version",
					type: "uint8",
				},
			],
			name: "Initialized",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "bytes32",
					name: "role",
					type: "bytes32",
				},
				{
					indexed: true,
					internalType: "bytes32",
					name: "previousAdminRole",
					type: "bytes32",
				},
				{
					indexed: true,
					internalType: "bytes32",
					name: "newAdminRole",
					type: "bytes32",
				},
			],
			name: "RoleAdminChanged",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "bytes32",
					name: "role",
					type: "bytes32",
				},
				{
					indexed: true,
					internalType: "address",
					name: "account",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "sender",
					type: "address",
				},
			],
			name: "RoleGranted",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "bytes32",
					name: "role",
					type: "bytes32",
				},
				{
					indexed: true,
					internalType: "address",
					name: "account",
					type: "address",
				},
				{
					indexed: true,
					internalType: "address",
					name: "sender",
					type: "address",
				},
			],
			name: "RoleRevoked",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "user",
					type: "address",
				},
				{
					indexed: true,
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "TokensCollected",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "user",
					type: "address",
				},
				{
					indexed: true,
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
			],
			name: "TokensDeposited",
			type: "event",
		},
		{
			anonymous: false,
			inputs: [
				{
					indexed: true,
					internalType: "address",
					name: "user",
					type: "address",
				},
				{
					indexed: true,
					internalType: "uint256",
					name: "amount",
					type: "uint256",
				},
				{
					indexed: true,
					internalType: "uint256",
					name: "fee",
					type: "uint256",
				},
			],
			name: "TokensWithdrawn",
			type: "event",
		},
		{
			inputs: [],
			name: "COLLECTOR_ROLE",
			outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [],
			name: "DEFAULT_ADMIN_ROLE",
			outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [{ internalType: "address", name: "user", type: "address" }],
			name: "balanceOf",
			outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "address[]", name: "users", type: "address[]" },
				{ internalType: "uint256[]", name: "amounts", type: "uint256[]" },
				{ internalType: "address", name: "to", type: "address" },
			],
			name: "collectTokens",
			outputs: [
				{ internalType: "uint256", name: "totalCollected", type: "uint256" },
			],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
			name: "deposit",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
			name: "getRoleAdmin",
			outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "bytes32", name: "role", type: "bytes32" },
				{ internalType: "uint256", name: "index", type: "uint256" },
			],
			name: "getRoleMember",
			outputs: [{ internalType: "address", name: "", type: "address" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
			name: "getRoleMemberCount",
			outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "bytes32", name: "role", type: "bytes32" },
				{ internalType: "address", name: "account", type: "address" },
			],
			name: "grantRole",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "bytes32", name: "role", type: "bytes32" },
				{ internalType: "address", name: "account", type: "address" },
			],
			name: "hasRole",
			outputs: [{ internalType: "bool", name: "", type: "bool" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "address", name: "token", type: "address" },
				{ internalType: "address", name: "collector", type: "address" },
			],
			name: "initialize",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "bytes32", name: "role", type: "bytes32" },
				{ internalType: "address", name: "account", type: "address" },
			],
			name: "renounceRole",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "bytes32", name: "role", type: "bytes32" },
				{ internalType: "address", name: "account", type: "address" },
			],
			name: "revokeRole",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
		{
			inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
			name: "supportsInterface",
			outputs: [{ internalType: "bool", name: "", type: "bool" }],
			stateMutability: "view",
			type: "function",
		},
		{
			inputs: [
				{ internalType: "address[]", name: "users", type: "address[]" },
				{ internalType: "uint256[]", name: "amounts", type: "uint256[]" },
				{ internalType: "uint256[]", name: "fees", type: "uint256[]" },
			],
			name: "withdrawTokens",
			outputs: [],
			stateMutability: "nonpayable",
			type: "function",
		},
	],
} as const
