import { createClient, createPublicClient, http } from "viem";
import { baseSepolia } from "viem/chains";
import { ENTRYPOINT_ADDRESS_V06 } from "permissionless";
import { paymasterActionsEip7677 } from "permissionless/experimental";
import "dotenv/config";

export const client = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

const paymasterService = "https://api.developer.coinbase.com/rpc/v1/base-sepolia/LyT_0lKAx57z6hEjpTxTeq9ToxFOtlNv";

export const paymasterClient = createClient({
  chain: baseSepolia,
  transport: http(paymasterService),
}).extend(paymasterActionsEip7677({ entryPoint: ENTRYPOINT_ADDRESS_V06 }));
