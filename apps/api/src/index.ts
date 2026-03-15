import express from "express";
import cors from "cors";
import { transactionsRouter } from "./routes/transactions";
import { budgetsRouter } from "./routes/budgets";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => res.json({ status: "ok", app: "asusu-api" }));
app.use("/api/transactions", transactionsRouter);
app.use("/api/budgets", budgetsRouter);

app.listen(PORT, () => {
  console.log(`Asusu API running on port ${PORT}`);
});
