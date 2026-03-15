import { Router } from "express";

export const budgetsRouter = Router();

// GET /api/budgets/:account
budgetsRouter.get("/:account", async (req, res) => {
  const { account } = req.params;
  // TODO: fetch from DB
  res.json({ account, budgets: [] });
});

// POST /api/budgets
budgetsRouter.post("/", async (req, res) => {
  const { account, category, limit, period } = req.body;
  // TODO: persist to DB
  res.status(201).json({ account, category, limit, period });
});
