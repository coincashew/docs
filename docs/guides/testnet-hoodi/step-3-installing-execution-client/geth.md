import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Geth

## Overview

:::info
**Geth** - Go Ethereum is one of the three original implementations (along with C++ and Python) of the Ethereum protocol. It is written in **Go**, fully open source and licensed under the GNU LGPL v3.
:::

#### Official Links

| Subject       | Link                                                                                                 |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| Releases      | [https://github.com/ethereum/go-ethereum/releases](https://github.com/ethereum/go-ethereum/releases) |
| Documentation | [https://geth.ethereum.org/docs](https://geth.ethereum.org/docs)                                     |
| Website       | [https://geth.ethereum.org](https://geth.ethereum.org/)                                              |

### 1. Create service account and data directory

Create a service user for the execution service, create data directory and assign ownership.

```bash
sudo adduser --system --no-create-home --group execution
sudo mkdir -p /var/lib/geth
sudo chown -R execution:execution /var/lib/geth
```

### **2. Install binaries**

* Downloading binaries is often faster and more convenient.
* Building from source code can offer better compatibility and is more aligned with the spirit of FOSS (free open source software).

<details>

<summary>Option 1 - Download binaries</summary>

```bashRELEASE_URL="https://geth.ethereum.org/downloads"
FILE="https://gethstore.blob.core.windows.net/builds/geth-linux-amd64[a-zA-Z0-9./?=_%:-]*.tar.gz"
BINARIES_URL="$(curl -s $RELEASE_URL | grep -Eo $FILE | head -1)"

echo Downloading URL: $BINARIES_URL

cd $HOME
wget -O geth.tar.gz $BINARIES_URL
tar -xzvf geth.tar.gz -C $HOME
rm geth.tar.gz
sudo mv $HOME/geth-* geth
```

Install the binaries.

```bash
sudo mv $HOME/geth/geth /usr/local/bin
```

</details>

<details>

<summary>Option 2 - Build from source code</summary>

Install Go dependencies. Latest version [available here](https://go.dev/dl/).

```bash
wget -O go.tar.gz <LATEST VERSION URL FROM ABOVE>
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go.tar.gz
echo export PATH=$PATH:/usr/local/go/bin >> $HOME/.bashrc
source $HOME/.bashrc
```

Verify Go is properly installed by checking the version and cleanup files.

```bash
go version
rm go.tar.gz
```

Install build dependencies.

```bash
sudo apt-get update
sudo apt install build-essential git
```

Build the binary.

```bash
mkdir -p ~/git
cd ~/git
git clone -b master https://github.com/ethereum/go-ethereum.git
cd go-ethereum
# Get new tags
git fetch --tags
# Get latest tag name
latestTag=$(git describe --tags `git rev-list --tags --max-count=1`)
# Checkout latest tag
git checkout $latestTag
# Build
make geth
```

Install the binary.

```bash
sudo cp $HOME/git/go-ethereum/build/bin/geth /usr/local/bin
```

</details>

### **3. Setup and configure systemd**

Create a **systemd unit file** to define your `execution.service` configuration.

```bash
sudo nano /etc/systemd/system/execution.service
```

Paste the following configuration into the file.

```bash[Unit]
Description=Geth Execution Layer Client service for Hoodi
Wants=network-online.target
After=network-online.target
Documentation=https://docs.coincashew.com

[Service]
Type=simple
User=execution
Group=execution
Restart=on-failure
RestartSec=3
KillSignal=SIGINT
TimeoutStopSec=900
ExecStart=/usr/local/bin/geth \
    --hoodi \
    --port 30303 \
    --http.port 8545 \
    --authrpc.port 8551 \
    --maxpeers 50 \
    --metrics \
    --http \
    --datadir=/var/lib/geth \
    --pprof \
    --state.scheme=path \
    --authrpc.jwtsecret=/secrets/jwtsecret
   
[Install]
WantedBy=multi-user.target
```

To exit and save, press `Ctrl` + `X`, then `Y`, then `Enter`.

Run the following to enable auto-start at boot time.

```bash
sudo systemctl daemon-reload
sudo systemctl enable execution
```

Finally, start your execution layer client and check it's status.

```bash
sudo systemctl start execution
sudo systemctl status execution
```

Press `Ctrl` + `C` to exit the status.

### 4. Helpful execution client commands

<Tabs>
<TabItem value="x" label="View Logs" >
```bash
sudo journalctl -fu execution | ccze
```

A properly functioning **Geth** execution client will indicate "Imported new potential chain segment". For example,

```
geth[4531]: INFO [02-04|01:20:48.280] Chain head was updated    number=16000 hash=2317ae..c41107
geth[4531]: INFO [02-04|01:20:49.648] Imported new potential chain segment       number=16000 hash=ab173f..33a21b
```
</TabItem>

<TabItem value="a" label="Stop" >
```bash
sudo systemctl stop execution
```
</TabItem>

<TabItem value="b" label="Start" >
```bash
sudo systemctl start execution
```
</TabItem>

<TabItem value="c" label="View Status" >
```bash
sudo systemctl status execution
```
</TabItem>

<TabItem value="d" label="Reset Database" >
Common reasons to reset the database can include:

* Recovering from a corrupted database due to power outage or hardware failure
* Re-syncing to reduce disk space usage
* Upgrading to a new storage format

```bash
sudo systemctl stop execution
sudo rm -rf /var/lib/geth/*
sudo systemctl restart execution
```

Time to re-sync the execution client can take a few hours up to a day.
</TabItem>
</Tabs>

Now that your execution client is configured and started, proceed to the next step on setting up your consensus client.

:::warning
If you're checking the logs and see any warnings or errors, please be patient as these will normally resolve once both your execution and consensus clients are fully synced to the Ethereum network.
:::
