<template>
  <div style="width: 100%;">
    <!--pc-->
    <div v-show="!isMobile"  style="padding-bottom:1rem;width: 100%;min-height: 1680px;background: #161616">


      <div style="width: 100%;display: flex;padding-top:150px;">
        <div style="width: 380px;height: 100px;"></div>
        <div style=" width:1080px;margin: 0px auto; padding-bottom: 30px;z-index: 999;">
          <div style="display: flex">
            <div style="width: 640px;height: 303px;background: #242424;border-radius: 10px;">
              <!---1-->

                <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 33px;padding-top: 25px;">TVL</div>

                <div style="font-size: 18px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 33px;padding-top:8px;">${{TVL}}</div>


              <!---2-->

                <div id="canvas"  style="width: 563px;height:240px;margin-top: 10px;margin-left: 33px;"></div>

            </div>
            <!--right-->
            <div style="width: 420px; height: 303px;background: #242424;border-radius: 10px;margin-left: 20px;">
              <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 33px;padding-top: 25px;">My PowerRate</div>

              <div style="font-size: 18px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 33px;padding-top: 8px;">{{myPowerRate}} s{{OHMSymbol}}/s</div>

              <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 33px;padding-top: 12px;">Available/Total</div>

              <div style="font-size: 18px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 33px;padding-top: 8px;">{{myClaimableReward}} s{{OHMSymbol}}/ {{myTotalReward}} s{{OHMSymbol}}</div>

              <div style="display: flex;margin-left: 33px;margin-top: 12px;">
                <div style=" width: 11px;height: 11px; background: #0792E3;"></div>
                <div style=" width: 11px;height: 11px;background: #F29C9F;"></div>
              </div>


              <div style="margin-left: 33px;margin-top: 20px;width: 360px;height: 16px;border-radius: 8px;background:#F29C9F;position: relative;">
                <div id="percentageLineChart" style="width: 180px;height: 16px;border-radius: 8px;background:#0792E3;position: absolute;left: 0;"></div>
<!--                <div style="width: 280px;height: 16px;border-radius: 8px;background:#F29C9F;position: absolute;left: 0;"></div>-->
<!--                <div style="width: 250px;height: 16px;border-radius: 8px;background:#5F52A0;position: absolute;left: 0;"></div>-->
              </div>

<!--              <div style="margin-left: 33px;margin-top: 10px;width: 360px;position: relative;">-->
<!--                <div style="position: absolute;right: 0;font-family: Selawik; font-weight: 400;color: #808080;font-size: 12px;">&#45;&#45;/&#45;&#45;</div>-->
<!--              </div>-->
              <div class="pc-dashboard-btn1" @click="clickHarvest">Harvest</div>
            </div>


          </div>


          <div style="width: 1080px;height: 80px; background: #242424; border-radius: 10px;margin-top: 20px; display: flex;">
            <div style="width: 290px;height: 50px;border: 1px solid #0792E3;border-radius: 10px;margin-left: 30px;margin-top: 14px;">
              <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-top: 6px;padding-left: 21px;">Market Cap</div>
              <div style="font-size: 20px;font-family: Selawik;font-weight: 600; color: #FFFFFF;padding-left: 21px; ">${{marketCap}}</div>
            </div>

            <div style="width: 290px;height: 50px;border: 1px solid #0792E3;border-radius: 10px;margin-left: 30px;margin-top: 14px;">
              <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-top: 6px;padding-left: 21px;">Back per {{OHMSymbol}}</div>
              <div style="font-size: 20px;font-family: Selawik;font-weight: 600; color: #FFFFFF;padding-left: 21px; ">${{backingPerOHM}}</div>
            </div>

            <div style="width: 290px;height: 50px;border: 1px solid #0792E3;border-radius: 10px;margin-left: 30px;margin-top: 14px;">
              <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-top: 6px;padding-left: 21px;">Runaway (d)</div>
              <div style="font-size: 20px;font-family: Selawik;font-weight: 600; color: #FFFFFF;padding-left: 21px; ">--</div>
            </div>


          </div>

          <div style="display: flex;margin-top: 20px;">
            <div style="width: 530px;height: 303px;background: #242424;border-radius: 10px;">
              <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 33px;padding-top: 25px;">APY (%)</div>

              <div style="font-size: 18px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 30px;padding-top: 10px;">{{APY}}%</div>

              <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 33px;padding-top: 15px;">Total Value Deposited</div>

              <div style="font-size: 18px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 33px;padding-top: 10px;">${{TVL}}</div>

              <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 33px;padding-top: 15px;">Current Index</div>

              <div style="font-size: 18px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 33px;padding-top: 10px;">{{Number(currentIndex).toFixed(2)}} s{{OHMSymbol}}</div>

              <div class="pc-dashboard-btn" @click="route('/stake')">Start Stake</div>


            </div>
            <div style="width: 530px; height: 303px;background: #242424;border-radius: 10px;margin-left: 20px;">
              <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 33px;padding-top: 25px;">Treasury Balance</div>

              <div style="font-size: 18px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 33px;padding-top: 10px;">${{marketValueOfTreasuryAssets}}</div>

              <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 33px;padding-top: 15px;">{{OHMSymbol}} Price</div>

              <div style="font-size: 18px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-left: 33px;padding-top: 10px;">${{OHMPrice}}</div>

              <div style="display: flex;padding-top: 20px;padding-left: 33px;">
                <div style="width: 170px;height: 40px;border: 1px solid #0792E3;border-radius: 10px;position: relative;">
                  <img :src="icon_matic_sat_lp"  style="width: 45px;height: 30px;position: absolute;top:4px ;left: 10px;"    />
                  <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #FFFFFF;position: absolute;left: 72px;top: 5px;">${{OHMDAILPBalance}}</div>

                  <div style="cursor: pointer;font-size: 10px;font-family: Selawik; font-weight: 400;text-decoration: underline;color: #808080;position: absolute;left: 72px;bottom: 5px;" @click="viewContract(sAsset.contract.OHM_DAI_LP)">View contract</div>
                </div>
                <div style="width: 170px;height: 40px;border: 1px solid #0792E3;border-radius: 10px;position: relative;margin-left: 15px;">
                  <img :src="smatic"  style="width: 30px;height: 30px;position: absolute;top:4px ;left: 10px;"   />
                  <div style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #FFFFFF;position: absolute;left: 60px;top: 5px;">${{DAIBalance}}</div>

                  <div style="cursor: pointer;font-size: 10px;font-family: Selawik; font-weight: 400;text-decoration: underline;color: #808080;position: absolute;left:60px;bottom: 5px;" @click="viewContract(sAsset.contract.DAI)">View contract</div>
                </div>

              </div>
              <div class="pc-dashboard-end-btn" @click="route('/bond')">Start Bond</div>

            </div>

          </div>


        </div>

        <img
            :src="pc_ido_img1"
            style="width: 1135px;height: 294px;position: fixed;bottom:0px ;left: 110px;"
        />

      </div>

      <!--    <div style="width: 100%;min-height: 1594px;position: relative;">


            <div style="width: 1680px;margin: 0px auto 0px auto;height: 400px;padding-top:50px;">


              <div style="display: flex;z-index: 999">
                <div style="flex: 1;height: 100px;background: #FFFFFF;border-radius: 10px;z-index: 999;">
                   <div style="font-size: 14px;font-family: Lato;font-weight: bold;color: #FDAC80;line-height: 24px;padding-left: 30px;padding-top: 26px;">VSD Price</div>
                   <div style="font-size: 18px;font-family: Lato;font-weight: 900;color: #101529;line-height: 24px;padding-left: 30px;padding-top: 6px;">{{'$ '+item11}}</div>
                </div>
                <div style="flex: 1;height: 100px;background: #FFFFFF;border-radius: 10px;margin-left: 18px;z-index: 999">
                  <div style="font-size: 14px;font-family: Lato;font-weight: bold;color: #FDAC80;line-height: 24px;padding-left: 30px;padding-top: 26px;">Backing per VSD</div>
                  <div style="font-size: 18px;font-family: Lato;font-weight: 900;color: #101529;line-height: 24px;padding-left: 30px;padding-top: 6px;">{{'$ '+item12}}</div>
                </div>
                <div style="flex: 1;height: 100px;background: rgba(255 ,255,255,1);border-radius: 10px;margin-left: 18px;z-index: 999">
                  <div style="font-size: 14px;font-family: Lato;font-weight: bold;color: #FDAC80;line-height: 24px;padding-left: 30px;padding-top: 26px;">Current Index</div>
                  <div style="font-size: 18px;font-family: Lato;font-weight: 900;color: #101529;line-height: 24px;padding-left: 30px;padding-top: 6px;">{{item13+' sVSD'}}</div>
                </div>
              </div>

              <div style="display: flex;margin-top: 20px;">
                <div style="flex: 1;height: 100px;background: #FFFFFF;border-radius: 10px;">
                  <div style="font-size: 14px;font-family: Lato;font-weight: bold;color: #FDAC80;line-height: 24px;padding-left: 30px;padding-top: 26px;">Market Value of Treasury Assets</div>
                  <div style="font-size: 18px;font-family: Lato;font-weight: 900;color: #101529;line-height: 24px;padding-left: 30px;padding-top: 6px;">{{'$ '+item21}}</div>
                </div>
                <div style="flex: 1;height: 100px;background: #FFFFFF;border-radius: 10px;margin-left: 18px;z-index: 999">
                  <div style="font-size: 14px;font-family: Lato;font-weight: bold;color: #FDAC80;line-height: 24px;padding-left: 30px;padding-top: 26px;">Circulating Supply (total)</div>
                  <div style="font-size: 18px;font-family: Lato;font-weight: 900;color: #101529;line-height: 24px;padding-left: 30px;padding-top: 6px;">{{item22}}</div>
                </div>
                <div style="flex: 1;height: 100px;background: #FFFFFF;border-radius: 10px;margin-left: 18px;z-index: 999">
                  <div style="font-size: 14px;font-family: Lato;font-weight: bold;color: #FDAC80;line-height: 24px;padding-left: 30px;padding-top: 26px;">Market Cap</div>
                  <div style="font-size: 18px;font-family: Lato;font-weight: 900;color: #101529;line-height: 24px;padding-left: 30px;padding-top: 6px;">{{'$ '+item23}}</div>
                </div>
              </div>


              <div style="display: flex;margin-top: 20px;z-index: 999">
                <div style="flex: 1;height: 100px;background: #FFFFFF;border-radius: 10px;">
                  <div style="font-size: 14px;font-family: Lato;font-weight: bold;color: #FDAC80;line-height: 24px;padding-left: 30px;padding-top: 26px;">APY</div>
                  <div style="font-size: 18px;font-family: Lato;font-weight: 900;color: #101529;line-height: 24px;padding-left: 30px;padding-top: 6px;">{{item31+' %'}}</div>
                </div>
                <div style="flex: 1;height: 100px;background: #FFFFFF;border-radius: 10px;margin-left: 18px;">
                  <div style="font-size: 14px;font-family: Lato;font-weight: bold;color: #FDAC80;line-height: 24px;padding-left: 30px;padding-top: 26px;">VSD Staked Ratio</div>
                  <div style="font-size: 18px;font-family: Lato;font-weight: 900;color: #101529;line-height: 24px;padding-left: 30px;padding-top: 6px;">{{item32}}</div>
                </div>
                <div style="flex: 1;height: 100px;background: #FFFFFF;border-radius: 10px;margin-left: 18px;">
                  <div style="font-size: 14px;font-family: Lato;font-weight: bold;color: #FDAC80;line-height: 24px;padding-left: 30px;padding-top: 26px;">VSD Staked TVL</div>
                  <div style="font-size: 18px;font-family: Lato;font-weight: 900;color: #101529;line-height: 24px;padding-left: 30px;padding-top: 6px;">{{'$ '+item33}}</div>
                </div>
              </div>








            </div>
          </div>-->
    </div>
    <!--h5-->
    <div  v-show="isMobile" style="padding-bottom:1rem;width: 100%;min-height:40rem;background: #070707;" >

    <div style="padding-top: 1.8rem;padding-left: 0.9rem;  font-size: 0.48rem; font-family: Selawik;font-weight: 600; color: #808080;">Dashboard</div>

    <div class="h5-div-item" style="margin-top: 0.8rem;">
      <div class="h5-div-item-up" >{{OHMSymbol}} Price</div>
      <div class="h5-div-item-down" >${{OHMPrice}}</div>
    </div>

      <div class="h5-div-item" >
        <div class="h5-div-item-up" >TVL</div>
        <div class="h5-div-item-down" >${{TVL}}</div>
      </div>

      <div class="h5-div-item" >
        <div class="h5-div-item-up" >APY</div>
        <div class="h5-div-item-down" >{{APY}}%</div>
      </div>

      <div class="h5-div-item" >
        <div class="h5-div-item-up" >Treasury Balance</div>
        <div class="h5-div-item-down" >${{marketValueOfTreasuryAssets}}</div>
      </div>
      <div class="h5-div-item" >
        <div class="h5-div-item-up" >Market Cap</div>
        <div class="h5-div-item-down" >${{marketCap}}</div>
      </div>
      <div class="h5-div-item" >
        <div class="h5-div-item-up" >Current Index</div>
        <div class="h5-div-item-down" >{{Number(currentIndex).toFixed(2)}} s{{OHMSymbol}}</div>
      </div>
      <div class="h5-div-item" >
        <div class="h5-div-item-up" >Back Per {{OHMSymbol}}</div>
        <div class="h5-div-item-down" >${{backingPerOHM}}</div>
      </div>
      <div class="h5-div-item" >
        <div class="h5-div-item-up" >Runaway</div>
        <div class="h5-div-item-down" >------</div>
      </div>
    </div>


    <MessageTipErrorDialog   ref="MessageTipErrorDialog" />
    <MessageTipOkDialog   ref="MessageTipOkDialog" />
  </div>
