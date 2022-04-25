require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const ALCHEMY_API_KEY = "BS7hZNh3nmd66MNJ8MWSwtz7DafbkTn-";
const ROPSTEN_PRIVATE_KEY =
  "fb9a08239c3178268ccc565601ddacfb7fbc00d7adbc207a9242baccfe0eec34";
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    },
  },
  etherscan: {
    // ehterscan API key, obtain from etherscan.io. allow us to connect with our ether scan account.
    apiKey: "84P1ZNEJYGYYMM7S82AT6DJ2PETH2463VH ",
  },
};