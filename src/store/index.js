import Vue from 'vue';
import Vuex from 'vuex';
import sys from './modules/sys';
import wallet from "@/store/modules/wallet";
import ido from "@/store/modules/IDO";
const debug = process.env.NODE_ENV !== 'production';
import createLogger from 'vuex/dist/logger'
import sAsset from "@/store/modules/sAsset";
Vue.use(Vuex);

const store = new Vuex.Store({

  plugins: debug ? [createLogger()] : [],
  modules: {
    sys,
    wallet,
    ido,
    sAsset
  },

  getters: {
    sys: state => state.sys,
    wallet:state=> state.wallet,
    ido:state=> state.ido,
    sAsset:state=> state.sAsset,
  },


});

export default store;
