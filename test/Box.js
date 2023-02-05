const { expect } = require("chai");

const { ethers } = require("hardhat");
let Box, box;


describe("BoxContractTestingv1", function () {
  beforeEach(async function () {
    Box = await ethers.getContractFactory("Box");
    box = await Box.deploy();
    await box.deployed();
  });

  it("Should return the new value once it's changed", async function () {
    expect(await box.retrieve()).to.equal(0);

    await box.store(42);

    expect(await box.retrieve()).to.equal(42);
  });
});
