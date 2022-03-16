<template>
  <div>
    <div
      v-show="isMobile"
      style="  width: 10rem;height: 1.5rem;  background: #070707;position: fixed;top: 0rem;z-index: 9999;"
    >
      <div style="  width: 10rem;  background: #070707;position: relative;">
        <div @click="onShowMenu" class="div-header-menu-btn">
          <img
            :src="h5_menu"
            style="cursor: pointer;width: 0.48rem;height: 0.39rem;margin-left: 0.3rem;margin-bottom: 0.24rem;"
          />
        </div>

        <div
          v-show="!is_connected"
          @click="OnConnectWalletBtn"
          class="div-header-connect-btn"
        >Connect Wallet</div>
        <div
          @click="OnDisConnectWalletBtn"
          v-show="is_connected"
          class="div-header-connect-btn"
        >{{is_connected ? this.address.substr(0,4) +"****"+ this.address.substr(this.address.length-4,this.address.length-1) : 0 }}</div>
      </div>
    </div>

    <div
      v-show="isMobile&&isShowAddWallet"
      style="  width: 10rem;height: 30rem;  background: #161616;position: fixed;top: 0rem;z-index: 9999;"
    >


      <div style="width: 7.87rem;margin: 1rem auto 0rem auto;position: relative;">
        <div
          style="position: absolute;left: 0rem;font-size: 0.4rem;font-family: Selawik;font-weight: bold;color: #808080;"
        >My Wallet</div>
        <img
          :src="close"
          style="cursor: pointer;width: 0.3rem;height: 0.3rem;right: 0rem;position: absolute;top: 0.2rem;"
          @click="isShowAddWallet=false"
        />
      </div>

     <div style="width: 7.87rem;margin: 1.6rem auto 0rem auto;position: relative;">
        <div
          style="position: absolute;left: 0rem;font-size: 0.4rem;font-family: Selawik;font-weight: bold;color: #FFFFFF;"
        ></div>
      </div>

<!--      <div style="width: 7.87rem;margin: 3.5rem auto 0rem auto;position: relative;">
        <img
          :src="sat_icon"
          style="width: 0.68rem;height: 0.68rem;top: 0.2rem;position: absolute;left: 0rem;"
        />

        <div
         class="h5-coin-name"
        >SAT</div>
        <div
          class="h5-coin-balance"
        >{{satBalance_show+' '+this.ido.og_sale.sale_token_symbol}}</div>
      </div>-->


      <div style="width: 7.87rem;margin: 2.8rem auto 0rem auto;position: relative;">
        <img
            :src="icon_coin_matic"
            style="width: 0.68rem;height: 0.68rem;top: 0.2rem;position: absolute;left: 0rem;"
        />

        <div
            class="h5-coin-name"
        >MATIC</div>
        <div
            class="h5-coin-balance"
        >{{this.matic_Balance_show}}</div>
      </div>

    <div style="width: 7.87rem;margin: 3.8rem auto 0rem auto;position: relative;">
        <img
            :src="icon_coin_test_sat"
            style="width: 0.68rem;height: 0.68rem;top: 0.2rem;position: absolute;left: 0rem;"
        />

        <div
            class="h5-coin-name"
        >TEST_SAT</div>
        <div
            class="h5-coin-balance"
        >{{satBalance_show}}</div>
      </div>

      <div style="width: 7.87rem;margin: 4.8rem auto 0rem auto;position: relative;">
        <img
            :src="icon_coin_test_matic"
            style="width: 0.68rem;height: 0.68rem;top: 0.2rem;position: absolute;left: 0rem;"
        />

        <div
            class="h5-coin-name"
        >TEST_MATIC</div>
        <div
            class="h5-coin-balance"
        >{{this.DAIBalanceOfUser_show}}</div>
      </div>

      <div style="width: 7.87rem;margin: 5.8rem auto 0rem auto;position: relative;">
        <img
            :src="icon_coin_test_usdc"
            style="width: 0.68rem;height: 0.68rem;top: 0.2rem;position: absolute;left: 0rem;"
        />

        <div
            class="h5-coin-name"
        >{{this.ido.public_sale.cash_symbol}}</div>
        <div
            class="h5-coin-balance"
        >{{this.crash_balance_show}}</div>
      </div>


