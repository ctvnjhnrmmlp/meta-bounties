# Meta Bounties

_A Chain-Agnostic Bounty & Earn dApp — Inspired by SuperTeam Earn_

## Overview

Bounties/Earn is a decentralized application (dApp) designed to help users discover and participate in bounties, grants, tasks, and earning opportunities across multiple blockchain ecosystems. Unlike most platforms that are locked into a single chain, this platform is **chain-agnostic** — starting with **Aptos**, and expanding support for other ecosystems like Ethereum, Solana, and more.

## Why Bounties/Earn?

Currently, bounty and earn platforms are usually siloed within a specific blockchain ecosystem, limiting opportunities for contributors and builders. Bounties/Earn aims to solve this by:

- Aggregating bounties across multiple chains
- Enabling seamless participation regardless of the chain
- Boosting visibility for ecosystem-specific opportunities
- Offering a unified experience for contributors

## Features

- **Multi-chain Support:** View and apply to bounties across Aptos and other ecosystems
- **Contributor Profiles:** Showcase your completed tasks and earnings
- **Project Dashboard:** Bounty creators can manage tasks, rewards, and submissions
- **On-chain Verification:** Proof-of-work or delivery using blockchain-native features
- **Token Rewards:** Receive bounties in native tokens from multiple chains

## Roadmap

- [x] MVP on Aptos
- [ ] Add Ethereum & Solana integration
- [ ] Contributor reputation system
- [ ] Cross-chain bounty settlement
- [ ] DAO governance for community bounties

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

### Environment Variables

Create a `.env` file in the root with:

```env
NEXT_PUBLIC_APTOS_NODE_URL=...
NEXT_PUBLIC_CONTRACT_ADDRESS=...
```

## Contributing

We welcome contributions! To get started:

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes
4. Push to the branch (`git push origin feature/feature-name`)
5. Create a pull request

## License

[MIT License](LICENSE)

## Credits

Inspired by [SuperTeam Earn](https://earn.superteam.fun/) and powered by the Aptos ecosystem.
