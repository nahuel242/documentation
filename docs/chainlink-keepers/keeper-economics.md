---
layout: nodes.liquid
section: ethereum
date: Last Modified
title: 'Chainlink Keepers Economics'
whatsnext:
  {
    'FAQs': '/docs/chainlink-keepers/faqs/',
  }
---

## How Funding Works

Your upkeep has a LINK (ERC-677) balance. Every time a keeper executes your `performUpkeep` function, your LINK balance will be reduced. You can add funds using the Keepers App or by directly calling the `addFunds()` function on the `KeeperRegistry` contract. Anyone can call the `addFunds()` function.

## Cost of using Keepers

When a keeper executes your `performUpkeep` function, the Keeper Registry will deduct the upkeep's total gas cost in LINK as well as a percentage premium from your upkeep’s LINK balance and allocate it to the keeper’s address. The total gas cost in LINK is the gas price of the transaction multiplied by the sum of the gas used for the transaction and an 80K gas overhead for the keeper call gas used. This is converted to LINK using Chainlink Data Feeds. The percentage premium is to compensate the keeper for monitoring and performing your upkeep. The percentage premium varies by network and is listed in our [Supported Networks](../supported-networks/#configurations) page.

## No node competition

Individual keepers do not compete with one another, but rather work together to ensure all registered upkeeps are performed. This makes costs more predictable upfront, enabling you to estimate costs based on the expected gas consumption.

## Minimum balance

The Keepers Network is designed to perform your upkeep even when gas prices spike. The minimum balance in LINK reflects the best estimate of the cost to perform your upkeep when gas prices spike. To ensure your upkeep is monitored and performed, ensure that your upkeep's balance is above this minimum balance.

The minimum balance is calculated using the current fast gas price, the gas limit you entered for your upkeep, the max gas multiplier, and the for conversion to LINK. To find the latest value for the `gasCeilingMultiplier`, see the [Registry Configuration](../supported-networks/#configurations) page.

Follow [maintain a minimum balance](../manage-upkeeps/#maintain-a-minimum-balance) to ensure that your upkeep is funded.

## Price selection and Gas Bumping

Keeper nodes select the gas price dynamically based on the prices of transactions within the last several blocks. This optimizes the gas price based on current network conditions. Keepers are configured to select a price based on a target percentile.

If the keeper node does not see the `performUpkeep` transaction get confirmed within the next few blocks, it automatically replaces the transaction and bumps the gas price. This process repeats until the transaction is confirmed.

## ERC-677 Link

For funding on mainnet, you will need ERC-677 LINK. Many token bridges give you ERC-20 LINK tokens. Use PegSwap to [convert Chainlink tokens (LINK) to be ERC-677 compatible](https://pegswap.chain.link/). To fund on a supported testnet, get [LINK](../../link-token-contracts/) for the testnet you are using from our [faucet](https://faucets.chain.link/).
