import { Router } from "express";
import { StellarService } from "../services/stellar";

export const transactionsRouter = Router();
const stellar = new StellarService();

transactionsRouter.get("/", async (req, res) => {
  const { account } = req.query;
  if (!account || typeof account !== "string") {
    return res.status(400).json({ error: "account query param required" });
  }
  try {
    const txs = await stellar.getTransactions(account);
    res.json(txs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});
