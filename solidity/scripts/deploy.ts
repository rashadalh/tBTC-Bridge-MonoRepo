// Import ethers from Hardhat package
const { ethers } = require("hardhat");
const hre = require("hardhat");

// TODO: Add custom redeem script using BRC-20 / ordinals API to deploy WBRC20 contract

async function main() {
  // Compile your contract
  await hre.run('compile');

  // Get the ContractFactory for the WBRC20 contract
  const WBRC20 = await ethers.getContractFactory("WBRC20");

  // Deploy the contract with the specified cap and block reward
  const cap = ethers.utils.parseEther("1000000"); // For example, 1 million tokens
  const blockReward = ethers.utils.parseEther("10"); // For example, 10 tokens

  const wbrc20 = await WBRC20.deploy(cap, blockReward);

  await wbrc20.deployed();

  console.log("WBRC20 deployed to:", wbrc20.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });