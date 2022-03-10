<template>
  <div style="width: 100%;">
    <!--pc-->
    <div v-show="!isMobile"  class="pc-div-parent">

      <div   class="pc-div-content" >
        <div class="pc-dev-header">
          <div class="pc-dev-title">Bond (1, 1)</div>
         <div class="pc-dev-content-up">
           <div style="display: flex">
             <div class="pc-dev-content-up-item">Treasury Balance</div>
             <div class="pc-dev-content-up-item">{{OHMSymbol}} Price</div>
           </div>
           <div style="display: flex">
             <div class="pc-dev-content-down-item">${{marketValueOfTreasuryAssets}}</div>
             <div class="pc-dev-content-down-item">${{OHMPrice}}</div>
           </div>
         </div>
          <!----->
          <div class="pc-dev-table">
            <div style="display: flex;">
              <div class="pc-dev-table-title"></div>
              <div class="pc-dev-table-title">Bond</div>
              <div class="pc-dev-table-title">Price</div>
              <div class="pc-dev-table-title">ROI</div>
              <div class="pc-dev-table-title">Purchased</div>
              <div  style="width: 160px;"></div>
            </div>
  <!---1---->
<!--
            <div style="display: flex;margin-top: 24px;">
              <div class="pc-div-table-item1">
                <img :src="icon_matic_sat_lp"  style="width: 63px;height: 38px;margin-left: 5px;" alt />
              </div>
              <div style="flex: 1">
                <div class="pc-div-table-item21">{{DAISymbol}}-{{OHMSymbol}} LP</div>
                <div @click="viewAddLiquid"  class="pc-div-table-item22">get lp</div>
              </div>

              <div class="pc-div-table-item3">${{OHMDAILPBondPriceDisplay}}</div>
              <div class="pc-div-table-item3">{{OHMDAILPBondROI}}%</div>
              <div class="pc-div-table-item3">${{OHMDAILPBondPurchased}}</div>
              <div class="pc-div-table-item4">
                <div @click="showBound(0)"   class="class_bound" style="z-index: 999">
                  Bond
                </div>
              </div>
            </div>

-->




 <!---3----->
            <div style="display: flex;margin-top: 20px;">
              <div class="pc-div-table-item1">
                <img :src="icon_coin_test_matic"  style="width: 38px;height: 38px;margin-left: 24px;" alt />
              </div>
              <div style="flex: 1">
                <div  class="pc-div-table-item3">{{DAISymbol}}</div>
                <div @click="viewContract(sAsset.contract.DAI)"  class="pc-div-table-item22">view contract</div>
              </div>

              <div  class="pc-div-table-item3">${{DAIBondPriceDisplay}}</div>
              <div  class="pc-div-table-item3"> {{DAIBondROI}}%</div>
              <div  class="pc-div-table-item3">${{DAIBondPurchased}}</div>
              <div  class="pc-div-table-item4">
                <div @click="showBound(1)"   class="class_bound" style="z-index: 999">
                  Bond
                </div>
              </div>
            </div>



          </div>

        </div>
      </div>
      <img
          :src="pc_ido_img1"
          style="width: 1135px;height: 294px;position: fixed;bottom:0px ;left: 110px;"
          alt="zh"
      />

  </div>
    <!--h5-->

    <div  v-show="isMobile" style="padding-bottom:1rem;width: 100%;min-height:40rem;background: #070707;" >

      <div style="padding-top: 1.8rem;padding-left: 0.8rem;  font-size: 0.48rem; font-family: Selawik;font-weight: 600; color: #0792E3;">Bond (1, 1)</div>


      <div style=" width: 100%;height: 4.53rem;background: #242424;margin-top: 0.7rem;">
        <div style="padding-left: 0.8rem;padding-top: 0.5rem;font-size: 0.35rem;font-family: Selawik;font-weight: 400; color: #808080;">{{OHMSymbol}} Price</div>
        <div style="padding-top: 0.3rem;display: flex">
          <div style="padding-left: 0.8rem; font-size: 0.48rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;">${{OHMPrice}}</div>
          <div style="padding-left: 0.3rem; font-size: 0.32rem;font-family: Selawik;font-weight: 600;color: #22AC38;padding-top: 0.2rem;">+15%</div>
        </div>
        <div style="padding-left: 0.8rem;padding-top: 0.5rem;font-size: 0.35rem;font-family: Selawik;font-weight: 400; color: #808080;">Treasury Balance</div>
        <div style="padding-left: 0.8rem;padding-top: 0.3rem;font-size: 0.64rem;font-family: Selawik;font-weight: 600; color: #FFFFFF;">${{marketValueOfTreasuryAssets}}</div>
      </div>


