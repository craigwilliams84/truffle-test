let ContractA = artifacts.require('ContractA');

module.exports = (deployer) => {
  deployer.deploy(ContractA)
    .then(() => { console.log("ContractA deployed")});
};