import Vue from "vue";

import i18n from "@/utils/lang";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./router/action";
import bus from "@/utils/bus";

import "@/utils/screen";
import moment from "moment";
import "@/assets/css/public.scss";

import { WALLET_IMTOKEN, WALLET_TRUST, WALLET_OTHER } from "./config/wallet";
import { init, isAddress } from "./utils/Wallet";
import Antd from "ant-design-vue";
import { message } from "ant-design-vue";
import echarts from 'echarts'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
Vue.prototype.$echarts = echarts;
Vue.prototype.$bus = bus;
Vue.use(Antd);
Vue.prototype.$coming = () => message.info("Coming Soon!");
Vue.prototype.$moment = moment;
// 
Vue.use(VueClipboard);
import Cookies from "js-cookie";
Vue.config.productionTip = false;

const ElementUI = window.ELEMENT;
let Base64 = require('js-base64').Base64
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value),
});
const url_params = new URLSearchParams(window.location.search);
let ref = url_params.get("ref");
Cookies.set("ref", '', { expires: 31 });
if (ref != null) {
  ref = Base64.decode(ref);
  if (isAddress(ref)) {
    Cookies.set("ref", ref, { expires: 31 });

  }
}

let is_wallet = !!window.ethereum || !!window.web3;
let wallet = "";
if (is_wallet) {
  switch (true) {
    case !!window.imToken:
      wallet = WALLET_IMTOKEN;
      break;
    case !!window.trustProvider:
      wallet = WALLET_TRUST;
      break;
    default:
      wallet = WALLET_OTHER;
  }

}
store.dispatch("update_env", {
  wallet,
  is_wallet,
});




async function connect() {
  await init();
}
connect();


new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
