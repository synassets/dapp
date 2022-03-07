<template>
  <div style="width: 100%;">
    <!--pc-->
    <div v-show="!isMobile"  class="pc-div-parent">


      <div style="display: flex;width: 1078px;margin: 0px auto 0px auto;padding-top: 150px;padding-left: 380px;">
        <div style="width: 400px;background: #242424;height: 470px;">
          <div style=" font-size: 16px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 25px;">My Power
            <img
                :src="icon_share"
                style="width: 19px;height: 19px;float: right;margin-right: 40px;cursor: pointer;"

            />
          </div>
          <div style=" font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 30px;padding-top: 5px;">{{myPower}} s{{OHMSymbol}}
          </div>
          <div style=" font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 15px;">My PowerRate
          </div>
          <div style=" font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 30px;padding-top: 5px;">{{myPowerRate}} s{{OHMSymbol}}/s
          </div>
          <div style=" font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 15px;">My Rewards
          </div>
          <div style=" font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 30px;padding-top: 5px;">{{myClaimableReward}} s{{OHMSymbol}}

            <span style="float: right;margin-right: 40px; background: #00A0E9; border-radius: 5px; font-size: 14px;font-family: Selawik; font-weight: bold;color: #FFFFFF;padding-left: 15px;padding-right: 15px;cursor: pointer;" @click="clickHarvest">Harvest</span>

          </div>

          <div style=" font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 20px;">My node
          </div>
          <div style="padding-left: 30px;display: flex;margin-top: 10px" v-for="node in myNodeList">
            <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #FFFFFF;">{{prettifyAddress(node.address)}}</div>
            <div style=" font-size: 12px;font-family: Selawik; font-weight: 400;color: #00A0E9;margin-left: 17px">.............................................................</div>
            <div style=" width: 8px;height: 8px;border: 1px solid #00A0E9;border-radius: 50%;margin-left: 20px;margin-top: 5px"></div>
            <div style=" font-size: 12px;font-family: Selawik;font-weight: 400; color: #00A0E9; margin-left: 20px;">live</div>
          </div>



        </div>
        <div style="width: 658px;background: #242424;height: 470px;margin-left: 20px;position: relative;">
<!--          <div id="pieChart" style="width: 120px;height: 120px;position: absolute;right:60px;top: 25px "></div>-->

          <div style=" font-size: 16px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 25px;">Network Power
          </div>
          <div style=" font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 30px;padding-top: 5px;">{{networkPower}} s{{OHMSymbol}}
          </div>

          <div style=" font-size: 16px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 30px;padding-top: 20px;">Network PowerRate
          </div>
          <div style=" font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 30px;padding-top: 5px;">{{networkPowerRate}} s{{OHMSymbol}}/s
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
<!--            <div style="flex: 1;text-align: center;">Node</div>-->
            <div style="flex: 1;text-align: right;">Power</div>
          </div>
          <div v-for="(item, index) in networkRankList">
            <div :id="'network_' + index" :style="' font-size: ' + (18 - 2*index) +'px; display: flex;padding-left: 30px;padding-right:40px; font-family: Selawik;font-weight: 400; color: #FFFFFF;padding-top: 5px;'">
              <div style="flex: 1;text-align: left;"><span style="color: #00A0E9">{{index+1}}</span> {{prettifyAddress(item.address)}}</div>
