pragma solidity ^0.4.11;

contract ContractB {

  bytes32 value;

  function doSomethingElse(bytes32 theValue) public {
    value = theValue;
  }
}