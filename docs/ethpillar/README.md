---
id: ethpillar
sidebar_position: 1
description: EthPillar - one-liner setup tool and node management TUI
label: EthPillar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 📙 Introduction

<img src="/img/EthPillar.final.png" alt="EthPillar is cool"/>

:::tip
#### Do you like this software? Star the project and become a [⭐ Stargazer](https://github.com/coincashew/ethpillar/stargazers)
:::

## Welcome to EthPillar

EthPillar is a fully open-source tool that simplifies running and managing Ethereum nodes and validators via a text-based user interface (TUI).

This guide outlines EthPillar's features and how to start running your own node.

<img src="/img/preview02.png" alt=""/>
EthPillar's TUI - Navigate the menu to control your node

### What you can do with EthPillar

EthPillar empowers solo home stakers and node runners with a seamless installation and node management textual user interface (TUI). No complex terminal commands are needed, making running your own full node or validator node highly accessible, fast, and easy.

Here's a list of common node configurations and common uses.

| Configuration            | Enables you to    | Consists of |
| :----------------:       | :------           | :------         | 
| Solo Staking Node        | Run your own solo staking node stack, the gold standard       | consensus execution validator mevboost  |
| Lido CSM Staking         | Start staking with as little as 2.4 ETH                       | consensus execution validator mevboost  |
| Full Node Only           | Run your own ETH node, also known as RPC node                 | consensus execution                     |
| Failover Staking Node    | Deploy backup beacon nodes for redundancy                     | consensus execution mevboost            |
| Validator Only           | Run a validator client separately, connect to existing Failover/Solo staking/RocketPool node          | validator |
| Lido CSM Validator Only  | Run a CSM validator client separately, connect to existing Failover/Solo staking/RocketPool node      | validator |

### Why run a node with EthPillar
:smile: **Friendly Node Installer**: Helps you deploy a systemd installation with minority clients, including Nimbus-Nethermind, Lodestar-Besu, Teku-Besu, and Lighthouse-Reth. Deploy your node in minutes. MEVboost included.

:floppy_disk: **Ease of use**: No need to memorize CLI commands. Access common Node operations through a simple text user interface (TUI).

:owl: **Fast Updates**: Quickly find and download the latest consensus/execution release. Minimize downtime!

:tada:**Compatibility**: Node commands and file structure are identical to V2 staking setups.

:::warning
- **Already a running a Validator?** EthPillar is compatible with a Coincashew V2 Staking Setup

- **Already running a different node setup?** Wipe and reinstall with EthPillar. It's very fast.
:::

### :fire: Features

:chains: **Hoodi and Ephemery Testnet Support**: Quickest, easiest way to run a node risk-free. Learn and practice here before moving to mainnet.

:droplet: **Lido CSM Integration**: Deploy in minutes and start staking via [Lido's CSM with as little as 2.4 ETH](https://csm.testnet.fi/?ref=ethpillar).

⚒️ **Plugins and Tools**: Node-checker, eth-validator-cli, Dora the lightweight block explorer, contributoor, Ethdo, client-stats, csm-sentinel and eth-duties Integration helps stakers with every day common tasks.

:bacon: **Grafana and Ethereum-Metrics-Exporter Integration:** Monitoring and dashboards has never been easier.

🔎 **Built-in Troubleshooting:** Identify common issues hindering your node's peak performance. Explore EthPillar's Node Checker, which detects common system problems.

:tada: **Multiple deployment configurations:** Deploy a Solo Staking Node, Full Node Only, Lido CSM Staking Node, Validator Client Only or Failover Staking Node.

### :tada: Speedrun Demo by Stakesaurus
https://www.youtube.com/watch?v=aZLPACj2oPI

### :whale: Prerequisites

* Study [Ethstaker's Staking for Beginners](https://www.reddit.com/r/ethstaker/wiki/staking_for_beginners/)
* Review how [staking works and the hardware requirements](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/)
* A Linux [Ubuntu](https://ubuntu.com/download) installation.
  * Tested with [Ubuntu 24.04 LTS](https://ubuntu.com/download) Server
  * Also appears compatible with [armbian](https://www.armbian.com/download/), [Linux Mint](https://www.linuxmint.com/), [Debian 12](https://www.debian.org/distrib/netinst)
  * Support for **AMD64 and ARM64** architecture
  * Recommend at least 16GB RAM for **ARM64** sbc

### :star2: Contribute

We appreciate any help! To join in:

* Star the project on [GitHub](https://github.com/coincashew/EthPillar).
* Share the project on X or reddit. Talk about your experiences with solo staking.
* Provide feedback on [Github](https://github.com/coincashew/EthPillar/issues).
* [Submit PRs](https://github.com/coincashew/EthPillar/pulls) to improve the code.

### ☎️ Get in touch

Have questions? Chat with other home stakers on [Discord](https://discord.gg/dEpAVWgFNB) or open PRs/issues on [Github](https://github.com/coincashew/ethpillar).

Open source source code available here: [https://github.com/coincashew/EthPillar](https://github.com/coincashew/EthPillar)

### :heart: Donations

Support our public goods project at the next Gitcoin Grants.

Our donation address is [0xCF83d0c22dd54475cC0C52721B0ef07d9756E8C0](https://etherscan.io/address/0xCF83d0c22dd54475cC0C52721B0ef07d9756E8C0) or coincashew.eth

### :tada: Credits

Kudos to [accidental-green](https://github.com/accidental-green/validator-install) for their Python validator tools, inspiring this project. We're building on their validator-install code. Thanks for their contributions to the open-source Ethereum ecosystem!

#### Ready to install? Use the quickstart.