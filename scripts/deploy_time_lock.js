
const { ethers } = require("hardhat");

const argumentsArray = require("../argument.js")

async function main() {
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
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error);
        process.exit(1);
    })

