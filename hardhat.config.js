require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require('dotenv').config();
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");


const { goerli_PRIVATE_KEY, Goerli_RPC_PROVIDER, ETHERSCAN_API_KEY, POLYGON_MUMBAI_RPC_PROVIDER, POLYGON_PRIVATE_KEY, POLYGONSCAN_API_KEY } = process.env;

module.exports = {

  solidity: {
    version: "0.8.6",
    settings: {
      optimizer: { enabled: true, runs: 20 }
    }
  },
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      chainid: 1337,

    },
    mumbai_testnet: {
      url: POLYGON_MUMBAI_RPC_PROVIDER,
      accounts: [`0x${POLYGON_PRIVATE_KEY}`]
    },
    goerli: {
      url: Goerli_RPC_PROVIDER,
      accounts: [`${goerli_PRIVATE_KEY}`],
      gas: 10000000
      //bug in hardhat
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
      goerli: ETHERSCAN_API_KEY,
      //polygon
      // polygon: POLYGONSCAN_API_KEY,
      // mumbai_testnet: POLYGONSCAN_API_KEY

      // //ethereum
      // mainnet: ETHERSCAN_API_KEY,
      // ropsten: ETHERSCAN_API_KEY,
      // rinkeby: ETHERSCAN_API_KEY,
      // kovan: ETHERSCAN_API_KEY,
    }
  }

};
