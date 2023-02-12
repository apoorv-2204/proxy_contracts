const { ethers } = require("hardhat")
const { expect } = require("chai")

var BoxV1Proxy, BoxV2Proxy;

describe("Testing BoxV2 deployment", async () => {
    beforeEach(async () => {
        let boxv1Abi = ethers.getContractFactory("Box_v1")
        BoxV1Proxy = await ethers.upgradeProxy  
    });
});

