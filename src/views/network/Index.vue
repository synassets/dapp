<template>
  <div style="width: 100%;">
    <!--pc-->
    <div v-show="!isMobile"  class="pc-div-parent">


      <div style="display: flex;width: 1078px;margin: 0px auto 0px auto;padding-top: 150px;">
        <div style="width: 400px;background: #242424;height: 470px;">
          <div style=" font-size: 16px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 25px;">My Power
            <img
                :src="icon_share"
                style="width: 19px;height: 19px;float: right;margin-right: 40px;cursor: pointer;"

            />
          </div>
          <div style=" font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 30px;padding-top: 5px;">357.66
          </div>
          <div style=" font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 15px;">My PowerRate
          </div>
          <div style=" font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 30px;padding-top: 5px;">2.66 sMatic/s
          </div>
          <div style=" font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 15px;">My Rewards
          </div>
          <div style=" font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 30px;padding-top: 5px;">154.12 sMatic

            <span style="float: right;margin-right: 40px; background: #00A0E9; border-radius: 5px; font-size: 14px;font-family: Selawik; font-weight: bold;color: #FFFFFF;padding-left: 15px;padding-right: 15px;cursor: pointer;">Harvest</span>

          </div>

          <div style=" font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 20px;">My node
          </div>
          <div style="padding-left: 30px;display: flex;margin-top: 10px">
            <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #FFFFFF;">0x135....8492</div>
            <div style=" font-size: 12px;font-family: Selawik; font-weight: 400;color: #00A0E9;margin-left: 17px">.............................................................</div>
            <div style=" width: 8px;height: 8px;border: 1px solid #00A0E9;border-radius: 50%;margin-left: 20px;margin-top: 5px"></div>
            <div style=" font-size: 12px;font-family: Selawik;font-weight: 400; color: #00A0E9; margin-left: 20px;">live</div>
          </div>



        </div>
        <div style="width: 658px;background: #242424;height: 470px;margin-left: 20px;position: relative;">
          <div id="pieChart" style="width: 120px;height: 120px;position: absolute;right:60px;top: 25px "></div>

          <div style=" font-size: 16px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 25px;">Network Power
          </div>
          <div style=" font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 30px;padding-top: 5px;">12,634,357.66
          </div>

          <div style=" font-size: 16px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 20px;">Network PowerRate
          </div>
          <div style=" font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 30px;padding-top: 5px;">25,682.66 sMatic/s
          </div>
          <div style=" font-size: 16px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 20px;">Earnings Formula
          </div>
          <div style=" font-size: 16px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 20px;">Personal_Rewards = Network_PowerRate*Personal_Power/Network_Power
          </div>

          <div style="padding-left: 30px;display: flex;margin-top: 30px">
            <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;">Network Rank</div>
            <div style=" font-size: 12px;font-family: Selawik; font-weight: 400;color: #00A0E9;margin-left: 17px">..........................................................................................................................</div>

          </div>

          <div style="display: flex;padding-left: 30px;padding-right:40px; font-size: 12px; font-family: Selawik;font-weight: 400; color: #808080;padding-top: 20px;">
            <div style="flex: 1;text-align: left;">Address</div>
            <div style="flex: 1;text-align: center;">Node</div>
            <div style="flex: 1;text-align: right;">Power</div>
          </div>
          <div style="display: flex;padding-left: 30px;padding-right:40px; font-size: 18px; font-family: Selawik;font-weight: 400; color: #FFFFFF;padding-top: 5px;">
            <div style="flex: 1;text-align: left;"><span style="color: #00A0E9">1</span>  0xB79....ewh5</div>
            <div style="flex: 1;text-align: center;">2,001</div>
            <div style="flex: 1;text-align: right;">439,567.23
             </div>
          </div>
          <div style="display: flex;padding-left: 30px;padding-right:40px; font-size: 16px; font-family: Selawik;font-weight: 400; color: #FFFFFF;padding-top: 5px;">
            <div style="flex: 1;text-align: left;"><span style="color: #00A0E9">2</span>  0xB79....ewh5</div>
            <div style="flex: 1;text-align: center;">2,001</div>
            <div style="flex: 1;text-align: right;">439,567.23
            </div>
          </div>
          <div style="display: flex;padding-left: 30px;padding-right:40px; font-size: 14px; font-family: Selawik;font-weight: 400; color: #FFFFFF;padding-top: 5px;">
            <div style="flex: 1;text-align: left;"><span style="color: #00A0E9">3</span>  0xB79....ewh5</div>
            <div style="flex: 1;text-align: center;">2,001</div>
            <div style="flex: 1;text-align: right;">439,567.23
            </div>
          </div>
          <div style="display: flex;padding-left: 30px;padding-right:40px; font-size: 12px; font-family: Selawik;font-weight: 400; color: #FFFFFF;padding-top: 5px;">
            <div style="flex: 1;text-align: left;"><span style="color: #00A0E9">4</span>  0xB79....ewh5</div>
            <div style="flex: 1;text-align: center;">2,001</div>
            <div style="flex: 1;text-align: right;">439,567.23
            </div>
          </div>
          <div style="display: flex;padding-left: 30px;padding-right:40px; font-size: 10px; font-family: Selawik;font-weight: 400; color: #FFFFFF;padding-top: 5px;">
            <div style="flex: 1;text-align: left;"><span style="color: #00A0E9">5</span>  0xB79....ewh5</div>
            <div style="flex: 1;text-align: center;">2,001</div>
            <div style="flex: 1;text-align: right;">439,567.23
            </div>
          </div>
        </div>
      </div>

      <img
          :src="pc_ido_img1"
          style="width: 1135px;height: 294px;position: fixed;bottom:0px ;left: 110px;"

      />

  </div>

    <!--h5--->
    <div  v-show="isMobile" style="padding-bottom:1rem;width: 100%;min-height:40rem;background: #070707;" >

      <div style="padding-top: 1.8rem;padding-left: 0.9rem;  font-size: 0.48rem; font-family: Selawik;font-weight: 600; color: #808080;">Consensus Network</div>

     <div style=" width: 100%;height: 10.4rem; background: #242424;margin-top: 0.8rem;padding-top: 0.5rem;">
        <div style="display: flex">
          <div style="flex: 1; font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #808080;padding-left: 0.8rem;">
            My Power
          </div>
          <div style="flex: 1;font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #808080;">
            My PowerRate
          </div>
          <img
              :src="icon_share"
              style="width: 0.29rem;height: 0.29rem;margin-right: 0.8rem;cursor: pointer;margin-top: 0.04rem;"
          />
        </div>

       <div style="display: flex;padding-top: 0.2rem;">
         <div style="flex: 1; font-size: 0.48rem;font-family: Selawik; font-weight: 600;color: #ffffff;padding-left: 0.8rem;">
           357.66
         </div>
         <div style="flex: 1;font-size: 0.48rem;font-family: Selawik; font-weight: 600;color: #ffffff;">
           2.66 sMatic/s
         </div>
         <div
             style="width: 0.29rem;height: 0.29rem;margin-right: 0.8rem;"
         />
       </div>

       <div style="padding-top: 0.5rem; font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #808080;padding-left: 0.8rem;">
         My Rewards
       </div>

       <div style="display: flex;padding-top: 0.4rem; font-size: 0.64rem;font-family: Selawik; font-weight: 600;color: #FFFFFF;width: 100%;position: relative;">
       <div style="padding-left: 0.8rem;">154.12 sMatic</div>

         <div style=" cursor: pointer;position: absolute;right: 0.8rem;width: 2.13rem; height: 0.67rem; line-height: 0.67rem; background: #00A0E9; border-radius: 0.07rem;text-align: center;  font-size: 0.32rem; font-family: Selawik; font-weight: bold; color: #FFFFFF;">
           Harvest</div>

       </div>
       <div style="padding-top: 0.5rem; font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #808080;padding-left: 0.8rem;">
         My Node
       </div>

       <div style="display: flex;padding-top: 0.5rem;">
         <div class="h5-div-item1">0x135....8492</div>
         <div class="h5-div-item2">..............................................................</div>
         <div class="h5-div-item3"></div>
         <div class="h5-div-item4">live</div>
       </div>
       <div style="display: flex;padding-top: 0.3rem;">
         <div class="h5-div-item1">0x1r3....N2Oy</div>
         <div class="h5-div-item2">..............................................................</div>
         <div class="h5-div-item3"></div>
         <div class="h5-div-item4">live</div>
       </div>
       <div style="display: flex;padding-top: 0.3rem;">
         <div class="h5-div-item1">0x0Ag....3gs7</div>
         <div class="h5-div-item2">..............................................................</div>
         <div class="h5-div-item3"></div>
         <div class="h5-div-item4">live</div>
       </div>
       <div style="display: flex;padding-top: 0.3rem;">
         <div class="h5-div-item1">0x0Ag....3gs7</div>
         <div class="h5-div-item2">..............................................................</div>
         <div class="h5-div-item3"></div>
         <div class="h5-div-item4">live</div>
       </div>
       <div style="display: flex;padding-top: 0.3rem;">
         <div class="h5-div-item1">0x2yt....Qw3r</div>
         <div class="h5-div-item2">..............................................................</div>
         <div class="h5-div-item3"></div>
         <div class="h5-div-item4">live</div>
       </div>

     </div>

      <!----2--->
      <div style=" width: 100%;height: 10.4rem; background: #242424;margin-top: 0.8rem;padding-top: 0.5rem;margin-top: 0.5rem;">
        <div style="padding-top: 0.5rem; font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #808080;padding-left: 0.8rem;">
          Network Power
        </div>

        <div style="display: flex;padding-top: 0.2rem;">
          <div style=" font-size: 0.48rem;font-family: Selawik; font-weight: 600;color: #ffffff;padding-left: 0.8rem;">
            12,634,357.66
          </div>
          <div style="font-size: 0.32rem;font-family: Selawik; font-weight: 600;color: #22AC38;margin-left: 0.3rem;padding-top: 0.2rem;">
            +15%
          </div>

        </div>

        <div style="padding-top: 0.5rem; font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #808080;padding-left: 0.8rem;">
          Network PowerRate
        </div>

        <div style="display: flex;padding-top: 0.4rem; font-size: 0.64rem;font-family: Selawik; font-weight: 600;color: #FFFFFF;width: 100%;position: relative;">
          <div style="padding-left: 0.8rem;">25,682.66 sMatic/s</div>
        </div>
        <div style="padding-top: 0.5rem;display: flex;">
          <div class="h5-div-item1" style="font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #808080;">Network Rank</div>
          <div class="h5-div-item2" style="margin-left: 0.8rem;">..............................................................</div>
        </div>

       <div
           style="width: 8.4rem;display: flex;font-size: 0.3rem;font-family: Selawik;font-weight: 400;color: #808080;margin: 0.5rem auto 0rem auto;"
       >
       <div style="flex: 1;">Address</div>
         <div style="flex: 1;text-align: center">Node</div>
         <div style="flex: 1;text-align: right">Power</div>

       </div>


        <div
            class="h5-network-div-item"
        >
          <div style="flex: 1;">0x135....8492</div>
          <div style="flex: 1;text-align: center">3,457</div>
          <div style="flex: 1;text-align: right;color: #0792E3" >546,257.72</div>
        </div>
        <div
            class="h5-network-div-item"
        >
          <div style="flex: 1;">0x1r3....N2Oy</div>
          <div style="flex: 1;text-align: center">3,457</div>
          <div style="flex: 1;text-align: right;color: #0792E3" >546,257.72</div>
        </div>
        <div
            class="h5-network-div-item"
        >
          <div style="flex: 1;">0x0Ag....3gs7</div>
          <div style="flex: 1;text-align: center">3,457</div>
          <div style="flex: 1;text-align: right;color: #0792E3" >546,257.72</div>
        </div>
        <div
            class="h5-network-div-item"
        >
          <div style="flex: 1;">0x2yt....Qw3r</div>
          <div style="flex: 1;text-align: center">3,457</div>
          <div style="flex: 1;text-align: right;color: #0792E3" >546,257.72</div>
        </div>








      </div>

      <!--3--->


    </div>

  </div>
