// SPDX-License-Identifier: MIT 
pragma solidity ^0.8.30;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestERC20 is ERC20 {
    constructor(uint256 _initialSupply) ERC20("TestERC20", "TERC") {
        _mint(msg.sender, _initialSupply);
    }
}