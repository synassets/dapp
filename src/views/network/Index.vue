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

</style>