</template>
<script>
import { mapState } from "vuex";
import {
  close,
  gif,
  pc_ido_img1,
  icon_share
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
      icon_share,
      address:'',


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
    this.pieChart()
  },

  methods: {
    pieChart() {
      var myChart = this.$echarts.init(document.getElementById("pieChart"));
      let option = {
        series: [

          {
            name: "",
            type: "liquidFill",
            radius: "45%",
            data: [0.5, 0.5], //
            center: ["45%", "40%"],
            backgroundStyle: {
              color: "RGBA(51, 66, 127, 0)",
            },
            color: [
              {
                type: "linear",
                x: 0,
                y: 1,
                x2: 0,
                y2: 0,
                colorStops: [
                  {
                    offset: 1,
                    color: ["rgba(0, 117, 241, 1)"], // 0%
                  },
                  {
                    offset: 0,
                    color: ["rgba(0, 117, 241, 0)"], // 100%
                  },
                ],
                global: false, //  false
              },
            ],
            label: {
              normal: {
                color: "#27e5f1",
                insideColor: '#27e5f1',
                textStyle: {
                  fontSize: 18,
                  fontWeight: "bold",
                },
              },
            },
            outline: {
              show: false,
              borderDistance: 5,
              itemStyle: {
                borderColor: "#27e5f1",
                borderWidth: 3,
              },
            },
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", () => myChart.resize(), false);
    }
  }
};
</script>


<style lang="scss" scoped>
.pc-div-parent{
padding-bottom:1rem;width: 100%;min-height: 1680px;background: #161616;
}
.h5-div-item1{
  padding-left: 0.8rem;font-size: 0.32rem;font-family: Selawik; font-weight: 400; color: #FFFFFF;
}
.h5-div-item2{
  padding-left: 0.4rem;font-size: 0.32rem;font-family: Selawik; font-weight: 400; color: #0792E3;line-height: 0.7
}
.h5-div-item3{
  margin-left: 0.2rem; width: 0.21rem;height: 0.21rem;border: 0.03rem solid #0792E3;border-radius: 50%;margin-top: 0.03rem
}
.h5-div-item4{
  margin-left: 0.2rem;  font-size: 0.32rem;font-family: Selawik;font-weight: 400; color: #0792E3;
}
.h5-network-div-item{
  width: 8.4rem;display: flex;font-size: 0.35rem;font-family: Selawik;font-weight: 400;color: #ffffff;margin: 0.3rem auto 0rem auto;}
</style>
