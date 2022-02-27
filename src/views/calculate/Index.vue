<template>
  <div style="width: 100%;">
    <!--pc-->
    <div v-show="!isMobile"  style="padding-bottom:20px;width: 100%;min-height: 1500px;background: #161616;padding-top: 70px;position: relative;">

      <div style="width: 100%;display: flex;padding-top: 20px;">
        <div style="width: 249px;height: 100px;"></div>
        <div style=" width:834px;margin: 0px auto; padding-bottom: 30px; background: #242424; border-radius: 10px;z-index: 999;">
          <div style="font-size: 24px;font-family: Selawik;font-weight: 600; color: #FFFFFF;padding-top: 25px;padding-left: 30px;">Calculator</div>
          <div style=" font-size: 14px;font-family: Selawik;font-weight: 400; color: #FFFFFF;padding-top: 5px;padding-left: 30px;">Estimate your returns</div>

          <div style="display: flex;margin-top: 30px;">
            <div style="flex: 1;font-size: 18px;font-family: Selawik;font-weight: 400;color: #808080;text-align: center;">-- Price</div>
            <div style="flex: 1;font-size: 18px;font-family: Selawik;font-weight: 400;color: #808080;text-align: center;">Current APY</div>
            <div style="flex: 1;font-size: 18px;font-family: Selawik;font-weight: 400;color: #808080;text-align: center;">Your -- Balance</div>
          </div>

          <div style="display: flex;margin-top: 10px;">
            <div style="flex: 1;font-size: 24px;font-family: Selawik;font-weight: 600;color: #FFFFFF;text-align: center;">--</div>
            <div style="flex: 1;font-size: 24px;font-family: Selawik;font-weight: 600;color: #FFFFFF;text-align: center;">--</div>
            <div style="flex: 1;font-size: 24px;font-family: Selawik;font-weight: 600;color: #FFFFFF;text-align: center;">--</div>
          </div>



          <div style="width: 760px;margin: 50px auto 0px auto;display: flex;">
            <div style="font-size: 12px; font-family: Selawik;font-weight: 400; color: #808080;flex: 1;padding-left: 10px;">MTD amount</div>
            <div style="font-size: 12px; font-family: Selawik;font-weight: 400; color: #808080;flex: 1;padding-left: 40px">APY(%)</div>
          </div>

          <div style="width: 760px;margin: 8px auto 0px auto;display: flex;">
            <div style="width: 370px;height: 50px; background: #FFFFFF;border-radius: 5px;position: relative;">
              <input  v-model="amount" type="text" placeholder="search"
                      style=" font-size: 16px;height:40px;width: 300px;position: absolute;top: 5px;left: 20px;padding-left: 10px;background:#FFFFFF;color: #000000; "
              />
            </div>
            <div style="width: 370px;height: 50px; background: #FFFFFF;border-radius: 5px;margin-left: 30px;position: relative;">
              <input  v-model="apy" type="text" placeholder="search"
                      style=" font-size: 16px;height:40px;width: 300px;position: absolute;top: 5px;left: 20px;padding-left: 10px;background:#FFFFFF;color: #000000; "
              />
            </div>
          </div>


          <div style="width: 760px;margin: 18px auto 0px auto;display: flex;">
            <div style="font-size: 12px; font-family: Selawik;font-weight: 400; color: #808080;flex: 1;padding-left: 10px;">MTD price at purchase ($)</div>
            <div style="font-size: 12px; font-family: Selawik;font-weight: 400; color: #808080;flex: 1;padding-left: 40px">Future MTD market price ($)</div>
          </div>
          <div style="width: 760px;margin: 8px auto 0px auto;display: flex;">
            <div style="width: 370px;height: 50px; background: #FFFFFF;border-radius: 5px;position: relative;">
              <input  v-model="amount" type="text" placeholder="search"
                      style=" font-size: 16px;height:40px;width: 300px;position: absolute;top: 5px;left: 20px;padding-left: 10px;background:#FFFFFF;color: #000000; "
              />
            </div>
            <div style="width: 370px;height: 50px; background: #FFFFFF;border-radius: 5px;margin-left: 30px;position: relative;">
              <input  v-model="apy" type="text" placeholder="search"
                      style=" font-size: 16px;height:40px;width: 300px;position: absolute;top: 5px;left: 20px;padding-left: 10px;background:#FFFFFF;color: #000000; "
              />
            </div>
          </div>
          <div style="width: 750px;margin: 25px auto 0px auto;display: flex;font-size: 14px;font-family: Selawik;font-weight: 600;color: #FFFFFF;">
            30 days
          </div>

          <div style="width: 750px;margin: 10px auto 0px auto;display: flex;">
            <el-slider v-model="progress" style="width: 750px;"></el-slider>
          </div>


          <div class="pc-cal-item" style="margin-top: 20px;">
            Your initial investment
            <div class="pc-cal-item-right">--</div>
          </div>

          <div class="pc-cal-item" >
            Current wealth
            <div class="pc-cal-item-right">--</div>
          </div>

          <div class="pc-cal-item" >
            -- rewards estimation
            <div class="pc-cal-item-right">--</div>
          </div>
          <div class="pc-cal-item" >
            Potential return
            <div class="pc-cal-item-right">--</div>
          </div>


          <div class="pc-cal-item" >
            Potential number of lambos
            <div class="pc-cal-item-right">--</div>
          </div>


        </div>

        <img :src="pc_ido_img1"  style="width: 1135px;height: 294px;position: absolute;top:650px ;left: 110px;"   alt="zh" />

      </div>

      <!----end 2-->

    </div>
    <!--h5-->

    <div  v-show="isMobile" style="padding-bottom:1rem;width: 100%;min-height:40rem;background: #070707;" >

      <div style="padding-top: 1.8rem;padding-left: 0.8rem;  font-size: 0.48rem; font-family: Selawik;font-weight: 600; color: #808080;">Calculate</div>



      <div style="width: 100%;height: 18.7rem;background: #242424;margin-top: 0.8rem;">

        <div style="display: flex;padding-top: 0.5rem;  font-size: 0.35rem; font-family: Selawik; font-weight: 400; color: #808080;">
          <div style="flex: 1;padding-left: 0.8rem;">sMatic Price</div>
          <div style="flex: 1;">Your sMatic Balance</div>
        </div>
        <div style="display: flex;padding-top: 0.2rem;font-size: 0.48rem;font-family: Selawik;font-weight: 600; color: #FFFFFF;">
          <div style="flex: 1;padding-left: 0.8rem;display: flex">
             <div>$1.8</div>
            <div style="font-size: 0.32rem;font-family: Selawik; font-weight: 600;color:#E5004F;margin-left: 0.3rem;padding-top: 0.2rem;">
              +15%
            </div>
          </div>
          <div style="flex: 1;">16,973.98</div>
        </div>
        <div style="padding-left: 0.8rem;padding-top: 0.5rem;  font-size: 0.35rem; font-family: Selawik; font-weight: 400; color: #808080;">Current APY</div>
        <div style="padding-left: 0.8rem;padding-top: 0.4rem;  font-size: 0.64rem; font-family: Selawik; font-weight: 600; color: #FFFFFF;">1246.98%</div>
        <div style="padding-left: 0.8rem;padding-top: 0.5rem;  font-size: 0.35rem; font-family: Selawik; font-weight: 400; color: #808080;">sMatic amount</div>

        <div style=" width: 8.4rem;height: 0.93rem; background: #FFFFFF;border-radius: 0.07rem;margin: 0.2rem auto 0rem auto;position: relative;">
          <input
              v-model="bondInputAmount"   placeholder="--"
              type="text"
              style="height:0.73rem;width: 3rem;margin-left: 0.2rem;position: absolute;top: 0.1rem;left: 0.1rem"
          />
        </div>


        <div style="padding-left: 0.8rem;padding-top: 0.4rem;  font-size: 0.35rem; font-family: Selawik; font-weight: 400; color: #808080;">APY(%)</div>
        <div style=" width: 8.4rem;height: 0.93rem; background: #FFFFFF;border-radius: 0.07rem;margin: 0.2rem auto 0rem auto;position: relative;">
          <input
              v-model="inputApy"   placeholder="--"
              type="text"
              style="height:0.73rem;width: 3rem;margin-left: 0.2rem;position: absolute;top: 0.1rem;left: 0.1rem"
          />
        </div>

        <div style="padding-left: 0.8rem;padding-top: 0.4rem;  font-size: 0.35rem; font-family: Selawik; font-weight: 400; color: #808080;">sMatic price at purchase($)</div>
        <div style=" width: 8.4rem;height: 0.93rem; background: #FFFFFF;border-radius: 0.07rem;margin: 0.2rem auto 0rem auto;position: relative;">
          <input
              v-model="inputPurchaseprice"   placeholder="--"
              type="text"
              style="height:0.73rem;width: 3rem;margin-left: 0.2rem;position: absolute;top: 0.1rem;left: 0.1rem"
          />
        </div>

        <div style="padding-left: 0.8rem;padding-top: 0.4rem;  font-size: 0.35rem; font-family: Selawik; font-weight: 400; color: #808080;">Future sMatic market price($)</div>
        <div style=" width: 8.4rem;height: 0.93rem; background: #FFFFFF;border-radius: 0.07rem;margin: 0.2rem auto 0rem auto;position: relative;">
          <input
              v-model="inputMarketPrice"   placeholder="--"
              type="text"
              style="height:0.73rem;width: 3rem;margin-left: 0.2rem;position: absolute;top: 0.1rem;left: 0.1rem"
          />
        </div>

        <div style="padding-left: 0.8rem;padding-top: 0.4rem;  font-size: 0.35rem;font-family: Selawik;font-weight: 600; color: #FFFFFF;">30 days</div>

        <div style="width: 8.4rem;margin: 0.01rem auto 0rem auto;display: flex;">
          <el-slider v-model="progress" style="width: 8.4rem;"></el-slider>
        </div>



        <div style="display: flex;width: 8.4rem;margin:0.6rem auto 0rem auto;">
          <div class="h5-calculate-item-left">Your initial investment</div>
          <div class="h5-calculate-item-right" >--</div>
        </div>
        <div style="display: flex;width: 8.4rem;margin:0.3rem auto 0rem auto;">
          <div class="h5-calculate-item-left">Current wealth</div>
          <div class="h5-calculate-item-right" >--</div>
        </div>
        <div style="display: flex;width: 8.4rem;margin:0.3rem auto 0rem auto;">
          <div class="h5-calculate-item-left">-- rewards estimation</div>
          <div class="h5-calculate-item-right" >--</div>
        </div>
        <div style="display: flex;width: 8.4rem;margin:0.3rem auto 0rem auto;">
          <div class="h5-calculate-item-left">Potential return</div>
          <div class="h5-calculate-item-right" >--</div>
        </div>
        <div style="display: flex;width: 8.4rem;margin:0.3rem auto 0rem auto;">
          <div class="h5-calculate-item-left" style="flex: 2">Potential number of lambos</div>
          <div class="h5-calculate-item-right" style="flex: 1" >--</div>
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
  pc_ido_img1,
  icon_matic,
  icon_matic_sat_lp,
  icon_contact

} from "@/utils/images";

