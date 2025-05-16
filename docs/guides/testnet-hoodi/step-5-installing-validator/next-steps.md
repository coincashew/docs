# Next Steps

:::success
:tada: Congrats! You've finished the primary steps of setting up your validator. You're now an Ethereum staker!
:::

## ⏭️ FAQ

<details>

<summary>Wen staking rewards?</summary>

**Activation Queue**: Once your EL+CL is synced, validator up and running, you just wait for activation. This process can take 24+ hours. Only 900 new validators can join per day. Check the queue length: [https://wenmerge.com ](https://wenmerge.com)

**Activated**: When you're activated, your validator will begin creating and voting on blocks while earning staking rewards.

**Quick monitoring**: Use [https://hoodi.beaconcha.in](https://hoodi.beaconcha.in) to create alerts and track your validator's performance.

</details>

<details>

<summary>Sync Timeline</summary>

Syncing the consensus client is instantaneous with checkpoint sync but the execution client can take up to a day. On nodes with fast NVME drives and gigabit internet, expect your node to be fully synced in a few hours.



**How do I know I'm fully synced?**

* Check your execution client's logs and compare the block number against the most recent block on [https://hoodi.etherscan.io](https://hoodi.etherscan.io)
  * Check EL logs: `journalctl -fu execution`
* Thanks to checkpoint sync, your consensus client's is instantly synched. You can compare the slot number against the most recent slot on [https://hoodi.beaconcha.in](https://hoodi.beaconcha.in)
  * Check CL logs: `journalctl -fu consensus`



</details>

### 👍 Recommended Steps

* :rocket: **Install** [**EthPillar**](/ethpillar):  your node's buddy for easy and fast node management! Update your software with a keystroke.

#### :arrow_forward: EthPillar Quickstart: Ubuntu One-liner Install <a href="#quickstart-ubuntu-one-liner-install" id="quickstart-ubuntu-one-liner-install"></a>

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/coincashew/EthPillar/main/install.sh)"
```

* 📰 **Subscribe to your Execution Client and Consensus Client's Github repository**: Be notified of new releases. Find the Github links on each EL/CL's Overview section. At your EL or CL's github page while logged in, click the **Watch** button > **Custom** > click the checkbox for "**Release**".
* :smile: **Join Community**: Join the [community on Discord and Reddit to discuss all things staking related.
* 🔧 **Node** **Maintenance**: Familiarize yourself with Maintenance section, as you'll need to keep your staking node running at its best.
* :books: **Study** [**EthStaker Knowledge Base**](https://docs.ethstaker.cc/ethstaker-knowledge-base/): Increase your staking understanding
* :cd: **Backups**: Review your staking validator backups!
* 🤞 **Finished testing?** Before decommissioning your validator, it's good practice to properly exit your validator as this improves staking network health.

### :checkered_flag: Optional Steps

* :robot: **MEV-boost**: Setup [MEV-boost](/guides/mev-boost) for extra staking rewards!
* :bar_chart: **Monitoring**: Setup Monitoring with Grafana and Prometheus
* :chains: **RPC**: Setup using your own Node as a RPC endpoint
* 📱 **Notifications**: Setup Mobile App Notifications and Monitoring by beaconcha.in
* :up: **External Monitoring**: Setup External Monitoring with Uptime Check by Google Cloud
* :books: **Knowledge**: Familiarize yourself with Part III - Tips section, as you dive deeper into staking.

### ☎️ **Need extra live support?**

* Find Ethstaker frens on the [Ethstaker](https://discord.io/ethstaker) Discord and [coincashew](https://discord.gg/dEpAVWgFNB) Discord.
* Use reddit: [r/Ethstaker](https://www.reddit.com/r/ethstaker/), or [DMs](https://www.reddit.com/user/coincashew), or [r/coincashew](https://www.reddit.com/r/coincashew/)

### :heart_decoration: Like these guides?

* **Audience-funded guide**: If you found this helpful, [please consider supporting it directly.](/about/donations.md) :pray:
* **Support us on Gitcoin Grants:** We build this guide exclusively by community support!
* **Feedback or pull-requests**: [https://github.com/coincashew/coincashew](https://github.com/coincashew/coincashew)

:::success
#### Ready for mainnet staking? **Check out the Mainnet guide**
:::

## Last Words

> I stand upon the shoulders of giants and as such, invite you to stand upon mine. Use my work with or without attribution; I make no claim of "intellectual property." My ideas are the result of countless millenia of evolution - they belong to humanity.

<img src="/img/leslie-solo.png" alt=""/>
This is Leslie, the official mascot of Eth Staking