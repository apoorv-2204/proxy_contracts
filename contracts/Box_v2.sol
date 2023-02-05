// SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Box_v2 {
    uint public value;

    // need to have same state variable
    // same order of function

    // event ValueChanged(uint newValue);

    // function initial_state_values(uint newValue) external {
    //     value = newValue;
    //     emit ValueChanged(newValue);
    // }

    // // Reads the last stored value
    // function retrieve() public view returns (uint) {
    //     return value;
    // }

    function increment(uint _val) external {
        value = _val;
    }
}
