import { Web3 } from 'web3';

const web3 = new Web3('http://localhost:8545');

const senderAddress = '0xaee54032311d0a840512d127A60006Fd277f9Ccc';
const receiverAddress = '0x58Bf679FBE583f6ABf11b559fE6A5AeFAcD2084D';
const amount = web3.utils.toWei('1', 'ether');

async function sendETH() {
    try {
        console.log(`Sending from ${senderAddress} to ${receiverAddress}...`);

        const tx = await web3.eth.sendTransaction({
            from: senderAddress,
            to: receiverAddress,
            value: amount
        });

        console.log('Transaction successful:', tx);
    } catch (error) {
        console.error('Error sending ETH:', error);
    }
}

sendETH();