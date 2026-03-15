#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Address, Env, Symbol};

#[contracttype]
pub struct Budget {
    pub owner: Address,
    pub category: Symbol,
    pub limit: i128,
    pub spent: i128,
}

#[contract]
pub struct BudgetManager;

#[contractimpl]
impl BudgetManager {
    /// Set a spending limit for a category.
    pub fn set_budget(env: Env, owner: Address, category: Symbol, limit: i128) {
        owner.require_auth();
        let key = (owner.clone(), category.clone());
        let budget = Budget { owner, category, limit, spent: 0 };
        env.storage().persistent().set(&key, &budget);
    }

    /// Record spending against a budget. Returns error if limit exceeded.
    pub fn record_spend(env: Env, owner: Address, category: Symbol, amount: i128) -> Result<i128, &'static str> {
        owner.require_auth();
        let key = (owner.clone(), category.clone());
        let mut budget: Budget = env.storage().persistent().get(&key).unwrap();
        let new_spent = budget.spent + amount;
        if new_spent > budget.limit {
            return Err("budget_exceeded");
        }
        budget.spent = new_spent;
        env.storage().persistent().set(&key, &budget);
        Ok(budget.limit - new_spent)
    }

    /// Get remaining budget for a category.
    pub fn get_remaining(env: Env, owner: Address, category: Symbol) -> i128 {
        let key = (owner, category);
        let budget: Budget = env.storage().persistent().get(&key).unwrap();
        budget.limit - budget.spent
    }
}
