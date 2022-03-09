<template>
  <div style="width: 100%;height: 100%;">
    <!--pc--->
    <div v-show="!isMobile"  style="padding-bottom:20px;width: 100%;min-height: 1500px;background: #161616;padding-top: 170px;">
      <div style="width: 100%; display: flex;">
    <div style="width: 249px;height: 100px;"></div>
        <div style=" width: 1080px; height: 60px;background: #242424;border-radius: 5px;margin: 0px auto;position: relative;">
          <img :src="pc_sum_img1" style="width: 20px;height:  20px;left: 50px;top: 20px;position: absolute;"  />
          <input  v-model="searchText" type="text" placeholder="search"
                  style="height:40px;width: 900px;position: absolute;top: 10px;left: 100px;padding-left: 10px;background:#242424;color: #FFFFFF; "
          />
        </div>
      </div>

      <!---2--->
      <div style="width: 100%;display: flex;">
        <div style="width: 249px;height: 100px;"></div>
        <div style=" width: 1080px;margin: 0px auto;">
          <div style="width: 1080px;height: 40px;background: #242424; border-radius: 5px;display: flex;font-size: 14px;font-family: Selawik;font-weight: 400;color: #808080;">
             <div style=" padding-left: 70px;line-height: 40px;">Token</div>
             <div style=" margin-left: 395px;line-height: 40px;display: flex;">TVL</div>
             <div style=" margin-left: 284px;line-height: 40px;display: flex;">APY</div>
          </div>
         <div class="pc-sum-div-item" @click="goDashboard()">
           <img :src="pc_sum_img2" style="width: 54px;height:  54px;left: 70px;top: 13px;position: absolute;"  />
           <div style="left: 150px;position: absolute;" >
             <div style="font-size: 14px; font-family: Selawik;font-weight: bold; color: #808080;padding-top: 18px;">FMD</div>
             <div style="font-size: 16px;font-family: Selawik; font-weight: bold;color: #FFFFFF;padding-top: 6px;">First Matic DAO</div>
           </div>

           <div style="left: 480px;position: absolute;" >
             <div style="font-size: 14px; font-family: Selawik;font-weight: bold; color: #808080;padding-top: 18px;">TVL</div>
             <div style="font-size: 16px;font-family: Selawik; font-weight: bold;color: #FFFFFF;padding-top: 6px;">$1,720,913,496</div>
           </div>
           <img :src="pc_sum_img3" style="width: 49px;height: 26px;left: 635px;top: 28px;position: absolute;"  />

           <div style="left: 860px;position: absolute;" >
             <div style="font-size: 14px; font-family: Selawik;font-weight: bold; color: #808080;padding-top: 18px;">APY</div>
             <div style="font-size: 16px;font-family: Selawik; font-weight: bold;color: #FFFFFF;padding-top: 6px;">$1,720,913,496</div>
           </div>
           <img :src="pc_sum_img3" style="width: 49px;height: 26px;left: 990px;top: 28px;position: absolute;"  />
         </div>


          <div style="width: 1080px;padding-top: 24px;text-align: center;font-size: 14px;font-family: Selawik; font-weight: 300; color: #0792E3;">Govern</div>



          <div>

          </div>



        </div>
      </div>

      <!----end 2-->

    </div>
