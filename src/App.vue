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
    this.$store.commit("SET_CONFIG", config_data.Config);
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
            // {
            //   target: this.ido.currentAddress,
            //   call: [
            //     "allowance(address,address)(uint256)",
            //     this.address,
            //     this.ido.og_sale.contract_address,
            //   ],
            //   returns: [["OG_allowance"]]
            // },
            // {
            //   target: this.ido.currentAddress,
            //   call: [
            //     "allowance(address,address)(uint256)",
            //     this.address,
            //     this.ido.public_sale.contract_address,
            //   ],
            //   returns: [["NOG_allowance"]]
            // },
            // {
            //   target:  this.ido.og_sale.contract_address,
            //   call: ["amountSwapped1(address)(uint256)", this.address],
            //   returns: [["my_amount_OG_Swapped"]]
            // },
            // {
            //   target:  this.ido.public_sale.contract_address,
            //   call: ["amountSwapped1(address)(uint256)", this.address],
            //   returns: [["my_amount_public_Swapped"]]
            // },
            // {
            //   target: this.ido.og_sale.contract_address,
            //   call: ["amountTotal1()(uint256)"],
            //   returns: [["og_amount_total"]]
            // },
            // {
            //   target: this.ido.public_sale.contract_address,
            //   call: ["amountTotal1()(uint256)"],
            //   returns: [["nog_amount_total"]]
            // },

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
            // {
            //   target: this.ido.og_sale.currentAddress,
            //   call: ["balanceOf(address)(uint256)", this.address],
            //   returns: [["OG_Balance_of_current"]]
            // },
            // {
            //   target: this.ido.public_sale.currentAddress,
            //   call: ["balanceOf(address)(uint256)", this.address],
            //   returns: [["public_Balance_of_current"]]
            // },
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
            // {
            //   target: this.ido.og_sale.contract_address,
            //   call: ["openAt()(uint256)"],
            //   returns: [["openAtOG"]]
            // },
            // {
            //   target: this.ido.og_sale.contract_address,
            //   call: ["closeAt()(uint256)"],
            //   returns: [["closeAtOG"]]
            // },
            // {
            //   target: this.ido.public_sale.contract_address,
            //   call: ["openAt()(uint256)"],
            //   returns: [["openAtNOG"]]
            // },
            // {
            //   target: this.ido.public_sale.contract_address,
            //   call: ["closeAt()(uint256)"],
            //   returns: [["closeAtNOG"]]
            // },

            //  sAsset
            {
              target: this.sAsset.contract.Swap_Router,
              call: ['getAmountsOut(uint256,address[])(uint256[])','1000000000',[this.sAsset.contract.OHM, this.sAsset.contract.DAI, this.sAsset.contract.ETH, this.sAsset.contract.USD]],
              returns: [['USDFragmentsPerOHM']]
            },
            {
              target: this.sAsset.contract.USD,
              call: ['decimals()(uint8)'],
              returns: [['USDDecimals']]
            },
            {
              target: this.sAsset.contract.OHM,
              call: ['symbol()(string)'],
              returns: [['OHMSymbol']]
            },
            {
              target: this.sAsset.contract.OHM,
              call: ['totalSupply()(uint256)'],
              returns: [['OHMTotalSupply']]
            },
            {
              target: this.sAsset.contract.OHM,
              call: ['decimals()(uint8)'],
              returns: [['OHMDecimals']]
            },
            {
              target: this.sAsset.contract.OHM,
              call: ['balanceOf(address)(uint256)',this.address],
              returns: [['OHMBalanceOfUser']]
            },
            {
              target: this.sAsset.contract.OHM,
              call: ['balanceOf(address)(uint256)',this.sAsset.contract.Staking],
              returns: [['OHMBalanceOfStaking']]
            },
            {
              target: this.sAsset.contract.OHM,
              call: ['balanceOf(address)(uint256)',this.sAsset.contract.OHM_DAI_LP],
              returns: [['OHMBalanceOfOHMDAILP']]
            },
            {
              target: this.sAsset.contract.OHM,
              call: ['balanceOf(address)(uint256)',this.sAsset.contract.DAO],
              returns: [['OHMBalanceOfDAO']]
            },
            {
              target: this.sAsset.contract.sOHM,
              call: ['index()(uint256)'],
              returns: [['currentIndex']]
            },
            {
              target: this.sAsset.contract.sOHM,
              call: ['decimals()(uint8)'],
              returns: [['sOHMDecimals']]
            },
            {
              target: this.sAsset.contract.sOHM,
              call: ['circulatingSupply()(uint256)'],
              returns: [['sOhmCirculatingSupply']]
            },
            {
              target: this.sAsset.contract.sOHM,
              call: ['balanceOf(address)(uint256)',this.address],
              returns: [['sOHMBalanceOfUser']]
            },
            {
              target: this.sAsset.contract.DAI,
              call: ['symbol()(string)'],
              returns: [['DAISymbol']]
            },
            {
              target: this.sAsset.contract.DAI,
              call: ['decimals()(uint8)'],
              returns: [['DAIDecimals']]
            },
            {
              target: this.sAsset.contract.DAI,
              call: ['balanceOf(address)(uint256)',this.sAsset.contract.Treasury],
              returns: [['DAIBalanceOfTreasury']]
            },
            {
              target: this.sAsset.contract.DAI,
              call: ['balanceOf(address)(uint256)',this.sAsset.contract.OHM_DAI_LP],
              returns: [['DAIBalanceOfOHMDAILP']]
            },
            {
              target: this.sAsset.contract.DAI,
              call: ['balanceOf(address)(uint256)',this.address],
              returns: [['DAIBalanceOfUser']]
            },
            {
              target: this.sAsset.contract.OHM_DAI_LP,
              call: ['decimals()(uint8)'],
              returns: [['OHMDAILPDecimals']]
            },
            {
              target: this.sAsset.contract.OHM_DAI_LP,
              call: ['totalSupply()(uint256)'],
              returns: [['OHMDAILPTotalSupply']]
            },
            {
              target: this.sAsset.contract.OHM_DAI_LP,
              call: ['balanceOf(address)(uint256)',this.sAsset.contract.Treasury],
              returns: [['OHMDAILPBalanceOfTreasury']]
            },
            {
              target: this.sAsset.contract.OHM_DAI_LP,
              call: ['balanceOf(address)(uint256)',this.address],
              returns: [['OHMDAILPBalanceOfUser']]
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
            // DAI Bond
            {
              target: this.sAsset.contract.DAI_Bond,
              call: ['bondPrice()(uint256)'],
              returns: [['DAIBondPrice']]
            },
            {
              target: this.sAsset.contract.DAI_Bond,
              call: ['bondPriceInUSD()(uint256)'],
              returns: [['DAIBondPriceInUSD']]
            },
            {
              target: this.sAsset.contract.DAI_Bond,
              call: ['maxPayout()(uint256)'],
              returns: [['DAIBondMaxPayout']]
            },
            {
              target: this.sAsset.contract.DAI_Bond,
              call: ['standardizedDebtRatio()(uint256)'],
              returns: [['DAIBondStandardizedDebtRatio']]
            },
            {
              target: this.sAsset.contract.DAI_Bond,
              call: ['terms()(uint256, uint256, uint256, uint256, uint256, uint256)'],
              returns: [['DAIBondTermsControlVariable'], ['DAIBondTermsVestingTerm'], ['DAIBondTermsMinimumPrice'], ['DAIBondTermsMaxPayout'], ['DAIBondTermsFee'], ['DAIBondTermsMaxDebt']]
            },
            {
              target: this.sAsset.contract.DAI_Bond,
              call: ['bondInfo(address)(uint256, uint256, uint256, uint256)',this.address],
              returns: [['DAIBondInfoPayout'],['DAIBondInfoVesting'],['DAIBondInfoLastBlock'],['DAIBondInfoPricePaid']]
            },
            {
              target: this.sAsset.contract.DAI_Bond,
              call: ['pendingPayoutFor(address)(uint256)',this.address],
              returns: [['DAIBondPendingPayoutFor']]
            },
            //  OHM-DAI LP Bond
            {
              target: this.sAsset.contract.OHM_DAI_LP_Bond,
              call: ['bondPrice()(uint256)'],
              returns: [['OHMDAILPBondPrice']]
            },
            {
              target: this.sAsset.contract.OHM_DAI_LP_Bond,
              call: ['bondPriceInUSD()(uint256)'],
              returns: [['OHMDAILPBondPriceInUSD']]
            },
            {
              target: this.sAsset.contract.OHM_DAI_LP_Bond,
              call: ['maxPayout()(uint256)'],
              returns: [['OHMDAILPBondMaxPayout']]
            },
            {
              target: this.sAsset.contract.OHM_DAI_LP_Bond,
              call: ['standardizedDebtRatio()(uint256)'],
              returns: [['OHMDAILPBondStandardizedDebtRatio']]
            },
            {
              target: this.sAsset.contract.OHM_DAI_LP_Bond,
              call: ['terms()(uint256, uint256, uint256, uint256, uint256, uint256)'],
              returns: [['OHMDAILPBondTermsControlVariable'], ['OHMDAILPBondTermsVestingTerm'], ['OHMDAILPBondTermsMinimumPrice'], ['OHMDAILPBondTermsMaxPayout'], ['OHMDAILPBondTermsFee'], ['OHMDAILPBondTermsMaxDebt']]
            },
            {
              target: this.sAsset.contract.OHM_DAI_LP_Bond,
              call: ['bondInfo(address)(uint256, uint256, uint256, uint256)',this.address],
              returns: [['OHMDAILPBondInfoPayout'],['OHMDAILPBondInfoVesting'],['OHMDAILPBondInfoLastBlock'],['OHMDAILPBondInfoPricePaid']]
            },
            {
              target: this.sAsset.contract.OHM_DAI_LP_Bond,
              call: ['pendingPayoutFor(address)(uint256)',this.address],
              returns: [['OHMDAILPBondPendingPayoutFor']]
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
          else if(update.type=='USDFragmentsPerOHM') {
            this.$store.commit("SET_USD_FRAGMENTS_PER_OHM", update.value[update.value.length-1]);
          } else if(update.type=='USDDecimals') {
            this.$store.commit("SET_USD_DECIMALS", update.value);
          } else if(update.type=='OHMSymbol') {
            this.$store.commit("SET_OHM_SYMBOL", update.value);
          } else if(update.type=='OHMTotalSupply') {
            this.$store.commit("SET_OHM_TOTAL_SUPPLY", update.value);
          } else if(update.type=='OHMDecimals') {
            this.$store.commit("SET_OHM_DECIMALS", update.value);
          } else if(update.type=='OHMBalanceOfUser') {
            this.$store.commit("SET_OHM_BALANCE_OF_USER", update.value);
          } else if(update.type=='OHMBalanceOfStaking') {
            this.$store.commit("SET_OHM_BALANCE_OF_STAKING", update.value);
          } else if(update.type=='OHMBalanceOfOHMDAILP') {
            this.$store.commit("SET_OHM_BALANCE_OF_OHM_DAI_LP", update.value);
          } else if(update.type=='OHMBalanceOfDAO') {
            this.$store.commit("SET_OHM_BALANCE_OF_DAO", update.value);
          } else if(update.type=='currentIndex') {
            this.$store.commit("SET_CURRENT_INDEX", update.value);
          } else if(update.type=='sOHMDecimals') {
            this.$store.commit("SET_sOHM_DECIMALS", update.value);
          } else if(update.type=='sOhmCirculatingSupply') {
            this.$store.commit("SET_SOHM_CIRCULATING_SUPPLY", update.value);
          } else if(update.type=='sOHMBalanceOfUser') {
            this.$store.commit("SET_SOHM_BALANCE_OF_USER", update.value);
          } else if(update.type=='DAISymbol') {
            this.$store.commit("SET_DAI_SYMBOL", update.value);
          }  else if(update.type=='DAIDecimals') {
            this.$store.commit("SET_DAI_DECIMALS", update.value);
          } else if(update.type=='DAIBalanceOfTreasury') {
            this.$store.commit("SET_DAI_BALANCE_OF_TREASURY", update.value);
          } else if(update.type=='DAIBalanceOfOHMDAILP') {
            this.$store.commit("SET_DAI_BALANCE_OF_OHM_DAI_LP", update.value);
          } else if(update.type=='DAIBalanceOfUser') {
            this.$store.commit("SET_DAI_BALANCE_OF_USER", update.value);
          } else if(update.type=='OHMDAILPDecimals') {
            this.$store.commit("SET_OHM_DAI_LP_DECIMALS", update.value);
          } else if(update.type=='OHMDAILPTotalSupply') {
            this.$store.commit("SET_OHM_DAI_LP_TOTAL_SUPPLY", update.value);
          } else if(update.type=='OHMDAILPBalanceOfTreasury') {
            this.$store.commit("SET_OHM_DAI_LP_BALANCE_OF_TREASURY", update.value);
          } else if(update.type=='OHMDAILPBalanceOfUser') {
            this.$store.commit("SET_OHM_DAI_LP_BALANCE_OF_USER", update.value);
          } else if(update.type=='epochDistribute') {
            this.$store.commit("SET_EPOCH_DISTRIBUTE", update.value);
          } else if(update.type=='stakingContractBalance') {
            this.$store.commit("SET_STAKING_CONTRACT_BALANCE", update.value);
          }
          // DAI Bond
          else if(update.type=='DAIBondPrice') {
            this.$store.commit("SET_DAI_BOND_PRICE", update.value);
          } else if(update.type=='DAIBondPriceInUSD') {
            this.$store.commit("SET_DAI_BOND_PRICE_IN_USD", update.value);
          } else if(update.type=='DAIBondMaxPayout') {
            this.$store.commit("SET_DAI_BOND_MAX_PAYOUT", update.value);
          } else if(update.type=='DAIBondStandardizedDebtRatio') {
            this.$store.commit("SET_DAI_BOND_STANDARDIZED_DEBT_RATIO", update.value);
          } else if(update.type=='DAIBondTermsControlVariable') {
            this.$store.commit("SET_DAI_BOND_TERMS_CONTROL_VARIABLE", update.value);
          } else if(update.type=='DAIBondTermsVestingTerm') {
            this.$store.commit("SET_DAI_BOND_TERMS_VESTING_TERM", update.value);
          } else if(update.type=='DAIBondTermsMinimumPrice') {
            this.$store.commit("SET_DAI_BOND_TERMS_MINIMUM_PRICE", update.value);
          } else if(update.type=='DAIBondTermsMaxPayout') {
            this.$store.commit("SET_DAI_BOND_TERMS_MAX_PAYOUT", update.value);
          } else if(update.type=='DAIBondTermsFee') {
            this.$store.commit("SET_DAI_BOND_TERMS_FEE", update.value);
          } else if(update.type=='DAIBondTermsMaxDebt') {
            this.$store.commit("SET_DAI_BOND_TERMS_MAX_DEBT", update.value);
          } else if(update.type=='DAIBondInfoPayout') {
            this.$store.commit("SET_DAI_BOND_INFO_PAYOUT", update.value);
          } else if(update.type=='DAIBondInfoVesting') {
            this.$store.commit("SET_DAI_BOND_INFO_VESTING", update.value);
          } else if(update.type=='DAIBondInfoLastBlock') {
            this.$store.commit("SET_DAI_BOND_INFO_LAST_BLOCK", update.value);
          } else if(update.type=='DAIBondPendingPayoutFor') {
            this.$store.commit("SET_DAI_BOND_PENDING_PAYOUT_FOR", update.value);
          }
          // OHM-DAI LP Bond
          else if(update.type=='OHMDAILPBondPrice') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_PRICE", update.value);
          } else if(update.type=='OHMDAILPBondPriceInUSD') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_PRICE_IN_USD", update.value);
          } else if(update.type=='OHMDAILPBondMaxPayout') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_MAX_PAYOUT", update.value);
          } else if(update.type=='OHMDAILPBondStandardizedDebtRatio') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_STANDARDIZED_DEBT_RATIO", update.value);
          } else if(update.type=='OHMDAILPBondTermsControlVariable') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_TERMS_CONTROL_VARIABLE", update.value);
          } else if(update.type=='OHMDAILPBondTermsVestingTerm') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_TERMS_VESTING_TERM", update.value);
          } else if(update.type=='OHMDAILPBondTermsMinimumPrice') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_TERMS_MINIMUM_PRICE", update.value);
          } else if(update.type=='OHMDAILPBondTermsMaxPayout') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_TERMS_MAX_PAYOUT", update.value);
          } else if(update.type=='OHMDAILPBondTermsFee') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_TERMS_FEE", update.value);
          } else if(update.type=='OHMDAILPBondTermsMaxDebt') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_TERMS_MAX_DEBT", update.value);
          } else if(update.type=='OHMDAILPBondInfoPayout') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_INFO_PAYOUT", update.value);
          } else if(update.type=='OHMDAILPBondInfoLastBlock') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_INFO_LAST_BLOCK", update.value);
          } else if(update.type=='OHMDAILPBondInfoVesting') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_INFO_VESTING", update.value);
          } else if(update.type=='OHMDAILPBondPendingPayoutFor') {
            this.$store.commit("SET_OHM_DAI_LP_BOND_PENDING_PAYOUT_FOR", update.value);
          }

        } catch (e) {
          console.error("error "+e.toString());
        }
      });
      this.Mult_watcher.onNewBlock(blockNumber => {
        console.log('New block:', blockNumber);
        this.$store.commit("SET_BLOCK_NUMBER", blockNumber);
      });
      console.log(1111)
      await this.Mult_watcher.start();
      console.log(2222)
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
