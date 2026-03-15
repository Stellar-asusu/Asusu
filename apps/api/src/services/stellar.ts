import { Horizon } from "@stellar/stellar-sdk";

const HORIZON_URL =
  process.env.HORIZON_URL || "https://horizon-testnet.stellar.org";

export class StellarService {
  private server: Horizon.Server;

  constructor() {
    this.server = new Horizon.Server(HORIZON_URL);
  }

  async getTransactions(account: string) {
    const records = await this.server
      .transactions()
      .forAccount(account)
      .limit(50)
      .order("desc")
      .call();
    return records.records;
  }

  async getAccountBalance(account: string) {
    const acc = await this.server.loadAccount(account);
    return acc.balances;
  }
}
