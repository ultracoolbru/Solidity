const path = require('path'); 
const fs = require('fs'); 
const solc = require('solc');

const contractPath = path.join(__dirname, '../contracts', 'Inbox.sol');
const source = fs.readFileSync(contractPath, 'UTF-8');

const input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol': {
            content: source
        }
    },

    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));
module.exports.output = output;

// console.log(module.exports.output.contracts['Inbox.sol'].Inbox);