---
sidebar_position: 4
description: Frequently asked questions about EthPillar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ❓ Help

### General Questions

<details>
<summary>What is EthPillar?</summary>

EthPillar is an open-source tool for managing Ethereum nodes and validators through a text-based user interface (TUI). It simplifies the process of running Ethereum nodes and participating in staking.

</details>

<details>
<summary>Cost: Is EthPillar free to use?</summary>

Yes, EthPillar is completely free and open-source software.

</details>

### Technical Requirements

<details>

<summary>What are the minimum system requirements?</summary>

For mainnet:
- CPU: 4+ cores
- RAM: 16GB minimum (32GB recommended)
- Storage: 2TB NVMe SSD
- OS: Ubuntu 24.04 LTS or compatible Linux distribution
- Internet: Stable connection with minimum 20 Mbps

For Ephemery or Hoodi testnet:
- CPU: 1+ cores
- RAM: 4GB minimum
- Storage: 30GB NVMe SSD
- OS: Ubuntu 24.04 LTS or compatible Linux distribution
- Internet: Stable connection with minimum 20 Mbps

</details>

<details>

<summary>Which operating systems are supported?</summary>

Currently, EthPillar officially supports Ubuntu 24.04 LTS. Other Linux Debian-based distributions may work but are not officially supported.

</details>

### Installation & Setup

<details>

<summary>How do I install EthPillar?</summary>

Use the following command in your terminal:
````bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coincashew/EthPillar/main/install.sh)"
````

</details>

<details>

<summary>How do I update EthPillar?</summary>

<Tabs>
  <TabItem value="tui" label="TUI Update" default>
Upon opening EthPillar,

Navigate to **System Administration > Update EthPillar** and then quit and relaunch.
  </TabItem>
  <TabItem value="manual" label="Manual Update">
From a terminal, pull the latest updates from git.

```bash
cd ~/git/ethpillar
git pull
```
  </TabItem>
</Tabs>

</details>

<details>

<summary>How do I uninstall EthPillar?</summary>

Go to **EthPillar** > **System Administration > Uninstall node**

From a terminal, clean up the remaining files

```bash
rm -rf ~/git/ethpillar
sudo rm /usr/local/bin/ethpillar
```

</details>

<details>

<summary>Migrate or Upgrade Staking Setup: How to switch to EthPillar from a V1 Staking setup or other staking tool</summary>

To migrate from a different staking setup, find your most applicable situation:

**Cleanest and most problem-free option**:

* 1\) Reformat Ubuntu Operating System
* 2\) Install EthPillar
* 3\) Import validator keys

**Existing V1 Staking Setup:** OGs and genesis stakers :saluting_face:

* 1\) Uninstall V1 Staking Setup
* 2\) Install EthPillar
* 3\) Import validator keys

**Other staking automation tools or cloud hosted setups:**

* 1\) Uninstall / cancel / existing tool or service provider
* 2\) Install EthPillar
* 3\) Import validator keys

:white_check_mark: **To avoid slashing penalties**, ensure your validator keys are deleted from existing staking setups.

</details>

<details>

<summary>Can I access my node's RPC remotely?</summary>

Yes, but we recommend using SSH tunneling for security.

Example command: `ssh <VPS OR NODE IP> -L 8545:localhost:8545`

After adding your node's RPC connection to your wallet, your can send transactions using your own node!

</details>

<details>

<summary>Change Networks: How to switch between testnet and mainnet with EthPillar ?</summary>

To switch to mainnet, there are two recommended methods.

* **Cleanest and most problem-free option**: Reformat Ubuntu OS and re-install EthPillar.

- **Use EthPillar:** Navigate to **System Administration > Change Network**

</details>

<details>

<summary>How do I configure my BIOS to auto power on after power loss?</summary>

Actual steps vary depending on your computer's BIOS. General idea here: [https://www.wintips.org/setup-computer-to-auto-power-on-after-power-outage/](https://www.wintips.org/setup-computer-to-auto-power-on-after-power-outage/)

