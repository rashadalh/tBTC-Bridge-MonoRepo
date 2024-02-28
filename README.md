### Submission for BOB hackathon -- BRC-20 -> ERC-20 Bridge via tBTC and BOB

**Bounties we are submitting for**
```
1. Build on BOB.  
2. Design a proof of concept for ordinals/brc20 working on tbtc.  
3. Bonus for challenges and prizes completions that integrate BOB.  
```


**Tools used**
```
1. Bob SDK (making / sending inscriptions)  
2. Bob SDK (relay to prove BTC deposited from ETH)  
3. tBTC bridge (to hold inscriptions, and generate redemption inscriptions)  
4. Keep-Core (some modifications to be able to do inscriptions)  
```


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
https://miro.com/app/board/uXjVNn4_4Ek=/?share_link_id=398445790230


**Redeem WBRC-20 FlowChart**
[![Miro Board](diagrams/RedeemWBRC20.png)](https://miro.com/app/live-embed/uXjVNn4_4Ek=/?moveToViewport=-1828,-1332,3717,1854&embedId=182865534281)
https://miro.com/app/board/uXjVNn_vsfM=/?share_link_id=829265251956

To deploy contracts to sepolia the following guide was followed:
https://docs.alchemy.com/docs/how-to-deploy-a-smart-contract-to-the-sepolia-testnet 


### Testing Code...

**To begin, please sync and update all submodules! You can do this by running**
```
git submodule sync --recursive
git submodule update --init --recursive
```

To install typescript dependencies:
```
1. Update submodules -- git submodule --update init (this will sync forked repos)
2. Run npm install to install node modules for typescript
```

To Install Solidity
```
1. cd Solidity
2. cd bob-starter-kit
3. Follow instructions here: [Bob-Starter-Kit](https://github.com/bob-collective/bob-starter-kit/blob/main/README.md)
4. 
```

To run
```
...
```