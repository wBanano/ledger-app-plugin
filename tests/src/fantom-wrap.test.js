import "core-js/stable";
import "regenerator-runtime/runtime";
import { processTest, populateTransaction } from './test.fixture';

const contractName = "wBAN";
const contractAddr = "0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034";
const testNetwork = "fantom";
const chainID = 250;
const testLabel = "Fantom - Wrap";  // <= Name of the test
const testDirSuffix = "wrap_fantom"; // <= directory to compare device snapshots to
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

// https://ftmscan.com/tx/0xfb5264f2587ec966912c3ae2da61f75f4f66268270debeeee7effb25c7eb0124
const inputData = "0x05b084df0000000000000000000000002f13f5a8d66ae8b815ec7b4a91d0484ba2993d2c0000000000000000000000000000000000000000000001a5978e47b024e400000000000000000000000000000000000000000000000000000000017f420bcd19000000000000000000000000000000000000000000000000000000000000001b00bdfc8eec5ab20216739d622de06bb6244a090a3b63454c38c97466e208717508f5d099a1243ecab1e10edb36f39be96354a9c5a04e68d066f9f27aeae4f600";
const serializedTx = populateTransaction(contractAddr, inputData, chainID);

devices.forEach((device) => {
  processTest(device, contractName, testLabel, testDirSuffix, "", signedPlugin, serializedTx, testNetwork);
});
