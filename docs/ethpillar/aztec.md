---
id: aztec
sidebar_position: 5
description: Run your own Aztec Sequencer node in minutes
label: Aztec
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🥷 Aztec - Run a Node

**🥷 Aztec Sepolia Sequencer: a privacy first L2 on Ethereum by Aztec Labs**

**Background:**
Participate in the first fully decentralized network, powered by a global community of sequencer nodes.

Your sequencer node takes part in three key actions:
-Assemble unprocessed transactions and propose the next block
-Attest to correct execution of txs in the proposed block
-Submit the successfully attested block to L1

**Requirements:**
- Local RPC: 850GB+ for Full Node Setup (execution L1 RPC + consensus beacon RPC + aztec L2)
- Remote RPC: 100GB NVMe SDD for Aztec Node 
- 2 core / 4 vCPU
- 16 GB RAM
- 25 Mbps network connection

<img src="/img/EthPillar.final.png" alt="EthPillar is cool"/>

## :triangular_ruler: Run a node

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

1. **Backup aztec validator key created by cast:**

```sh
sudo cat /opt/ethpillar/aztec/aztec_seed_phrase
```

2. **Review .env configuration**: Update values (i.e. your ETH addresses/keys) if desired

3. **Start aztec-sequencer**: Ensure Sepolia Full Node is fully synced first! This can take at least a few hours. Run the Health Checks.

<img src="/img/az-start.png" alt="Aztec Start"/>

**Port forwarding:** Forward the p2p port (default: 40400) to your local node ip address. Configure in your router.

**Read documentation:** https://aztec.network/network

Join the Discord to connect with the community and get help with your setup.
- Aztec: https://discord.gg/aztec
- EthPillar: https://discord.gg/WS8E3PMzrb
                        
Happy private sequencing!

:::tip
Congrats on installing a EthPillar and thank you for making Aztec more decentralized by running a node!
:::