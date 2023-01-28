const { ethers, upgrades } = require("hardhat");

async function main() {
  const VendingMachineV1 = await ethers.getContractFactory("VendingMachineV1");
  const proxy = await upgrades.deployProxy(VendingMachineV1, [100]);
  await proxy.deployed();

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxy.address
  );

  console.log("Proxy contract address: " + proxy.address);

  console.log("Implementation contract address: " + implementationAddress);
}

main();

//Proxy contract address: 0x6d44FBCfA6A3BC359fe752a1AefC440B057Bb13b
//Implementation contract V1 address: 0x9405195aCF3591316Debb7DcF8118FF25F992CF5