<!--
      <div style="margin-top: 0.8rem; width: 100%; height: 6.67rem; background: #242424; padding-top: 0.5rem;  ">
        <div style="position: relative;">
          <img :src="icon_matic_sat_lp"  style="width: 1.36rem;height: 0.8rem;position: absolute;left: 0.8rem;" alt />
          <div style="position: absolute;left: 2.6rem; font-size: 0.32rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;">{Get-{DAISymbol}}-{{OHMSymbol}} LP</div>
          <div @click="viewAddLiquid">
            <div style="position: absolute;left: 2.6rem;top: 0.5rem; font-size: 0.32rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;">View Asset</div>
            <img :src="icon_contact" style="width: 0.25rem;height: 0.25rem;position: absolute;left: 5rem;top: 0.6rem;" alt />
          </div>
        </div>

        <div style="display: flex;width: 8.4rem;margin:1.5rem auto 0rem auto;">
          <div class="h5-bond-item-left">Price</div>
          <div class="h5-bond-item-right">${{OHMDAILPBondPriceDisplay}}</div>
        </div>

        <div style="display: flex;width: 8.4rem;margin:0.3rem auto 0rem auto;">
          <div class="h5-bond-item-left">ROI</div>
          <div class="h5-bond-item-right" style="color: #E5004F">{{OHMDAILPBondROI}}%</div>
        </div>

        <div style="display: flex;width: 8.4rem;margin:0.3rem auto 0rem auto;">
          <div class="h5-bond-item-left">Duration</div>
          <div class="h5-bond-item-right" >{{OHMDAILPBondDuration}}</div>
        </div>
        <div style="display: flex;width: 8.4rem;margin:0.3rem auto 0rem auto;">
          <div class="h5-bond-item-left">Purchased</div>
          <div class="h5-bond-item-right" >${{OHMDAILPBondPurchased}}</div>
        </div>

        <div class="h5-bond-btn"  @click="showBound(0)">Bond {{DAISymbol}}-{{OHMSymbol}} LP</div>
      </div>
-->


      <div style="margin-top: 0.8rem; width: 100%; height: 6.67rem; background: #242424; padding-top: 0.5rem;  ">
        <div style="position: relative;">
          <img :src="icon_coin_test_matic"  style="width: 0.8rem;height: 0.8rem;position: absolute;left: 0.8rem;" alt />
          <div style="position: absolute;left: 2rem; font-size: 0.32rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;">{{DAISymbol}}</div>
          <div @click="viewContract(sAsset.contract.DAI)">
            <div style="position: absolute;left: 2rem;top: 0.5rem; font-size: 0.32rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;">View Asset</div>
            <img :src="icon_contact" style="width: 0.25rem;height: 0.25rem;position: absolute;left: 4.3rem;top: 0.6rem;" alt />
          </div>
        </div>

        <div style="display: flex;width: 8.4rem;margin:1.5rem auto 0rem auto;">
          <div class="h5-bond-item-left">Price</div>
          <div class="h5-bond-item-right">${{DAIBondPriceDisplay}}</div>
        </div>

        <div style="display: flex;width: 8.4rem;margin:0.3rem auto 0rem auto;">
          <div class="h5-bond-item-left">ROI</div>
          <div class="h5-bond-item-right" style="color: #0792E3">{{DAIBondROI}}%</div>
        </div>

        <div style="display: flex;width: 8.4rem;margin:0.3rem auto 0rem auto;">
          <div class="h5-bond-item-left">Duration</div>
          <div class="h5-bond-item-right" >{{DAIBondDuration}}</div>
        </div>
        <div style="display: flex;width: 8.4rem;margin:0.3rem auto 0rem auto;">
          <div class="h5-bond-item-left">Purchased</div>
          <div class="h5-bond-item-right" >${{DAIBondPurchased}}</div>
        </div>

        <div class="h5-bond-btn"  @click="showBound(1)">Bond {{DAISymbol}}</div>
      </div>


  <!--

      -->

    </div>

    <!----showBondDialog-->
    <BondDialog :is-show="showBondDialog"  :bondIndex="bondIndex"  @clickCloseDialog="clickCloseDialog"/>

  </div>
