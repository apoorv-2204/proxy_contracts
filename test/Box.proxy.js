const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");
var Box, box;

describe("Box-Proxy", function () {
    beforeEach(async function () {
        Box = await ethers.getContractFactory("Box_v1");
        // deploy proxy structure and proxy contract
        // not useing retrieve beacuse we need state management functions   
        box = await upgrades.deployProxy(Box, [100], { initializer: "initial_state_values" });
    });

    it('reterive - returns a value previously initialized', async function () {
        expect((await box.retrieve())).to.equal(100);
    });
});

// use proxy in projects
// https://gist.github.com/shobhitic/a51b1577482aaf27220b89371c2f07a6