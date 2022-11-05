import "core-js/stable";
import "regenerator-runtime/runtime";
import { processTest, populateTransaction } from './test.fixture';

const contractName = "wBAN";
const contractAddr = "0xe20b9e246db5a0d21bf9209e4858bc9a3ff7a034";
const testNetwork = "polygon";
const chainID = 137;
const testLabel = "Polygon - Wrap";  // <= Name of the test
const testDirSuffix = "wrap_polygon"; // <= directory to compare device snapshots to
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

// https://polygonscan.com/tx/0x065e3e6b6e27be6805771e4a0f1c5ca474976ade168195962ad5877c68a63221
const inputData = "0x05b084df0000000000000000000000002f13f5a8d66ae8b815ec7b4a91d0484ba2993d2c00000000000000000000000000000000000000000000002a1f0a87470e8400000000000000000000000000000000000000000000000000000000017bb682bdda000000000000000000000000000000000000000000000000000000000000001c016b00ad57c5023bfc30c644a6ed14c8b9752cf87e0978b17530cfb9934aed0b30732f20c51185c0b67713d6e9946372a8eb851dbb9a2a917983cd4a185fb662";
const serializedTx = populateTransaction(contractAddr, inputData, chainID);

devices.forEach((device) => {
  processTest(device, contractName, testLabel, testDirSuffix, "", signedPlugin, serializedTx, testNetwork);
});
