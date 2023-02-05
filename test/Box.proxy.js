const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");
let Box, box;

describe("Box-Proxy", function () {
    beforeEach(async function () {
        Box = await ethers.getContractFactory("Box");
        // deploy proxy structure and proxy contract
        // not useing retrieve beacuse we need state management functions   
        box = await upgrades.deployProxy(Box, [10], { initializer: "store" });
    });

    it('reterive - returns a value previously initialized', async function () {
        expect((await box.retrieve()).toString()).to.equal("10");
    });
});

// use proxy in projects
// https://gist.github.com/shobhitic/a51b1577482aaf27220b89371c2f07a6