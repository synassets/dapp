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
             <div class="pc-dev-content-up-item">CTD Price</div>
           </div>
           <div style="display: flex">
             <div class="pc-dev-content-down-item">{{'$ --'}}</div>
             <div class="pc-dev-content-down-item">{{'$ --'}}</div>
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
            <div style="display: flex;margin-top: 24px;">
              <div class="pc-div-table-item1">
<!--                <img :src=""  style="width: 63px;height: 38px;margin-left: 5px;" alt />-->
              </div>
              <div style="flex: 1">
                <div class="pc-div-table-item21">MDO-CTD LP</div>
                <div @click="goLink('')"  class="pc-div-table-item22">view contract</div>
              </div>

              <div class="pc-div-table-item3">{{'$ --'}}</div>
              <div class="pc-div-table-item3">{{ '-- %'}}</div>
              <div class="pc-div-table-item3">{{'$ --'}}</div>
              <div class="pc-div-table-item4">
                <div @click="showBound(1)"   class="class_bound" style="z-index: 999">
                  Bond
                </div>
              </div>
            </div>





 <!---3----->
            <div style="display: flex;margin-top: 20px;">
              <div class="pc-div-table-item1">
<!--                <img :src=""  style="width: 38px;height: 38px;margin-left: 24px;" alt />-->
              </div>
              <div  class="pc-div-table-item3">CDT</div>

              <div  class="pc-div-table-item3">{{'$ --'}} </div>
              <div  class="pc-div-table-item3"> {{ '-- %'}}</div>
              <div  class="pc-div-table-item3">{{'$ --'}}</div>
              <div  class="pc-div-table-item4">
                <div @click="showBound(3)"   class="class_bound" style="z-index: 999">
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




      <!----showBondDialog-->
    <my-dialog
          :is-show="showBondDialog"
          @isClose="showBondDialog = false"
          :width="isMobile ? '9.33rem' : '834px'"
        >
      <div v-show="!isMobile">
      <div class="pc-dialog-div-close">
        <img :src="close" class="pc-dialog-div-close-img" @click="showBondDialog = false" />
      </div>

      <div class="pc-dialog-div-header">
        <div style="display: flex">
          <div class="pc-dialog-div-header-up">Treasury Balance</div>
          <div class="pc-dialog-div-header-up">CTD Price</div>
        </div>
        <div style="display: flex">
          <div  class="pc-dialog-div-header-down">{{'$ --'}}</div>

          <div  class="pc-dialog-div-header-down">{{'$ --'}}</div>
        </div>
      </div>


      <div class="pc-bond-tab">
        <div @click="clickTabBond(true)" v-show="isBondMenu" class="pc-bond-tab-left-p">Bond</div>
        <div @click="clickTabBond(true)"  v-show="!isBondMenu" class="pc-bond-tab-left-n">Bond</div>

        <div  @click="clickTabBond(false)"  v-show="!isBondMenu" class="pc-bond-tab-right-p">Redeem</div>
        <div @click="clickTabBond(false)"  v-show="isBondMenu" class="pc-bond-tab-right-n" >Redeem</div>
      </div>

      <div v-show="isBondMenu" class="pc-bond-div-tip1">
        <div style="width: 540px;position: relative;">
          <div  class="pc-bond-div-tip2">
            <div>First time bond CTD?</div>
            <div>Please approve Crypto Dao to use your CTD for bond.</div>
          </div>


          <!--<div class='pc-bond-div-input'>
            <input v-model="bondInputAmount" type="text"  @input="inputChange()"
             class='pc-bond-div-input1'
                    />
            <div  @click="maxValueClick()"  class='pc-bond-div-input-max' >MAX</div>
          </div>-->






        </div>
        <div class="pc-bond-div-btn" >
          Approve
        </div>
        <div class="pc-bond-div-gif" style="">
          <img :src="gif" style="width: 30px;height: 30px;margin-top: 10px;margin-left: 90px;" alt="zh" />
        </div>
        <div class="pc-bond-div-btn" >
          Bond
        </div>

      </div>



      <div  v-show="isBondMenu"  style="width: 690px;margin: 0px auto 0px auto;padding-bottom: 30px;padding-top: 75px">
        <div style="display: flex;">
          <div class="pc-bond-div-detail-left">Your Balance</div>
          <div class="pc-bond-div-detail-right"> {{ '--'}}</div>
        </div>
        <div class="pc-bond-div-detail">
          <div  class="pc-bond-div-detail-left">You Will Get</div>
          <div  class="pc-bond-div-detail-right"> {{ '--'}}</div>
        </div>
        <div class="pc-bond-div-detail">
          <div  class="pc-bond-div-detail-left">Max You Can Buy</div>
          <div  class="pc-bond-div-detail-right"> {{ '--'}}</div>
        </div>
        <div class="pc-bond-div-detail">
          <div  class="pc-bond-div-detail-left">ROI</div>
          <div  class="pc-bond-div-detail-right"> {{ '--'}}</div>
        </div>
        <div class="pc-bond-div-detail">
          <div  class="pc-bond-div-detail-left">Vesting Term</div>
          <div  class="pc-bond-div-detail-right"> {{ '--'}}</div>
        </div>
        <div class="pc-bond-div-detail">
          <div  class="pc-bond-div-detail-left">Minimum purchase</div>
          <div  class="pc-bond-div-detail-right"> {{ '--'}}</div>
        </div>
      </div>

        <div v-show="!isBondMenu"  class="pc-bond-div-btn1">Claim</div>

        <div v-show="!isBondMenu"  class="pc-bond-div-btn1">Claim and Autostake</div>

        <div v-show="!isBondMenu"  style="margin: 20px auto 0px auto; width: 540px;height: 50px; background: #414346; border-radius: 5px;">
          <img :src="gif" style="width: 30px;height: 30px;margin-top: 10px;margin-left: 255px;" alt="zh" />
        </div>

        <div  v-show="!isBondMenu"  style="width: 690px;margin: 0px auto 0px auto;padding-bottom: 30px;padding-top: 30px">
          <div style="display: flex;">
            <div  class="pc-bond-div-detail-left">Pending Rewards</div>
            <div  class="pc-bond-div-detail-right"> {{ '--'}}</div>
          </div>
          <div style="display: flex;padding-top: 6px;">
            <div  class="pc-bond-div-detail-left">Claimable Rewards</div>
            <div  class="pc-bond-div-detail-right"> {{ '--'}}</div>
          </div>
          <div style="display: flex;padding-top: 6px;">
            <div  class="pc-bond-div-detail-left">Time until fully vested</div>
            <div  class="pc-bond-div-detail-right"> {{ ''}}</div>
          </div>
          <div style="display: flex;padding-top: 6px;">
            <div  class="pc-bond-div-detail-left">ROI</div>
            <div  class="pc-bond-div-detail-right"> {{ '--'}}</div>
          </div>
          <div style="display: flex;padding-top: 6px;">
            <div  class="pc-bond-div-detail-left">Vesting Term</div>
            <div  class="pc-bond-div-detail-right"> {{ '--'}}</div>
          </div>
        </div>

      </div>
      <!------h5----->

    </my-dialog>

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
import MyDialog from "@/views/components/myDialog";

