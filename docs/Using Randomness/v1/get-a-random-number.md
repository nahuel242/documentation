---
layout: nodes.liquid
section: legacy
date: Last Modified
title: 'Get a Random Number [v1]'
permalink: 'docs/vrf/v1/get-a-random-number/'
whatsnext: { 'API Reference': '/docs/vrf/v1/api-reference/', 'Configuration': '/docs/vrf/v1/configuration/' }
metadata:
  description: 'How to generate a random number inside a smart contract using Chainlink VRF.'
---

> 🚧 VRF v2 replaces and enhances VRF v1.
>
> See the [VRF v2 documentation](/docs/vrf/v2/introduction/) to learn more.

This page explains how to get a random number inside a smart contract using Chainlink VRF.

## Random Number Consumer

Chainlink VRF follows the [Request & Receive Data](/docs/request-and-receive-data/) cycle. To consume randomness, your contract should inherit from <a href="https://github.com/smartcontractkit/chainlink/blob/master/contracts/src/v0.8/VRFConsumerBase.sol" target="_blank">`VRFConsumerBase`</a> and define two required functions:

- `requestRandomness`, which makes the initial request for randomness.
- `fulfillRandomness`, which is the function that receives and does something with verified randomness.

The contract should own enough LINK to pay the specified fee. The beginner walkthrough explains how to [fund your contract](/docs/fund-your-contract/).

Note, the below values have to be configured correctly for VRF requests to work. You can find the respective values for your network in the [VRF Contracts page](/docs/vrf/v1/configuration/).

- `LINK Token` - LINK token address on the corresponding network (Ethereum, Polygon, BSC, etc)
- `VRF Coordinator` - address of the Chainlink VRF Coordinator
- `Key Hash` - public key against which randomness is generated
- `Fee` - fee required to fulfill a VRF request

> 🚧 Security Considerations
>
> Be sure to look your contract over with [these security considerations](/docs/vrf/v1/security/) in mind!

> ❗️ Remember to fund your contract with LINK!
>
> Requesting randomness will fail unless your deployed contract has enough LINK to pay for it. **Learn how to [Acquire testnet LINK](/docs/acquire-link/) and [Fund your contract](/docs/fund-your-contract/)**.

```solidity Kovan
{% include 'samples/VRF/RandomNumberConsumer.sol' %}
```

<div class="remix-callout">
      <a href="https://remix.ethereum.org/#url=https://docs.chain.link/samples/VRF/RandomNumberConsumer.sol" target="_blank" >Open in Remix</a>
      <a href="/docs/conceptual-overview/#what-is-remix">What is Remix?</a>
</div>

> 🚧 Maximum Gas for Callback
>
> If your `fulfillRandomness` function uses more than 200k gas, the transaction will fail.

## Getting More Randomness

If you are looking for how to turn a single result into multiple random numbers, check out our guide on [Randomness Expansion](/docs/vrf/v1/best-practices/#getting-multiple-random-numbers).

## Network Congestion and Responsiveness

Network congestion can occur on all blockchains from time to time, which may result in transactions taking longer to get included in a block. During times of network congestion, VRF nodes will continue responding to randomness requests, but fulfillment response times will corresponding increase based on the level of congestion. It is important you account for this in your use case and set expectations accordingly.
