<template>
  <div>
      <div v-show="this.isShowMenu&&isMobile" >
        <div  class="lm_wrap" v-show="tabIndex == 0" >
        <div class="div-left">
          <div style=" padding-top: 1.5rem;padding-left: 0.99rem;display: flex;">
            <img :src="pc_logo"  style="width: 0.84rem;height:0.46rem;"    />
            <span style="font-size: 0.4rem;font-family: Noto Serif; font-weight: bold; color: #FFFFFF;padding-left: 0.56rem;">SynAssets</span>
          </div>

          <div style="margin-top: 1.8rem;" class="h5-line" ></div>
          <div class="h5-tab" @click="onClickMenu(1)">
            <div style="width: 2rem">
              <img :src="h5_left_img1"  style="width: 0.96rem;height: 0.51rem;margin-left: 0.9rem; margin-top: 0.4rem;"    />
            </div>

            <div style="margin-left: 0.5rem;width: 3rem;">Dashboard</div>
          </div>
          <div class="h5-line"></div>
          <div class="h5-tab" @click="onClickMenu(2)" >
            <div style="width: 2rem">
              <img :src="h5_left_img2"  style="width: 0.76rem;height: 0.48rem;margin-left: 1rem; margin-top: 0.4rem;"    />
            </div>
            <div style="margin-left: 0.5rem;width: 3rem;">IDO</div>
          </div>
          <div class="h5-line"></div>

          <div :class="currency=='POLYGON' ? 'h5-tab1':'h5-tab'" @click="onClickMenu(3)" >
            <div style="width: 2rem">
              <img :src="h5_left_img3"  style="width: 0.64rem;height: 0.56rem;margin-left: 1rem; margin-top: 0.4rem;"    />
            </div>
            <div style="margin-left: 0.5rem;width: 3rem;">sMATIC</div>
          </div>
          <div class="h5-line"></div>


          <div  :class="currency=='ETH' ? 'h5-tab1':'h5-tab'"  @click="onClickMenu(4)" >
            <div style="width: 2rem">
              <img :src="h5_left_img4"  style="width: 0.48rem;height: 0.78rem;margin-left: 1rem; margin-top: 0.3rem;"    />
            </div>
            <div style="margin-left: 0.5rem;width: 3rem;">sETH</div>
          </div>
          <div class="h5-line"></div>

          <div  :class="currency=='UNI' ? 'h5-tab1':'h5-tab'"  @click="onClickMenu(5)" >
            <div style="width: 2rem">
              <img :src="h5_left_img5"  style="width: 0.68rem;height: 0.79rem;margin-left: 1rem; margin-top: 0.25rem;"    />
            </div>
            <div style="margin-left: 0.5rem;width: 3rem;">sUNI</div>
          </div>
          <div class="h5-line"></div>


          <div  :class="currency=='DOT' ? 'h5-tab1':'h5-tab'"  @click="onClickMenu(6)" >
            <div style="width: 2rem">
              <img :src="h5_left_img6"  style="width: 0.48rem;height: 0.56rem;margin-left: 1rem; margin-top: 0.4rem;"    />
            </div>
            <div style="margin-left: 0.5rem;width: 3rem;">sDOT</div>
          </div>
          <div class="h5-line"></div>


          <div class="h5-tab"  @click="onClickMenu(7)">
            <div style="width: 2rem">
              <img :src="h5_left_img7"  style="width: 0.59rem;height: 0.13rem;margin-left: 1rem; margin-top: 0.58rem;"    />
            </div>
            <div style="margin-left: 0.5rem;width: 3rem;">More</div>
          </div>
          <div class="h5-line"></div>

          <div  @click="goLink(5)"    style="cursor: pointer;width: 7.4rem;position: fixed;bottom: 2.7rem;text-align: center;font-size: 0.32rem;font-family: Selawik; font-weight: 600; color: #FFFFFF;text-decoration: underline;">
            Docs
            </div>
        <div style="position: fixed;bottom: 0.93rem;display: flex">
          <img :src="h5_left_img8"  style="width: 0.59rem;height: 0.51rem;margin-left: 1rem; "  @click="goLink(1)"    />
          <img :src="h5_left_img9"  style="width: 0.62rem;height: 0.59rem;margin-left:0.9rem; "  @click="goLink(2)"    />
          <img :src="h5_left_img10"  style="width: 0.59rem;height: 0.59rem;margin-left: 0.9rem; "  @click="goLink(3)"   />
          <img :src="h5_left_img11"  style="width: 0.54rem;height: 0.62rem;margin-left: 0.9rem; "   @click="goLink(4)"   />
        </div>
        </div>
        <div class="div_right" @click="closeMenu"></div>
        </div>
        <!--2----->
        <div  class="lm_wrap" v-show="tabIndex == 1" >
          <div class="div-left1" >
            <div style=" padding-top: 1.5rem;padding-left: 0.99rem;display: flex;">
              <img :src="pc_logo"  style="width: 0.84rem;height: 0.46rem;"    />
            </div>

            <div style="margin-top: 1.8rem;" class="h5-line" ></div>
            <div class="h5-tab" @click="onClickMenu(1)">
              <div style="width: 2rem">
                <img :src="h5_left_img1"  style="width: 0.96rem;height: 0.51rem;margin-left: 0.9rem; margin-top: 0.4rem;"    />
              </div>

            </div>
            <div class="h5-line"></div>
            <div class="h5-tab" @click="onClickMenu(2)" >
              <div style="width: 2rem">
                <img :src="h5_left_img2"  style="width: 0.76rem;height: 0.48rem;margin-left: 1rem; margin-top: 0.4rem;"    />
              </div>
            </div>
            <div class="h5-line"></div>

            <div   :class="currency=='POLYGON' ? 'h5-tab1':'h5-tab'"  @click="onClickMenu(3)" >
              <div style="width: 2rem">
                <img :src="h5_left_img3"  style="width: 0.64rem;height: 0.56rem;margin-left: 1rem; margin-top: 0.4rem;"    />
              </div>
            </div>
            <div class="h5-line"></div>


            <div   :class="currency=='ETH' ? 'h5-tab1':'h5-tab'"  @click="onClickMenu(4)" >
              <div style="width: 2rem">
                <img :src="h5_left_img4"  style="width: 0.48rem;height: 0.78rem;margin-left: 1rem; margin-top: 0.3rem;"    />
              </div>
            </div>
            <div class="h5-line"></div>

            <div   :class="currency=='UNI' ? 'h5-tab1':'h5-tab'"  @click="onClickMenu(5)" >
              <div style="width: 2rem">
                <img :src="h5_left_img5"  style="width: 0.68rem;height: 0.79rem;margin-left: 1rem; margin-top: 0.25rem;"    />
              </div>
            </div>
            <div class="h5-line"></div>


            <div   :class="currency=='DOT' ? 'h5-tab1':'h5-tab'"  @click="onClickMenu(6)" >
              <div style="width: 2rem">
                <img :src="h5_left_img6"  style="width: 0.48rem;height: 0.56rem;margin-left: 1rem; margin-top: 0.4rem;"    />
              </div>
            </div>
            <div class="h5-line"></div>


            <div class="h5-tab"  @click="onClickMenu(7)">
              <div style="width: 2rem">
                <img :src="h5_left_img7"  style="width: 0.59rem;height: 0.13rem;margin-left: 1rem; margin-top: 0.58rem;"    />
              </div>
            </div>
            <div class="h5-line"></div>

            <div  @click="goLink(5)"   style="cursor: pointer;width: 2.75rem;position: fixed;bottom: 2.7rem;text-align: center;font-size: 0.32rem;font-family: Selawik; font-weight: 600; color: #FFFFFF;text-decoration: underline;">
              Docs
            </div>
            <div style="position: fixed;bottom: 0.93rem;display: flex">
              <img :src="h5_left_img8"  style="width: 0.59rem;height: 0.51rem;margin-left: 1rem; "    />

            </div>
          </div>
          <div class="div_right1" >
            <div style="display: flex;margin-top: 1.8rem;">
              <img :src="h5_left_img3"  style="width: 0.8rem;height: 0.77rem;margin-left:0.96rem; "   />
              <div style=" font-size: 0.4rem;font-family: Selawik;font-weight: bold;color: #FFFFFF;margin-left: 0.4rem;line-height: 2;">{{OHMSymbol}}-DAO</div>
            </div>

            <div class="div-tab"  @click="onClickMenu(8)" style="margin-top: 1.9rem;">Dashboard</div>
            <div class="div-tab"  @click="onClickMenu(9)" >IDO</div>
            <div class="div-tab"  @click="onClickMenu(10)" >Stake</div>
            <div class="div-tab"  @click="onClickMenu(11)" >Bond</div>
            <div class="div-tab"  @click="onClickMenu(12)" >Calculator</div>
            <div class="div-tab"  @click="onClickMenu(13)" >Consensus Network</div>

          </div>
        </div>
        <!---2-->
      </div>

    <!----->
     <div v-show="!isMobile" style="position: fixed;top: 0px;left: 0px;display: flex;z-index: 999999;height: 100%">
       <!---1---->
       <div style="width: 249px;background: #161616;height: 100%;" v-show="tabPcIndex==0">
           <div style="display: flex;padding-left: 35px;padding-top: 70px;">
             <img :src="pc_logo1"  style="width: 42px;height: 23px;"    />
             <div style=" font-size: 18px;font-family: Noto Serif;font-weight: bold; color: #FFFFFF;margin-left: 20px;">SynAssets</div>
           </div>

         <div class="pc-line" style="margin-top: 65px"></div>
         <div class="pc-tab" @click="onClickMenu(1)" >
           <div style="width: 73px;padding-left: 33px;">
             <img :src="pc_left_img1"  style="width: 36px;height: 19px;margin-left: 2px; margin-top: 16px;"    />
           </div>
           <div style="width: 110px;text-align: left;">Dashboard</div>
         </div>

         <div class="pc-line" ></div>
         <div class="pc-tab" @click="onClickMenu(2)" >
           <div style="width: 73px;padding-left: 33px;">
             <img :src="pc_left_img2"  style="width: 31px;height: 19px;margin-left: 4px; margin-top: 16px;"    />
           </div>
           <div style="width: 110px;text-align: left;">IDO</div>
         </div>

         <div class="pc-line" ></div>
         <div :class="currency=='POLYGON' ? 'pc-tab1':'pc-tab'" @click="onClickMenu(3)" >
           <div style="width: 73px;padding-left: 33px;">
             <img :src="pc_left_img3"  style="width: 24px;height: 21px;margin-left: 8px; margin-top: 15px;"    />
           </div>
           <div style="width: 110px;text-align: left;">sMATIC</div>
         </div>

         <div class="pc-line" ></div>
         <div :class="currency=='ETH' ? 'pc-tab1':'pc-tab'" @click="onClickMenu(4)" >
           <div style="width: 73px;padding-left: 33px;">
             <img :src="pc_left_img4"  style="width: 18px;height: 29px;margin-left: 13px; margin-top: 10px;"    />
           </div>
           <div style="width: 110px;text-align: left;">sETH</div>
         </div>

         <div class="pc-line" ></div>
         <div :class="currency=='UNI' ? 'pc-tab1':'pc-tab'" @click="onClickMenu(5)" >
           <div style="width: 73px;padding-left: 33px;">
             <img :src="pc_left_img5"  style="width: 24px;height: 28px;margin-left: 8px; margin-top: 6px;"    />
           </div>
           <div style="width: 110px;text-align: left;">sUNI</div>
         </div>

         <div class="pc-line" ></div>
         <div :class="currency=='DOT' ? 'pc-tab1':'pc-tab'" @click="onClickMenu(6)" >
           <div style="width: 73px;padding-left: 33px;">
             <img :src="pc_left_img6"  style="width: 18px;height: 21px;margin-left: 13px; margin-top: 15px;"    />
           </div>
           <div style="width: 110px;text-align: left;">sDOT</div>
         </div>

         <div class="pc-line" ></div>
         <div class="pc-tab" @click="onClickMenu(7)" >
           <div style="width: 73px;padding-left: 33px;">
             <img :src="pc_left_img7"  style="width: 22px;height: 5px;margin-left: 10px; margin-top: 21px;"    />
           </div>
           <div style="width: 110px;text-align: left;">More</div>
         </div>


         <div  @click="goLink(5)" style="text-decoration: underline;cursor: pointer; width: 249px;position: fixed;bottom: 90px;text-align: center; font-size: 16px;font-family: Selawik; font-weight: 600; color: #FFFFFF;">Docs</div>




         <div style="display: flex;position: fixed;bottom: 27px;">
           <img :src="pc_twitter_png"  style="width: 22px;height: 19px;margin-left: 30px; cursor: pointer"  @click="goLink(1)"    />
           <img :src="pc_github_png"  style="width: 23px;height: 22px;margin-left: 18px; cursor: pointer "  @click="goLink(2 )"    />
           <img :src="pc_medium_png"  style="width: 22px;height: 22px;margin-left: 18px;  cursor: pointer"  @click="goLink( 3 )"   />
           <img :src="pc_discord_png"  style="width: 20px;height: 23px;margin-left: 18px; cursor: pointer "  @click="goLink(4 )"    />
         </div>

       </div>
       <!----2---->
       <div style="width: 100px;background: #161616;height: 100%;" v-show="tabPcIndex==1">
         <div style="width: 100px;height: 50px;position: relative;margin-top: 70px">
           <img :src="pc_logo1"  style="width: 42px;height: 23px; position: absolute; top: 50%;left: 50%;margin-top: -15px;  margin-left: -26px;"    />
         </div>
         <div class="pc-line100" style="margin-top: 60px;"></div>
         <div class="pc-tab100"  @click="onClickMenu(1)"  >
           <img :src="pc_left_img1"   style="width: 36px;height: 19px; position: absolute; top: 50%;left: 50%;margin-top: -10px;  margin-left: -18px;"    />
         </div>
         <div class="pc-line100" ></div>
         <div class="pc-tab100"  @click="onClickMenu(2)"   >
           <img :src="pc_left_img2"  style="width: 31px;height: 19px; position: absolute; top: 50%;left: 50%;margin-top: -10px;  margin-left: -15px;"    />
         </div>
         <div class="pc-line100" ></div>
         <div :class="currency=='POLYGON' ? 'pc-tab1001':'pc-tab100'"  @click="onClickMenu(3)"  >
           <img :src="pc_left_img3"  style="width: 24px;height: 21px; position: absolute; top: 50%;left: 50%;margin-top: -10px;  margin-left: -12px;"    />
         </div>
         <div class="pc-line100" ></div>
         <div :class="currency=='ETH' ? 'pc-tab1001':'pc-tab100'"  @click="onClickMenu(4)"  >
           <img :src="pc_left_img4"  style="width: 18px;height: 29px; position: absolute; top: 50%;left: 50%;margin-top: -15px;  margin-left: -9px;"    />
         </div>

         <div class="pc-line100" ></div>
         <div :class="currency=='UNI' ? 'pc-tab1001':'pc-tab100'"   @click="onClickMenu(5)" >
           <img :src="pc_left_img5"  style="width: 24px;height: 28px; position: absolute; top: 50%;left: 50%;margin-top: -14px;  margin-left: -12px;"    />
         </div>
         <div class="pc-line100" ></div>
         <div :class="currency=='DOT' ? 'pc-tab1001':'pc-tab100'"  @click="onClickMenu(6)" >
           <img :src="pc_left_img6"  style="width: 18px;height: 21px; position: absolute; top: 50%;left: 50%;margin-top: -10px;  margin-left: -9px;"    />
         </div>
         <div class="pc-line100" ></div>
         <div class="pc-tab100"   @click="onClickMenu(7)"  >
           <img :src="pc_left_img7"  style="width: 22px;height: 5px; position: absolute; top: 50%;left: 50%;margin-top: -2px;  margin-left: -11px;"    />
         </div>
          <div  @click="goLink(5)"   style="cursor: pointer;position: fixed;bottom: 100px;text-align: center;width: 100px; font-size: 16px;font-family: Selawik; font-weight: 600;color: #FFFFFF;text-decoration: underline;">Docs</div>
           <img :src="pc_twitter_png"  @click="goLink(1)"  style="width: 22px;height: 19px;position: fixed;bottom: 27px;left: 38px;cursor: pointer;"    />
       </div>
       <div style="width: 280px;background: rgba(22, 22, 22, 0.7);min-height: 1000px;  border: 1px solid #808080;" v-show="tabPcIndex==1">
         <div style="display: flex;padding-left: 39px;padding-top: 70px;">
           <img :src="pc_left_img3"  style="width: 30px;height: 29px;"    />
           <div style=" font-size: 20px;font-family: Selawik; font-weight: bold; color: #FFFFFF;margin-left: 15px;">{{OHMSymbol}}-DAO</div>
         </div>

         <div :class="twoPcMenuIndex==1?'pc-tab2801':'pc-tab280'"  @click="onClickMenu(8)"  style="margin-top: 60px;">Dashboard</div>
         <div :class="twoPcMenuIndex==2?'pc-tab2801':'pc-tab280'"  class="pc-tab280"  @click="onClickMenu(9)"  >IDO</div>
         <div :class="twoPcMenuIndex==3?'pc-tab2801':'pc-tab280'"  class="pc-tab280"  @click="onClickMenu(10)" >Stake</div>
         <div :class="twoPcMenuIndex==4?'pc-tab2801':'pc-tab280'"  class="pc-tab280"  @click="onClickMenu(11)" >Bond</div>
         <div :class="twoPcMenuIndex==5?'pc-tab2801':'pc-tab280'"  class="pc-tab280"  @click="onClickMenu(12)" >Calculator</div>
         <div :class="twoPcMenuIndex==6?'pc-tab2801':'pc-tab280'"  class="pc-tab280"  @click="onClickMenu(13)" >Consensus Network</div>

       </div>


     </div>
    <MessageTipWarnDialog   ref="messageTipWarnDialog" />
    <MessageTipErrorDialog   ref="messageTipErrorDialog" />
  </div>
