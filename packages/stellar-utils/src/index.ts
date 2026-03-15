import { StrKey } from "@stellar/stellar-sdk";

export function isValidStellarAddress(address: string): boolean {
  return StrKey.isValidEd25519PublicKey(address);
}

export function formatXLM(stroops: string | number): string {
  return (Number(stroops) / 10_000_000).toFixed(7);
}

export const NETWORKS = {
  TESTNET: {
    horizonUrl: "https://horizon-testnet.stellar.org",
    sorobanRpcUrl: "https://soroban-testnet.stellar.org",
    networkPassphrase: "Test SDF Network ; September 2015",
  },
  MAINNET: {
    horizonUrl: "https://horizon.stellar.org",
    sorobanRpcUrl: "https://soroban-rpc.stellar.org",
    networkPassphrase: "Public Global Stellar Network ; September 2015",
  },
} as const;
