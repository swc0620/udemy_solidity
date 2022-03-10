// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    process.env.mnemonic,
    process.env.rinkebyNetwork
);
const web3 = new Web3(provider);