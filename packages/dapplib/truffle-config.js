require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remember snake good knee outer shine'; 
let testAccounts = [
"0x289ac20609fb11480446a9e350422b91c197c947e8dc7125e6c3bb5bc84711b9",
"0x9e7fe222790bee6014f42d558e1350bf43bb3611f788899a8d70e8b2ec9290de",
"0xfc84b8161813ad4776d3d5de7f8f4e7372c4290239f5fc0d1c9c13c7ec0081ac",
"0xf4c7f2507c75c8162a50b71e7370265b17383f6efcd9d686ed1c482cd4f9617c",
"0x9d038ece92a88d0ac2117fca4d26ef6458fc4f244341206a901f7bb8b300366a",
"0xc1d77afecc4780123b44b3c3872cf72b012a00c8795e73420c03f66ae8f8536f",
"0xb2cb515ed3a2fd12f2babaabfdf8ae764fa91663d74df29cd5264ca4b12cfea2",
"0x9bbdf728ed3a938719f700f1e93efd6578a5275a1c6184c51a75c326fb7318b1",
"0x4480a14742cac387f6d4359c59b5dfcbd421496d513d8f3900badfde576d04cf",
"0x1a6f67280c535c2c12973d3787a9f38053047cd0c45787614ee4480996e375e3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

