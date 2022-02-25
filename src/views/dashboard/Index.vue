<template>
  <div style="width: 100%;">
    <!--pc-->
    <div v-show="!isMobile"  class="pc-div-parent">


      <img
          :src="pc_ido_img1"
          style="width: 1135px;height: 294px;position: fixed;bottom:0px ;left: 110px;"
          alt="zh"
      />






  </div>
    <!--h5-->
    <div  v-show="isMobile" style="padding-bottom:1rem;width: 100%;min-height:40rem;background: #070707;" >

    <div style="padding-top: 1.8rem;padding-left: 0.9rem;  font-size: 0.48rem; font-family: Selawik;font-weight: 600; color: #808080;">Dashboard</div>

    <div class="h5-div-item" style="margin-top: 0.8rem;">
      <div class="h5-div-item-up" >MTD Price</div>
      <div class="h5-div-item-down" >$1,720,913.67</div>
    </div>

      <div class="h5-div-item" >
        <div class="h5-div-item-up" >TVL</div>
        <div class="h5-div-item-down" >$1,720,913.67</div>
      </div>

      <div class="h5-div-item" >
        <div class="h5-div-item-up" >APY</div>
        <div class="h5-div-item-down" >73,828.30%</div>
      </div>

      <div class="h5-div-item" >
        <div class="h5-div-item-up" >Treasury Balance</div>
        <div class="h5-div-item-down" >$4,771,525,254.43</div>
      </div>
      <div class="h5-div-item" >
        <div class="h5-div-item-up" >Market Cap</div>
        <div class="h5-div-item-down" >$2,477,593,041.56</div>
      </div>
      <div class="h5-div-item" >
        <div class="h5-div-item-up" >Current Index</div>
        <div class="h5-div-item-down" >5.15 MTD</div>
      </div>
      <div class="h5-div-item" >
        <div class="h5-div-item-up" >Back Per MTD</div>
        <div class="h5-div-item-down" >$264.99</div>
      </div>
      <div class="h5-div-item" >
        <div class="h5-div-item-up" >Runaway</div>
        <div class="h5-div-item-down" >455.2 d</div>
      </div>
    </div>


  </div>
</template>
<script>
import { mapState } from "vuex";
import {

  pc_ido_img1,

} from "@/utils/images";

import {
  getConfigData,
  getDATA,


} from "../../utils/Wallet";
export default {
  name: "Index",
  components: {

  },
  data() {
    return {

      pc_ido_img1,

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
     return 1;
      //return getAddress();
    }
  },
  mounted() {
    this.data =  getDATA();
    this.configData = getConfigData()

  },

  methods: {

  }
};
</script>


<style lang="scss" scoped>
.pc-div-parent{
padding-bottom:1rem;width: 100%;min-height: 1680px;background: #161616;
}
.h5-div-item{
cursor: pointer; width: 8.4rem; height: 1.45rem; background: #242424; border-radius: 0.13rem;margin: 0.5rem auto 0rem auto;
}

.h5-div-item:hover{
  background: linear-gradient(-45deg, #4A3E48 0%, #25434A 100%);
}
.h5-div-item-up{
  font-size: 0.27rem;font-family: Selawik;font-weight: 600; color: #808080;text-align: center;width:  8.4rem;padding-top: 0.25rem;
}
.h5-div-item-down{
  font-size: 0.48rem;font-family: Selawik;font-weight: bold; color: #FFFFFF;text-align: center;width:  8.4rem;padding-top: 0.02rem;
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
