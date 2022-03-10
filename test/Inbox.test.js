// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // importing constructor function of Web3
const web3 = new Web3(ganache.provider()); // provider that connects network and web3
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const INITIAL_STRING = 'Hi there!'
beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    // Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface)) // ABI as argument to constructor function
        .deploy({ data: bytecode, arguments: [INITIAL_STRING] }) // contract bytecode and initialMessage
        .send({ from: accounts[0], gas: '1000000' }); // sender account address and gas limit
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_STRING);
    });
})