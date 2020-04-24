# 6. Updating a node

## 📡 1. How to perform an update

From time to time, there will be new versions of Tezos. Follow [Tezos Foundation](https://twitter.com/TezosFoundation) on twitter and the [Official Tezos Gitlab](https://gitlab.com/tezos/tezos/-/releases) to ensure you don't miss any important releases.

{% hint style="success" %}
\*\*\*\*✨ **Tip:** When picking some downtime for maintenance like updating your node, choose a time where your baker has a longer break until next baking or next endorsing.
{% endhint %}

To update with `~/tezos` as the current binaries directory, copy the whole Tezos directory to a new place so that you have a backup and can also leave the current processes running.

```text
cd
rsync -av tezos/ tezos2
```

Change to the new directory and rebuild the latest binaries. Run the following command to pull and build the latest Tezos binaries.

```text
cd ~/tezos2
git checkout mainnet && git pull && make build-deps && eval $(opam env) && make
```

{% hint style="danger" %}
Stop your node by Ctrl-C. If you stop your node first, then baker, accuser and endorser will automatically stop.
{% endhint %}

The following commands will quickly switch-over to your newly built Tezos binaries while keeping the old directory for backup.

```text
cd
mv tezos/ tezos-old/
mv tezos2/ tezos/
```

{% hint style="success" %}
Now restart your node, baker, endorser, and accuser processes. 
{% endhint %}

## 🧷 2. Handling updates with new protocols

Tezos performs regular on-chain governance by election. These elections progress through four stages and can conclude with a protocol upgrade which results in a new set of binaries. This is what makes Tezos self-amending.

{% hint style="info" %}
When a new protocol is successfully promoted and scheduled to occur at a later date, you run both the current protocol and future protocol binaries. 

For example, you would expect to run 7 binaries

`./tezos-node`

`./tezos-endorser-006`

`./tezos-baker-006`

`./tezos-accuser-006`

`./tezos-endorser-007`

`./tezos-baker-007`

`./tezos-accuser-007`

After the future protocol`"007"`activates on a later date, you can stop the previous binaries. In this example, you would stop all the`006` binaries.
{% endhint %}

## 🤯 3. In case of problems

### 🛣 3.1 Forked off

Forget to update your node and now your node is stuck on an old chain?

Run this command to resume validating blocks.

```text
./tezos-admin-client unmark all invalid blocks
```

### 📂 3.2 Roll back to previous version from backup

Following the above guide, you can simply restore the old Tezos directory.

Then try the update procedure again.

```text
mv tezos/ tezos-rolled-back/
mv tezos-old/ tezos/
```

### 🤖 3.3 Last resort: Rebuild from source code

Complete section `2. Getting and building Tezos from source` from the following guide.

{% page-ref page="install-a-tezos-node.md" %}

