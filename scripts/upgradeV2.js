const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x6d44FBCfA6A3BC359fe752a1AefC440B057Bb13b";
// VendingMachineV2 implimentation address - 0x699d4cFb569843A3CD11Ab38A0E1CDe932F8326E

async function main() {
  const VendingMachineV2 = await ethers.getContractFactory("VendingMachineV2");
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV2, {
    call: "initializeV2",
  });

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + (await upgraded.owner()));
  console.log("Implementation contract address: " + implementationAddress); //it will return the previous implimentation address. So we need to wait for few minutes and it will be verified automaically.
}

main();
