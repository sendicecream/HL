const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "DeFi Haulers";
const description = "6,210 DeFi Haulers dispatched on the Avalanche Blockchain";
const baseUri = "ipfs://Qmc5aAbGf78vb7MmQauha1EjTUUxr746NrRVPW71STWed8";

const solanaMetadata = {
  symbol: "DH",
  seller_fee_basis_points: 0, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "defi-haulers.io",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 0,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 1242,
    layersOrder: [

      { name: "Background" },
      { name: "Wheels01", options: { displayName:"Wheels", }  },
      { name: "Body01", options: { displayName:"Body", }  },
      { name: "Tinted01", options: { displayName:"Tinted", }  },
      { name: "FrontEnd01", options: { displayName:"Front End", }  },
      { name: "RoofRear01", options: { displayName:"Roof Rear", }  },
      { name: "RoofFront01", options: { displayName:"Roof Front", }  },
      { name: "SidePanel01", options: { displayName:"Side Panel", }  },
      { name: "Breakdown01", options: { displayName:"Breakdown", }  },

    ],
  },

  {
    // Creates an additional 100 artworks
    growEditionSizeTo: 2484,
    layersOrder: [
      { name: "Background" },
      { name: "Wheels02", options: { displayName:"Wheels", }  },
      { name: "Body02", options: { displayName:"Body", }  },
      { name: "Tinted02", options: { displayName:"Tinted", }  },
      { name: "FrontEnd02", options: { displayName:"Front End", }  },
      { name: "RoofRear02", options: { displayName:"Roof Rear", }  },
      { name: "RoofFront02", options: { displayName:"Roof Front", }  },
      { name: "SidePanel02", options: { displayName:"Side Panel", }  },
      { name: "Breakdown02", options: { displayName:"Breakdown", }  },
    ],
  },

  {
    // Creates an additional 100 artworks
    growEditionSizeTo: 3726,
    layersOrder: [
      { name: "Background" },
      { name: "Wheels03", options: { displayName:"Wheels", }  },
      { name: "Body03", options: { displayName:"Body", }  },
      { name: "Tinted03", options: { displayName:"Tinted", }  },
      { name: "FrontEnd03", options: { displayName:"Front End", }  },
      { name: "RoofRear03", options: { displayName:"Roof Rear", }  },
      { name: "RoofFront03", options: { displayName:"Roof Front", }  },
      { name: "SidePanel03", options: { displayName:"Side Panel", }  },
      { name: "Breakdown03", options: { displayName:"Breakdown", }  },
    ],
  },

  {
    // Creates an additional 100 artworks
    growEditionSizeTo: 4968,
    layersOrder: [
      { name: "Background" },
      { name: "Wheels04", options: { displayName:"Wheels", }  },
      { name: "Body04", options: { displayName:"Body", }  },
      { name: "Tinted04", options: { displayName:"Tinted", }  },
      { name: "FrontEnd04", options: { displayName:"Front End", }  },
      { name: "RoofRear04", options: { displayName:"Bed", }  },
      { name: "RoofFront04", options: { displayName:"Roof Front", }  },
      { name: "SidePanel04", options: { displayName:"Side Panel", }  },
      { name: "Breakdown04", options: { displayName:"Breakdown", }  },
    ],
  },

  {
    // Creates an additional 100 artworks
    growEditionSizeTo: 6210,
    layersOrder: [
      { name: "Background" },
      { name: "Wheels05", options: { displayName:"Wheels", }  },
      { name: "Body05", options: { displayName:"Body", }  },
      { name: "Tinted05", options: { displayName:"Tinted", }  },
      { name: "FrontEnd05", options: { displayName:"Front End", }  },
      { name: "RoofRear05", options: { displayName:"Bed", }  },
      { name: "RoofFront05", options: { displayName:"Roof Front", }  },
      { name: "Breakdown05", options: { displayName:"Breakdown", }  },
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 1000,
  height: 1000,
  smoothing: true,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 1 / 256,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#222222",
};

const extraMetadata = {

  Please: "Drive Safe <3",

};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 6210;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
