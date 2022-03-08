<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import { createWatcher } from "@makerdao/multicall";
import {getBalance, InitRef} from "@/utils/Wallet";
import {Base64} from "js-base64";
const config_data =  require('./config/data.json')
import store from "@/store";

export default {
  name: 'App',
  computed: {
    ...mapState({
      ido: state => state.ido, //
      sAsset: state => state.sAsset, //
      address: state => state.wallet.address, //
      configData:state => state.sys.Config, //
      refresh_flag:state => state.wallet.refresh_flag,
      share_link_url:state => state.wallet.share_link_url,
    }),
  },
  data() {
    return {
      priceTimer: null,
      Mult_watcher:null,
    }
  },
  watch: {
    address(new_address, old_address) {
      console.log(new_address + " old: :" + old_address);
      let myAddress = Base64.encode(new_address);
      let shareLinkUrl = "https://" + window.location.host + "?ref=" + myAddress;
      store.commit("SET_SHARE_LINK_URL", shareLinkUrl);
      this.restartWatch()
    },
    refresh_flag(newQuestion, oldQuestion) {
      console.log(newQuestion + " old: :" + oldQuestion);
      this.restartWatch()
    },

  },

  created() {
    this.$store.commit("SET_CONTRACT", config_data.sMatic);
    this.$store.commit("SET_CONFIG", config_data.Config);
    InitRef();
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
      if (this.Mult_watcher != null) {
        this.Mult_watcher.stop();
        this.Mult_watcher = null;
      }
      let balance = await getBalance(this.address);
      this.$store.commit("SET_BALANCE", balance);
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
              target: this.sAsset.contract.OHM,
              call: ['allowance(address,address)(uint256)',this.address,this.sAsset.contract.Staking_Helper],
              returns: [['OHMAllowanceOfUserToStakingHelper']]
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
              target: this.sAsset.contract.sOHM,
              call: ['allowance(address,address)(uint256)',this.address,this.sAsset.contract.Staking],
              returns: [['sOHMAllowanceOfUserToStaking']]
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
              call: ['allowance(address,address)(uint256)', this.address, this.sAsset.contract.DAI_Bond],
              returns: [['DAIAllowanceOfUserToDAIBond']]
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
              call: ['allowance(address,address)(uint256)', this.address, this.sAsset.contract.OHM_DAI_LP_Bond],
              returns: [['OHMDAILPAllowanceOfUserToDAIBond']]
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
            //  Consensus Pool
            {
              target: this.sAsset.contract.ConsensusPool,
              call: ['getInfo(address)(uint256,uint256,uint256,uint256,uint256)',this.address],
              returns: [['ConsensusPoolGetInfoOfUserClaimableAmount'], ['ConsensusPoolGetInfoOfUserTotalReward'], ['ConsensusPoolGetInfoOfUserPower'], ['ConsensusPoolGetInfoOfUserInviteNum'], ['ConsensusPoolGetInfoOfUserBurnAmount']]
            },
            {
              target: this.sAsset.contract.ConsensusPool,
              call: ['totalPower()(uint256)'],
              returns: [['ConsensusPoolTotalPower']]
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
          this.$store.commit("SET", [update.type, update.value]);
        } catch (e) {
          console.error("error "+e.toString());
        }
      });
      this.Mult_watcher.onNewBlock(blockNumber => {
        console.log('New block:', blockNumber);
        // this.$store.commit("SET_BLOCK_NUMBER", blockNumber);
        this.$store.commit("SET", ['blockNumber', blockNumber]);
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
