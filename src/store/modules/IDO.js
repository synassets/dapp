//
const ido = {
    state: {
        og_sale: {
            sell_token_address: "0x8d727C3D99892b285dD7F0D7268E6cE850532E47",
            sell_token_symbol: "TEST_SAT",
            sell_token_scala: "1000000000000000000",
            cash_scala: "1000000",
            cash_symbol: "TEST_USDC",
            cash_address: "0x70b04a9AbC8D0D2088a3D0895aD3a6363859592f",
            sale_address : "0xdCde2c8CC76f9C40f439e294843D9c7DaB7a2A5e",
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
            sell_token_address: "0x8d727C3D99892b285dD7F0D7268E6cE850532E47",
            sell_token_symbol: "TEST_SAT",
            sell_token_scala: "1000000000000000000",
            cash_scala: "1000000",
            cash_symbol: "TEST_USDC",
            cash_address: "0x70b04a9AbC8D0D2088a3D0895aD3a6363859592f",
            sale_address : "0xdCde2c8CC76f9C40f439e294843D9c7DaB7a2A5e",
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