<!--      <div style="width: 7.87rem;margin: 8.6rem auto 0rem auto;position: relative;">
        <img
            :src="icon_coin5"
            style="width: 0.68rem;height: 0.68rem;top: 0.2rem;position: absolute;left: 0rem;"
        />

        <div
            class="h5-coin-name"
        >TEST_SWMATIC</div>
        <div
            class="h5-coin-balance"
        >{{' 0.00'}}</div>
      </div>-->

      <div class="h5-add-wallet-btn" @click="addSatCoin">Add to Wallet</div>
      <div class="h5-add-wallet-btn"  style="margin-top: 0.6rem" @click="showWhitelistClick">Whitelist transfer</div>
      <div class="h5-add-wallet-btn"  style="margin-top: 0.6rem" @click="OnClaimTestCoin">Claim TestCoin</div>
      <div class="h5-disconnect-wallet-btn" @click="disconnectWallet">Disconnect</div>
    </div>

    <div
      v-show="!isMobile"
      style="width: 100%;height: 85px;background: #161616;position: fixed;top: 0px;z-index: 9999;"
    >
      <div style="width: 100%;height: 85px;background: #161616;position: relative;">
        <div v-show="!is_connected" @click="OnConnectWalletBtn" class="pc-div-btn1">Connect Wallet</div>

        <div
          v-show="is_connected"
          class="pc-div-btn1"
          @click="OnDisConnectWalletBtn"
        >{{is_connected ? this.address.substr(0,4) +"****"+ this.address.substr(this.address.length-4,this.address.length-1) : 0 }}</div>

        <div class="pc-div-btn2">
          <img
            :src="metamask"
            style="width: 29px;height: 26px;margin-left: 30px;margin-top: 6px;"
            alt
          />
          <div style="margin-left: 10px;line-height: 40px;">{{this.ido.og_sale.sale_token_symbol}}</div>
          <div class="pc-div-btn2-item">
            <div class="pc-div-btn2-item0">My Wallet</div>


            <div class="pc-div-btn2-item1" >
              <img class="pc-div-btn2-item2" :src="icon_coin_matic" />
              <div class="pc-div-btn2-item3">{{'MATIC'}}</div>
              <div class="pc-div-btn2-item5">{{ this.matic_Balance_show}}</div>
            </div>

<!--            <div class="pc-div-btn2-item1">
              <img class="pc-div-btn2-item2" :src="sat_icon" />
              <div class="pc-div-btn2-item3">{{this.ido.og_sale.sale_token_symbol}}</div>
              <div class="pc-div-btn2-item5">{{this.satBalance}}</div>
            </div>-->




           <div class="pc-div-btn2-item1" >
              <img class="pc-div-btn2-item2" :src="icon_coin_test_sat" />
              <div class="pc-div-btn2-item3">{{this.ido.public_sale.sale_token_symbol}}</div>
              <div class="pc-div-btn2-item5">{{ satBalance_show}}</div>
            </div>

            <div class="pc-div-btn2-item1" >
              <img class="pc-div-btn2-item2" :src="icon_coin_test_matic" />
              <div class="pc-div-btn2-item3">{{'TEST_MATIC'}}</div>
              <div class="pc-div-btn2-item5">{{ this.DAIBalanceOfUser_show}}</div>
            </div>

            <div class="pc-div-btn2-item1" >
              <img class="pc-div-btn2-item2" :src="icon_coin_test_usdc" />
              <div class="pc-div-btn2-item3">{{this.ido.public_sale.cash_symbol}}</div>
              <div class="pc-div-btn2-item5">{{ this.crash_balance_show}}</div>
            </div>

