# Asusu

> Financial inclusion for everyone — powered by the [Stellar](https://stellar.org) blockchain.

Asusu is a comprehensive, open-source financial management platform built on Stellar. It gives unbanked and underbanked users worldwide the tools to track spending, enforce budgets, and grow savings — all without a traditional bank account. Your Stellar wallet is your identity.

The name **Asusu** comes from the Igbo word for a traditional rotating savings group, reflecting the project's roots in community-driven financial empowerment.

---

## Why Stellar?

Stellar is a fast, low-cost, open blockchain network purpose-built for financial access. Key properties that make it ideal for Asusu:

- **Near-zero fees** — transactions cost a fraction of a cent
- **Fast finality** — 3–5 second settlement
- **Native multi-asset support** — XLM, USDC, EURC, and any custom asset
- **Soroban smart contracts** — Rust-based, deterministic, auditable on-chain logic
- **Decentralized exchange (DEX)** — built-in asset swaps
- **Global reach** — no geographic restrictions

---

## Features

| Feature | Description |
|---|---|
| 📊 Transaction Tracking | Auto-sync all Stellar transactions via Horizon API |
| 💰 Smart Budgeting | Set daily, monthly, or quarterly spending limits per category |
| 🎯 Savings Goals | On-chain savings vaults with milestone tracking |
| 🔐 Self-Sovereign Identity | Wallet = identity, no KYC required |
| 🌍 Multi-Asset Support | XLM, USDC, EURC, and all Stellar assets |
| 📱 Offline-First | Core features work without internet |
| 📈 Visual Analytics | Spending charts and trend analysis |
| 🔔 Smart Notifications | Budget alerts and goal achievements |
| 🌐 Multilingual | English, Spanish, French, Swahili, Portuguese, Arabic |
| 🤝 On-Chain Logic | Budget enforcement via Soroban smart contracts |

---

## Monorepo Structure

```
asusu/
├── apps/
│   ├── web/                  # Next.js 15 frontend (App Router)
│   │   ├── app/              # Pages and layouts
│   │   ├── components/       # Reusable UI components
│   │   ├── context/          # React context (wallet, auth)
│   │   ├── hooks/            # Custom React hooks
│   │   └── lib/api/          # API client helpers
│   └── api/                  # Express.js backend API
│       ├── src/
│       │   ├── routes/       # REST endpoints
│       │   ├── services/     # Stellar, DB, business logic
│       │   └── middleware/   # Auth, rate limiting
│       └── migrations/       # PostgreSQL migrations
├── contracts/                # Soroban smart contracts (Rust)
│   ├── budget-manager/       # On-chain budget enforcement
│   └── savings-vault/        # Savings goals and vaults
├── packages/
│   ├── types/                # Shared TypeScript types
│   └── stellar-utils/        # Shared Stellar helpers
├── .env.example
├── Cargo.toml                # Rust workspace
├── package.json              # Node.js workspace (Turborepo)
└── turbo.json
```

---

## Tech Stack

### Frontend (`apps/web`)
- **Next.js 15** with App Router and React Server Components
- **TypeScript 5**
- **Tailwind CSS 3.4** with custom design system
- **shadcn/ui** component library
- **TanStack Query** for server state
- **Zustand** for client state
- **Freighter API** for Stellar wallet connection
- **@stellar/stellar-sdk 11.x**
- **Recharts** for data visualization

### Backend (`apps/api`)
- **Node.js 18+** with **Express.js**
- **TypeScript**
- **PostgreSQL** for persistent storage
- **Stellar Horizon API** for blockchain data
- **Soroban RPC** for smart contract interaction

### Smart Contracts (`contracts/`)
- **Rust** with **Soroban SDK 21**
- Compiled to **WASM** and deployed on Stellar
- `budget-manager` — enforces spending limits on-chain
- `savings-vault` — manages savings goals with on-chain state

### Shared Packages
- `@asusu/types` — shared TypeScript interfaces
- `@asusu/stellar-utils` — address validation, XLM formatting, network config

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm
- Rust (stable) + `rustup` — for contracts
- [Soroban CLI](https://soroban.stellar.org/docs/getting-started/setup) — for contract deployment
- [Freighter wallet](https://freighter.app) browser extension

### Install

```bash
git clone https://github.com/your-org/asusu.git
cd asusu
npm install
```

### Environment Setup

```bash
cp .env.example apps/web/.env.local
cp .env.example apps/api/.env
```

Edit the `.env` files with your configuration. Key variables:

```env
NEXT_PUBLIC_STELLAR_NETWORK=TESTNET
NEXT_PUBLIC_HORIZON_URL=https://horizon-testnet.stellar.org
NEXT_PUBLIC_SOROBAN_RPC_URL=https://soroban-testnet.stellar.org
NEXT_PUBLIC_API_URL=http://localhost:3001
DATABASE_URL=postgresql://user:password@localhost:5432/asusu
```

### Run Development Servers

```bash
# Run all apps in parallel
npm run dev

# Or individually
cd apps/web && npm run dev    # http://localhost:3000
cd apps/api && npm run dev    # http://localhost:3001
```

### Build Contracts

```bash
# Add WASM target
rustup target add wasm32-unknown-unknown

# Build budget-manager
cargo build -p budget-manager --target wasm32-unknown-unknown --release

# Build savings-vault
cargo build -p savings-vault --target wasm32-unknown-unknown --release

# Run all contract tests
cargo test --workspace
```

---

## Smart Contracts

### `budget-manager`

Enforces spending limits per category on-chain.

| Function | Description |
|---|---|
| `set_budget(owner, category, limit)` | Create or update a budget |
| `record_spend(owner, category, amount)` | Record a spend, returns remaining |
| `get_remaining(owner, category)` | Query remaining budget |

### `savings-vault`

Manages savings goals with on-chain state.

| Function | Description |
|---|---|
| `create_goal(owner, name, target)` | Create a new savings goal |
| `deposit(owner, name, amount)` | Add funds to a goal |
| `progress(owner, name)` | Returns progress in basis points (0–10000) |

---

## API Endpoints

| Method | Path | Description |
|---|---|---|
| `GET` | `/health` | Health check |
| `GET` | `/api/transactions?account=G...` | Fetch Stellar transactions |
| `GET` | `/api/budgets/:account` | Get budgets for an account |
| `POST` | `/api/budgets` | Create a new budget |

---

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/short-description`
3. Make your changes
4. Run linters and tests locally
5. Open a Pull Request with a clear description

Look for issues labeled `good first issue` or `help wanted`.

---

## Roadmap

- [ ] Freighter wallet full integration
- [ ] Soroban contract deployment scripts
- [ ] PostgreSQL migrations
- [ ] AI-powered budget recommendations
- [ ] Shared group budgets
- [ ] Mobile app (React Native)
- [ ] Multilingual UI (i18n)
- [ ] Mainnet deployment

---

## License

MIT — see [LICENSE](./LICENSE)

---

> Built on [Stellar](https://stellar.org) · Inspired by community savings traditions
