//
const ido = {
    state: {
        og_sale: {
            sale_token_address: "",
            sale_token_symbol: "",
            sale_token_scala: "",
            cash_scala: "",
            cash_symbol: "",
            cash_address: "",
            sale_address : "",
            enableWhiteList: false,
            max_per_wallet: 1000000000,
            min_per_wallet: 1000000000,
            open_at: 0,
            close_at: 0,
            whitelist_counter: 0,
            my_swapped: 0,
            allowance: 0,
            total_swapped:0,
            balance_of_cash:0,
        },
        public_sale: {
            sale_token_address: "",
            sale_token_symbol: "",
            sale_token_scala: "",
            cash_scala: "",
            cash_symbol: "",
            cash_address: "",
            sale_address : "",
            enableWhiteList: false,
            max_per_wallet: 1000000000,
            min_per_wallet: 1000000000,
            open_at: 0,
            close_at: 0,
            whitelist_counter: 0,
            my_swapped: 0,
            allowance: 0,
            total_swapped:0,
            balance_of_cash:0,
        },
    },
    mutations: {
        SET_NAME: (state, name) => {
            state.name = name;
        },
        SET_OG_CFG: (state, name) => {
            state.og_sale = name;
        },
        SET_PUB_CFG: (state, name) => {
            state.public_sale = name;
        },
        SET_OG_ALLOWANCE: (state, allowance) => {
            state.og_sale.allowance = allowance;
        },
        SET_PUBLIC_ALLOWANCE: (state, allowance) => {
            state.public_sale.allowance = allowance;
        },
        SET_OG_OPEN_AT: (state, open_at) => {
            state.og_sale.open_at = open_at;
        },
        SET_PUBLIC_OPEN_AT: (state, open_at) => {
            state.public_sale.open_at = open_at;
        },
        SET_OG_CLOSE_AT: (state, open_at) => {
            state.og_sale.close_at = open_at;
        },
        SET_PUBLIC_CLOSE_AT: (state, open_at) => {
            state.public_sale.close_at = open_at;
        },
        SET_OG_MY_SWAPPED: (state, my_swapped) => {
            state.og_sale.my_swapped = my_swapped;
        },
        SET_PUBLIC_MY_SWAPPED: (state, my_swapped) => {
            state.public_sale.my_swapped = my_swapped;
        },
        SET_OG_TOTAL_SWAPPED: (state, total_swapped) => {
            state.og_sale.total_swapped = total_swapped;
        },
        SET_PUBLIC_TOTAL_SWAPPED: (state, total_swapped) => {
            state.public_sale.total_swapped = total_swapped;
        },
        SET_OG_BALANCE_OF_CURRENT: (state, balance_of_current) => {
            state.og_sale.balance_of_current = balance_of_current;
        },
        SET_PUBLIC_BALANCE_OF_CURRENT: (state, balance_of_current) => {
            state.public_sale.balance_of_current = balance_of_current;
        }
    },
    actions: {
        set_name({ commit }, name) {
            commit('SET_NAME', name);
        }
    }
};

export default ido;
