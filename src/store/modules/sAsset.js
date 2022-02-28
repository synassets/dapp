//
const sAsset = {
    state: {
        name: "sMatic",
        contract:{
            DAI: "",
            OHM: "",
            Treasury: "",
            Calc: "",
            distributor:"",
            sOHM: "",
            staking: "",
            staking_warmup:"",
            staking_helper:"",
            DAI_bond: "",
            consensus_pool: ""
        },

    },
    mutations: {
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_CONTRACT:(state, contract)=>{
            state.contract=contract;
        }
    },
    actions: {
        set_name({ commit }, name) {
            commit('SET_NAME', name);
        }
    }
};

export default sAsset;
