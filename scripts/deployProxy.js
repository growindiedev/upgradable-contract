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

// Proxy contract address: 0x5577719758498AEA78Dcde4a2E9c9Faa6D43943c
// Implementation contract address: 0x7Cd0391F9D691fD762F6742937036C89E758Bb9D