</template>
<script>
import { mapState } from "vuex";
import {
  close,
  gif,
  pc_ido_img1
  ,
  icon_coin_test_matic,
  icon_matic_sat_lp,
  icon_contact

} from "@/utils/images";
import BondDialog from "@/views/layout/components/BondDialog";
import {
  getConfigData,
  getDATA,
  getAddress,

} from "../../utils/Wallet";
import * as publicJs from "@/utils/public";
export default {
  name: "Index",
  components: {
    BondDialog
  },
  data() {
    return {
      close,
      gif,
      pc_ido_img1,
      icon_coin_test_matic,
      icon_matic_sat_lp,
      icon_contact,

      address:'',

      showBondDialog:false,
      showBoundPosition:1,
      isBondMenu:true,
      bondInputAmount:'',
      data:{},
      configData:{},
      searchText:'',
      bondIndex: 0,
    };
  },
  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile,
      sAsset: state => state.sAsset,
      share_link_url:state => state.wallet.share_link_url,
    }),
    inviteLink() {
     return this.share_link_url;
    },
    myAddress() {
      return getAddress();
    },
    OHMSymbol() {
      return this.sAsset.OHMSymbol;
    },
    DAISymbol() {
      return this.sAsset.DAISymbol;
    },
    OHMPrice() {
      return publicJs.toBigNumber(this.sAsset.USDFragmentsPerOHM).dividedBy(10**this.sAsset.USDDecimals).toFixed(this.sAsset.USDDecimals);
    },
    marketValueOfTreasuryAssets() {
      const t1 = this.sAsset.OHMBalanceOfOHMDAILP * this.sAsset.DAIBalanceOfTreasury / this.sAsset.DAIBalanceOfOHMDAILP;
      const t2 = this.sAsset.OHMDAILPBalanceOfTreasury * this.sAsset.OHMBalanceOfOHMDAILP * 2 / this.sAsset.OHMDAILPTotalSupply;
      const temp  = ((t1 + t2) / 10**this.sAsset.OHMDecimals * this.OHMPrice).toFixed(2)
      return temp;
    },
    OHMDAILPBondPriceDisplay() {
      const DAIPriceOfOHM = this.sAsset.OHMBalanceOfOHMDAILP / this.sAsset.DAIBalanceOfOHMDAILP / 10**this.sAsset.OHMDecimals;
      return (this.sAsset.OHMDAILPBondPriceInUSD * DAIPriceOfOHM * this.OHMPrice).toFixed(this.sAsset.OHMDecimals);
    },
    OHMDAILPBondROI() {
      return ((this.OHMPrice - this.OHMDAILPBondPriceDisplay) / this.OHMDAILPBondPriceDisplay * 100).toFixed(2);
    },
    OHMDAILPBondDuration() {
      const seconds = publicJs.calcBlockSeconds(this.sAsset.OHMDAILPBondTermsVestingTerm)
      return publicJs.prettifySeconds(seconds, 'day');
    },
    OHMDAILPBondPurchased() {
      return (this.sAsset.OHMDAILPBalanceOfTreasury * this.sAsset.OHMBalanceOfOHMDAILP * 2 * this.OHMPrice / this.sAsset.OHMDAILPTotalSupply / 10**this.sAsset.OHMDecimals).toFixed(2);
    },
    DAIBondPriceDisplay() {
      const DAIPriceOfOHM = this.sAsset.OHMBalanceOfOHMDAILP / this.sAsset.DAIBalanceOfOHMDAILP / 10**this.sAsset.OHMDecimals;
      return (this.sAsset.DAIBondPriceInUSD * DAIPriceOfOHM * this.OHMPrice).toFixed(this.sAsset.OHMDecimals);
    },
    DAIBondROI() {
      return ((this.OHMPrice - this.DAIBondPriceDisplay) / this.DAIBondPriceDisplay * 100).toFixed(2);
    },
    DAIBondDuration() {
      const seconds = publicJs.calcBlockSeconds(this.sAsset.DAIBondTermsVestingTerm)
      return publicJs.prettifySeconds(seconds, 'day');
    },
    DAIBondPurchased() {
      return (this.sAsset.OHMBalanceOfOHMDAILP * this.sAsset.DAIBalanceOfTreasury * this.OHMPrice / this.sAsset.DAIBalanceOfOHMDAILP / 10**this.sAsset.OHMDecimals).toFixed(2);
    },
  },
  mounted() {
    this.data =  getDATA();
    this.configData = getConfigData()
    this.address = getAddress();
  },

  methods: {
    viewContract(address) {
      window.open(this.configData.blockExplorerUrls + 'address/' + address)
    },
    viewAddLiquid()
    {
      window.open("https://quickswap.exchange/#/add/0x4c1A52719d507827F8A3353bD0Aaf85BCc5Ce9a9/0x6d77dC834e86855ca1A834Fc65a6393a6aF033a2");
    },
    clickTabBond(val){
      this.isBondMenu = val;
    },
    showBound(bondIndex){
      this.bondIndex = bondIndex
      this.showBondDialog = true;
    },
    clickCloseDialog(){
      this.showBondDialog = false
    },
    inputChange(){},
    maxValueClick(){},
    // calcBlockSeconds(blocks){
    //   const blockRateSeconds = 5.61;
    //   return blocks * blockRateSeconds
    // },
  }
};
</script>


