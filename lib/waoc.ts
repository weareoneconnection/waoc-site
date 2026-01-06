// lib/waoc.ts
export const WAOC_ADDRESSES = {
  // Token
  solMint: "82gi7mybA1yHi56FcCC9wvTPzew5hsxP2wdHv4nYpump",
  bscContract: "0x4f0b6d521e3929b240e265fac2155d4341abede7",

  // Genesis NFT
  genesisCandyMachine: "8gV7rDrGQxEdMAo7BKMmpzXSJcuurAkgkAP61diwaQMy",
  genesisCollectionMint: "FtVV4c2mHekreCHyVyEfq3MbCnFYa4xuohPv5ppJXuPS"
} as const;

export const WAOC_LINKS = {
  telegram: "https://t.me/WAOCGlobalCommunity",
  x: "https://x.com/waoconnectone?s=21",
  dexscreener: "https://dexscreener.com/solana/3mJvSq4KG51KfsCZCafsHfHjFs5st361a55ipYDERdW9",

  // Products
  mint: "https://waoc-genesis-mint.vercel.app/",
  meditation: "https://waoc-meditation-mvp-test.vercel.app/",

  // Buy
  buySol:
    "https://swap.pump.fun?input=So11111111111111111111111111111111111111112&output=82gi7mybA1yHi56FcCC9wvTPzew5hsxP2wdHv4nYpump",
  buyBsc:
    "https://pancakeswap.finance/swap?outputCurrency=0x4f0b6d521e3929b240e265fac2155d4341abede7"
} as const;

export const WHITEPAPER = {
  filename: "WAOC_Whitepaper_v1.pdf",
  url: "/whitepaper/WAOC_Whitepaper_v1.pdf"
} as const;
