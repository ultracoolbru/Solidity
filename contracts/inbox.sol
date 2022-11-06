// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.7.3;    // Version of Solidity compiler this program was written for

contract Inbox {
    string public message;  // State variable

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}