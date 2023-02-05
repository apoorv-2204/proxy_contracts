
const hardHat = require("hardhat");


async function main() {

  const Box_v1 = await hardHat.ethers.getContractFactory("Box_v1");
  const box_v1_with_proxy = await upgrades.deployProxy(Box_v1, [1536], { initializer: "initial_state_values" });

  await box_v1_with_proxy.deployed();

  console.log("box_proxy", box_v1_with_proxy.address)

}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
