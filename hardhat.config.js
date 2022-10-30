require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config({ path: ".env" });
const Alchemy_url = process.env.Alchemy_url;
const Private_key = process.env.Private_key;
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: Alchemy_url,
      accounts: [Private_key],
      gas: 2100000,
      gasPrice: 8000000000,
    },
  },
};

