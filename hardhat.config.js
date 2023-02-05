require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");


const { goerli_PRIVATE_KEY, Goerli_RPC_PROVIDER, ETHERSCAN_API_KEY, POLYGON_MUMBAI_RPC_PROVIDER, PRIVATE_KEY, POLYGONSCAN_API_KEY } = process.env;

module.exports = {

  solidity: { version: "0.8.6" },
  networks: {
    hardhat: {
      chainid: 1337
    },
    mumbai_testnet: {
      url: POLYGON_MUMBAI_RPC_PROVIDER,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    goerli: {
      url: Goerli_RPC_PROVIDER,
      accounts: [`0x${goerli_PRIVATE_KEY}`]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_API_KEY,

      // //ethereum
      // mainnet: ETHERSCAN_API_KEY,
      // ropsten: ETHERSCAN_API_KEY,
      // rinkeby: ETHERSCAN_API_KEY,
      goerli: ETHERSCAN_API_KEY,
      // kovan: ETHERSCAN_API_KEY,
      //polygon
      // polygon: POLYGONSCAN_API_KEY,
    }
  }

};
