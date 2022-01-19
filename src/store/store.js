import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import app from "./modules/app";
import router from "@/router";

const key = "";

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    app,
  },
  state: {
    address:'',
    token: null,
    userInfo: null,
    inviteCode: null,
    isMobile: false,
    domainUrl: "",
    shareLinks: {

    },
  },

  mutations: {
    UPDATE_WALLET: (state, payload) => {
      console.log(payload);
      if (state.userInfo && state.userInfo.wallet) {
        state.userInfo.wallet = payload;
      }
    },
    SET_IS_MOBILE: (state, isMobile) => {
      if (isMobile !== state.isMobile) {
        state.isMobile = isMobile;
      }
    },
    SET_ADDRESS: (state, address) => {
        state.address = address;
      // alert('sdsds'+ state.address)
    },
    SET_INVITE_CODE: (state, payload) => {
      state.inviteCode = payload;
    },
    SET_TOKEN: (state, payload) => {
      if (!payload) {
        router.push("/");
      }
      state.token = payload;
    },
    SET_USER_INFO: (state, payload) => {
      let userInfo = payload;
      if (payload && payload.email) {
        const maskEmail = payload.email.replace(
          /(.{2})(.*)(@.*)/gi,
          "$1****$3"
        );
        userInfo = { ...payload, maskEmail };
      }
      console.log(userInfo);
      state.userInfo = userInfo;
    },
  },
  actions: {},
  plugins: [
    createPersistedState({
      key,
      storage: window.sessionStorage,
    }),
  ],
});

export default store;
