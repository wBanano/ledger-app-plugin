import "core-js/stable";
import "regenerator-runtime/runtime";
import { processTest, populateTransaction } from './test.fixture';

const contractName = "wBAN";
const contractAddr = "0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034";
const testNetwork = "polygon";
const chainID = 137;
const testLabel = "Polygon - Unwrap";  // <= Name of the test
const testDirSuffix = "unwrap_polygon"; // <= directory to compare device snapshots to
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

// https://polygonscan.com/tx/0x86f0b7ada7a45c3c4559c4df84f8dccdb0697a6f6c2935d038a1ea1f3a8c5b2c
const inputData = "0x819ae23000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000056bc75e2d63100000000000000000000000000000000000000000000000000000000000000000004062616e5f316435743675397a68683337667470367367616a68726e6134786e346d6a656361796570707a686d6e6a70626a657375687378637939336535667162";
const serializedTx = populateTransaction(contractAddr, inputData, chainID);

devices.forEach((device) => {
  processTest(device, contractName, testLabel, testDirSuffix, "", signedPlugin, serializedTx, testNetwork);
});