<!--            <div class="pc-div-btn2-item1" >
              <img class="pc-div-btn2-item2" :src="icon_coin5" />
              <div class="pc-div-btn2-item3">{{'TEST_SWMATIC'}}</div>
              <div class="pc-div-btn2-item5">{{ '0.00 '}}</div>
            </div>-->

            <div class="add-wallet-btn" @click="addSatCoin">Add to Wallet</div>
            <div class="add-wallet-btn"  @click="showWhitelistClick">Whitelist transfer</div>
            <div class="add-wallet-btn"  @click="OnClaimTestCoin" >Claim TestCoin</div>
          </div>
        </div>
      </div>
    </div>

    <my-dialog
      :is-show="showSelectWalletDialog"
      @isClose="OnOnCloseSelectWalletDialog()"
      :width="isMobile ? '8.27rem' : '700px'"
    >
      <div>
        <div v-show="!isMobile">
          <div style="padding-top: 20px;position: relative;">
            <img
              :src="close"
              style="width: 17px;height: 17px;left: 45px;top: 20px;position: absolute;z-index: 999;"
              @click="OnOnCloseSelectWalletDialog()"
            />
            <div
              style="position: absolute;text-align: center;left: 0px;top: 20px;font-size: 18px;font-family: Selawik; font-weight: 600;color: #FFFFFF;width: 700px;"
            >Connect Wallet</div>

            <div class="div-select-wallet" @click="clickMetaMusk()">
              MetaMusk
              <img
                :src="icon_fox"
                style="width:54px;height: 48px;right: 40px;top: 5px;position: absolute;"
              />
            </div>
            <div class="div-select-wallet" style="margin-top:40px;" @click="clickWalletConnect">
              WalletConnect
              <img
                :src="icon_wifi"
                style="width:54px;height: 35px;right: 40px;top: 12px;position: absolute;"
              />
            </div>
            <div style="width:54px;height: 64px;"></div>
          </div>
        </div>
        <div v-show="isMobile">
          <div style="width: 8.27rem;position: relative; ">
            <img
              :src="close"
              style="width: 0.3rem;height: 0.3rem;left: 0.36rem;top: 0.36rem;position: absolute;z-index: 999;"
              @click="OnOnCloseSelectWalletDialog()"
            />
          </div>
          <div
            style="width: 8.27rem;position: relative;font-size: 0.21rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-top: 0.3rem;text-align: center;"
          >Connect Wallet</div>

          <div
            style="width: 6.8rem; height:0.8rem; background: #FFFFFF;border-radius: 0.13rem;margin: 0.6rem auto 0rem auto;position: relative;
                line-height: 0.8rem;padding-left:0.3rem;font-size: 0.19rem;font-family: Selawik;font-weight: 600;color: #000000;"
            @click="clickMetaMusk()"
          >
            MetaMusk
            <img
              :src="icon_fox"
              style="width:0.54rem;height: 0.41rem;right: 0.5rem;top: 12px;position: absolute;top:0.19rem"
            />
          </div>

          <div
            style="width: 6.8rem; height:0.8rem; background: #FFFFFF;border-radius: 0.13rem;margin: 0.6rem auto 0rem auto;position: relative;
                line-height: 0.8rem;padding-left:0.3rem;font-size: 0.19rem;font-family: Selawik;font-weight: 600;color: #000000;"
            @click="clickWalletConnect()"
          >
            WalletConnect
            <img
              :src="icon_wifi"
              style="width:0.54rem;height: 0.41rem;right: 0.5rem;top: 12px;position: absolute;top:0.19rem"
            />
          </div>

          <div style="width:3rem;height:1rem"></div>
        </div>
      </div>
    </my-dialog>
    <WhitelistTransferDialog :is-show="showWhitelistTransferDialog"    @clickCloseDialog="clickCloseDialog"/>
    <MessageTipOkDialog    ref="messageTipOkDialog" />
    <MessageTipWarnDialog   ref="messageTipWarnDialog" />
    <MessageTipErrorDialog   ref="messageTipErrorDialog" />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import {
  close,
  h5_menu,
  metamask,
  sat_icon,
  icon_fox,
  icon_wifi,
  icon_down_arrow,
  gif, icon_coin_matic, icon_coin_test_sat, icon_coin_test_usdc, icon_coin_test_matic, icon_coin5
} from "@/utils/images";

import Cookies from "js-cookie";
import {
  addWatchAsset,
   initConnection, MintTestCoin, walletDisConnect,
} from "../../../utils/Wallet";

