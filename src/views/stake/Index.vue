<template>
  <div style="width: 100%;">
    <!--pc-->
    <div v-show="!isMobile"  class="pc-div-parent">
      <div   class="pc-div-content" >
        <div class="pc-dev-header">
          <div class="pc-dev-title">Single Stake (C, C)</div>
          <div  class="pc-dev-title1" >3 hrs, 47 mins to next rebase</div>
         <div class="pc-dev-content-up">
           <div style="display: flex">
             <div class="pc-dev-content-up-item">APY</div>
             <div class="pc-dev-content-up-item">Total Value Deposited</div>
             <div class="pc-dev-content-up-item">Current Index</div>
           </div>
           <div style="display: flex">
             <div class="pc-dev-content-down-item">{{'$ --'}}</div>
             <div class="pc-dev-content-down-item">{{'$ --'}}</div>
             <div class="pc-dev-content-down-item">{{'$ --'}}</div>
           </div>
         </div>
          <!----->
          <div class="pc-stake-tab">
            <div @click="clickTabStake(true)" v-show="isStakeMenu" class="pc-stake-tab-left-p">Stake</div>
            <div @click="clickTabStake(true)"  v-show="!isStakeMenu" class="pc-stake-tab-left-n">Stake</div>

            <div  @click="clickTabStake(false)"  v-show="!isStakeMenu" class="pc-stake-tab-right-p">Unstake</div>
            <div @click="clickTabStake(false)"  v-show="isStakeMenu" class="pc-stake-tab-right-n" >Unstake</div>
          </div>
          <div  class="pc-stake-div-tip1">
            <div style="width: 540px;position: relative;">
             <div  class="pc-stake-div-tip2">
                <div>First time unstaking sCTD?</div>
                <div>Please approve Crypto Dao to use your sCTD for unstaking.</div>
              </div>

              <!--  <div class='pc-stake-div-input'>
                 <input v-model="bondInputAmount" type="text"  @input="inputChange()"
                  class='pc-stake-div-input1'
                         />
                 <div  @click="maxValueClick()"  class='pc-stake-div-input-max' >MAX</div>
               </div>-->

            </div>
            <div class="pc-stake-div-btn" >
              Approve
            </div>
            <div class="pc-stake-div-gif" >
              <img :src="gif" style="width: 30px;height: 30px;margin-top: 10px;margin-left: 90px;" alt="zh" />
            </div>
            <div class="pc-stake-div-btn" v-show="isStakeMenu">
              Stake
            </div>
            <div class="pc-stake-div-btn" v-show="!isStakeMenu">
              Unstake
            </div>

          </div>





          <div  style="width: 690px;margin: 0px auto 0px auto;padding-bottom: 30px;padding-top: 75px">
            <div style="display: flex;"  v-show="isStakeMenu" >
              <div class="pc-stake-div-detail-left">Your Balance</div>
              <div class="pc-stake-div-detail-right"> {{ '--'}}</div>
            </div>
            <div class="pc-stake-div-detail"  v-show="isStakeMenu" >
              <div  class="pc-stake-div-detail-left">Your Staked Balance</div>
              <div  class="pc-stake-div-detail-right"> {{ '--'}}</div>
            </div>

            <div style="display: flex;"  v-show="!isStakeMenu" >
              <div class="pc-stake-div-detail-left">Unstaked Balance</div>
              <div class="pc-stake-div-detail-right"> {{ '--'}}</div>
            </div>
            <div class="pc-stake-div-detail"  v-show="!isStakeMenu" >
              <div  class="pc-stake-div-detail-left">Staked Balance</div>
              <div  class="pc-stake-div-detail-right"> {{ '--'}}</div>
            </div>
            <div class="pc-stake-div-detail">
              <div  class="pc-stake-div-detail-left" style="color: #808080">Wrapped Balance</div>
              <div  class="pc-stake-div-detail-right"> {{ '--'}}</div>
            </div>
            <div class="pc-stake-div-detail">
              <div  class="pc-stake-div-detail-left"  style="color: #808080">Exchange rate</div>
              <div  class="pc-stake-div-detail-right"> {{ '--'}}</div>
            </div>
            <div class="pc-stake-div-detail">
              <div  class="pc-stake-div-detail-left">Next Reward Amount</div>
              <div  class="pc-stake-div-detail-right"> {{ '--'}}</div>
            </div>
            <div class="pc-stake-div-detail">
              <div  class="pc-stake-div-detail-left">Next Reward Yield</div>
              <div  class="pc-stake-div-detail-right"> {{ '--'}}</div>
            </div>
            <div class="pc-stake-div-detail">
              <div  class="pc-stake-div-detail-left">ROI (5-Day Rate)</div>
              <div  class="pc-stake-div-detail-right"> {{ '--'}}</div>
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


    <!--h5--->
    <div  v-show="isMobile" style="padding-bottom:1rem;width: 100%;min-height:40rem;background: #070707;" >

      <div style="padding-top: 1.8rem;padding-left: 0.8rem;  font-size: 0.48rem; font-family: Selawik;font-weight: 600; color: #0792E3;">Single Stake (S, S)</div>
      <div style="padding-top: 0.15rem;padding-left: 0.8rem;  font-size: 0.32rem; font-family: Selawik;font-weight: 400; color: #808080;">3 hrs, 47 mins to nexst rebase</div>

      <div style="margin-top: 0.8rem;margin-left: 0.8rem;display: flex;">
        <div  @click="clickTabStake(true)"  :class="isStakeMenu?'h5-stake-div-tab-p':'h5-stake-div-tab-n'">Stake</div>
        <div  @click="clickTabStake(false)"  :class="!isStakeMenu?'h5-stake-div-tab-p':'h5-stake-div-tab-n'">Unstake</div>

      </div>
      <div style="width: 100%; height: 14.91rem;background: #242424;padding-top: 0.5rem;">
        <div style="display: flex;font-size: 0.35rem;font-family: Selawik;font-weight: 400; color: #808080;">
          <div style="padding-left: 0.8rem;flex: 1;">APY</div>
          <div style="flex: 1;">Current Index</div>
        </div>

        <div style="display: flex;font-size: 0.48rem;font-family: Selawik;font-weight: 600; color: #ffffff;padding-top: 0.3rem;">
          <div style="padding-left: 0.8rem;flex: 1;">6,217.20%</div>
          <div style="flex: 1;">46.4 sMaic</div>
        </div>
        <div style="padding-left: 0.8rem;padding-top: 0.5rem;font-size: 0.35rem;font-family: Selawik;font-weight: 400; color: #808080;">Total Value Deposited</div>
        <div style="padding-left: 0.8rem;padding-top: 0.3rem;font-size: 0.64rem;font-family: Selawik;font-weight: 600; color: #FFFFFF;">$2,288,357.96</div>


        <div style=" width: 8.4rem; height: 0.93rem;background: #FFFFFF; border-radius: 0.13rem;margin: 0.85rem auto 0rem auto;position: relative;">
          <input
              v-model="bondInputAmount"   placeholder="Amount"
              type="text"
              style="height:0.73rem;width: 3rem;margin-left: 0.2rem;position: absolute;top: 0.1rem;left: 0.1rem"
          />
        </div>

       <div class="h5-stake-div-btn" v-show="isStakeMenu">Stake</div>
        <div class="h5-stake-div-btn" v-show="!isStakeMenu">Unstake</div>

       <div class="h5-stake-div-item" style="margin-top: 0.8rem;"  v-show="isStakeMenu">
         <div style="flex: 2;">Your Balance</div>
         <div style="flex: 3;text-align: right;">0 sMatic</div>
       </div>
        <div class="h5-stake-div-item" style="margin-top: 0.8rem;"  v-show="!isStakeMenu">
          <div style="flex: 2;">Unstaked Balance</div>
          <div style="flex: 3;text-align: right;">0 sMatic</div>
        </div>
        <div class="h5-stake-div-item"  v-show="isStakeMenu">
          <div style="flex: 1;">Your Staked Balance</div>
          <div style="flex: 1;text-align: right;">0 sMatic</div>
        </div>
        <div class="h5-stake-div-item"  v-show="!isStakeMenu" >
          <div style="flex: 1;">Staked Balance</div>
          <div style="flex: 1;text-align: right;">0 sMatic</div>
        </div>
        <div class="h5-stake-div-item" >
          <div style="flex: 2;color: #808080">Wrapped Balance</div>
          <div style="flex: 3;text-align: right;">0 sMatic</div>
        </div>
        <div class="h5-stake-div-item" >
          <div style="flex: 2;color: #808080">Exchange rate</div>
          <div style="flex: 3;text-align: right;color: #808080">1 wMatic = 25.9088 sMatic
          </div>
        </div>
        <div class="h5-stake-div-item" >
          <div style="flex: 1;">Next Reward Amount</div>
          <div style="flex: 1;text-align: right;color: #808080">0 sMatic</div>
        </div>
        <div class="h5-stake-div-item" >
          <div style="flex: 1;">Next Reward Yield</div>
          <div style="flex: 1;text-align: right;">0.6229%</div>
        </div>
        <div class="h5-stake-div-item" >
          <div style="flex: 1;">ROI (5-Day Rate)</div>
          <div style="flex: 1;text-align: right;">9.7629%</div>
        </div>
      </div>

















    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import {
  close,
  gif,
  pc_ido_img1
} from "@/utils/images";
// import MyDialog from "@/views/components/myDialog";