import {
  getConfigData,
  getDATA,
  getAddress,

} from "../../utils/Wallet";
export default {
  name: "Index",
  components: {
    MyDialog
  },
  data() {
    return {
      close,
      gif,
      pc_ido_img1,
      address:'',

      showBondDialog:true,
      showBoundPosition:1,
      isBondMenu:true,
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
    clickTabBond(val){
      this.isBondMenu = val;
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
  width: 834px;margin: 0px auto 0px auto;padding-top: 150px;
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
.pc-bond-tab{
  display: flex; width: 280px;margin: 48px auto 0px auto;
}
.pc-bond-tab-left-p{
  width: 130px;height: 35px;border-radius: 10px; background: linear-gradient(-45deg, #5ED1E1 0%, #BFC2FE 50%, #E8BDDB 100%);
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 35px;text-align: center;
}
.pc-bond-tab-left-n{
  width: 130px;height: 35px;border-radius: 10px; background: rgba(115, 115, 115, 0.3);
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 35px;text-align: center;
}
.pc-bond-tab-right-p{
  margin-left:20px;width: 130px;height: 35px;border-radius: 10px; background: linear-gradient(-45deg, #5ED1E1 0%, #BFC2FE 50%, #E8BDDB 100%);
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 35px;text-align: center;
}
.pc-bond-tab-right-n{
  margin-left:20px;width: 130px;height: 35px;border-radius: 10px; background: rgba(115, 115, 115, 0.3);
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 35px;text-align: center;
}
.pc-bond-div-tip1{
  margin:25px auto 0px auto; width: 750px;display: flex;position: relative;
}
.pc-bond-div-tip2{
  width: 500px;height: 50px;position: absolute;top: 0; font-size: 14px;font-family: Selawik;font-weight: 400; color: #808080;text-align: center
}
.pc-bond-div-input{
  width: 500px;height: 50px;background: #FFFFFF;border: 1px solid #FFFFFF;position: absolute;top: 0;border-radius: 5px;
}
.pc-bond-div-input1{
  height:40px;width: 450px;line-height: 40px;padding-left: 10px;position: absolute;top: 5px;font-size: 20px;
}
.pc-bond-div-input-max{
  font-size: 20px;font-family: Fredoka One;font-weight: 400; color: #F94F01;position: absolute;right: 30px;top: 12px;cursor: pointer;
}
.pc-bond-div-btn{
  position: absolute;right: 10px;top: 0px;cursor: pointer; width: 210px;height: 50px;background: #0792E3; border-radius: 5px;z-index: 999;text-align: center;line-height: 50px;color: #FFFFFF;font-size: 20px;font-family: Selawik; font-weight: 600;
}
.pc-bond-div-gif{
  position: absolute;right: 10px;top: 0px;width: 210px;height: 50px;background: #414346; border-radius: 5px;z-index: 999;line-height: 50px;
}
.pc-bond-div-detail{
  display: flex;padding-top: 6px;
}
.pc-bond-div-detail-left{
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 24px;flex: 1;
}
.pc-bond-div-detail-right{
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 24px;flex: 1;text-align: right;
}
.pc-bond-div-btn1{
  margin: 25px auto 0px auto; width: 540px;height: 50px; background: #0792E3; border-radius: 5px;text-align: center;line-height: 50px;font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;
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
