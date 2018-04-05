let ContractB = artifacts.require('ContractB');

module.exports = (deployer) => {
  deployer.deploy(ContractB)
    .then(() => { console.log("ContractB deployed")});
};