</template>

<script>
import Cookies from "js-cookie";

import {  } from "@/utils/Wallet";

import { mapState } from "vuex";
import {pc_logo,h5_left_img1,
  h5_left_img2,
  h5_left_img3,
  h5_left_img4,
  h5_left_img5,
  h5_left_img6,
  h5_left_img7,
  h5_left_img8,
  h5_left_img9,
  h5_left_img10,
  h5_left_img11,
  h5_left_mt_logo,

  pc_left_img1,
  pc_left_img2,
  pc_left_img3,
  pc_left_img4,
  pc_left_img5,
  pc_left_img6,
  pc_left_img7,
  pc_logo1,
  pc_twitter_png,
  pc_github_png,
  pc_medium_png,
  pc_tel,
  pc_discord_png,} from "../../../utils/images";
import {getConfigData} from "../../../utils/Wallet";
import MessageTipWarnDialog from "@/views/layout/components/MessageTipWarnDialog";

import MessageTipOkDialog from "@/views/layout/components/MessageTipOkDialog";
import MessageTipErrorDialog from "@/views/layout/components/MessageTipErrorDialog";

export default {
  name: "leftMenu",
  components: {
    MessageTipWarnDialog,
    MessageTipErrorDialog
  },
  data() {
    return {
      pc_logo,
      h5_left_img1,
      h5_left_img2,
      h5_left_img3,
      h5_left_img4,
      h5_left_img5,
      h5_left_img6,
      h5_left_img7,
      h5_left_img8,
      h5_left_img9,
      h5_left_img10,
      h5_left_img11,
      h5_left_mt_logo,

      pc_left_img1,
      pc_left_img2,
      pc_left_img3,
      pc_left_img4,
      pc_left_img5,
      pc_left_img6,
      pc_left_img7,
      pc_logo1,
      pc_twitter_png,
      pc_github_png,
      pc_medium_png,
      pc_tel,
      pc_discord_png,

      isZh: false,
      isShowMenu: false,

      currentTab: "",
      tabIndex:0,
      tabPcIndex:0,

      twoPcMenuIndex:1,

      currency:'',

      currencyNo:'',
      configData:{}
    };
  },

  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile,
      sAsset: state => state.sAsset,
      language: state => state.app.language
    }),
    OHMSymbol() {
      return this.sAsset.OHMSymbol;
    },
  },
  created() {
    this.$bus.$on("formBus", (to, from) => {
      console.log(''+to+from)
      this.isShowMenu = !this.isShowMenu;
      this.initTab();
    });
    this.configData = getConfigData();
    this.initTab();
  },
  methods: {
    changeLang() {
      let code = Cookies.get("lang");
      //   alert(code);
      //   if (this.isZh) {
      //     code = "en";
      //   } else {
      //     code = "zh-CN";
      //   }

      //   this.isZh = !this.isZh;
      if (!code) {
        code = "zh-CN";
      }
      if (code == "zh-CN") {
        code = "en";
      } else {
        code = "zh";
      }
      switch (code) {
        case "zh":
          code = "zh-CN";
          this.isZh = false;
          break;
        case "en":
          code = "en";
          this.isZh = true;
          break;
        default:
          break;
      }
      Cookies.set("lang", code, { expires: 31 });
      localStorage.setItem("language", code);
      this.$store.dispatch("setLanguage", code);
      this.$i18n.locale = code;
      this.$router.go(0);
      //   alert(code);
    },
    initTab() {
      // Cookies.set("CHAIN_TYPE", "POLYGON", { expires: 31 });
      let CHAIN_TYPE = Cookies.get("CHAIN_TYPE");

      if (!CHAIN_TYPE) {
        this.currency = this.currencyNo;
      }else{
        this.currency = CHAIN_TYPE;
      }

    /*  let path = this.$route.path;
      if (path.indexOf("Home") != -1) {
        this.currentTab = "pool";

      } else if (path.indexOf("staking") != -1) {

        this.currentTab = "staking";
      } else if (path.indexOf("auction") != -1) {

        this.currentTab = "auction";
      } else if (path.indexOf("help") != -1) {

        this.currentTab = "help";
      }*/
    },
    // comeSoon(){
    //   this.$message.info(this.$t('sys.txt1'));
    // },
    //       <div class="menu_item1" @click="onClickMenu('Pool')">Pool</div>
    //   <div class="menu_item1" @click="onClickMenu('Staking')">Staking</div>
    //   <div class="menu_item1" @click="onClickMenu('Auction')">Auction</div>
    //   <div class="menu_item1" @click="onClickMenu('Help')">Help</div>
    async getBalance() {
  /*    const res = await getBalanceOfPolt();
      if (res.status) {
        // alert(res.data);
        this.poltBalance = Number(formatWei(res.data)).toFixed(2);
      }
      const freeRes = await getFreeBalance();
      if (res.status) {
        // alert(res.data);
        this.poltFreeBalance = Number(formatWei(freeRes.data)).toFixed(2);
      }*/
    },
    closeMenu() {
      this.isShowMenu = false;
    },
    onCopy() {
      // this.$message.success("Done！");
      this.$refs.messageTipWarnDialog.showClick('Done！ ');
    },
    onError() {
      // this.$message.error("Copy failed!");
      this.$refs.messageTipErrorDialog.showClick('Copy failed! ');
    },
   async onClickMenu(index) {
      this.isShowMenu = false;

      if(index == 1){

      this.tabPcIndex = 0;
        this.tabIndex = 0;
        this.currency = this.currencyNo;
        Cookies.set("CHAIN_TYPE", this.currencyNo, { expires: 31 });
        this.$router.push("/dboard");
      }else if(index == 2){
        this.tabPcIndex = 0;
        this.tabIndex = 0;
        this.currency = this.currencyNo;
        Cookies.set("CHAIN_TYPE", this.currencyNo, { expires: 31 });
        this.$router.push("/ido");
      }else if(index == 3){
        // this.$refs.messageTipWarnDialog.showClick('Coming Soon! ');
        // this.$message.success("Coming Soon!")
        Cookies.set("CHAIN_TYPE", "POLYGON", { expires: 31 });
        this.currency = "POLYGON";
        this.isShowMenu = true;
        this.$router.push("/dashboard").catch(err => {err});
        this.twoPcMenuIndex = 1;
        this.tabPcIndex = 1;
        this.tabIndex = 1;
      }else if(index == 4){
         this.$refs.messageTipWarnDialog.showClick('Coming Soon! ');
        // this.$message.success("Coming Soon!")
        // Cookies.set("CHAIN_TYPE", "ETH", { expires: 31 });
        // this.currency = "ETH";
        // this.isShowMenu = true;
        // this.$router.push("/dashboard").catch(err => {err});
        // this.twoPcMenuIndex = 1;
        /*this.tabPcIndex = 1;
        this.tabIndex = 1;*/
      }else if(index == 5){
        this.$refs.messageTipWarnDialog.showClick('Coming Soon! ');
        // this.$message.success("Coming Soon!")
        // Cookies.set("CHAIN_TYPE", "UNI", { expires: 31 });
        // this.currency = "UNI";
        // this.isShowMenu = true;
        // this.$router.push("/dashboard").catch(err => {err});
        // this.twoPcMenuIndex = 1;
        /*this.tabPcIndex = 1;
       this.tabIndex = 1;*/
      }else if(index == 6){
        this.$refs.messageTipWarnDialog.showClick('Coming Soon! ');
        // this.$message.success("Coming Soon!")
        // Cookies.set("CHAIN_TYPE", "DOT", { expires: 31 });
        // this.currency = "DOT";
        // this.isShowMenu = true;
        // this.$router.push("/dashboard").catch(err => {err});
        // this.twoPcMenuIndex = 1;
        /*this.tabPcIndex = 1;
       this.tabIndex = 1;*/
      }else if(index == 8){
        this.$router.push("/dashboard").catch(err => {err});
        this.twoPcMenuIndex = 1;
      }else if(index == 9){
        //this.$router.push("/coin_ido").catch(err => {err});
        this.$refs.messageTipWarnDialog.showClick('Coming Soon! ');
      }else if(index == 10){
        this.$router.push("/stake").catch(err => {err});
        this.twoPcMenuIndex = 3;
      }else if(index == 11){
        this.$router.push("/bond").catch(err => {err});
        this.twoPcMenuIndex = 4;
      }else if(index == 12){
       // this.$router.push("/calculate").catch(err => {err});
        this.$refs.messageTipWarnDialog.showClick('Coming Soon! ');
      }else if(index == 13){
        this.$router.push("/network").catch(err => {err});
        this.twoPcMenuIndex = 6;
      }


    },

    onClickInvestment() {
      this.isShowInvestment = !this.isShowInvestment;
      if (this.isShowInvestment) {
        this.currentTab = "Investment";
      } else {
        this.initTab();
      }
    },
    onClickContact() {
      this.isShowContact = !this.isShowContact;
      if (this.isShowContact) {
        this.currentTab = "contact";
      } else {
        this.initTab();
      }
    },
    goLink(url) {
      this.isShowMenu = false;
      if(url==1){
        window.open(this.configData.twitter);
      }else if(url==2){
        window.open(this.configData.github);
      }else if(url==3){
        window.open(this.configData.medium);
      }else if(url==4){
        window.open(this.configData.discord);
      }else if(url==5){
        window.open(this.configData.doc);
      }else{
        window.open(url);
      }




    },
    toPage(path) {
      this.$router.push(path);
    }
    // changeLang(type) {
    //   let code = Cookies.get("lang");

    //   switch (type) {
    //     case "zh":
    //       code = "zh-CN";
    //       break;
    //     case "en":
    //       code = "en";
    //       break;
    //     default:
    //       break;
    //   }
    //   Cookies.set("lang", code, { expires: 31 });
    //   localStorage.setItem("language", code);
    //   this.$store.dispatch("setLanguage", code);
    //   this.$i18n.locale = code;
    // }
  }
};
</script>

