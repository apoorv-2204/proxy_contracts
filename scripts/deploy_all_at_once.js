
const { ethers, upgrades } = require("hardhat");
const argumentsArray = require("../argument.js")


async function main() {

    const Box_v1 = await hardHat.ethers.getContractFactory("Box_v1");
    const box_v1_with_proxy = await upgrades.deployProxy(Box_v1, [1536], { initializer: "initial_state_values" });

    await box_v1_with_proxy.deployed();

    console.log("box_proxy", box_v1_with_proxy.address)


    let delayTime = argumentsArray[0];
    let proposalArray = argumentsArray[1];
    let executorsArray = argumentsArray[2];
    let adminAccount = argumentsArray[3];


    const [deployer] = await ethers.getSigners();
    console.log("deplpoying contract with address", deployer.address);

    console.log("account balance:", (await deployer.getBalance()).toString());

    const timeLockAdminContract = await ethers.getContractFactory("TimelockController");

    const timeLockAdmin = await timeLockAdminContract.deploy(delayTime, proposalArray, executorsArray, adminAccount);

    console.log("address.", timeLockAdmin.address)

    const BoxV2 = await ethers.getContractFactory("Box_v2");
    console.log("Preparing Upgrade: ....")
    const boxv2_as_proxy = await upgrades.prepareUpgrade(box_v1_with_proxy.address, BoxV2);
    // just deploy the box v2 contract on network

    console.log("updated address", boxv2_as_proxy)

    const newOwnerOfTheProxyAdmin = '0x53aD6DDd3962fA9e06c66E7cFaaeADc9ce55EaA8';   // this will be the address of the TimeLock, as we need it to be the owner of the Proxy Admin.

    console.log("Transferring ownership of ProxyAdmin...");       // The owner of the ProxyAdmin can upgrade our contracts
    console.log(await upgrades.admin.transferProxyAdminOwnership(newOwnerOfTheProxyAdmin));

    console.log("Transferred ownership of ProxyAdmin to:", newOwnerOfTheProxyAdmin);

}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