<style lang="scss" scoped>
.pc-div-parent{
padding-bottom:1rem;width: 100%;min-height: 1680px;background: #161616;
}
.pc-div-content{
  width: 834px;margin: 0px auto 0px auto;padding-top: 150px;padding-left: 380px;
}
.pc-dev-header{
  width: 834px;padding-bottom: 30px;background: #242424;border-radius: 10px;
}
.pc-dev-title{
  font-size: 24px;font-family: Fredoka One;font-weight: 600; color: #FFFFFF;padding-left: 33px;padding-top: 25px;
}
.pc-dev-content-up{
  width: 750px;height: 90px;background: #242424;border-radius: 10px;margin: 25px auto 0px auto;
}
.pc-dev-content-up-item{
  flex: 1;text-align: center;font-size: 18px;font-family: Lato;font-weight: bold;color: #808080;padding-top: 15px;
}
.pc-dev-content-down-item{
  flex: 1;text-align: center;font-size: 24px;font-family: Fredoka One;font-weight: bold;color: #FFFFFF;padding-top: 12px;
}
.pc-dev-table{
  width: 750px;margin: 32px auto 0px auto;
}
.pc-dev-table-title{
  font-size: 16px;font-family: Lato;font-weight: bold;color: #808080;flex: 1
}
.pc-div-table-item1{
  flex: 1;font-size: 16px;font-family: Lato;font-weight: bold;color: #F65166;
}
.pc-div-table-item21{
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;
}
.pc-div-table-item22{
  font-size: 12px;font-family: Lato;font-weight: 400;color: #808080;text-decoration: underline;cursor: pointer;
}
.pc-div-table-item3{
  line-height: 2.5;font-size: 16px;font-family: Lato; font-weight: 400;color: #FFFFFF;flex: 1;
}
.pc-div-table-item4{
  line-height: 2.5;font-size: 16px;font-family: Lato; font-weight: 400;color: #101529;flex: 1
}
.class_bound{
  width: 160px;
  height: 35px;
  border: 1px solid #FFFFFF;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-family: Lato;
  font-weight: bold;
  color: #FFFFFF;
  line-height: 35px;

}
.class_bound:hover{
  background: #a6a6a6;
}