import MyDialog from "@/views/components/myDialog";
import WhitelistTransferDialog from "@/views/layout/components/WhitelistTransferDialog";
import MessageTipOkDialog from "@/views/layout/components/MessageTipOkDialog";
import MessageTipWarnDialog from "@/views/layout/components/MessageTipWarnDialog";
import MessageTipErrorDialog from "@/views/layout/components/MessageTipErrorDialog";
import * as publicJs from "@/utils/public";
export default {
  name: "Header",
  components: {
    MyDialog,
    WhitelistTransferDialog,
    MessageTipOkDialog,
    MessageTipWarnDialog,
    MessageTipErrorDialog
  },
  data() {
    return {
      close,
      gif,
      sat_icon,
      icon_down_arrow,
      h5_menu,
      metamask,
      icon_fox,
      icon_wifi,
      icon_coin_matic: icon_coin_matic,
      icon_coin_test_sat: icon_coin_test_sat,
      icon_coin_test_usdc: icon_coin_test_usdc,
      icon_coin_test_matic: icon_coin_test_matic,
      icon_coin5,
      loops: "",
      firstRun: true,
      loading: "",
      showIdailog: false,
      showHd4: false,
      showHD5: false,
      tab: 1,
      isZh: true,
      isShowMenu: false,
      interval: "",
      chainId: 1,

      staValve: 0,
      isShowAddWallet: false,
      showSelectWalletDialog: false,

      showWhitelistTransferDialog:false,

      configData: {
        chainId: 0
      },
    };
  },
  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile,
      address: state => state.wallet.address,
      satBalance: state => state.wallet.sat_balance,
      balance: state => state.wallet.balance,
      whitelist_og_counter: state => state.wallet.whitelist_og_counter,
      sAsset: state => state.sAsset,
      ido: state => state.ido,
      usdc_balance: state => state.wallet.usdc_balance,
    }),
    ...mapGetters({
      is_connected: "is_connected"
    }),
    satBalance_show(){
      return (this.satBalance/this.ido.public_sale.sale_token_scala).toFixed(2)
    },
    crash_balance_show(){
      return publicJs.toBigNumber(this.usdc_balance).dividedBy(10**6).toFixed(3);
    },
    matic_Balance_show(){
      return publicJs.toBigNumber(this.balance).dividedBy(10**18).toFixed(3);
    },
    DAIBalanceOfUser_show(){
      return publicJs.toBigNumber(this.sAsset.DAIBalanceOfUser).dividedBy(10**this.sAsset.DAIDecimals).toFixed(3);
    }
  },

  created() {

  },
  mounted() {
    this.clickMetaMusk();
  },

  methods: {
    async addSatCoin() {
     await addWatchAsset(this.ido.og_sale.sale_token_address,this.ido.og_sale.sale_token_symbol,18);
     await addWatchAsset(this.ido.og_sale.cash_address,this.ido.og_sale.cash_symbol,6);
     await addWatchAsset(this.sAsset.contract.DAI,this.sAsset.DAISymbol,this.sAsset.DAIDecimals);
    },

    async OnClaimTestCoin() {
      await MintTestCoin(this.ido.og_sale.cash_address);
      await MintTestCoin(this.sAsset.contract.DAI);
    },


    goLink(url) {
        window.open(url);
    },
    clickCloseDialog(){
      this.showWhitelistTransferDialog = false
    },

    onClickOptionItem(){
       // this.$refs.messageTipWarnDialog("coming soon " + value);
    },
    showWhitelistClick(){
      this.showWhitelistTransferDialog = true
      this.isShowAddWallet = false;
    },
     OnDisConnectWalletBtn(){
      if(this.isMobile){
        this.isShowAddWallet=true ;
      }else{
        if(this.is_connected){
          walletDisConnect();
        }
      }


    },
    disconnectWallet(){
      if(this.is_connected){
        walletDisConnect();
        this.isShowAddWallet=false ;
      }
    },
     OnConnectWalletBtn() {
     this.showSelectWalletDialog = true;
     this.showWhitelistTransferDialog = false;

    },
    async OnOnCloseSelectWalletDialog() {
      this.showSelectWalletDialog = false;
    },

    onShowMenu() {
      this.$bus.$emit("formBus", true);
    },
    async clickMetaMusk() {
      try {
        let ret = await initConnection("meta_mask");
        if (!ret) {
          this.$refs.messageTipErrorDialog.showClick("connect meta mask failed !");
        }
      } catch (e) {
        this.$refs.messageTipErrorDialog.showClick(e.message);
      } finally {
        await this.OnOnCloseSelectWalletDialog();
      }

    },


    async clickWalletConnect() {
      let ret = await initConnection("wallet_connect");
      if(!ret){
        this.$refs.messageTipErrorDialog("wallet connect failed !");
      }
      await this.OnOnCloseSelectWalletDialog();
    },


    changeLang() {
      let code = Cookies.get("lang");
      if (this.isZh) {
        code = "en";
      } else {
        code = "zh-CN";
      }

      this.isZh = !this.isZh;
      switch (code) {
        case "zh":
          code = "zh-CN";
          break;
        case "en":
          code = "en";
          break;
        default:
          break;
      }
      Cookies.set("lang", code, { expires: 31 });
      localStorage.setItem("language", code);
      this.$store.dispatch("setLanguage", code);
      this.$i18n.locale = code;
    },

    onClickShowMenu() {
      this.isShowMenu = !this.isShowMenu;
    },

  }
};
</script>

