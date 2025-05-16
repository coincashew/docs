---
id: quickstart
sidebar_position: 2
description: Run your own node in minutes
label: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🚀 Quickstart

<img src="/img/EthPillar.final.png" alt="EthPillar is cool"/>

## :triangular_ruler: Option 1: Automated One-Liner Install

1. Open a terminal window from anywhere by typing `Ctrl+Alt+T`.

To install, paste the following:

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coincashew/EthPillar/main/install.sh)"
```

2. Launch EthPillar:
```sh
ethpillar
```

3. Use the TUI menu to:
- Set up validators
- Configure network settings
- Enable security
- Enable monitoring
- Manage services

## :handshake: Option 2: Manual Install

1. Install updates and packages:

```bash
sudo apt-get update && sudo apt-get install git curl ccze bc tmux jq nano btop whiptail ufw
```

2. Clone the ethpillar repo and install:

```bash
mkdir -p ~/git/ethpillar
git clone https://github.com/coincashew/ethpillar.git ~/git/ethpillar
sudo ln -s ~/git/ethpillar/ethpillar.sh /usr/local/bin/ethpillar
```

3. Run ethpillar:

```bash
ethpillar
```
:::tip
Congrats on installing a EthPillar and thank you for making Ethereum more decentralized by running a node!
:::