.h5-bond-item-left{
  flex: 1;font-size: 0.35rem;font-family: Selawik;font-weight: 600;color: #808080;
}
.h5-bond-item-right{
  flex: 1;font-size: 0.35rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;text-align: right;
}
.h5-bond-btn{
  width: 8.4rem;height: 1.07rem; background: #242424;border: 0.03rem solid #0792E3;border-radius: 0.13rem;margin:0.8rem auto 0rem auto;text-align: center;line-height: 1.07rem;
  font-size: 0.35rem;font-family: Selawik;font-weight: 600;color: #0792E3;
}
.h5-bond-btn:hover{
  background: #0792E3;
  color: #FFFFFF;
}
/*.claim_btn{
cursor: pointer;margin: 25px auto 0px auto;width: 750px;line-height: 56px;height: 56px;background: #C3C6CF;border-radius: 12px;text-align: center;font-size: 20px;font-family: Lato;font-weight: bold;color: #101529;
}
.claim_btn_p{
 margin: 25px auto 0px auto;width: 750px;line-height: 56px;height: 56px;background: #a6a6a6;border-radius: 12px;text-align: center;font-size: 20px;font-family: Lato;font-weight: bold;color: #101529;
}
.claim_btn:hover{
  background: #a6a6a6;
}
.claim_btn1{
  width: 8.53rem;height: 1.33rem; background: #C3C6CF; border-radius: 0.13rem;line-height: 1.33rem ; text-align: center;
  font-size: 0.4rem;
  font-family: Lato;
  font-weight: bold;
  color: #101529;
  margin: 0rem auto 0rem auto;
  cursor: pointer;
}
.claim_btn1_p{
  width: 8.53rem;height: 1.33rem; background: #a6a6a6; border-radius: 0.13rem;line-height: 1.33rem ; text-align: center;
  font-size: 0.4rem;
  font-family: Lato;
  font-weight: bold;
  color: #101529;
  margin: 0rem auto 0rem auto;
}
.claim_btn1:hover{
  background: #a6a6a6;
}
.approve_btnH5{
  width: 8.53rem;height: 1.33rem; background: #C3C6CF; border-radius: 0.13rem;line-height: 1.33rem ; text-align: center;
  font-size: 0.4rem;
  font-family: Lato;
  font-weight: bold;
  color: #101529;
 margin: 0rem auto 0rem auto;
  cursor: pointer;

}
.approve_btnH5_p{
  width: 8.53rem;height: 1.33rem; background: #a6a6a6; border-radius: 0.13rem;line-height: 1.33rem ; text-align: center;
  font-size: 0.4rem;
  font-family: Lato;
  font-weight: bold;
  color: #101529;
  margin: 0rem auto 0rem auto;

}
.approve_btnH5:hover{
  background: #a6a6a6;
}
.approve_btn1{
  cursor: pointer;
font-size: 20px;font-family: Lato;font-weight: bold;color: #101529;width: 217px;height: 56px;background: #C3C6CF;border-radius: 12px;line-height: 56px;text-align: center;margin: 0px auto 0px auto;
}
.approve_btn1:hover{
  background: #a6a6a6;
}
.approve_btn{
text-align: center;line-height: 56px;position: absolute; right: 0px;
width: 210px;height: 56px; background: #C3C6CF; border-radius: 12px;cursor: pointer;font-size: 20px;font-family: Lato;font-weight: bold;color: #101529;
}
.approve_btn_p{
  text-align: center;line-height: 56px;position: absolute; right: 0px;
  width: 210px;height: 56px; background: #a6a6a6; border-radius: 12px;font-size: 20px;font-family: Lato;font-weight: bold;color: #101529;
}
.approve_btn:hover{
  background: #a6a6a6;
}
//.approve_btn2{
//  cursor: pointer;
//  width: 8.53rem;  height: 1.33rem; background: #101529; font-size: 0.4rem;  font-family: Lato;  font-weight: bold;  color: #FFFFFF;border-radius: 12px;line-height: 1.33rem;text-align: center;margin: 0px auto 0px auto;
//}

.approve_btn2:hover{
  background: #a6a6a6;
}
.approve_btn1{
  cursor: pointer;

  font-size: 20px;font-family: Lato;font-weight: bold;color: #FFFFFF;width: 750px;height: 56px;background: #101529;border-radius: 12px;line-height: 56px;text-align: center;margin: 56px auto 0px auto;
}
.approve_btn1x{
  cursor: pointer;

  font-size: 20px;font-family: Lato;font-weight: bold;color: #FFFFFF;width: 750px;height: 56px;background: #a6a6a6;border-radius: 12px;line-height: 56px;text-align: center;margin: 56px auto 0px auto;
}
.approve_btn1:hover{
  background: #a6a6a6;
}

.approve_btn2{
  cursor: pointer;
  width: 8.53rem;  height: 1.33rem; background: #101529; font-size: 0.4rem;  font-family: Lato;  font-weight: bold;  color: #FFFFFF;border-radius: 12px;line-height: 1.33rem;text-align: center;margin: 0.85rem auto 0px auto;
}

.approve_btn2x{
  cursor: pointer;
  width: 8.53rem;  height: 1.33rem; background: #a6a6a6; font-size: 0.4rem;  font-family: Lato;  font-weight: bold;  color: #FFFFFF;border-radius: 12px;line-height: 1.33rem;text-align: center;margin: 0.85rem auto 0px auto;
}

.approve_btn2:hover{
  background: #a6a6a6;
}

.class_bound1{
  cursor: pointer;text-align: center; font-size: 0.4rem;font-family: Lato;font-weight: bold;color: #101529;width: 8.53rem;height: 1.33rem;background: #C3C6CF;border-radius: 0.13rem;
  line-height: 1.33rem;margin: 0.6rem auto 0 auto;
}
.class_bound1:hover{
  background: #a6a6a6;
}
.header_link{
  cursor: pointer;
  text-align: center;
  line-height: 50px;
  position: absolute;
  right: 0px;
  top: 17px;
  width: 200px;
  height: 50px;
  background: #101529;
  border-radius: 10px;
  font-size: 18px;
  font-family: Fredoka One;
  font-weight: 400;
  color: #FFFFFF;
}
.header_link:hover{
  background: #451a1a;
}




.dialog_div1 {
  width: 100%;
  height: 0.1rem;
  position: relative;
  .img1 {
    width: 0.6rem;
    height: 0.6rem;
    top: -0.5rem;
    position: absolute;
  }
}
.sw_dialog {
  img {
    width: 2.13rem;
  }
  .swd_txt {
    color: #121212;
    font-size: 0.32rem;
    margin-top: 0.42rem;
  }
}*/
</style>