<style lang="scss" scoped>
.h5-add-wallet-btn {
  cursor: pointer;
  font-size: 0.32rem;
  font-family: Selawik;
  font-weight: 400;
  color: #808080;
  width: 7.87rem;
  height: 1.07rem;
  margin: 8rem auto 0rem auto;
  border: 1px solid #808080;
  position: relative;
  text-align: center;
  line-height: 1.07rem;
}
.h5-add-wallet-btn:hover {
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
}

.h5-add-wallet-blue-btn {
  cursor: pointer;
  font-size: 0.32rem;
  font-family: Selawik;
  font-weight: 400;
  color: #ffffff;
  width: 7.87rem;
  height: 1.07rem;
  margin: 0.6rem auto 0rem auto;
  border: 1px solid #0792E3;
  background: #0792E3;
  position: relative;
  text-align: center;
  line-height: 1.07rem;
}
.h5-add-wallet-blue-btn:hover {
  background: #91cbee;
}
.h5-disconnect-wallet-btn{
  cursor: pointer;
  font-size: 0.4rem;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
  width: 5.4rem;
  height: 1.07rem;
  margin: 6rem auto 0rem auto;
  border: 1px solid #808080;
  position: relative;
  text-align: center;
  line-height: 1.07rem;
  position: fixed;
  bottom: 1rem;
  left: 2.3rem;
  border-radius: 0.13rem;
}
.h5-disconnect-wallet-btn:hover {
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
}
.spanner-item-p{
  width: 770px;height: 50px; background: #7ECEF4;display: flex;z-index: 999;
}
.spanner-item-n{
  width: 770px;height: 50px; background: #FFFFFF;display: flex;z-index: 999;
}
.h5-coin-name{
  position: absolute;left: 1.4rem;font-size: 0.32rem;font-family: Selawik;font-weight: bold;color: #FFFFFF;top: 0.3rem;
}
.h5-coin-balance{
  position: absolute;right: 0rem;font-size: 0.32rem;font-family: Selawik;font-weight: bold;color: #FFFFFF;top: 0.3rem;
}
.add-wallet-btn {
  margin: 20px auto 0px auto;
  font-size: 14px;
  font-family: Selawik;
  font-weight: 400;
  color: #808080;
  cursor: pointer;
  width: 260px;
  height: 40px;
  background: #242424;
  border: 2px solid #313131;
  text-align: center;
  line-height: 40px;
}
.add-wallet-btn:hover {
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
}
.whitelist-wallet-btn{
  margin: 20px auto 0px auto;
  font-size: 14px;
  font-family: Selawik;
  font-weight: 400;
  color: #D9D9D9;
  cursor: pointer;
  width: 260px;
  height: 40px;
  background: #0792E3;
  text-align: center;
  line-height: 40px;
  //border: 2px solid #313131;
}
.whitelist-wallet-btn:hover {
  background: #4ebaf8;
}

