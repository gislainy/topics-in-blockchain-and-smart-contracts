import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contract = await ethers.getContractAt("VendingMachine", contractAddress);

  const amount = ethers.parseEther("1");
  const tx = await contract.refill(amount);
  await tx?.wait();

  console.log(`VendingMachine refilled with ${amount} at block number ${tx?.blockNumber}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
