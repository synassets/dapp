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
        // sOHM
        currentIndex: 0,
        sOHMDecimals: 0,
        sOhmCirculatingSupply: 0,
        sOHMBalanceOfUser: 0,
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
        OHMDAILPBalanceOfTreasury: 0,
        OHMDAILPBalanceOfUser: 0,
        // Staking
        epochDistribute: 0,
        stakingContractBalance: 0,
        // DAI Bond
        DAIBondPrice: 0,
        DAIBondPriceInUSD: 0,
        DAIBondMaxPayout: 0,
        StandardizedDebtRatio: 0,
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
        SET_CONTRACT:(state, contract)=>{
            state.contract=contract;
        },
        SET_BLOCK_NUMBER: (state, val) => {
            state.blockNumber = val;
        },
        SET_USD_FRAGMENTS_PER_OHM: (state, val) => {
            state.USDFragmentsPerOHM = val;
        },
        SET_USD_DECIMALS: (state, val) => {
            state.USDDecimals = val;
        },
        SET_OHM_SYMBOL: (state, val) => {
            state.OHMSymbol = val;
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
        SET_OHM_BALANCE_OF_STAKING: (state, val) => {
            state.OHMBalanceOfStaking = val;
        },
        SET_OHM_BALANCE_OF_OHM_DAI_LP: (state, val) => {
            state.OHMBalanceOfOHMDAILP = val;
        },
        SET_OHM_BALANCE_OF_DAO: (state, val) => {
            state.OHMBalanceOfDAO = val;
        },
        SET_CURRENT_INDEX: (state, val) => {
            state.currentIndex = val;
        },
        SET_sOHM_DECIMALS: (state, val) => {
            state.sOHMDecimals = val;
        },
        SET_SOHM_CIRCULATING_SUPPLY: (state, val) => {
            state.sOhmCirculatingSupply = val;
        },
        SET_SOHM_BALANCE_OF_USER: (state, val) => {
            state.sOHMBalanceOfUser = val;
        },
        SET_DAI_SYMBOL: (state, val) => {
            state.DAISymbol = val;
        },
        SET_DAI_DECIMALS: (state, val) => {
            state.DAIDecimals = val;
        },
        SET_DAI_ALLOWANCE_OF_USER_TO_DAI_BOND: (state, val) => {
            state.DAIAllowanceOfUserToDAIBond = val;
        },
        SET_DAI_BALANCE_OF_TREASURY: (state, val) => {
            state.DAIBalanceOfTreasury = val;
        },
        SET_DAI_BALANCE_OF_OHM_DAI_LP: (state, val) => {
            state.DAIBalanceOfOHMDAILP = val;
        },
        SET_DAI_BALANCE_OF_USER: (state, val) => {
            state.DAIBalanceOfUser = val;
        },
        SET_OHM_DAI_LP_DECIMALS: (state, val) => {
            state.OHMDAILPDecimals = val;
        },
        SET_OHM_DAI_LP_TOTAL_SUPPLY: (state, val) => {
            state.OHMDAILPTotalSupply = val;
        },
        SET_OHM_DAI_LP_BALANCE_OF_TREASURY: (state, val) => {
            state.OHMDAILPBalanceOfTreasury = val;
        },
        SET_OHM_DAI_LP_BALANCE_OF_USER: (state, val) => {
            state.OHMDAILPBalanceOfUser = val;
        },
        SET_EPOCH_DISTRIBUTE: (state, val) => {
            state.epochDistribute = val;
        },
        SET_STAKING_CONTRACT_BALANCE: (state, val) => {
            state.stakingContractBalance = val;
        },
        // DAI Bond
        SET_DAI_BOND_PRICE: (state, val) => {
            state.DAIBondPrice = val;
        },
        SET_DAI_BOND_PRICE_IN_USD: (state, val) => {
            state.DAIBondPriceInUSD = val;
        },
        SET_DAI_BOND_MAX_PAYOUT: (state, val) => {
            state.DAIBondMaxPayout = val;
        },
        SET_DAI_BOND_STANDARDIZED_DEBT_RATIO: (state, val) => {
            state.DAIBondStandardizedDebtRatio = val;
        },
        SET_DAI_BOND_TERMS_CONTROL_VARIABLE: (state, val) => {
            state.DAIBondTermsControlVariable = val;
        },
        SET_DAI_BOND_TERMS_VESTING_TERM: (state, val) => {
            state.DAIBondTermsVestingTerm = val;
        },
        SET_DAI_BOND_TERMS_MINIMUM_PRICE: (state, val) => {
            state.DAIBondTermsMinimumPrice = val;
        },
        SET_DAI_BOND_TERMS_MAX_PAYOUT: (state, val) => {
            state.DAIBondTermsMaxPayout = val;
        },
        SET_DAI_BOND_TERMS_FEE: (state, val) => {
            state.DAIBondTermsFee = val;
        },
        SET_DAI_BOND_TERMS_MAX_DEBT: (state, val) => {
            state.DAIBondTermsMaxDebt = val;
        },
        SET_DAI_BOND_INFO_PAYOUT: (state, val) => {
            state.DAIBondInfoPayout = val;
        },
        SET_DAI_BOND_INFO_VESTING: (state, val) => {
            state.DAIBondInfoVesting = val;
        },
        SET_DAI_BOND_INFO_LAST_BLOCK: (state, val) => {
            state.DAIBondInfoLastBlock = val;
        },
        SET_DAI_BOND_PENDING_PAYOUT_FOR: (state, val) => {
            state.DAIBondPendingPayoutFor = val;
        },

        // OHM-DAI LP Bond
        SET_OHM_DAI_LP_BOND_PRICE: (state, val) => {
            state.OHMDAILPBondPrice = val;
        },
        SET_OHM_DAI_LP_BOND_PRICE_IN_USD: (state, val) => {
            state.OHMDAILPBondPriceInUSD = val;
        },
        SET_OHM_DAI_LP_BOND_MAX_PAYOUT: (state, val) => {
            state.OHMDAILPBondMaxPayout = val;
        },
        SET_OHM_DAI_LP_BOND_STANDARDIZED_DEBT_RATIO: (state, val) => {
            state.OHMDAILPBondStandardizedDebtRatio = val;
        },
        SET_OHM_DAI_LP_BOND_TERMS_CONTROL_VARIABLE: (state, val) => {
            state.OHMDAILPBondTermsControlVariable = val;
        },
        SET_OHM_DAI_LP_BOND_TERMS_VESTING_TERM: (state, val) => {
            state.OHMDAILPBondTermsVestingTerm = val;
        },
        SET_OHM_DAI_LP_BOND_TERMS_MINIMUM_PRICE: (state, val) => {
            state.OHMDAILPBondTermsMinimumPrice = val;
        },
        SET_OHM_DAI_LP_BOND_TERMS_MAX_PAYOUT: (state, val) => {
            state.OHMDAILPBondTermsMaxPayout = val;
        },
        SET_OHM_DAI_LP_BOND_TERMS_FEE: (state, val) => {
            state.OHMDAILPBondTermsFee = val;
        },
        SET_OHM_DAI_LP_BOND_TERMS_MAX_DEBT: (state, val) => {
            state.OHMDAILPBondTermsMaxDebt = val;
        },
        SET_OHM_DAI_LP_BOND_INFO_PAYOUT: (state, val) => {
            state.OHMDAILPBondInfoPayout = val;
        },
        SET_OHM_DAI_LP_BOND_INFO_VESTING: (state, val) => {
            state.OHMDAILPBondInfoVesting = val;
        },
        SET_OHM_DAI_LP_BOND_INFO_LAST_BLOCK: (state, val) => {
            state.OHMDAILPBondInfoLastBlock = val;
        },
        SET_OHM_DAI_LP_BOND_PENDING_PAYOUT_FOR: (state, val) => {
            state.OHMDAILPBondPendingPayoutFor = val;
        },
    },
    actions: {
        set_name({ commit }, name) {
            commit('SET_NAME', name);
        }
    }
};

export default sAsset;
