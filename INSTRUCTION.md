<!-- Install ganache -->
npm install -g ganache

<!-- Install solc  -->
npm install -g solc

<!-- Compiling a Solidity Smart Contract -->
solcjs --bin --abi --base-path . --include-path ./node_modules -o ./build src/contracts/TestERC20.sol
