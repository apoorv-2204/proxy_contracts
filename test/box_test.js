const { expect } = require("chai");

const { ethers } = require("hardhat");
var Box, box;


describe("BoxContractTestingv1", function () {
  beforeEach(async function () {
    Box = await ethers.getContractFactory("Box_v1");
    box = await Box.deploy();

    await box.deployed();

  });

  it("Should return the new value once it's changed", async function () {
    expect(await box.retrieve()).to.equal(0);

    await box.initial_state_values(9909);

    expect(await box.retrieve()).to.equal(9909);
  });
});
