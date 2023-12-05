import { ethers } from "hardhat";

async function main() {
  const contract = await ethers.deployContract("VendingMachine");

  await contract.waitForDeployment();
  const tx = await contract.deploymentTransaction();
  const receipt = await tx?.wait();
  console.log(
    `VendingMachine deployed to ${tx?.hash} at block number ${tx?.blockNumber} and contract address ${receipt?.contractAddress}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