<!--              <div style="flex: 1;text-align: center;">2,001</div>-->
              <div style="flex: 1;text-align: right;">{{prettifyPower(item.power)}}
              </div>
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
           {{myPower}} s{{OHMSymbol}}
         </div>
         <div style="flex: 1;font-size: 0.48rem;font-family: Selawik; font-weight: 600;color: #ffffff;">
           {{myPowerRate}} s{{OHMSymbol}}/s
         </div>
         <div
             style="width: 0.29rem;height: 0.29rem;margin-right: 0.8rem;"
         />
       </div>

       <div style="padding-top: 0.5rem; font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #808080;padding-left: 0.8rem;">
         My Rewards
       </div>

       <div style="display: flex;padding-top: 0.4rem; font-size: 0.64rem;font-family: Selawik; font-weight: 600;color: #FFFFFF;width: 100%;position: relative;">
       <div style="padding-left: 0.8rem;">{{myClaimableReward}} s{{OHMSymbol}}</div>

         <div style=" cursor: pointer;position: absolute;right: 0.8rem;width: 2.13rem; height: 0.67rem; line-height: 0.67rem; background: #00A0E9; border-radius: 0.07rem;text-align: center;  font-size: 0.32rem; font-family: Selawik; font-weight: bold; color: #FFFFFF;" @click="clickHarvest">
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
            {{networkPower}} s{{OHMSymbol}}
          </div>
          <div style="font-size: 0.32rem;font-family: Selawik; font-weight: 600;color: #22AC38;margin-left: 0.3rem;padding-top: 0.2rem;">
            +15%
          </div>

        </div>

        <div style="padding-top: 0.5rem; font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #808080;padding-left: 0.8rem;">
          Network PowerRate
        </div>

        <div style="display: flex;padding-top: 0.4rem; font-size: 0.64rem;font-family: Selawik; font-weight: 600;color: #FFFFFF;width: 100%;position: relative;">
          <div style="padding-left: 0.8rem;">{{networkPowerRate}} s{{OHMSymbol}}/s</div>
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


      <MessageTipErrorDialog   ref="MessageTipErrorDialog" />
      <MessageTipOkDialog   ref="MessageTipOkDialog" />
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
import * as publicJs from "@/utils/public";
import * as wallet from "@/utils/Wallet";
import MessageTipErrorDialog from "@/views/layout/components/MessageTipErrorDialog";
import MessageTipOkDialog from "@/views/layout/components/MessageTipOkDialog";
export default {
  name: "Index",
  components: {
    MessageTipErrorDialog,MessageTipOkDialog

  },
  data() {
    return {
      close,
      gif,
      pc_ido_img1,
      icon_share,


      data:{},
      configData:{},
      harvestPending: false,
      myNodeList: [],
      networkRankList: [],
      timer: 0
    };
  },
  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile,
      address: state => state.wallet.address,
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
    nextRewardAmount() {
      if (this.sAsset.sOhmCirculatingSupply <= 0) {
        return 0;
      }
      const sOHMBalance = publicJs.toBigNumber(this.sAsset.sOHMBalanceOfUser).div(10**this.sAsset.sOHMDecimals);
      return publicJs.toBigNumber(this.sAsset.epochDistribute).times(sOHMBalance).div(this.sAsset.sOhmCirculatingSupply);
    },
    networkPower() {
      return publicJs.toBigNumber(this.sAsset.ConsensusPoolTotalPower).dividedBy(10**this.sAsset.sOHMDecimals).toFixed(2);
    },
    networkPowerRate() {
      return publicJs.toBigNumber(this.nextRewardAmount).times(0.1).div(8*60*60).toFixed(8);
    },
    myPower() {
      return publicJs.toBigNumber(this.sAsset.ConsensusPoolGetInfoOfUserPower).div(10**this.sAsset.sOHMDecimals).toFixed(2);
    },
    myClaimableReward() {
      return publicJs.toBigNumber(this.sAsset.ConsensusPoolGetInfoOfUserClaimableAmount).div(10**this.sAsset.sOHMDecimals).toFixed(2);
    },
    myPowerRate() {
      if (this.networkPower <= 0) {
        return 0;
      }
      const nextConsensusReward = publicJs.toBigNumber(this.nextRewardAmount).times(0.1).times(this.myPower).div(this.networkPower);
      return nextConsensusReward.div(8*60*60).toFixed(8)
    },
  },
  watch: {
    address() {
      this.getNetWorkRankList()
      this.getMyNodeList()
    }
  },
  mounted() {
    this.data =  getDATA();
    this.configData = getConfigData()
    // this.pieChart()
    this.timer = setInterval(() => {
      // build request
      this.getNetWorkRankList()
      this.getMyNodeList()
    }, 5000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },

  methods: {
    clickHarvest() {
      if (this.sAsset.ConsensusPoolGetInfoOfUserClaimableAmount <= 0) {
        this.$refs.MessageTipErrorDialog.showClick('Nothing to harvest!');
        return;
      }
      this.harvestPending = true;
      wallet.callClaimReward(this.sAsset.contract.ConsensusPool)
          .then(() => {
            this.$refs.MessageTipOkDialog.showClick();
          }).catch((reason) => {
            console.log(reason)
            this.$refs.MessageTipErrorDialog.showClick(reason.message);
          }).finally(() => {
            this.harvestPending = false;
          })
    },
    getMyNodeList() {
      axios({
        url: this.configData.backendUrl + 'stake-data/' + this.address,
        params: {
          pageNum: 1,
          pageSize: 10
        }
      }).then((r) => {
        this.myNodeList = r.data.data.data.slice(0, 5)
      })
    },
    getNetWorkRankList() {
      axios({
        url: this.configData.backendUrl + 'stake-data',
        params: {
          pageNum: 1,
          pageSize: 10
        }
      }).then((r) => {
        this.networkRankList = r.data.data.data.slice(0, 5)
      })
    },
    prettifyAddress(address) {
      return address.substring(0, 5) + '...' + address.substring(38);
    },
    prettifyPower(power) {
      return publicJs.toBigNumber(power).div(10**this.sAsset.sOHMDecimals).toFixed(2)
    },
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
