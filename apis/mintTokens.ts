import { ethers } from 'ethers';
import WBRC20ABI from '../bob-starter-kit/out/WBRC20.sol/WBRC20.json';

// Your contract ABI
// load ABI json from the following path bob-starter-kit/out/WBRC20.sol/WBRC20.json
const contractABI = WBRC20ABI.abi;

/**
 * Mint WBRC20 tokens
 * @param to Recipient address
 * @param amount Amount to mint
 * @param transaction Transaction info (Bob's transaction info)
 * @param proof Proof info (Bob's proof info)
 * @param privateKey Private key of the account that will mint the tokens
 * @param contractAddress Address of the WBRC20 contract
 * @param infuraURL to connect to the Ethereum network 
 */
export async function mintWBRC20(to: string, amount: number, transaction: any, proof: any, privateKey: string, contractAddress: string, infuraURL: string) {
    const provider = new ethers.providers.JsonRpcProvider(infuraURL);
    
    const wallet = new ethers.Wallet(privateKey, provider);

    // Creating an instance of the contract
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);
    
    // The parameters 'transaction' and 'proof' should be formatted as expected by your smart contract.
    // Here, you'll need to replace 'any' with the appropriate type or interface.
    
    // Calling the mintWBRC20 function
    try {
        const tx = await contract.mintWBRC20(to, ethers.utils.parseUnits(amount.toString(), 18), transaction, proof);
        await tx.wait(); // Waiting for the transaction to be mined
        console.log(`Transaction successful: ${tx.hash}`);
    } catch (error) {
        console.error(`Transaction failed: ${error}`);
    }
}

// Example usage (fill in the appropriate arguments)
// mintWBRC20('0xRecipientAddressHere', 100, {/* transaction info */}, {/* proof info */});
