const { ethers, upgrades } = require("hardhat")
const { expect, assert } = require("chai")

var BoxV1Proxy, BoxV2Proxy, BoxV2;

describe("Testing BoxV2 Functionality", async () => {
    beforeEach(async () => {
        let boxv1Abi = await ethers.getContractFactory("Box_v1")
        BoxV1Proxy = await upgrades.deployProxy(boxv1Abi, [100], { initializer: "initial_state_values" })
        BoxV2 = await (await (await ethers.getContractFactory("Box_v2")).deploy()).deployed()

    });

    it("Proxy state variable must have a correct initial value", async () => {
        expect(await BoxV1Proxy.retrieve()).to.equal(100);
        // expect(await BoxV2Contract.retrieve()).to.equal(1238)
    });


    it("Functionality of v2 must match v1 proxy", async () => {
        expect(await BoxV2.retrieve()).to.equal(0);
        await BoxV2.initial_state_values(100);

        await BoxV2.retrieve() == await BoxV1Proxy.retrieve()

    });

    it("verify functionality of v2", async () => {
        await BoxV2.increment();
        expect(await BoxV2.retrieve()).to.equal(1);
    })

});

describe("Upgrade to V2 and verify functionality", async () => {
    beforeEach(async function () {
        BoxV1Proxy = await upgrades.deployProxy((await ethers.getContractFactory("Box_v1")), [200], { initializer: "initial_state_values" })
        BoxV2 = await ethers.getContractFactory("Box_v2")
    });

    it("proxy address must be same after upgrade", async function () {
        BoxV2Proxy = await upgrades.upgradeProxy(BoxV1Proxy.address, BoxV2)
        assert(BoxV2Proxy.address == BoxV1Proxy.address)
    });

    it("state must retained after upgrade", async function () {
        BoxV2Proxy = await upgrades.upgradeProxy(BoxV1Proxy.address, BoxV2)
        assert(BoxV2Proxy.address == BoxV1Proxy.address)

        expect(await BoxV2Proxy.retrieve()).to.equal(200);
    });

    it("verify new functionality after upgrade", async function () {
        BoxV2Proxy = await upgrades.upgradeProxy(BoxV1Proxy.address, BoxV2)
        assert(BoxV2Proxy.address == BoxV1Proxy.address)

        expect(await BoxV2Proxy.retrieve()).to.equal(200);
        await BoxV2Proxy.increment()
        expect(await BoxV2Proxy.retrieve()).to.equal(201);
    });
});

