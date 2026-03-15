#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Address, Env, Symbol};

#[contracttype]
pub struct SavingsGoal {
    pub owner: Address,
    pub name: Symbol,
    pub target: i128,
    pub saved: i128,
}

#[contract]
pub struct SavingsVault;

#[contractimpl]
impl SavingsVault {
    /// Create a new savings goal.
    pub fn create_goal(env: Env, owner: Address, name: Symbol, target: i128) {
        owner.require_auth();
        let key = (owner.clone(), name.clone());
        let goal = SavingsGoal { owner, name, target, saved: 0 };
        env.storage().persistent().set(&key, &goal);
    }

    /// Deposit into a savings goal.
    pub fn deposit(env: Env, owner: Address, name: Symbol, amount: i128) -> i128 {
        owner.require_auth();
        let key = (owner.clone(), name.clone());
        let mut goal: SavingsGoal = env.storage().persistent().get(&key).unwrap();
        goal.saved += amount;
        env.storage().persistent().set(&key, &goal);
        goal.saved
    }

    /// Returns progress as basis points (0–10000).
    pub fn progress(env: Env, owner: Address, name: Symbol) -> i128 {
        let key = (owner, name);
        let goal: SavingsGoal = env.storage().persistent().get(&key).unwrap();
        (goal.saved * 10_000) / goal.target
    }
}