</details>


### Staking

<details>
<summary>What's the minimum ETH required to stake?</summary>
- 32 ETH for solo staking
- 2.4 ETH minimum for Lido CSM staking

</details>

<details>
<summary>Exit Validator: How do I exit a validator?</summary>

If you already have VEMs created, skip to step 2.

Step 1: Navigate to EthPillar > Validator > Generate Voluntary Exit Message

Step 2: Broadcast Voluntary Exit Message

</details>

<details>
<summary>Add Validators: I already have validators running. I want to add one more validator. How do I do that?</summary>

Navigate to,

**EthPillar > Validator Client > Generate / Import Validator Keys**

From there you will pick 1 of 2 options.

* Import validator keys from offline key generation or backup
* Add new or regenerate existing validator keys from Secret Recovery Phrase

</details>

<details>
<summary>Node Types: What is a failover staking node?</summary>

**Purpose**: To provide high availability, you would run TWO (or more) failover staking nodes on separate machines. Point your validator client to your two failover staking nodes.

**What**: A failover staking node is made up of an execution client, consensus client and mevboost.

**How to**: To configure for nimbus validator client, edit your validator client configuration. [https://nimbus.guide/validator-client-options.html#multiple-beacon-nodes](https://nimbus.guide/validator-client-options.html#multiple-beacon-nodes)

Exposing the consensus client RPC port will also be required. You will need to adjust your firewall to allow traffic from your validator client's IP address as well.

**Benefit**: Running multiple failover staking nodes (or beacon nodes as nimbus refers to it) would allow you to perform maintenance or have an outage on 1 failover staking node.

</details>

<details>
<summary>Withdrawal Address: Can I have different withdraw addresses per validator or only 1 per setup?</summary>

Different withdrawal addresses per validator are possible if you run the ./deposit tool separately for each validator.

</details>

<details>
<summary>Generating Keystores: Can I generate 10 validator keystores and activate them one by one at the launchpad?</summary>

You can but it would require manual editing as you'll need to change the deposit_data json.

</details>

### Security

<details>

<summary>Is my validator key safe?</summary>

Your validator keys are stored locally and encrypted. EthPillar never transmits your keys over the network.

</details>

<details>

<summary>Do I need to open ports on my firewall?</summary>

Yes, EthPillar requires specific ports for P2P connectivity:
- TCP/UDP port 30303 for execution client
- TCP/UDP port 9000 for consensus client

Go to >  Security & Node Checks > UFW Firewall > Enable firewall with default settings

</details>

### Troubleshooting

<details>

<summary>What should I do if my node is not syncing?</summary>

Check the following:
1. Network connectivity
2. System resources (CPU, RAM, disk space) using `Node Checker` found under `Security & Node Checks`
3. Client logs using `Logs and Monitoring`
4. Port accessibility using `Node Checker` found under `Security & Node Checks`

</details>

### Support

<details>

<summary>Where can I get help?</summary>

You can:
- Open an issue on GitHub
- Join our Discord community
- Check the documentation

</details>

<details>

<summary>How do I report bugs?</summary>

Please file an issue on our GitHub repository with:
- EthPillar version
- System information
- Error messages
- Steps to reproduce the issue

</details>

### Monitoring
<details>

<summary>How can I monitor my node's performance?</summary>

EthPillar includes:
- Using `Node Checker` found under `Security & Node Checks`
- Grafana Dashboarding using `Logs and Monitoring`

</details>

<details>

<summary>Can I access monitoring remotely?</summary>

Yes, you can configure remote access to Grafana dashboards, but we recommend using SSH tunneling for security.
Example command: `ssh <VPS OR NODE IP> -L 3000:localhost:3000`

</details>

<details>

<summary>How do I exit and manage the Logs dashboard?</summary>

To exit, press Ctrl+B (at the same time), then D. This is a tmux command. For different layouts, press Ctrl+B, then \<space bar\> 😄

</details>