<!--   -->
    <!--h5--->
    <div  v-show="isMobile" style="padding-bottom:1rem;width: 100%;min-height:40rem;background: #070707;" >

      <div style="padding-top: 1.8rem;padding-left: 0.9rem;  font-size: 0.48rem; font-family: Selawik;font-weight: 600; color: #0792E3;">Dashboard</div>

      <div style="width: 100%;height: 0.93rem; background: #FFFFFF;margin-top: 0.7rem;position: relative">
        <div style="width: 0.36rem; height: 0.36rem;border: 0.05rem solid #00A0E9;border-radius: 50%;position: absolute;top: 0.28rem;left: 0.8rem;">
          <div style="  width: 0.16rem; height: 0.16rem;background: #00A0E9;border: 0.1rem solid #ffffff;border-radius: 50%;"></div>
        </div>

        <input v-model="searchText" type="text"  @input="inputChange()" placeholder="Search"
               style="height:0.8rem;width: 6rem;line-height: 0.8rem;padding-left: 0.2rem; background: #FFFFFF; position: absolute;left: 1.7rem;top: 0.1rem;"
        />
      </div>


      <div style="display: flex;margin-top: 0.5rem;">
        <div  style="padding-left: 0.8rem; font-size: 0.3rem;font-family: Selawik;font-weight: 600;color: #646464;">sAssets</div>

      </div>

      <div style="margin-top: 0.4rem;width: 100%; height: 5.33rem;background: #242424;padding-top: 0.5rem;">
        <div style="text-align: center;width: 100%;position: relative;font-size: 0.35rem;font-family: Selawik; font-weight: 600; color: #FFFFFF;line-height: 0.8rem;">
          <img
              :src="icon_matic"
              style="width: 0.8rem;height: 0.8rem;left: 0.8rem;top:0rem ;position: absolute;"
          />
          sMatic
        </div>

        <div style="display: flex;padding-top:0.5rem;width: 8.4rem;margin: 0rem auto;">
          <div  class="h5-bond-div-detail-left">Token</div>
          <div  class="h5-bond-div-detail-right"> {{ 'MTD'}}</div>
        </div>

        <div style="display: flex;padding-top:0.3rem;width: 8.4rem;margin: 0rem auto;">
          <div  class="h5-bond-div-detail-left">TVL</div>
          <div  class="h5-bond-div-detail-right"> {{ '$38,294,098.84'}}</div>
        </div>

        <div style="display: flex;padding-top:0.3rem;width: 8.4rem;margin: 0rem auto;">
          <div  class="h5-bond-div-detail-left">APY</div>
          <div  class="h5-bond-div-detail-right"> {{ '4,928.77%'}}</div>
        </div>
        <div class="h5-bond-btn" @click="goDashboard">Join DAO</div>

      </div>

    </div>


  </div>
</template>


<script>
import { mapState } from "vuex";


import {
  pc_sum_img1,
  pc_sum_img2,
  pc_sum_img3, h5_sum_bg, icon_matic
} from "../../utils/images";
export default {
  name: "Index",
  components: {

  },
  data() {
    return {
      h5_sum_bg,
      pc_sum_img1,
      pc_sum_img2,
      pc_sum_img3,
      icon_matic,
      address:'',



      searchText:'',


    };
  },
  computed: {
    ...mapState({

      isMobile: state => state.sys.isMobile,

    }),

  },
  mounted() {

  },

  methods: {
    goDashboard(){
      this.$router.push("/dashboard").catch(err => {err});
    },
    inputChange(){},
    goLink(url) {
      window.open(url);
    },



  }

};
</script>


<style lang="scss" scoped>
.pc-sum-div-item{
  width: 1080px;height: 80px; background: #242424;border-radius: 5px;
  margin-top: 5px;display: flex;position: relative;cursor: pointer;
}
.pc-sum-div-item:hover{
  background: linear-gradient(-45deg, #4A3E48 0%, #25434A 100%);
}
.h5-bond-div-detail-left{
  font-size: 0.35rem;font-family: Selawik;font-weight: 400;color: #808080;flex: 1;
}
.h5-bond-div-detail-right{
  font-size: 0.35rem;font-family: Selawik;font-weight: 600;color: #ffffff;flex: 1;text-align: right;
}
.h5-bond-btn{
  cursor:pointer;
  margin: 0.5rem auto 0rem auto; width: 8.4rem; height: 0.93rem;line-height:0.93rem;  background: #00A0E9;  border-radius: 0.13rem;text-align: center;font-size: 0.35rem;font-family: Selawik;font-weight: 600; color: #FFFFFF;
}
.h5-bond-btn:hover{
  background: #0792E3;
}




</style>
