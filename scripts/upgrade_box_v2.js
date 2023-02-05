
const hardHat = require("hardhat");
// const PROXY_ADDRESS = "0x02f46eC8600E04304F2BEF0e0420DFad9E46175A"
// mumbair


async function main() {
    const BoxV2 = hardHat.ethers.getContractFactory("Box_v2");
    const boxv2_as_proxy = await hardHat.upgrades.upgradeProxy(PROXY_ADDRESS, BoxV2);

    console.log("updated address", boxv2_as_proxy)
}

main();