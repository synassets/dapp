//
const sAsset = {
    state: {
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
            OHM_DAI_LP_Bond: "",
            ConsensusPool: "",
            DAO: "",
            Swap_Router: "",
            OHM_DAI_LP: ""
        },
        // chain
        blockNumber: 0,
        // Swap Router
        USDFragmentsPerOHM: 0,
        // USD
        USDDecimals: 0,
        // OHM
        OHMSymbol: "",
        OHMTotalSupply: 0,
        OHMDecimals: 0,
        OHMBalanceOfUser: 0,
        OHMBalanceOfStaking: 0,
        OHMBalanceOfOHMDAILP: 0,
        OHMBalanceOfDAO: 0,
        OHMAllowanceOfUserToStakingHelper: 0,
        // sOHM
        currentIndex: 0,
        sOHMDecimals: 0,
        sOhmCirculatingSupply: 0,
        sOHMBalanceOfUser: 0,
        sOHMAllowanceOfUserToStaking: 0,
        // DAI
        DAISymbol: "",
        DAIDecimals: 0,
        DAIAllowanceOfUserToDAIBond: 0,
        DAIBalanceOfTreasury: 0,
        DAIBalanceOfOHMDAILP: 0,
        DAIBalanceOfUser: 0,
        // OHM-DAI LP
        OHMDAILPDecimals: 0,
        OHMDAILPTotalSupply: 0,
        OHMDAILPAllowanceOfUserToDAIBond: 0,
        OHMDAILPBalanceOfTreasury: 0,
        OHMDAILPBalanceOfUser: 0,
        // Staking
        epochEndBlock: 0,
        epochDistribute: 0,
        stakingContractBalance: 0,
        // DAI Bond
        DAIBondPrice: 0,
        DAIBondPriceInUSD: 0,
        DAIBondMaxPayout: 0,
        DAIBondStandardizedDebtRatio: 0,
        DAIBondTermsControlVariable: 0,
        DAIBondTermsVestingTerm: 0,
        DAIBondTermsMinimumPrice: 0,
        DAIBondTermsMaxPayout: 0,
        DAIBondTermsFee: 0,
        DAIBondTermsMaxDebt: 0,
        DAIBondInfoPayout: 0,
        DAIBondInfoVesting: 0,
        DAIBondInfoLastBlock: 0,
        DAIBondPendingPayoutFor: 0,
        // OHM-DAI LP Bond
        OHMDAILPBondPrice: 0,
        OHMDAILPBondPriceInUSD: 0,
        OHMDAILPBondMaxPayout: 0,
        OHMDAILPBondStandardizedDebtRatio: 0,
        OHMDAILPBondTermsControlVariable: 0,
        OHMDAILPBondTermsVestingTerm: 0,
        OHMDAILPBondTermsMinimumPrice: 0,
        OHMDAILPBondTermsMaxPayout: 0,
        OHMDAILPBondTermsFee: 0,
        OHMDAILPBondTermsMaxDebt: 0,
        OHMDAILPBondInfoPayout: 0,
        OHMDAILPBondInfoVesting: 0,
        OHMDAILPBondInfoLastBlock: 0,
        OHMDAILPBondPendingPayoutFor: 0,
    },
    mutations: {
        SET: (state, [name, val]) => {
            if (name === 'USDFragmentsPerOHM') {
                state[name] = val[val.length-1];
            } else {
                state[name] = val;
            }
        },
        SET_CONTRACT:(state, contract)=>{
            state.contract=contract;
        },
    },
    actions: {
        set_name({ commit }, name) {
            commit('SET_NAME', name);
        }
    }
};

export default sAsset;
