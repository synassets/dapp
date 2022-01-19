import {
  UPDATE,
  SET_ADDRESS,
  CLEAN_BALANCE,
  SET_INVITE_CODE,
  SET_PENDING_HISTORY_LIST,
  APPEND_PENDING_HISTORY_LIST,
  REMOVE_PENDING_HISTORY_LIST,
  SET_HISTORY_LIST
} from '../mutation-types'

export default {
  state: {
    address: null,
    invite_code: '',
    balance: 0,    
    pending_history_list: [],
    history_list: [],

    distributePoolAmount: 0,
    top3PoolAmount: 0,
    boxAmount: 0,
    insuranceFund: 0,
    devFund: 0,
    EthAmount: 0,
    lastSeriesNo: 0,
    restartNo: 0,
    boxExpire: 0,
    boxLastSeriesNo: 0,
    roundFirstSeriesNo: 0,
    
    invite_top1_address: '',
    invite_top1_total: 0,
    invite_top1_reward: 0,
    invite_top2_address: '',
    invite_top2_total: 0,
    invite_top2_reward: 0,
    invite_top3_address: '',
    invite_top3_total: 0,
    invite_top3_reward: 0,

    m_totalSupply: 0,
    reserve: 0,
    profitPool: 0,
    totalProfited: 0,
    totalDestroyed: 0,
    price: 0,
    totalStaking: 0,

    // getUserinfo
    seriesNo: 0,
    amount: 0,
    eth: 0,
    ethDone: 0,
    distributeLastTime: 0,
    quitted: 0,

    parent: '',
    sonCount: 0,
    sonNodeCount: 0,
    sonAmount: 0,
    sonAmountPre: 0,
    sonAmountDate: 0,
    boxReward: 0,

    resetData: 0,
    quitable: 0,
    subCoin: 0,
    balanceOfToken: 0,
    stakingOf: 0,
    profitedOf: 0,
    profitingOf: 0,

  
  },
  getters: {
    address: state => {
      return state.address
    },
    invite_code: state => {
      return state.invite_code
    },
    balance: state => {
      return state.balance
    },
  },
  mutations: {
    [UPDATE](state, payload) {
      console.log(payload)
      for(const key in payload){
        if(typeof state[key] != 'undefined')  state[key] = payload[key]
      }
    },
    [SET_ADDRESS](state, payload) {
      state.address = payload
    },
    [SET_INVITE_CODE](state, payload) {
      if (payload === 0) {
        state.invite_code = ''
      } else {
        state.invite_code = payload
      }
    },
    [SET_PENDING_HISTORY_LIST](state, payload) {
      state.pending_history_list = payload
    },
    [APPEND_PENDING_HISTORY_LIST](state, payload){
      state.pending_history_list = _.concat([payload], state.pending_history_list)
    },
    [REMOVE_PENDING_HISTORY_LIST](state, payload){
      _.remove( state.pending_history_list, (item) => {
        return item.hash == payload
      })
    },
    [SET_HISTORY_LIST](state, payload) {
      state.history_list = payload
    }
  }
}
