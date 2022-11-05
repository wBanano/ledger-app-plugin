import "core-js/stable";
import "regenerator-runtime/runtime";
import { processTest, populateTransaction } from './test.fixture';

const contractName = "wBAN";
const contractAddr = "0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034";
const testNetwork = "fantom";
const chainID = 250;
const testLabel = "Fantom - Unwrap";  // <= Name of the test
const testDirSuffix = "unwrap_fantom"; // <= directory to compare device snapshots to
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

// https://ftmscan.com/tx/0xff84a210ca3f6f3de8c52598e5c4e9065e52d465e78b1d6de4bc247866501cfc
const inputData = "0x819ae230000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000006807798cb3c69c0000000000000000000000000000000000000000000000000000000000000000004062616e5f3170756e6b63616e793164787161747a6e61643171366268746362646e646e796b78386f6834623833676e6d6b396d70663963653135746266316f77";
const serializedTx = populateTransaction(contractAddr, inputData, chainID);

devices.forEach((device) => {
  processTest(device, contractName, testLabel, testDirSuffix, "", signedPlugin, serializedTx, testNetwork);
});
