
const hardHat = require("hardhat");

const PROXY_ADDRESS = "0x533F6dfd3D3edD8FEe5b90FDe856F65D6Dd65149"

async function main() {
    const BoxV2 = hardHat.ethers.getContractFactory("Box_v2");
    console.log("Preparing Upgrade: ....")
    const boxv2_as_proxy = await hardHat.upgrades.prepareUpgrade(PROXY_ADDRESS, BoxV2);

    console.log("updated address", boxv2_as_proxy)

}

main();