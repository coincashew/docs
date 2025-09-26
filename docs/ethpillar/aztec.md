---
id: aztec
sidebar_position: 5
description: Run your own Aztec Sequencer node in minutes
label: Aztec
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🥷 Aztec - Run a Node

## 🥷 Aztec Sepolia Sequencer: Privacy first Layer 2 on Ethereum, Built for Home & Solo Stakers

Welcome to the **Aztec Sequencer Node Plugin**, a seamless integration for [EthPillar](https://github.com/coincashew/EthPillar) designed to empower individuals and small operators to run an Aztec Layer 2 node with ease, security, and full control. Whether you're an Ethereum enthusiast, a solo staker, or a privacy advocate—this plugin gives you everything you need to participate in the Aztec network's testnet and beyond.

<img src="/img/epaz.jpg" alt="EthPillar + Aztec is cool"/>

## 🚀 Key Features

- **Automated Setup & Configuration**  
  Simple install scripts to set up Docker, dependencies, and fetch the latest Aztec node client. Edit your `.env` and you're ready to launch.

- **Health Checks & Troubleshooting**  
  Built-in menu and scripts verify node health, RPC connectivity, disk usage, and environment configuration. Clear error messages and guided troubleshooting help ensure smooth operation.

- **Validator Registration & Role Claiming**  
  Step-by-step instructions and menu screens guide you through validator setup, ZKPassport humanity verification, and role upgrades (e.g., Guardian role).

- **Security Hardening**  
  - Runs as a non-root user (rootless Docker)  
  - Drops all unnecessary Linux capabilities, only allows essential networking  
  - Enforces strict memory limits and log rotation  
  - Uses `no-new-privileges` to prevent escalation  
  - Containerized for isolation and control

- **Logging & Monitoring**  
  Integrated with EthPillar’s logging tools. Real-time logs, resource usage, and error reporting for proactive node management.

- **Backup & Recovery**  
  Easy validator key backup options and portable configuration for migration or disaster recovery.

## 🛡️ Why Choose Aztec Plugin for EthPillar?

- **Privacy-First**: Participate in Aztec’s zero-knowledge-powered Layer 2, prioritizing privacy for every transaction.
- **Community & Support**: Direct access to the vibrant Aztec and EthPillar communities for troubleshooting, updates, and collaboration ([Discord](https://discord.gg/aztec), [EthPillar Discord](https://discord.gg/WS8E3PMzrb)).
- **Solo Staker Friendly**: Designed for individuals—no enterprise hardware or expertise required.
- **Open Source & Transparent**: Auditable scripts and configurations. Fork, contribute, or customize to your needs.

## ⚡ Requirements: What you'll need
- **Operating System**: Ubuntu Server or Desktop 24.04.3 LTS (or newer)
- **Disk**
   - **Remote RPC**: 100GB NVMe SDD for Aztec Node
   - **Local RPC**: 850GB+ for Full Node Setup (execution L1 RPC + consensus beacon RPC + aztec L2)
- **Hardware**: 2 core / 4 vCPU, 16GB RAM, 25 Mbps network connection
- **Validator Funding**: At least 0.0001 SepoliaETH for testnet validator registration

## 📦 Quick Start

1. Open a terminal window from anywhere by typing `Ctrl+Alt+T`.

To install, paste the following:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coincashew/EthPillar/main/install.sh)"
```

2. Launch EthPillar. Type the following:
```sh
ethpillar
```

3. Use the down arrow keys to select, then press OK: 
**- Aztec L2 Sequencer**

<img src="/img/az-config.png" alt="Aztec Node Config"/>

:::tip
Docker will install if missing. You may need to log out and log in again. Type "ethpillar" again to resume install.
:::

4. Select **LOCAL** or **REMOTE** RPC

<img src="/img/az-rpcselect.png" alt="Aztec Selecing RPC Local or Remote"/>

If **REMOTE**, provide your **BEACON and ETH RPC URLs**
	- Enter URLs i.e. **https://beaconRPC.example.com or http://192.168.1.123**

<img src="/img/az-rpc.png" alt="Aztec Enter RPC"/>

If **LOCAL**, ethpillar will install a **Nimbus+Nethermind** full node.
	- Select **Sepolia** as network
	- Answer **Yes** to start syncing now
	- Answer **Yes** to autostart when system boots up
	- Nimbus+Nethermind full node will require 2+hrs to sync on a system with fast NVME ssd drives

5. Congrats! aztec-sequencer is now installed.

<img src="/img/az-menu.png" alt="Aztec Menu"/>

## ⏭️ Next Steps:

1. **Review .env configuration**: Update values (i.e. your ETH addresses/keys) if desired

2. **Start aztec-sequencer**: Ensure Sepolia Full Node is fully synced first! This can take at least a few hours. Run the Health Checks.

3. **Backup aztec validator key**: Use the 🔐 menu option

<img src="/img/az-start.png" alt="Aztec Start"/>

**Port forwarding:** Forward the p2p port (default: 40400) to your local node ip address. Configure in your router.

## 📚 Documentation & Resources

- [Aztec Network Docs](https://aztec.network/network)
- [Aztec Source Code](https://github.com/AztecProtocol/aztec-packages)
- [Validator Dashboard](https://dashtec.xyz)
- [Block Explorer](https://aztecscan.xyz)

## 🤝 Contributing

We welcome [PRs, feedback, and ideas!](https://github.com/coincashew/EthPillar)

## 📧 Need Help?

- [Aztec Discord](https://discord.gg/aztec)
- [EthPillar Discord](https://discord.gg/WS8E3PMzrb)
- [CoinCashew Docs](https://docs.coincashew.com/ethpillar/aztec)

Enjoy private sequencing and join the future of Ethereum privacy!