</template>
<script>
import { mapState } from "vuex";
import {
  icon_matic_sat_lp,
  icon_sat,
  pc_ido_img1,
  smatic

} from "@/utils/images";

import {
  getConfigData,
  getDATA,


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
      icon_sat,icon_matic_sat_lp,smatic,
      pc_ido_img1,

      data:{},
      configData:{},

    };
  },
  watch: {
    myClaimableReward() {
      const width = publicJs.toBigNumber(this.myClaimableReward).div(this.myTotalReward).times(360);
      document.getElementById('percentageLineChart').style.width=width + 'px'
    },
    myTotalReward() {
      const width = publicJs.toBigNumber(this.myClaimableReward).div(this.myTotalReward).times(360);
      document.getElementById('percentageLineChart').style.width=width + 'px'
    },
  },
  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile,
      sAsset: state => state.sAsset,
    }),
    OHMSymbol() {
      return this.sAsset.OHMSymbol;
    },
    OHMPrice() {
      return publicJs.toBigNumber(this.sAsset.USDFragmentsPerOHM).dividedBy(10**this.sAsset.USDDecimals).toFixed(this.sAsset.USDDecimals);
    },
    DAIBalance() {
      return publicJs.toBigNumber(this.sAsset.DAIBalanceOfUser).dividedBy(10**this.sAsset.DAIDecimals).toFixed(2);
    },
    OHMDAILPBalance() {
      return publicJs.toBigNumber(this.sAsset.OHMDAILPBalanceOfUser).dividedBy(10**this.sAsset.OHMDAILPDecimals).toFixed(5);
    },
    backingPerOHM() {
      const OHMCirculatingSupply = this.sAsset.OHMTotalSupply - this.sAsset.OHMBalanceOfDAO;
     return (this.marketValueOfTreasuryAssets / (OHMCirculatingSupply / 10**this.sAsset.OHMDecimals)).toFixed(this.sAsset.OHMDecimals);
    },
    currentIndex() {
     return (this.sAsset.currentIndex / 10**this.sAsset.sOHMDecimals);
    },
    marketValueOfTreasuryAssets() {
      const t1 = this.sAsset.OHMBalanceOfOHMDAILP * this.sAsset.DAIBalanceOfTreasury / this.sAsset.DAIBalanceOfOHMDAILP;
      const t2 = this.sAsset.OHMDAILPBalanceOfTreasury * this.sAsset.OHMBalanceOfOHMDAILP * 2 / this.sAsset.OHMDAILPTotalSupply;
      const temp  = ((t1 + t2) / 10**this.sAsset.OHMDecimals * this.OHMPrice).toFixed(2)
      return temp;
    },
    circulatingSupply() {
     return 6;
    },
    marketCap() {
     return (this.sAsset.OHMTotalSupply / 10**this.sAsset.OHMDecimals * this.OHMPrice).toFixed(2);
    },
    APY() {
      if (this.sAsset.stakingContractBalance <= 0) {
        return 0;
      }
      const roi  = (this.sAsset.epochDistribute * 15 / this.sAsset.stakingContractBalance);
     return ((1 + roi) ** (365 / 5 - 1)).toFixed(2);
    },
    OHMStakedRatio() {
     return (this.sAsset.OHMBalanceOfStaking / this.sAsset.OHMTotalSupply);
    },
    TVL() {
     return (this.sAsset.OHMBalanceOfStaking / 10**this.sAsset.OHMDecimals * this.OHMPrice).toFixed(2);
    },
    // Consensus Pool
    nextRewardAmount() {
      if (this.sAsset.sOhmCirculatingSupply <= 0) {
        return 0;
      }
      const sOHMBalance = publicJs.toBigNumber(this.sAsset.sOHMBalanceOfUser).div(10**this.sAsset.sOHMDecimals);
      return publicJs.toBigNumber(this.sAsset.epochDistribute).times(sOHMBalance).div(this.sAsset.sOhmCirculatingSupply).toFixed(this.sAsset.sOHMDecimals);
    },
    networkPower() {
      return this.sAsset.ConsensusPoolTotalPower;
    },
    myClaimableReward() {
      return publicJs.toBigNumber(this.sAsset.ConsensusPoolGetInfoOfUserClaimableAmount).div(10**this.sAsset.sOHMDecimals).toFixed(2);
    },
    myTotalReward() {
      return publicJs.toBigNumber(this.sAsset.ConsensusPoolGetInfoOfUserTotalReward).div(10**this.sAsset.sOHMDecimals).toFixed(2);
    },
    myPowerRate() {
      if (this.networkPower <= 0) {
        return 0;
      }
      const myPower = this.sAsset.ConsensusPoolGetInfoOfUserPower;
      const nextConsensusReward = publicJs.toBigNumber(this.nextRewardAmount).times(0.1).times(myPower).div(this.networkPower);
      return nextConsensusReward.div(8*60*60).toFixed(8)
    },
  },
  created() {
    this.$nextTick(function () {
      this.initCharts('canvas')
    })
  },
  mounted() {
    this.data =  getDATA();
    this.configData = getConfigData()





  },

  methods: {
    viewContract(address) {
      window.open(this.configData.blockExplorerUrls + 'address/' + address)
    },
    route(path) {
      this.$router.push(path).catch(err => {err});
    },
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
    initCharts() {
      let charts = this.$echarts.init(document.getElementById('canvas'));
      var option = {
        color: ['#0792E3'],
        xAxis: {
          type: 'category',
          show: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine:{
            lineStyle:{
              color:'#0792E3',
              width:0,
            }

          },
          splitLine: {
            show: false,
            lineStyle:{
              color: ['#315070'],
              width: 0,
              type: 'solid'
            }
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          }
        ]
      };
      charts.setOption(option);
    }
  }
};
</script>


