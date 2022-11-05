import "core-js/stable";
import "regenerator-runtime/runtime";
import { processTest, populateTransaction } from './test.fixture';

const contractName = "wBAN";
const contractAddr = "0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034";
const testNetwork = "bsc";
const chainID = 56;
const testLabel = "BSC - Wrap";  // <= Name of the test
const testDirSuffix = "wrap_bsc"; // <= directory to compare device snapshots to
const signedPlugin = false;

const devices = [
  {
      name: "nanos",
      label: "Nano S",
      steps: 5, // <= Define the number of steps for this test case and this device
  },
  {
      name: "nanox",
      label: "Nano X",
      steps: 5, // <= Define the number of steps for this test case and this device
  },
  {
      name: "nanosp",
      label: "Nano S+",
      steps: 5, // <= Define the number of steps for this test case and this device
  },
];

// https://bscscan.com/tx/0x6872bfa19a6639d52ccdeae88d583e57aec9074e6a02602549d9f1a9f442bbb1
const inputData = "0x05b084df0000000000000000000000002f13f5a8d66ae8b815ec7b4a91d0484ba2993d2c00000000000000000000000000000000000000000000006807798cb3c69c000000000000000000000000000000000000000000000000000000000179d3e6996f000000000000000000000000000000000000000000000000000000000000001b3e05902093d213d56cc5ce546aa39b066b3814d2108b53334ee5b6d687e1c96f3fdae9a08b078e502f5c4d0df16fae15b50295d8e7d5beb96c2f03e2cec67c4c";
const serializedTx = populateTransaction(contractAddr, inputData, chainID);

devices.forEach((device) => {
  processTest(device, contractName, testLabel, testDirSuffix, "", signedPlugin, serializedTx, testNetwork);
});
