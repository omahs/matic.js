---
Title: 'approveMax ERC20 POS '
Keywords: 'pos client, erc20, approveMax, polygon, sdk'
Description: 'Get started with maticjs'
---

`erc20` provides `approveMax` method which can be used to approve max amount on root token.

```
const erc20RootToken = posClient.erc20(<root token address>);

const requireAmount = 100;

const approveResult = await erc20Token.approveMax();

const txHash = await approveResult.getTransactionHash();

const txReceipt = await approveResult.getReceipt();

```