import "core-js/stable";
import "regenerator-runtime/runtime";
import { processTest, populateTransaction } from './test.fixture';

const contractName = "wBAN";
const contractAddr = "0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034";
const testNetwork = "ethereum";
const chainID = 1;
const testLabel = "Ethereum - Unwrap";  // <= Name of the test
const testDirSuffix = "unwrap_ethereum"; // <= directory to compare device snapshots to
const signedPlugin = false;

const devices = [
  {
      name: "nanos",
      label: "Nano S",
      steps: 4, // <= Define the number of steps for this test case and this device
  },
  {
      name: "nanox",
      label: "Nano X",
      steps: 4, // <= Define the number of steps for this test case and this device
  },
  {
      name: "nanosp",
      label: "Nano S+",
      steps: 4, // <= Define the number of steps for this test case and this device
  },
];

// https://etherscan.io/tx/0x0a2a4d0dcfb3a942f910f4b93702ad3330797289468ccbdabb40eccd6f37afef
const inputData = "0x819ae2300000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000ab6de6e019ad7740000000000000000000000000000000000000000000000000000000000000000004062616e5f3173376b786a686a337031776b7231616673676e68646b7178393738666a737335707a337131676f37643778743465696b6d6a69357077626f697737";
const serializedTx = populateTransaction(contractAddr, inputData, chainID);

devices.forEach((device) => {
  processTest(device, contractName, testLabel, testDirSuffix, "", signedPlugin, serializedTx, testNetwork);
});
