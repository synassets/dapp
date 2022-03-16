
const wallet  ={
  state: {
    address: '0x0000000000000000000000000000000000000000',
    invite_address:'0x0000000000000000000000000000000000000000',
    balance: 0,
    usdc_balance:0,
    chain_id:0,
    target_chain_id:0,
    wallet_type:"meta_mask",
    sat_balance:0,
    whitelist_og_counter:0,
    my_amount_og_swapped:0,
    my_amount_nog_swapped:0,
    refresh_flag: 0,
    share_link_url:"",
    og_enableWhiteList:false
   },
  getters: {
    is_connected: state => {
      let teo =  state.target_chain_id == state.chain_id && state.target_chain_id !=0 && state.address!="0x0000000000000000000000000000000000000000"&& state.address!="0";
      return teo;
    },
    chain_id: state => {
      return state.chain_id
    },
    sat_balance: state => {
      return state.sat_balance
    },
    address: state => {
      return state.address
    },
    invite_address: state => {
      return state.invite_address
    },
    target_chain_id: state => {
      return state.target_chain_id
    },
    balance: state => {
      return state.balance
    },
    usdc_balance: state => {
      return state.usdc_balance
    },
  },
  mutations: {
    UPDATE:(state, payload)=> {
      console.log(payload)
      for(const key in payload){
        if(typeof state[key] != 'undefined')  state[key] = payload[key]
      }
    },
    UPDATE_REFRESH_FLAG:(state, payload)=> {
      state.refresh_flag = state.refresh_flag +1 +payload;
    },
    SET_WALLET_TYPE:(state, payload)=> {
      state.wallet_type = payload
    },

    SET_AMOUNT_OG_SWAPPED:(state, payload)=> {
      state.my_amount_og_swapped = payload
    },
    SET_AMOUNT_NOG_SWAPPED:(state, payload)=> {
      state.my_amount_nog_swapped = payload
    },
    SET_OG_ENABLE_WHITE_LIST:(state, payload)=> {
      state.og_enableWhiteList = payload
    },

    SET_USDC_BALANCE:(state, payload)=> {
      state.usdc_balance = payload
    },
    SET_OG_WHITE_LIST_COUNTER:(state, payload)=> {
      state.whitelist_og_counter = payload
    },
    SET_SAT_BALANCE:(state, payload)=> {
      state.sat_balance = payload
    },
    SET_BALANCE:(state, payload)=> {
      state.balance = payload
    },
    SET_CHAIN_ID:(state, payload)=> {
      state.chain_id = payload
    },
    SET_TARGET_CHAIN_ID:(state, payload)=> {
      state.target_chain_id = payload
    },
    SET_ADDRESS :(state, payload)=> {
      // console.log("address :-> "+payload);
      state.address = payload
    },
    SET_SHARE_LINK_URL :(state, payload)=> {
      // console.log("address :-> "+payload);
      state.share_link_url = payload
    },
    SET_REF_ADDRESS:(state, payload)=> {
         state.invite_address = payload
    }
  }
}
export  default  wallet;