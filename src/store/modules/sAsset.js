//
const sAsset = {
    state: {
        name: "sMatic",
        contract:{
            ETH: "",
            DAI: "",
            OHM: "",
            Treasury: "",
            Calc: "",
            Distributor:"",
            sOHM: "",
            Staking: "",
            Staking_Warmup:"",
            Staking_Helper:"",
            DAI_Bond: "",
            ConsensusPool: "",
            DAO: "",
            Swap_Router: "",
            OHM_DAI_LP: ""
        },
        DAIsPerOHM: "",
        currentIndex: "",
        OHMTotalSupply: "",
        OHMBalanceOfStaking: "",
        DAIBalanceOfTreasury: "",
        OHMDAILPBalanceOfTreasury: "",
        OHMDAILPTotalSupply: "",
        DAIBalanceOfOHMDAILP: "",
        OHMBalanceOfDAO: "",
        epochDistribute: "",
        stakingContractBalance: "",
    },
    mutations: {
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_CONTRACT:(state, contract)=>{
            state.contract=contract;
        },
        SET_DAIS_PER_OHM: (state, val) => {
            state.DAIsPerOHM = val;
        },
        SET_CURRENT_INDEX: (state, val) => {
            state.currentIndex = val;
        },
        SET_OHM_TOTAL_SUPPLY: (state, val) => {
            state.OHMTotalSupply = val;
        },
        SET_OHM_BALANCE_OF_STAKING: (state, val) => {
            state.OHMBalanceOfStaking = val;
        },
        SET_DAI_BALANCE_OF_TREASURY: (state, val) => {
            state.DAIBalanceOfTreasury = val;
        },
        SET_OHM_DAI_LP_BALANCE_OF_TREASURY: (state, val) => {
            state.OHMDAILPBalanceOfTreasury = val;
        },
        SET_OHM_DAI_LP_TOTAL_SUPPLY: (state, val) => {
            state.OHMDAILPTotalSupply = val;
        },
        SET_DAI_BALANCE_OF_OHM_DAI_LP: (state, val) => {
            state.DAIBalanceOfOHMDAILP = val;
        },
        SET_OHM_BALANCE_OF_DAO: (state, val) => {
            state.OHMBalanceOfDAO = val;
        },
        SET_EPOCH_DISTRIBUTE: (state, val) => {
            state.epochDistribute = val;
        },
        SET_STAKING_CONTRACT_BALANCE: (state, val) => {
            state.stakingContractBalance = val;
        },
    },
    actions: {
        set_name({ commit }, name) {
            commit('SET_NAME', name);
        }
    }
};

export default sAsset;
