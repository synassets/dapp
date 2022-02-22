import Vue from 'vue';
import Vuex from 'vuex';
import sys from './modules/sys';
import wallet from "@/store/modules/wallet";
const debug = process.env.NODE_ENV !== 'production';
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex);

const store = new Vuex.Store({

  plugins: debug ? [createLogger()] : [],
  modules: {
    sys,
    wallet,
  },

  getters: {
    sys: state => state.sys,
    wallet:state=> state.wallet,
  },


});

export default store;
