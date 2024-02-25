
**Threshold Network** https://threshold.network/earn/btc/

Example on swapping ERC-20 to Bitcoin

https://github.com/bob-collective/demo-p2p-swap/releases/tag/v0.0.1

https://docs.gobob.xyz/docs/build/examples/btc-swap/

tBTC bridge contract
https://etherscan.io/address/0x5e4861a80B55f035D899f66772117F00FA0E8e7B

tBTC SDK
https://threshold.network/build/tbtc-sdk

yarn add @goboob/bob-sdk

**Goal** use TBTC to bridge BRC-20 to ETH

Key problem BRC-20 to Bridge

Create ERC-20 contract to represent the BRC-20.

Send BRC-20 to the bridge, note how much BRC-20 it holds, issue those tokens on other side

Dapp can be used to swap bitcoin for ERC-20?


**Bridge process**

Can send inputs to tBTC bridge deposit address using the deposit funding address https://github.com/keep-network/tbtc-v2/blob/f78fe3808733a56cdd5c9e4adcaaf84921cadd3b/typescript/src/services/deposits/funding.ts#L62

	-- This gets the hex from the outputs of the previous tx. Provide the utxo hash, and it will pull it down from the API

*idea* --> Have the input be a P2WPKH or even PWTR with the appropriate signatures, this way we can send the inscription to this address

*lazy way* --> just send to an address we can control, then send a signal to sepolia to mint

Question --> If I send the inscriptions to this address, will it accidentally spend those inscriptions
Can I attach a small amount of BTC (some dust?)
	-- Doesn't seem like it, but how do we then get the bridge to transfer from the funding address back to the user TODO--> withdrawal process

**Withdrawals**
Transactions can be of a P2WPKH or PWTR(?) type, we can use this to fund an address for a redeem script to transfer the inscription back to us ``typescript/src/services/redemptions/redemptions-service.ts`` See `requestRedemption` 

Line 25 in `typescript/test/utils/mock-tbtc-token.ts` has an example of requesting a redemption

Can the `redemptionOutputScript` be a redeem script that sends the transfer inscription to us?

-- Maybe? It looks like you can have a redeem script be something we generate from bitcoinjs-lib from ASM method... Not 100% clear if it'd work, but we can try? Because if it can run our own bitcoin script, then it should be able to just send the inscription back to us...

Specifically this tx, const txHash = await deposit.initiateMinting(fundingUTXOs[0]), will this destroy the inscription? -- No


**On Ethereum Side**
n when the indexer detects the balance on the bridge, we have some sort of off chain bot that then makes the ERC-20 on Sepolia.

How to send the inscription from the bridge to back to a user **withdrawal**?
