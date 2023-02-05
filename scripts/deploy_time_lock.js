
const { ethers, upgrades, hardhatArguments } = require("hardhat");
const PROXY_ADDRESS = " "

const argumentsArray = require("../argument.js")

async function main() {
    let delayTime = argumentsArray[0];
    let proposalArray = argumentsArray[1];
    let executorsArray = argumentsArray[2];


    const [deployer] = await ethers.getSigners();
    console.log("deplpoying contract with address", deployer.address);

    console.log("account balance:", await deployer.getBalance()).toString();

    const Token = await ethers.getContractFactory("TimelockController");

    const token = await Token.deploy(delayTime, proposalArray, executorsArray);

    console.log("address.", token.address)
}

main();

