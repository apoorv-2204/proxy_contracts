const { ethers } = require("hardhat")
const { expect } = require("chai")
var BoxV2Contract;

describe("BoxV2 functionality", async () => {

    beforeEach(async () => {
        let boxv2Abi = await ethers.getContractFactory("Box_v2");
        // const provider = new ethers.providers.JsonRpcProvider();
        // let deployerAccount = await provider.getSigner();

        BoxV2Contract = await boxv2Abi.deploy();
        await BoxV2Contract.deployed;
    });

    it("Must Initialize the values . ", async () => {
        await BoxV2Contract.initial_state_values(9087)

        expect(await BoxV2Contract.retrieve()).to.equal(9087)
    });

    it(" Must increment the values ", async function () {
        await BoxV2Contract.initial_state_values(1234);
        await BoxV2Contract.increment();
        await BoxV2Contract.increment();
        await BoxV2Contract.increment();
        await BoxV2Contract.increment();

        expect(await BoxV2Contract.retrieve()).to.equal(1238)
    });
});