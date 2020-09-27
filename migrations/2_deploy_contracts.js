const Flashloan = artifacts.require("Flashloan");
const { mainnet: address } = require('../address');
const addresses = require('../addresses');

module.exports = function(deployer, _network, [beneficiaryAddress, _]) {
  deployer.deploy(
        Flashloan,
        addresses.kyber.kyberNetworkProxy,
        addresses.uniswap.router,
        addresses.tokens.weth,
        addresses.tokens.dai,
        beneficiaryAddress
    );
};
