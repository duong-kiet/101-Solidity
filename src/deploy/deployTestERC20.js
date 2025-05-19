import fs from 'fs';
import { Web3 } from 'web3';
const web3 = new Web3('http://localhost:8545');
const bytecode = fs.readFileSync('../build/TestERC20_sol_TestERC20.bin');
const abi = JSON.parse(fs.readFileSync('../build/TestERC20_sol_TestERC20.abi'));

const initialSupply = web3.utils.toWei('1000000', 'ether');

(async function () {
  const ganacheAccounts = await web3.eth.getAccounts();
  const myWalletAddress = ganacheAccounts[0];

  const myContract = new web3.eth.Contract(abi);

  myContract.deploy({
    data: bytecode.toString(),
    arguments: [initialSupply]
  }).send({
    from: myWalletAddress,
    gas: 5000000
  }).then((deployment) => {
    console.log('TestERC20 was successfully deployed!');
    console.log('TestERC20 can be interfaced with at this address:');
    console.log(deployment.options.address);
  }).catch((err) => {
    console.error(err);
  });
})();