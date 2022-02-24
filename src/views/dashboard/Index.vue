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



    </div>


  </div>
</template>
<script>
import { mapState } from "vuex";
import {
  close,
  gif,
  pc_ido_img1,
  icon_matic
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
      address:'',

      showBondDialog:false,
      showBoundPosition:1,
      isBondMenu:true,
      bondInputAmount:'',
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
    clickTabBond(val){
      this.isBondMenu = val;
    },
    clickCloseDialog(){
      this.showBondDialog = false
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


.h5-bond-div-detail-left{
  font-size: 0.35rem;font-family: Selawik;font-weight: 400;color: #808080;flex: 1;
}
.h5-bond-div-detail-right{
  font-size: 0.35rem;font-family: Selawik;font-weight: 600;color: #ffffff;flex: 1;text-align: right;
}
.h5-bond-btn{
  margin: 0.5rem auto 0rem auto; width: 8.4rem; height: 0.93rem;line-height:0.93rem;  background: #00A0E9;  border-radius: 0.13rem;text-align: center;font-size: 0.35rem;font-family: Selawik;font-weight: 600; color: #FFFFFF;
}
.h5-bond-btn:hover{
  background: #0792E3;
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
