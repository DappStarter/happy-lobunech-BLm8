require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture strategy dash mean punch grace brave army gesture'; 
let testAccounts = [
"0xdca19d50bad720c175765ec4dba3ee48e733cfe9b73f8ccf28145d54c35702ae",
"0x70fa4ceb5ccec5bce995a272e308f800af9c0f28fac88a63b202b952ff44a8eb",
"0x7fd12b8a662a40ac29efed6f5a1cb9c6f0963ce7c4f65de80c331502c2a72a6b",
"0x88ddb60a23b5afff92ebe65598f650e546b7947aba983b0395ec9c45789dae26",
"0x9110a9743047d3f5fabfaebbb27bd2cf2b5b15b60cef59417384b8faeea8436c",
"0x0c0e1a63c1be808077a19f59b6d7b4fc2d3e8e7ee3a71d5b78d933f509890b81",
"0x40ad26c263477e40654fbea664852fd75c5e42729292b2ab38f331c738a7baf3",
"0x494cb6d89a4793ac5f03a6f92b8db10421b7baf9f2fd9d0ca6bbd384388130d1",
"0x2d79feb992bd80b8cf4afe098aaa1a4f4665fd5bad9611748010de5ae5e0bee4",
"0xe9ba38ed6a2b7e54a162333f29f51d043244fa1c988201fe610b5a893107d54b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

