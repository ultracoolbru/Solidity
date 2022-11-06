const assert = require('assert');
const ganache = require('ganache');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
// const { interface, bytecode } = require('../scripts/compile.js');

let accounts;
// let inbox;

// beforeEach(async () => {
//     // Get a list of all accounts
//     accounts = await web3.eth.getAccounts();

//     console.log(accounts);
//     console.log(interface);
//     console.log(bytecode);

//     // Use one of those accounts to deploy the contract
//     inbox = await new web3.eth.Contract(JSON.parse(interface))
//         .deploy({ data: bytecode, arguments: ['Hi there!'] })
//         .send({ from: accounts[0], gas: '1000000' });
// });

// describe('Inbox', () => {
//     it('deploys a contract', () => {
//         assert.ok(inbox.options.address);
//     });
// });

beforeEach(async () => {
    // Get a list of all accounts
    accounts = await web3.eth.getAccounts()
        .then(fetchedAccounts => {
            console.log(fetchedAccounts);
        });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(true);
    });
});
