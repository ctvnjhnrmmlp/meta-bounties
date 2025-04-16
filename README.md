# Meta Bounties

_A Chain-Agnostic Bounty & Earn dApp — Inspired by SuperTeam Earn_

> Discover, contribute, and earn across multiple blockchain ecosystems — all in one place.

## Overview

**Meta Bounties** is a decentralized application (dApp) that helps users discover and participate in bounties, grants, tasks, and earning opportunities across different blockchain ecosystems. Most current solutions are locked into a single chain — but Meta Bounties is **chain-agnostic** by design. It starts with **Aptos** and aims to support **Ethereum**, **Solana**, and beyond.

Whether you're a contributor, project owner, or community builder, Meta Bounties offers a seamless, cross-chain platform to **earn, build, and showcase your contributions**.

## Why Meta Bounties?

Most bounty platforms today are isolated to one blockchain. That limits contributors and makes it harder for projects to attract a diverse range of talent.

Meta Bounties solves this by:

- Aggregating opportunities across ecosystems
- Enabling frictionless participation regardless of chain
- Boosting visibility for ecosystem-specific bounties
- Providing a consistent experience for users and projects

Our philosophy is simple: **talent is everywhere — opportunity should be too**.

## Features

- 🔗 **Multi-chain Support** — Start with Aptos, expand to Ethereum, Solana, and more
- 🧑‍💻 **Contributor Profiles** — Showcase completed bounties and earnings
- 🛠️ **Project Dashboards** — Manage bounties, rewards, and submissions with ease
- 🔐 **On-chain Verification** — Submit proof-of-work using blockchain-native mechanisms
- 🪙 **Token Rewards** — Earn in native tokens from multiple ecosystems

## Roadmap

- [x] MVP launched on Aptos
- [ ] Integrate Ethereum & Solana
- [ ] Build Contributor Reputation System
- [ ] Enable Cross-chain Bounty Settlement
- [ ] DAO Governance for Community-led Bounties

## Tech Stack

**Blockchain:**
`Move` · `Aptos` · _(future)_ `Solidity` · `Web3.js` · `Ethers.js`

**Web:**
`Next.js` · `React` · `Tailwind CSS`

**Other:**
`Node.js` · `Vercel` · `Docker` · `GitHub Actions`

## Getting Started

### Prerequisites

- Node.js & npm
- Aptos Wallet (e.g. Petra)
- Git

### Installation

```bash
git clone https://github.com/yourusername/bounties-earn.git
cd bounties-earn
npm install
npm run dev
```

## Environment Variables

Create a `.env` file at the root with the following:

```env
NEXT_PUBLIC_APTOS_NODE_URL=https://...
NEXT_PUBLIC_CONTRACT_ADDRESS=0x...
```

## Usage

```bash
# Start development server
npm run dev
```

## Architecture

```
[Frontend (Next.js/React)] -> [Backend (Nest)] -> [Aptos Blockchain (Move Contracts)] -> [Multi-chain Expansion]
```

## Deployment

- **Frontend:** Deployed on [Vercel](https://vercel.com)
- **Smart Contract:**
  - Network: Aptos (Mainnet/Testnet)
  - Contract Address: `0x...`
  - Explorer: [View on Aptos Explorer](https://explorer.aptoslabs.com)

## Contributing

We welcome and appreciate contributions!

1. Fork this repo
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

- Inspired by [SuperTeam Earn](https://earn.superteam.fun)
- Built by the Meta Bounties team
- Powered by the [Aptos](https://aptos.dev) ecosystem