import {
  getConfigData,
  getDATA,
  getAddress,

} from "../../utils/Wallet";
export default {
  name: "Index",
  components: {
    // MyDialog
  },
  data() {
    return {
      close,
      gif,
      pc_ido_img1,
      address:'',


      isStakeMenu:true,
      bondInputAmount:'',
      data:{},
      configData:{},
    };
  },
  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile,
    }),
    inviteLink() {
      return "https://" + window.location.host + "?ref=" + this.myAddress;
    },
    myAddress() {
      return getAddress();
    }
  },
  mounted() {
    this.data =  getDATA();
    this.configData = getConfigData()
    this.address = getAddress();
  },

  methods: {
    clickTabStake(val){
      this.isStakeMenu = val;
    },
    inputChange(){},
    maxValueClick(){},
    goLink(){}
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
.pc-dev-title1{
font-size: 14px;font-family: Selawik; font-weight: 400;color: #FFFFFF;padding-left: 33px;
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
.pc-dialog-div-close{
  padding-top: 20px;position: relative;
}
.pc-dialog-div-close-img{
  width: 17px;height: 17px;margin-left: 15px;
}
.pc-dialog-div-header{
  width: 750px;margin: 50px auto 0px auto;
}
.pc-dialog-div-header-up{
  flex: 1;text-align: center;font-size: 18px;font-family: Lato;font-weight: bold;color: #808080;padding-top: 15px;
}
.pc-dialog-div-header-down{
  flex: 1;text-align: center;font-size: 20px;font-family: Fredoka One;font-weight: bold;color: #FFFFFF;padding-top: 12px;
}
.pc-stake-tab{
  display: flex; width: 280px;margin: 48px auto 0px auto;
}
.pc-stake-tab-left-p{
  width: 130px;height: 35px;border-radius: 10px; background: linear-gradient(-45deg, #5ED1E1 0%, #BFC2FE 50%, #E8BDDB 100%);
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 35px;text-align: center;
}
.pc-stake-tab-left-n{
  width: 130px;height: 35px;border-radius: 10px; background: rgba(115, 115, 115, 0.3);
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 35px;text-align: center;
}
.pc-stake-tab-right-p{
  margin-left:20px;width: 130px;height: 35px;border-radius: 10px; background: linear-gradient(-45deg, #5ED1E1 0%, #BFC2FE 50%, #E8BDDB 100%);
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 35px;text-align: center;
}
.pc-stake-tab-right-n{
  margin-left:20px;width: 130px;height: 35px;border-radius: 10px; background: rgba(115, 115, 115, 0.3);
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 35px;text-align: center;
}
.pc-stake-div-tip1{
  margin:25px auto 0px auto; width: 750px;display: flex;position: relative;
}
.pc-stake-div-tip2{
  width: 500px;height: 50px;position: absolute;top: 0; font-size: 14px;font-family: Selawik;font-weight: 400; color: #808080;text-align: center
}
.pc-stake-div-input{
  width: 500px;height: 50px;background: #FFFFFF;border: 1px solid #FFFFFF;position: absolute;top: 0;border-radius: 5px;
}
.pc-stake-div-input1{
  height:40px;width: 450px;line-height: 40px;padding-left: 10px;position: absolute;top: 5px;font-size: 20px;
}
.pc-stake-div-input-max{
  font-size: 20px;font-family: Fredoka One;font-weight: 400; color: #F94F01;position: absolute;right: 30px;top: 12px;cursor: pointer;
}
.pc-stake-div-btn{
  position: absolute;right: 10px;top: 0px;cursor: pointer; width: 210px;height: 50px;background: #0792E3; border-radius: 5px;z-index: 999;text-align: center;line-height: 50px;color: #FFFFFF;font-size: 20px;font-family: Selawik; font-weight: 600;
}
.pc-stake-div-gif{
  position: absolute;right: 10px;top: 0px;width: 210px;height: 50px;background: #414346; border-radius: 5px;z-index: 999;line-height: 50px;
}
.pc-stake-div-detail{
  display: flex;padding-top: 6px;
}
.pc-stake-div-detail-left{
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 24px;flex: 1;
}
.pc-stake-div-detail-right{
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 24px;flex: 1;text-align: right;
}
.pc-stake-div-btn1{
  margin: 25px auto 0px auto; width: 540px;height: 50px; background: #0792E3; border-radius: 5px;text-align: center;line-height: 50px;font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;
}
.h5-stake-div-tab-p{
  width: 2rem;height: 0.67rem;background: #0792E3; font-size: 0.35rem;font-family: Selawik;font-weight: 600; color: #FFFFFF;text-align: center;line-height: 0.67rem;
}
.h5-stake-div-tab-n{
  width: 2rem;height: 0.67rem;background: #242424; font-size: 0.35rem;font-family: Selawik;font-weight: 600; color: #FFFFFF;text-align: center;line-height: 0.67rem;
}
.h5-stake-div-btn{
  width: 8.4rem;height: 0.93rem;background: #0792E3;border-radius: 0.13rem;text-align: center;line-height: 0.93rem;
  font-size: 0.35rem;font-family: Selawik; font-weight: 600;color: #FFFFFF;
  margin: 0.5rem auto 0rem auto;
}
.h5-stake-div-btn :hover{
  background: #00A0E9;
}
.h5-stake-div-item{
  display: flex;width: 8.4rem;margin: 0.3rem auto 0rem auto; font-size: 0.35rem;font-family: Selawik;font-weight: 400; color: #FFFFFF;}
</style>
