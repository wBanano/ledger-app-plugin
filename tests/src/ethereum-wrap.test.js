import "core-js/stable";
import "regenerator-runtime/runtime";
import { processTest, populateTransaction } from './test.fixture';

const contractName = "wBAN";
const contractAddr = "0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034";
const testNetwork = "ethereum";
const chainID = 1;
const testLabel = "Ethereum - Wrap";  // <= Name of the test
const testDirSuffix = "wrap_ethereum"; // <= directory to compare device snapshots to
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

// https://etherscan.io/tx/0x685efdf48afbede3e4001c8f8fe51751e012b671421081637750aa6c3cb47e8c
const inputData = "0x05b084df0000000000000000000000002f13f5a8d66ae8b815ec7b4a91d0484ba2993d2c0000000000000000000000000000000000000000000001a5978e47b024e400000000000000000000000000000000000000000000000000000000018389dd37bd000000000000000000000000000000000000000000000000000000000000001c358fb282c9fefd356afcdaadffe0b6a12ba26c08a9de6124d75a4eded07c054433b83463ef95753219e84fd7b64fbfce731797d379589c1012021945673d10bf";
const serializedTx = populateTransaction(contractAddr, inputData, chainID);

devices.forEach((device) => {
  processTest(device, contractName, testLabel, testDirSuffix, "", signedPlugin, serializedTx, testNetwork);
});
