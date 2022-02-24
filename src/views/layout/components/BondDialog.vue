<template>
  <div>
    <my-dialog :is-show="isShow" @isClose="closeDialog"  :width="isMobile ? '9.33rem' : '834px'" :pubVue="pubVue">
      <div>
        <div v-show="!isMobile">
          <div class="pc-dialog-div-close">
            <img :src="close" class="pc-dialog-div-close-img" @click="closeDialog" />
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
      <!--  <div v-show="!isMobile">
          <div style="padding-top: 20px;position: relative;">
            <img
                :src="close"
                style="width: 17px;height: 17px;left: 45px;top: 20px;position: absolute;z-index: 999;"
                @click="closeDialog"
            />






            <div style="width:54px;height: 30px;"></div>
          </div>
        </div>

        <div v-show="isMobile">
          <div style="width: 8.27rem;position: relative; ">
            <img
                :src="close"
                style="width: 0.3rem;height: 0.3rem;left: 0.36rem;top: 0.36rem;position: absolute;z-index: 999;"
                @click="closeDialog"
            />
          </div>






        </div>-->
      </div>
    </my-dialog>
    <MessageTipErrorDialog   ref="messageTipErrorDialog" />
    <MessageTipOkDialog   ref="MessageTipOkDialog" />
  </div>
</template>

<script>
import myDialog from "@/views/components/myDialog";

import {close, gif} from "@/utils/images";
import {mapState} from "vuex";
// eslint-disable-next-line no-unused-vars
import {getDATA,isAddress, transfer_white_list} from "@/utils/Wallet";
import MessageTipErrorDialog from "@/views/layout/components/MessageTipErrorDialog";
import MessageTipOkDialog from "@/views/layout/components/MessageTipOkDialog";

export default {
  name: "BondDialog",
  components:{ myDialog ,MessageTipErrorDialog,MessageTipOkDialog},
  data(){
    return {
      close,
      gif,

      showBondDialog:true,
      showBoundPosition:1,
      isBondMenu:true,
      bondInputAmount:'',
    }
  },
  props: {
    // isShow: false,
    isShow: {
      type: Boolean,
      default: false
    },
    pubVue: {
      type: Object
    }
  },
  computed:{
    ...mapState({
      isMobile: state => state.sys.isMobile,

    })
  },

  created() {

  },
  methods:{
    clickTabBond(val){
      this.isBondMenu = val;
    },
    inputChange(){},
    maxValueClick(){},
    goLink(){},
    closeDialog(){
      this.$emit('clickCloseDialog', {});

    },


  }
}
</script>

<style lang="scss" scoped>
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
::v-deep .el-input__inner {
  -webkit-appearance: none;
  background-color: #FFF;
  background-image: none;
  //border-radius:10px;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 50px;
  line-height:50px;
  outline: 0;
  padding:10px;
  -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
}
@media screen and (max-width: 750px){


  .el-select-dropdown__item {
    font-size: 0.18667rem;
    padding: 0 0.26667rem;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 0.93rem;
    line-height: 0.45333rem;
    box-sizing: border-box;
    cursor: pointer;
  }

  /*  .el-input__inner {
      -webkit-appearance: none;
      background-color: #FFF;
      background-image: none;
      border-radius: 0.05333rem;
      border: 1px solid #DCDFE6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 0.93rem;
      line-height: 0.93rem;
      outline: 0;
      padding: 0 0.2rem;
      -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
    }*/

  ::v-deep .el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 0.05333rem;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 0.93rem;
    line-height: 0.53333rem;
    outline: 0;
    padding: 0 0.2rem;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }

}

</style>