<style lang="scss" scoped>
.pc-div-parent{
padding-bottom:1rem;width: 100%;min-height: 1680px;background: #161616;
}
.pc-dashboard-btn{
  cursor: pointer;
  margin: 20px auto 0rem auto;
  width: 470px;height: 50px;background: #0792E3; border-radius: 10px;text-align: center;line-height: 50px;
  font-size: 16px;font-family: Selawik; font-weight: 600;color: #FFFFFF;
}
.pc-dashboard-btn:hover{
  background: #2a9ee2;
}

.pc-dashboard-btn1{
  cursor: pointer;
  margin: 40px auto 0rem auto;
  width: 360px;height: 50px;background: linear-gradient(-45deg, #353738 0%, #414346 100%); border-radius: 10px;text-align: center;line-height: 50px;
  font-size: 16px;font-family: Selawik; font-weight: 600;color: #FFFFFF;
}
.pc-dashboard-btn1:hover{
  background: linear-gradient(-45deg, #414346  0%, #353738 100%);
}

.pc-dashboard-end-btn{
  cursor: pointer;
  margin: 22px auto 0rem auto;
  width: 470px;height: 50px;background:linear-gradient(-45deg, #353738 0%, #414346 100%); border-radius: 10px;text-align: center;line-height: 50px;
  font-size: 16px;font-family: Selawik; font-weight: 600;color: #FFFFFF;
}
.pc-dashboard-end-btn:hover{
  background: linear-gradient(-45deg, #414346  0%, #353738 100%);
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