.h5-whitelist-wallet-btn {
  cursor: pointer;
  font-size: 0.32rem;
  font-family: Selawik;
  font-weight: 400;
  color: #D9D9D9;
  width: 7.87rem;
  height: 1.07rem;
  margin: 0.8rem auto 0rem auto;
  border: 1px solid #0792E3;
  position: relative;
  text-align: center;
  line-height: 1.07rem;
  background: #0792E3;
}
.h5-whitelist-wallet-btn:hover {
  background: #4ebaf8;
}
.div-header-menu-btn {
  cursor: pointer;
  width: 1.07rem;
  height: 0.99rem;
  background: linear-gradient(-45deg, #4a3e48 0%, #25434a 100%);
  border-radius: 0.27rem;
  top: 0.27rem;
  left: 0.53rem;
  position: absolute;
}
.div-header-menu-btn:hover {
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
}
.div-select-wallet {
  cursor: pointer;
  width: 600px;
  height: 60px;
  background: #ffffff;
  border-radius: 10px;
  margin: 60px auto 0px auto;
  position: relative;
  line-height: 60px;
  padding-left: 25px;
  font-size: 16px;
  font-family: Selawik;
  font-weight: 600;
  color: #000000;
}
.div-select-wallet:hover {
  background: #7ecef4;
}
.div-header-connect-btn {
  position: absolute;
  right: 0.53rem;
  top: 0.27rem;
  cursor: pointer;
  text-align: center;
  line-height: 0.99rem;
  width: 3.73rem;
  height: 0.99rem;
  background: linear-gradient(-45deg, #4a3e48 0%, #25434a 100%);
  border-radius: 0.27rem;
  font-size: 0.32rem;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
}
.div-header-connect-btn:hover {
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
}

.pc-div-btn1 {
  width: 160px;
  height: 40px;
  background: #242424;
  border-radius: 5px;
  line-height: 40px;
  text-align: center;
  position: absolute;
  right: 16px;
  top: 21px;
  font-size: 16px;
  font-family: Selawik;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
}
.pc-div-btn1:hover {
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
}

.pc-div-btn2 {
  cursor: pointer;
  display: flex;
  padding-right: 30px;
  position: absolute;
  right: 192px;
  top: 21px;
  height: 40px;
  background: #242424;
  border-radius: 5px;
  line-height: 40px;
  font-size: 16px;
  font-family: Fredoka One;
  font-weight: 400;
  color: #ffffff;
}

.pc-div-btn2-item {
  display: none;
  z-index: 999;
  position: absolute;
  right: 0px;
  top: 42px;
  width: 300px;
  height:460px;
  background: #242424;
  border-radius: 10px;
}
pc-div-btn2-item:hover {
  display: inline-block;
}
.pc-div-btn2:hover .pc-div-btn2-item {
  display: inline-block;
}
.pc-div-btn2-item0 {
  font-size: 14px;
  font-family: Selawik;
  font-weight: 400;
  color: #808080;
  padding-left: 20px;
  padding-top: 10px;
}
.pc-div-btn2-item0:hover .pc-div-btn2-item {
  display: inline-block;
}
.pc-div-btn2-item1 {
  display: flex;
  padding: 10px 20px;
  position: relative;
}
.pc-div-btn2-item1:hover .pc-div-btn2-item {
  display: inline-block;
}

.pc-div-btn2-item2 {
  width: 25px;
  height: 25px;
}
.pc-div-btn2-item2:hover .pc-div-btn2-item {
  display: inline-block;
}

.pc-div-btn2-item3 {
  font-size: 16px;
  font-family: Selawik;
  font-weight: 400;
  color: #ffffff;
  line-height: 1.5;
  margin-left: 20px;
}
.pc-div-btn2-item3:hover .pc-div-btn2-item {
  display: inline-block;
}

.pc-div-btn2-item4 {
  position: absolute;
  right: 20px;
  top: 0px;
  font-size: 14px;
  font-family: Selawik;
  font-weight: 400;
  color: #ffffff;
}
.pc-div-btn2-item4:hover .pc-div-btn2-item {
  display: inline-block;
}

.pc-div-btn2-item5 {
  position: absolute;
  right: 20px;
  //top: 20px;
  line-height: 1.5;
  font-size: 10px;
  font-family: Selawik;
  font-weight: 400;
  color: #808080;
}
.pc-div-btn2-item5:hover .pc-div-btn2-item {
  display: inline-block;
}

.pc-div-btn2-item:hover {
  display: inline-block;
}

.popu{


}
.pc-dialog-div-popu-content{
  width: 770px;background: #FFFFFF; border-radius: 5px;margin: 0px auto 0px auto;display: none;  z-index: 999;
}
.pc-dialog-div-popu{
  width: 770px;min-height: 50px;background: #FFFFFF; border-radius: 5px;margin: 80px auto 0px auto;

}


.popu:hover   .pc-dialog-div-popu-content {

  display: block;
  z-index: 999;
}
.pc-dialog-div-popu-content:hover {
  display: block;
}


.el-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  box-shadow: 0 0 0.16rem rgba(0, 0, 0, 0.7);
}

::v-deep.el-dialog__headerbtn .el-dialog__close {
  color: #242424;
}
::v-deep.el-dialog__header {
  padding: 0px 0px;
}
::v-deep .el-dialog__body {
  padding: 0px 0px;
  color: #242424;
  font-size: 14px;
  word-break: break-all;
}
::v-deep.el-dialog {
  background-color: #242424;
  box-shadow: 0 0 0.16rem rgba(0, 0, 0, 0.7);
  //box-shadow: 0px 3px 9px 0px rgba(231, 87, 121, 0.56);
  /*  font-size: 0.32rem;
    color: #fff;*/
  /*  border-radius: 0.4rem;*/
  //width: 830px;
  //height: 600px;

  border-radius: 20px;
}
::v-deep.el-message {
  margin-top: 400px !important;
}
.el-message {
  margin-top: 400px !important;
}
</style>
