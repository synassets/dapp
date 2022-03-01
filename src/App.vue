<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import { createWatcher } from "@makerdao/multicall";
const config_data =  require('./config/data.json')

export default {
  name: 'App',
  computed: {
    ...mapState({
      ido: state => state.ido, //
      sAsset: state => state.sAsset, //
      address: state => state.wallet.address, //
      configData:state => state.sys.Config, //
    }),
  },
  data() {
    return {
      priceTimer: null,
      Mult_watcher:null,
    }
  },
  watch: {
    address(newQuestion, oldQuestion) {
      console.log(newQuestion + " old: :" + oldQuestion);
      this.restartWatch()
    },
  },

  created() {
    this.$store.commit("SET_CONTRACT", config_data.sMatic);
    this.handleEnvSet();
  },
  mounted(){

    this.getStartWatch()
  },
  beforeDestroy: function () {
    if(this.Mult_watcher != null){
      this.Mult_watcher.stop();
      this.Mult_watcher = null;
    }
  },
  methods: {
    async restartWatch()
    {
      console.log("restartWatch------------");
      if(this.Mult_watcher != null){
        this.Mult_watcher.stop();
        this.Mult_watcher = null;
      }
      await this.getStartWatch();
    },
    async getStartWatch() {

      console.log("getStartWatchgetStartWatchgetStartWatch");
      if (this.Mult_watcher) {
        console.error("this.Mult_watcher Is Created");
        return;
      }

      this.Mult_watcher = createWatcher(
          [
            {
              target: this.ido.currentAddress,
              call: [
                "allowance(address,address)(uint256)",
                this.address,
                this.ido.og_sale.contract_address,
              ],
              returns: [["OG_allowance"]]
            },
            {
              target: this.ido.currentAddress,
              call: [
                "allowance(address,address)(uint256)",
                this.address,
                this.ido.public_sale.contract_address,
              ],
              returns: [["NOG_allowance"]]
            },
            {
              target:  this.ido.og_sale.contract_address,
              call: ["amountSwapped1(address)(uint256)", this.address],
              returns: [["my_amount_OG_Swapped"]]
            },
            {
              target:  this.ido.public_sale.contract_address,
              call: ["amountSwapped1(address)(uint256)", this.address],
              returns: [["my_amount_public_Swapped"]]
            },
            {
              target: this.ido.og_sale.contract_address,
              call: ["amountTotal1()(uint256)"],
              returns: [["og_amount_total"]]
            },
            {
              target: this.ido.public_sale.contract_address,
              call: ["amountTotal1()(uint256)"],
              returns: [["nog_amount_total"]]
            },

            // {
            //   target: this.ido.og_sale.contract_address,
            //   call: ["amountTotal0()(uint256)"],
            //   returns: [["amountTotal02"]]
            // },
            // {
            //   target: this.data.IDO.NOG.contractAddress,
            //   call: ["amountTotal0()(uint256)"],
            //   returns: [["amountTotal05"]]
            // },
            // {
            //   target: this.data.IDO.OG.contractAddress,
            //   call: ["calcT1(uint256)(uint256)", this.data.IDO.OG.scala],
            //   returns: [["calcT12"]]
            // },
            // {
            //   target: this.data.IDO.NOG.contractAddress,
            //   call: ["calcT1(uint256)(uint256)", this.data.IDO.NOG.scala],
            //   returns: [["calcT15"]]
            // },
            {
              target: this.ido.og_sale.currentAddress,
              call: ["balanceOf(address)(uint256)", this.address],
              returns: [["OG_Balance_of_current"]]
            },
            {
              target: this.ido.public_sale.currentAddress,
              call: ["balanceOf(address)(uint256)", this.address],
              returns: [["public_Balance_of_current"]]
            },
            // {
            //   target: this.data.IDO.OG.contractAddress,
            //   call: ["whitelist(address)(uint256)", this.address],
            //   returns: [["OGwhitelist"]]
            // },
            // {
            //   target: this.data.IDO.OG.contractAddress,
            //   call: ["inviteable(address)(bool)", this.address],
            //   returns: [["OG_ambassador"]]
            // },
            // {
            //   target: this.data.IDO.NOG.contractAddress,
            //   call: ["inviteable(address)(bool)", this.address],
            //   returns: [["NOG_ambassador"]]
            // },
            {
              target: this.ido.og_sale.contract_address,
              call: ["openAt()(uint256)"],
              returns: [["openAtOG"]]
            },
            {
              target: this.ido.og_sale.contract_address,
              call: ["closeAt()(uint256)"],
              returns: [["closeAtOG"]]
            },
            {
              target: this.ido.public_sale.contract_address,
              call: ["openAt()(uint256)"],
              returns: [["openAtNOG"]]
            },
            {
              target: this.ido.public_sale.contract_address,
              call: ["closeAt()(uint256)"],
              returns: [["closeAtNOG"]]
            },

            //  sAsset
            {
              target: this.sAsset.contract.Swap_Router,
              call: ['getAmountsOut(uint256,address[])(uint256[])','1000000000000000000',[this.sAsset.contract.DAI, this.sAsset.contract.ETH, this.sAsset.contract.OHM]],
              returns: [['DAIsPerOHM']]
            },{
              target: this.sAsset.contract.sOHM,
              call: ['index()(uint256)'],
              returns: [['currentIndex']]
            },{
              target: this.sAsset.contract.OHM,
              call: ['totalSupply()(uint256)'],
              returns: [['OHMTotalSupply']]
            },
            {
              target: this.sAsset.contract.OHM,
              call: ['balanceOf(address)(uint256)',this.sAsset.contract.Staking],
              returns: [['OHMBalanceOfStaking']]
            },
            {
              target: this.sAsset.contract.DAI,
              call: ['balanceOf(address)(uint256)',this.sAsset.contract.Treasury],
              returns: [['DAIBalanceOfTreasury']]
            },
            {
              target: this.sAsset.contract.OHM_DAI_LP,
              call: ['balanceOf(address)(uint256)',this.sAsset.contract.Treasury],
              returns: [['OHMDAILPBalanceOfTreasury']]
            },
            {
              target: this.sAsset.contract.OHM_DAI_LP,
              call: ['totalSupply()(uint256)'],
              returns: [['OHMDAILPTotalSupply']]
            },
            {
              target: this.sAsset.contract.OHM,
              call: ['balanceOf(address)(uint256)',this.sAsset.contract.OHM_DAI_LP],
              returns: [['OHMLpBalanceOf']]
            },
            {
              target: this.sAsset.contract.DAI,
              call: ['balanceOf(address)(uint256)',this.sAsset.contract.OHM_DAI_LP],
              returns: [['DAIBalanceOfOHMDAILP']]
            },
            {
              target: this.sAsset.contract.OHM,
              call: ['balanceOf(address)(uint256)',this.sAsset.contract.DAO],
              returns: [['OHMBalanceOfDAO']]
            },
            {
              target: this.sAsset.contract.Staking,
              call: ['epoch()(uint256, uint256, uint256, uint256) '],
              returns: [['epochLength'],['epochNumber'],['epochEndBlock'],['epochDistribute']]
            },
            {
              target: this.sAsset.contract.Staking,
              call: ['contractBalance()(uint256)'],
              returns: [['stakingContractBalance']]
            },
          ],
          {
            rpcUrl: this.configData.rpcUrl,
            multicallAddress: this.configData.multicallAddress,
            interval: 10000
          }
      );
      this.Mult_watcher.subscribe(update => {
        console.log(`this.Mult_watcher.subscribe - > Update: ${update.type} = ${update.value}`);
        try {
          if (update.type == "OG_allowance") {
            this.$store.commit("SET_OG_ALLOWANCE", update.value);
          } else if (update.type == "NOG_allowance") {
            this.$store.commit("SET_PUBLIC_ALLOWANCE", update.value);
          } else if (update.type == "my_amount_OG_Swapped") {
            this.$store.commit("SET_OG_MY_SWAPPED", update.value);
          } else if (update.type == "my_amount_public_Swapped") {
            this.$store.commit("SET_PUBLIC_MY_SWAPPED", update.value);
          } else if (update.type == "og_amount_total") {
            this.$store.commit("SET_PUBLIC_MY_SWAPPED", update.value);
          } else if (update.type == "nog_amount_total") {
            this.$store.commit("SET_OG_TOTAL_SWAPPED", update.value);
          }
              // } else if (update.type == "amountTotal02") {
              //   this.amountTotal02 = update.value / this.data.IDO.OG.scala;
              //   this.amountTotal02_format = this.formatAmount(this.amountTotal02);
              // } else if (update.type == "amountTotal05") {
              //   this.amountTotal05 = update.value / this.data.IDO.NOG.scala;
              //   this.amountTotal05_format = this.formatAmount(this.amountTotal05);
              // } else if (update.type == "calcT12") {
              //   this.calcT12 = update.value / 1000000000000000000;
              //   this.calcT12PricePerToken = (1 / this.calcT12).toFixed(5);
              // } else if (update.type == "calcT15") {
              //   this.calcT15 = update.value / 1000000000000000000;
              //   this.calcT15PricePerToken = (1 / this.calcT15).toFixed(5);
          // }
          else if (update.type == "OG_Balance_of_current") {
            this.$store.commit("SET_PUBLIC_BALANCE_OF_CURRENT", update.value);
          } else if (update.type == "public_Balance_of_current") {
            this.$store.commit("SET_OG_BALANCE_OF_CURRENT", update.value);
          }
          else if (update.type == "openAtOG") {
            this.$store.commit("SET_OG_OPEN_AT", update.value);
          } else if (update.type == "closeAtOG") {
            this.$store.commit("SET_OG_CLOSE_AT", update.value);
          } else if (update.type == "closeAtNOG") {
            this.$store.commit("SET_PUBLIC_CLOSE_AT", update.value);
          } else if (update.type == "openAtNOG") {
            this.$store.commit("SET_PUBLIC_OPEN_AT", update.value);
          } else if ("balanceOfSat" == update.type) {
            this.$store.commit("SET_SAT_BALANCE", update.value);
          }

          // sAsset
          else if(update.type=='DAIsPerOHM') {
            this.$store.commit("SET_DAIS_PER_OHM", update.value);
          } else if(update.type=='currentIndex') {
            this.$store.commit("SET_CURRENT_INDEX", update.value);
          } else if(update.type=='OHMTotalSupply') {
            this.$store.commit("SET_OHM_TOTAL_SUPPLY", update.value);
          } else if(update.type=='OHMBalanceOfStaking') {
            this.$store.commit("SET_OHM_BALANCE_OF_STAKING", update.value);
          } else if(update.type=='DAIBalanceOfTreasury') {
            this.$store.commit("SET_DAI_BALANCE_OF_TREASURY", update.value);
          } else if(update.type=='OHMDAILPBalanceOfTreasury') {
            this.$store.commit("SET_OHM_DAI_LP_BALANCE_OF_TREASURY", update.value);
          } else if(update.type=='OHMDAILPTotalSupply') {
            this.$store.commit("SET_OHM_DAI_LP_TOTAL_SUPPLY", update.value);
          } else if(update.type=='DAIBalanceOfOHMDAILP') {
            this.$store.commit("SET_DAI_BALANCE_OF_OHM_DAI_LP", update.value);
          } else if(update.type=='OHMBalanceOfDAO') {
            this.$store.commit("SET_OHM_BALANCE_OF_DAO", update.value);
          } else if(update.type=='epochDistribute') {
            this.$store.commit("SET_EPOCH_DISTRIBUTE", update.value);
          } else if(update.type=='stakingContractBalance') {
            this.$store.commit("SET_STAKING_CONTRACT_BALANCE", update.value);
          }

        } catch (e) {
          console.error("error "+e.toString());
        }
      });
      await this.Mult_watcher.start();
    },


    handleEnvSet() {
      let config = this.baseConfig;
      console.log("===ENV==="+process.env.NODE_ENV);
      if(process.env.NODE_ENV === 'development') {
        sessionStorage.setItem('ENV', 'dev')
        config = this.devConfig;
      }else if(process.env.NODE_ENV === 'production'){
        sessionStorage.setItem('ENV', 'production')
        config = this.proConfig;
      }else { // useless
        sessionStorage.setItem('ENV', 'test')
        config = this.testConfig;
      }

      console.log(config);

      this.$store.dispatch('setBaseConfig', config)
    }
  },
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', Arial, sans-serif;
  background: #fff;
  color: #333;
}
#app {
  //max-width: 10rem;
  margin: auto;
  height: 100%;
  ::v-deep .el-loading-spinner .path {
    stroke: $color-main;
  }
}
p {
  margin: 0;
}
</style>
