// 
const sys = {
  state: {
    Config: {
      rpcUrl: "https://polygon-rpc.com/",
      multicallAddress: "0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507",
      blockExplorerUrls: "https://polygonscan.com/",
      chainId: 137,
      twitter: "https://twitter.com/SynAssets",
      github: "https://github.com/synassets",
      medium: "https://medium.com/@SynAssets",
      discord: "https://discord.gg/BzVUJJszaU",
      doc: "https://doc.synassets.finance/",
      whiteListURL: "https://medium.com/@SynAssets/synassets-tokenomics-ido-whitelists-details-569626623e46"
    },

    baseConfig: {
    },
    // 
    blockBrowser: {

    },
    devConfig: { // 

      area: "dev",

    },
    proConfig: { // 
      area: 'production',
    },

    isMobile: false,

  },
  mutations: {
    SET_BASECONFIG: (state, baseConfig) => {
      state.baseConfig = baseConfig;
    },
    SET_IS_MOBILE: (state, isMobile) => {
      if(isMobile!==state.isMobile) {
        state.isMobile = isMobile;
      }
    }
  },
  actions: {
    setBaseConfig({ commit }, baseConfig) {
      commit('SET_BASECONFIG', baseConfig);
    }
  }
};

export default sys;
