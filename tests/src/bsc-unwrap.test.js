import "core-js/stable";
import "regenerator-runtime/runtime";
import { processTest, populateTransaction } from './test.fixture';

const contractName = "wBAN";
const contractAddr = "0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034";
const testNetwork = "bsc";
const chainID = 56;
const testLabel = "BSC - Unwrap";  // <= Name of the test
const testDirSuffix = "unwrap_bsc"; // <= directory to compare device snapshots to
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

// https://bscscan.com/tx/0x887f3da076070a9a2cecbcfcaa5bde7cf3c14975ae2279a39de79af596e34672
const inputData = "0x819ae230000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000001cba651641ee820000000000000000000000000000000000000000000000000000000000000000004062616e5f336e7539713661636f7264396a74356b316e636e3362643875717a697a69386d6833366378786b703970317a65357073367078636939337868393161";
const serializedTx = populateTransaction(contractAddr, inputData, chainID);

devices.forEach((device) => {
  processTest(device, contractName, testLabel, testDirSuffix, "", signedPlugin, serializedTx, testNetwork);
});
