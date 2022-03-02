//
const sAsset = {
    state: {
        symbol: "",
        contract:{
            USD: "",
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
        USDDecimals: 0,
        USDFragmentsPerOHM: 0,
        currentIndex: 0,
        OHMTotalSupply: 0,
        OHMDecimals: 0,
        OHMBalanceOfUser: 0,
        sOHMDecimals: 0,
        sOHMBalanceOfUser: 0,
        OHMBalanceOfStaking: 0,
        DAIBalanceOfTreasury: 0,
        OHMDAILPBalanceOfTreasury: 0,
        OHMDAILPTotalSupply: 0,
        OHMBalanceOfOHMDAILP: 0,
        DAIBalanceOfOHMDAILP: 0,
        OHMBalanceOfDAO: 0,
        epochDistribute: 0,
        stakingContractBalance: 0,
        sOhmCirculatingSupply: 0,
    },
    mutations: {
        SET_SYMBOL: (state, symbol) => {
            state.symbol = symbol;
        },
        SET_CONTRACT:(state, contract)=>{
            state.contract=contract;
        },
        SET_USD_DECIMALS: (state, val) => {
            state.USDDecimals = val;
        },
        SET_USD_FRAGMENTS_PER_OHM: (state, val) => {
            state.USDFragmentsPerOHM = val;
        },
        SET_CURRENT_INDEX: (state, val) => {
            state.currentIndex = val;
        },
        SET_OHM_TOTAL_SUPPLY: (state, val) => {
            state.OHMTotalSupply = val;
        },
        SET_OHM_DECIMALS: (state, val) => {
            state.OHMDecimals = val;
        },
        SET_OHM_BALANCE_OF_USER: (state, val) => {
            state.OHMBalanceOfUser = val;
        },
        SET_sOHM_DECIMALS: (state, val) => {
            state.sOHMDecimals = val;
        },
        SET_SOHM_BALANCE_OF_USER: (state, val) => {
            state.sOHMBalanceOfUser = val;
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
        SET_OHM_BALANCE_OF_OHM_DAI_LP: (state, val) => {
            state.OHMBalanceOfOHMDAILP = val;
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
        SET_SOHM_CIRCULATING_SUPPLY: (state, val) => {
            state.sOhmCirculatingSupply = val;
        },
    },
    actions: {
        set_name({ commit }, name) {
            commit('SET_NAME', name);
        }
    }
};

export default sAsset;