<style lang="scss" scoped>
.pc-line{
  width: 249px;height: 1px;background: #797979;
}

.pc-tab{
  width: 249px;height: 50px; background: rgba(0, 0, 0, 0.3);
  display: flex;
  line-height: 50px;
  cursor: pointer;
  font-size: 16px;font-family: Selawik;font-weight: 600;color: #FFFFFF;
}
.pc-tab1{
  width: 249px;height: 50px; background:linear-gradient(-45deg, #504551 0%, #3E5153 100%);
  display: flex;
  line-height: 50px;
  cursor: pointer;
  font-size: 16px;font-family: Selawik;font-weight: 600;color: #FFFFFF;
}


.pc-tab:hover{
  background: linear-gradient(-45deg, #504551 0%, #3E5153 100%);
}
.pc-line100{
  width: 100px;height: 1px;background: #797979;
}
.pc-tab100{
  width: 100px;height: 50px;position: relative;
  cursor: pointer;
  background: #000000;
}
.pc-tab1001{
  width: 100px;height: 50px;position: relative;
  cursor: pointer;
  background:linear-gradient(-45deg, #504551 0%, #3E5153 100%);
}


.pc-tab100:hover{
  background: linear-gradient(-45deg, #504551 0%, #3E5153 100%);
}

.pc-tab280{
  width: 200px;height: 40px;background: rgba(0, 0, 0, 0.7); border: 2px solid #808080; border-radius: 10px;margin: 10px auto 0px auto;font-size: 16px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 22px;line-height: 40px;
  cursor: pointer;
}
.pc-tab280:hover{
  background: linear-gradient(-45deg, #504551 0%, #3E5153 100%);
}
.pc-tab2801{
  width: 200px;height: 40px;background:linear-gradient(-45deg, #504551 0%, #3E5153 100%); border: 2px solid #808080; border-radius: 10px;margin: 10px auto 0px auto;font-size: 16px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 22px;line-height: 40px;
  cursor: pointer;
}
.pc-tab2801:hover{
  background: rgba(0, 0, 0, 0.7);
}
@media screen and (max-width: 750px) {
  .lm_wrap {
    position: fixed;
    width: 10rem;
    left: 0rem;
    top: 0rem;
    display: flex;
   .div-left{
     width: 7.47rem;
     min-height: 100%;
     background: #161616;

     .h5-tab{
       width: 7.5rem;height: 1.34rem; background: rgba(0, 0, 0, 0.3);
       display: flex;
       line-height: 1.34rem;
       cursor: pointer;
       font-size: 0.32rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;
     }
     .h5-tab1{
       width: 7.5rem;height: 1.34rem; background: linear-gradient(-45deg, #504551 0%, #3E5153 100%);
       display: flex;
       line-height: 1.34rem;
       cursor: pointer;
       font-size: 0.32rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;
     }
     .h5-tab:hover{
       background: linear-gradient(-45deg, #504551 0%, #3E5153 100%);
     }


     .h5-line{
       width: 7.5rem;height: 0.03rem;background: #797979;
     }
   }
    .div-left1{
      width: 2.75rem;
      min-height: 100%;
      background: #161616;
      border-right-width: 0.03rem;
      border-right-color:  #797979;
      border-right-style: solid;
      .h5-line{
        width: 2.75rem;height: 0.03rem;background: #797979;
      }
    }
    .div_right1 {
      //flex: 1;
      //background-color: rgba(161, 25, 71, 0.55);
      width: 7.25rem;
      min-height: 50rem;
      background: #161616;
      .div-tab{ cursor: pointer;
      width: 5.33rem;height: 1.07rem; background: rgba(0, 0, 0, 0.7); border: 0.07rem solid #797979;  border-radius: 0.13rem;margin: 0.3rem auto 0 auto;
        font-size: 0.32rem;
        font-family: Selawik;
        font-weight: 600;
        color: #FFFFFF;
        padding-left: 0.6rem;
        line-height: 1.07rem;
       }
      .div-tab:hover{
        background: linear-gradient(-45deg, #504551 0%, #3E5153 100%);
      }
    }
    .div_right {
      //flex: 1;
      //background-color: rgba(161, 25, 71, 0.55);
      width: 2.53rem;
      min-height: 50rem;
    }
  }
}
</style>
