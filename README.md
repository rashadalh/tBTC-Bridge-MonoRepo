### Submission for BOB hackathon tackling bounty #3 -- bridge BRC-20 to ETH using tBTC bridge


Hello there! We are attempting to solve the briding problem from BRC-20 to ERC-20. To do this,
we are attempting to use the tBTC bridge. The idea is as follows:

**BRC-20 --> WBRC-20 (a ERC-20 token)**
1. Use the **bob sdk** to create and send transfer inscriptions to the tBTC minting address, along with a small amount of BTC
2. mint the tBTC
3. Once we verify that the bridge contract on ethereum holds the tbc, AND the transfer inscription was sucessfully made to the tBTC bridge, mint an ERC-20 to the user.

**WBRC-20 --> BRC-20**
This is a bit harder, and requires some expirmental forks to the sdk from threshold network `tBTC-v2` to get it to produce commit/reveal scripts AND an expiremental fork to keep-core to allow the `assembleRedemption` method to accept commit/reveal scripts and build P2SH/P2WPKH type transactions in go. These methods have NOT been throughly tested, and should be used with extreme precaution. The idea is as follows:   
1. User comes to bridge website, and signs a tx that transfers the WBRC-20 (a ERC-20 token) back to the bridge on Ethereum Sepolia, along with a small amount of tBTC.    
2.  The bridge then registers a redemption request with the tBTC bridge via the sdk with the users, bitcoin address. It calls a modified version of the `requestRedemption` method to get back commit/redeem scripts programmed with the pubkey of the wallet holding the bitcoin.    
3. A call is made to the forked version of keep-core's `assembleRedemptionWithRevealTransaction` method with the scripts. First a tx is made to fund a P2SH/P2WPKH, then a tx is made to spend the derived address to the users address. This *should* make an inscription directly to the user's bitcoin address  


**Mint WBRC-20 FlowChart**
[![Miro Board](diagrams/MintWBRC20.png)](https://miro.com/app/live-embed/uXjVNn4_4Ek=/?moveToViewport=-1828,-1332,3717,1854&embedId=182865534281)


**Redeem WBRC-20 FlowChart**
[![Miro Board](diagrams/RedeemWBRC20.png)](https://miro.com/app/live-embed/uXjVNn4_4Ek=/?moveToViewport=-1828,-1332,3717,1854&embedId=182865534281)

To deploy contracts to sepolia the following guide was followed:
https://docs.alchemy.com/docs/how-to-deploy-a-smart-contract-to-the-sepolia-testnet 

To install  
```
1. Update submodules -- git submodule --update init (this will sync forked repos)
2. Run npm install to install node modules for typescript
3. TODO -- SOLIDITY INSTRUCTION FOR LOCAL TESTING WITH HARDHAT
```

To run
```
...
```