import {
  getConfigData,
  getDATA,
  getAddress,

} from "../../utils/Wallet";

export default {
  name: "Index",
  components: {

  },
  data() {
    return {
      close,
      gif,
      pc_ido_img1,
      icon_matic,
      icon_matic_sat_lp,
      icon_contact,

      address:'',

      bondInputAmount:'',
      inputApy:'',
      inputPurchaseprice:'',
      inputMarketPrice:'',
      progress:3,
      data:{},
      configData:{},
      searchText:'',
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

    inputChange(){}
  }
};
</script>


<style lang="scss" scoped>
.pc-div-parent{
padding-bottom:1rem;width: 100%;min-height: 1680px;background: #161616;
}
.pc-cal-item{
  width: 760px;margin:15px auto 0px auto;display: flex;font-size: 14px; font-family: Selawik;font-weight: 400;color: #AAAAAA;position: relative;
  .pc-cal-item-right{
    position: absolute;right: 0px;color: #FFFFFF;
  }
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
.h5-calculate-item-left{
  flex: 1;font-size: 0.35rem;font-family: Selawik;font-weight: 600;color: #808080;
}
.h5-calculate-item-right{
  flex: 1;font-size: 0.35rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;text-align: right;
}
::v-deep .el-slider__runway {
  width: 100%;
  height: 16px;
  margin: 5px 0;
  background-color: #E4E7ED;
  border-radius:8px;
  position: relative;
  cursor: pointer;
  vertical-align: middle;
}

::v-deep  .el-slider__button {
  width: 24px;
  height: 24px;
  border: 2px solid #409EFF;
  background-color: #409EFF;
  border-radius: 50%;
  -webkit-transition: .2s;
  transition: .2s;
  user-select: none;
}
::v-deep .el-slider__button-wrapper {
  height: 36px;
  width: 36px;
  z-index: 1001;
  top: -42px;
  transform: translateX(-50%);
  background-color: transparent;
  text-align: center;
  user-select: none;
  line-height: normal;
}
::v-deep .el-slider__bar {
  height: 16px;
  background-color: #409EFF;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  position: absolute;
}
@media screen and (max-width: 750px) {
  ::v-deep .el-slider__runway {
    width: 100%;
    height: 0.21rem;
    margin: 0.21333rem 0;
    background-color: #E4E7ED;
    border-radius: 0.11rem;
    position: relative;
    cursor: pointer;
    vertical-align: middle;
  }

  ::v-deep  .el-slider__button {
    width: 0.37rem;
    height: 0.37rem;
    border: 0.02667rem solid #409EFF;
    background-color: #409EFF;
    border-radius: 50%;
    -webkit-transition: .2s;
    transition: .2s;
    -webkit-user-select: none;
    user-select: none;
  }
  ::v-deep .el-slider__button-wrapper {
    height: 0.48rem;
    width: 0.48rem;
    z-index: 1001;
    top: -0.5rem;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background-color: transparent;
    text-align: center;
    -webkit-user-select: none;
    user-select: none;
    line-height: normal;
  }
  ::v-deep  .el-slider__bar {
    height: 0.21rem;
    background-color: #409EFF;
    border-top-left-radius: 0.04rem;
    border-bottom-left-radius: 0.04rem;
    position: absolute;
  }
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
