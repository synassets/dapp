// 
const sys = {
  state: {
    Config: {
      rpcUrl: "",
      multicallAddress: "",
      blockExplorerUrls: "",
      chainId: 0,
      twitter: "",
      github: "",
      medium: "",
      discord: "",
      doc: "",
      whiteListURL: ""
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
    SET_CONFIG: (state, val) => {
      state.Config = val;
    },
    SET_BASE_CONFIG: (state, baseConfig) => {
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
      commit('SET_BASE_CONFIG', baseConfig);
    }
  }
};

export default sys;
