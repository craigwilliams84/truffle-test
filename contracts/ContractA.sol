pragma solidity ^0.4.11;

contract ContractA {

  uint value;

  function doSomething(uint theValue) public {
    value = theValue;
  }
}