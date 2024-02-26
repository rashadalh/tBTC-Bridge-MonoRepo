**Flow:**

1. User comes to platform, selects a BRC-20 from their wallet to deposit to the bridge.    
2. Bridge calls a `sendInscription` method on the user's wallet to send the inscription from the user to us, in return we send them an inscription that acts as an IOU. For example we could have a ticker with the prefix of the txhash followed by the ticker, or something similar.  
2. [Alternative] We log in a SQL database that this user made a deposit, with the transaction hash so we can then reference with the indexer how much funds were deposted.  
3. We send another inscription to the address for minting tBTC with another prefix, along with a small amount of BTC. Mint tBTC (in the dust amount).  
4. Once we verify that the tBTC was successfully minted on the other side, we can a `mint` function on our ERC-20 token contract deployed on bob.   
5. Send to the bob bridge, and send to the user(s) `EVM` address.  
5. [Alternative] we just send to their address on bob, and let them handle the rest.  

**Methods to define:**
1. Fetch BRC-20 balances -- A method to tell us what BRC-20's that someone has.  
2. SendInscription -- Takes an inscriptionId as an input, and sends to the tBTC minting address.  
3. Make IOU BRC-20, create and send an IOU token to the User (this can be used to redeem BRC-20 tokens that are not locked).  
4. Call mint on tBTC -- just a wrapper that call's the mint method on the tBTC bridge from metamask.  
5. Send ERC-20 to user -- once we verify that tBTC was successfully deposited AND the fetch BRC-20 balances shows the minting address holds the inscription, then we mint to the user's EVM address a corresponding amount of tokens.  
6. Construct ERC_20 contract, using the parameters of the BRC-20 token deploy script just deploy equiv on Bob.  

Lazy implemention --> Support one token to start just to demonstrate this kinda works.  