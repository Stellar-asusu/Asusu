export interface Transaction {
  id: string;
  account: string;
  amount: string;
  asset: string;
  type: "payment" | "create_account" | "change_trust";
  createdAt: string;
}

export interface Budget {
  account: string;
  category: string;
  limit: number;
  spent: number;
  period: "daily" | "monthly" | "quarterly";
}

export interface SavingsGoal {
  account: string;
  name: string;
  target: number;
  saved: number;
}

export type StellarNetwork = "TESTNET" | "MAINNET";
