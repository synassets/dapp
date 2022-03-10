<template>
  <div>
    <my-dialog :is-show="isShow" @isClose="closeDialog"  :width="isMobile ? '9.33rem' : '834px'" :pubVue="pubVue">
      <div>
        <div v-show="!isMobile">
          <div class="pc-dialog-div-close">
            <img :src="close" class="pc-dialog-div-close-img" @click="closeDialog" />
          </div>

          <div class="pc-dialog-div-header">
            <div style="display: flex">
              <div class="pc-dialog-div-header-up">Bond Price</div>
              <div class="pc-dialog-div-header-up">Market Price</div>
            </div>
            <div style="display: flex">
              <div  class="pc-dialog-div-header-down">${{Number(bond.priceDisplay).toFixed(2)}}</div>

              <div  class="pc-dialog-div-header-down">${{Number(OHMPrice).toFixed(2)}}</div>
            </div>
          </div>
          <div class="pc-bond-tab">
            <div @click="clickTabBond(true)" v-show="isBondMenu" class="pc-bond-tab-left-p">Bond</div>
            <div @click="clickTabBond(true)"  v-show="!isBondMenu" class="pc-bond-tab-left-n">Bond</div>

            <div  @click="clickTabBond(false)"  v-show="!isBondMenu" class="pc-bond-tab-right-p">Redeem</div>
            <div @click="clickTabBond(false)"  v-show="isBondMenu" class="pc-bond-tab-right-n" >Redeem</div>
          </div>

          <div v-show="isBondMenu" class="pc-bond-div-tip1">
            <div style="width: 540px;position: relative;">
              <div  class="pc-bond-div-tip2" v-show="!bond.isApproved">
                <div>First time bond {{bond.name}}?</div>
                <div>Please approve SynAssets to use your {{bond.name}} for bond.</div>
              </div>


              <div class='pc-bond-div-input' v-show="bond.isApproved">
                <input v-model="bondInputAmount" type="text"  @input="inputChange()"
                 class='pc-bond-div-input1'
                        />
                <div  @click="clickMaxValue()"  class='pc-bond-div-input-max' >MAX</div>
              </div>

            </div>
            <div class="pc-bond-div-btn" v-show="!bond.isApproved" @click="clickApprove">
              Approve
            </div>
            <div class="pc-bond-div-gif" style="" v-show="approvePending">
              <img :src="gif" style="width: 30px;height: 30px;margin-top: 10px;margin-left: 90px;" alt="zh" />
            </div>
            <div class="pc-bond-div-btn" v-show="bond.isApproved" @click="clickBond">
              Bond
            </div>
            <div class="pc-bond-div-gif" style="" v-show="bondPending">
              <img :src="gif" style="width: 30px;height: 30px;margin-top: 10px;margin-left: 90px;" alt="zh" />
            </div>

          </div>



          <div  v-show="isBondMenu"  style="width: 690px;margin: 0px auto 0px auto;padding-bottom: 30px;padding-top: 75px">
            <div style="display: flex;">
              <div class="pc-bond-div-detail-left">Your Balance</div>
              <div class="pc-bond-div-detail-right"> {{Number(bond.yourBalance).toFixed(2)}} {{bond.symbol}}</div>
            </div>
            <div class="pc-bond-div-detail">
              <div  class="pc-bond-div-detail-left">Max You Can Buy</div>
              <div  class="pc-bond-div-detail-right"> {{Number(bond.maxYouCanBuy).toFixed(2)}} {{bond.symbol}}</div>
            </div>
            <div class="pc-bond-div-detail">
              <div  class="pc-bond-div-detail-left">Pending Rewards</div>
              <div  class="pc-bond-div-detail-right"> {{bond.pendingRewards}} {{OHMSymbol}}</div>
            </div>
            <div class="pc-bond-div-detail">
              <div  class="pc-bond-div-detail-left">Claimable Rewards</div>
              <div  class="pc-bond-div-detail-right"> {{bond.claimableRewards}} {{OHMSymbol}}</div>
            </div>
            <div class="pc-bond-div-detail">
              <div  class="pc-bond-div-detail-left">Time until fully vested</div>
              <div  class="pc-bond-div-detail-right"> {{bond.timeUntilFullyVested}}</div>
            </div>
            <div class="pc-bond-div-detail">
              <div  class="pc-bond-div-detail-left">ROI</div>
              <div  class="pc-bond-div-detail-right"> {{bond.ROI}}%</div>
            </div>
            <div class="pc-bond-div-detail">
              <div  class="pc-bond-div-detail-left">Debt Ratio</div>
              <div  class="pc-bond-div-detail-right"> {{bond.debtRatio}}%</div>
            </div>
            <div class="pc-bond-div-detail">
              <div  class="pc-bond-div-detail-left">Vesting Term</div>
              <div  class="pc-bond-div-detail-right"> {{bond.duration}}</div>
            </div>
          </div>

          <div v-show="!isBondMenu && !claimPending" @click="clickClaim(false)" class="pc-bond-div-btn1">Claim</div>
          <div v-show="!isBondMenu && claimPending"  style="margin: 20px auto 0px auto; width: 540px;height: 50px; background: #414346; border-radius: 5px;">
            <img :src="gif" style="width: 30px;height: 30px;margin-top: 10px;margin-left: 255px;" alt="zh" />
          </div>

          <div v-show="!isBondMenu && !claimAndStakePending"  @click="clickClaim(true)" class="pc-bond-div-btn1">Claim and Autostake</div>

          <div v-show="!isBondMenu && claimAndStakePending"  style="margin: 20px auto 0px auto; width: 540px;height: 50px; background: #414346; border-radius: 5px;">
            <img :src="gif" style="width: 30px;height: 30px;margin-top: 10px;margin-left: 255px;" alt="zh" />
          </div>

          <div  v-show="!isBondMenu"  style="width: 690px;margin: 0px auto 0px auto;padding-bottom: 30px;padding-top: 30px">
            <div style="display: flex;">
              <div  class="pc-bond-div-detail-left">Pending Rewards</div>
              <div  class="pc-bond-div-detail-right">{{bond.pendingRewards}} {{OHMSymbol}}</div>
            </div>
            <div style="display: flex;padding-top: 6px;">
              <div  class="pc-bond-div-detail-left">Claimable Rewards</div>
              <div  class="pc-bond-div-detail-right"> {{bond.claimableRewards}} {{OHMSymbol}}</div>
            </div>
            <div style="display: flex;padding-top: 6px;">
              <div  class="pc-bond-div-detail-left">Time until fully vested</div>
              <div  class="pc-bond-div-detail-right"> {{bond.timeUntilFullyVested}}</div>
            </div>
            <div style="display: flex;padding-top: 6px;">
              <div  class="pc-bond-div-detail-left">ROI</div>
              <div  class="pc-bond-div-detail-right">{{bond.ROI}}%</div>
            </div>
            <div style="display: flex;padding-top: 6px;">
              <div  class="pc-bond-div-detail-left">Vesting Term</div>
              <div  class="pc-bond-div-detail-right"> {{bond.duration}}</div>
            </div>
          </div>

        </div>
        <!------h5----->


        <div v-show="isMobile">
          <div style="width: 8.27rem;position: relative;display: flex ">
            <img
                :src="close"
                style="width: 0.3rem;height: 0.3rem;left: 0.36rem;top: 0.36rem;position: absolute;z-index: 999;"
                @click="closeDialog"
            />

            <div style="width: 7rem;display: flex;margin: 0.34rem auto 0rem auto;flex-direction: row; justify-content: center; align-items: center;">
              <img :src="icon_matic" style="width: 0.4rem;height: 0.4rem;"  />
              <div style=" font-size: 0.35rem;font-family: Selawik; font-weight: 600;color: #FFFFFF;margin-left: 0.4rem;">{{bond.name}}</div>
            </div>

          </div>

        <div style="width: 8.27rem;text-align: center;margin: 0.4rem auto 0rem auto;  font-size: 0.32rem;font-family: Selawik;font-weight: 400; color: #808080;">Fixed Term</div>

          <div style="width: 8.27rem;text-align: center;margin: 0.3rem auto 0rem auto;  font-size: 0.32rem;font-family: Selawik;font-weight: 600; color: #FFFFFF;">{{bond.duration}}</div>


          <div style="display: flex; font-size: 0.32rem; font-family: Selawik;font-weight: 400;color: #808080;padding-top: 0.5rem;text-align: center;">
            <div style="flex: 1">Bond Price</div>
            <div style="flex: 1">Market Price</div>
          </div>


          <div style="display: flex; font-size: 0.48rem; font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-top: 0.2rem;text-align: center;">
            <div style="flex: 1">${{Number(bond.priceDisplay).toFixed(2)}}</div>
            <div style="flex: 1">${{Number(OHMPrice).toFixed(2)}}</div>
          </div>
      <div   v-show="isBondMenu&&!bond.isApproved" style="width: 8.27rem;text-align: center;margin: 0.3rem auto 0rem auto;  font-size: 0.32rem;font-family: Selawik;font-weight: 400; color: #808080;">First time bonding Matic?</div>
          <div  v-show="isBondMenu&&!bond.isApproved" style="width: 8.27rem;text-align: center;margin: 0.1rem auto 0rem auto;  font-size: 0.32rem;font-family: Selawik;font-weight: 400; color: #808080;">Please approve SynAssets to use</div>
          <div  v-show="isBondMenu&&!bond.isApproved" style="width: 8.27rem;text-align: center;margin: 0.1rem auto 0rem auto;  font-size: 0.32rem;font-family: Selawik;font-weight: 400; color: #808080;">your Matic for bonding.</div>




          <div style="width: 8rem;margin: 0.5rem auto 0rem auto;display: flex;"  v-show="isBondMenu&&bond.isApproved">
               <div  @click="clickTabBond(true)"  :class="isBondMenu? 'h5-bond-tab-p':'h5-bond-tab-n'">Bond</div>
               <div  @click="clickTabBond(false)"  :class="isBondMenu? 'h5-bond-tab-n':'h5-bond-tab-p'">Redeem</div>
          </div>

          <div  v-show="isBondMenu&&bond.isApproved" style="  width: 8rem; height: 0.93rem;background: #FFFFFF;border-radius: 0rem 0.07rem 0.07rem 0.07rem;margin: 0 auto;">
            <input v-model="bondInputAmount" type="text"  @input="inputChange()" placeholder="Amount"
                   style="height:0.93rem;width: 7.59rem;line-height: 0.93rem;font-size: inherit;padding-left: 0.2rem; background: #FFFFFF; border-radius: 0.07rem;"

            />
          </div>

          <div @click="clickApprove" class="h5-bond-dialog-btn" v-show="isBondMenu&&!bond.isApproved">Approve</div>
          <div @click="clickBond" class="h5-bond-dialog-btn" v-show="isBondMenu&&bond.isApproved">Bond</div>
          <div class="h5-bond-dialog-btn" @click="clickClaim(false)" v-show="!isBondMenu">Claim</div>
          <div class="h5-bond-dialog-btn" @click="clickClaim(true)" v-show="!isBondMenu">Claim and AutoStake</div>

          <div class="h5-bond-dialog-item" style="margin-top: 0.8rem;"   v-show="isBondMenu">
            <div style="flex: 2;">Your Balance</div>
            <div style="flex: 3;text-align: right;font-weight: 600;">{{bond.yourBalance}} {{bond.symbol}}</div>
          </div>
          <div class="h5-bond-dialog-item"   v-show="isBondMenu">
            <div style="flex: 2;">Max You Can Buy</div>
            <div style="flex: 3;text-align: right;font-weight: 600;">{{bond.maxYouCanBuy}} {{bond.symbol}}</div>
          </div>
          <div class="h5-bond-dialog-item"   v-show="isBondMenu">
            <div style="flex: 2;">Pending Rewards</div>
            <div style="flex: 3;text-align: right;font-weight: 600;">{{bond.pendingRewards}} {{OHMSymbol}}</div>
          </div>
          <div class="h5-bond-dialog-item"   v-show="isBondMenu">
            <div style="flex: 2;">Claimable Rewards</div>
            <div style="flex: 3;text-align: right;font-weight: 600;">{{bond.claimableRewards}} {{OHMSymbol}}</div>
          </div>
          <div class="h5-bond-dialog-item"   v-show="isBondMenu">
            <div style="flex: 1;">Time until fully vested</div>
            <div style="flex: 1;text-align: right;font-weight: 600;">{{bond.timeUntilFullyVested}}</div>
          </div>
          <div class="h5-bond-dialog-item"   v-show="isBondMenu">
            <div style="flex: 1;">ROI</div>
            <div style="flex: 2;text-align: right;font-weight: 600;color: #0792E3;">{{bond.ROI}}%</div>
          </div>
          <div class="h5-bond-dialog-item"   v-show="isBondMenu">
            <div style="flex: 1;">Debt Ratio</div>
            <div style="flex: 2;text-align: right;font-weight: 600;color: #0792E3;">{{bond.debtRatio}}%</div>
          </div>





          <div class="h5-bond-dialog-item" style="margin-top: 0.8rem;"  v-show="!isBondMenu">
            <div style="flex: 2;">Pending Rewards</div>
            <div style="flex: 3;text-align: right;font-weight: 600;">{{bond.pendingRewards}} {{OHMSymbol}}</div>
          </div>
          <div class="h5-bond-dialog-item"   v-show="!isBondMenu">
            <div style="flex: 2;">Claimable Rewards</div>
            <div style="flex: 3;text-align: right;font-weight: 600;">{{bond.claimableRewards}} {{OHMSymbol}}</div>
          </div>

          <div class="h5-bond-dialog-item"   v-show="!isBondMenu">
            <div style="flex: 1;">Time until fully vested</div>
            <div style="flex: 1;text-align: right;font-weight: 600;">{{bond.timeUntilFullyVested}}</div>
          </div>
          <div class="h5-bond-dialog-item"   v-show="!isBondMenu">
            <div style="flex: 1;">ROI</div>
            <div style="flex: 2;text-align: right;font-weight: 600;">{{bond.ROI}}%</div>
          </div>
          <div class="h5-bond-dialog-item"   v-show="!isBondMenu">
            <div style="flex: 1;">Vesting Term</div>
            <div style="flex: 2;text-align: right;font-weight: 600;">{{bond.duration}}</div>
          </div>

         <div style="height: 0.5rem; width: 2rem;"></div>
        </div>
      </div>
    </my-dialog>
    <MessageTipErrorDialog   ref="MessageTipErrorDialog" />
    <MessageTipOkDialog   ref="MessageTipOkDialog" />
  </div>
</template>

<script>
import myDialog from "@/views/components/myDialog";

import {close, gif,icon_matic,icon_matic_sat_lp} from "@/utils/images";
import {mapState} from "vuex";
// eslint-disable-next-line no-unused-vars
import * as wallet from "@/utils/Wallet";
import MessageTipErrorDialog from "@/views/layout/components/MessageTipErrorDialog";
import MessageTipOkDialog from "@/views/layout/components/MessageTipOkDialog";
import * as publicJs from "@/utils/public";

export default {
  name: "BondDialog",
  components:{ myDialog ,MessageTipErrorDialog,MessageTipOkDialog},
  data(){
    return {
      close,
      gif,
      icon_matic,
      icon_matic_sat_lp,

      showBondDialog:true,
      showBoundPosition:1,
      isBondMenu:true,
      bondInputAmount:'',
      approvePending: false,
      bondPending: false,
      claimPending: false,
      claimAndStakePending: false,
    }
  },
  props: {
    // isShow: false,
    isShow: {
      type: Boolean,
      default: false
    },
    pubVue: {
      type: Object
    },
    bondIndex: {
      type: Number
    }
  },
  computed:{
    ...mapState({
      isMobile: state => state.sys.isMobile,
      address: state => state.wallet.address,
      sAsset: state => state.sAsset,
      invite_address:state => state.wallet.invite_address,

    }),
    OHMSymbol() {
      return this.sAsset.OHMSymbol;
    },
    DAISymbol() {
      return this.sAsset.DAISymbol;
    },
    DAIBalance() {
      return publicJs.toBigNumber(this.sAsset.DAIBalanceOfUser).dividedBy(10**this.sAsset.DAIDecimals);
    },
    OHMDAILPBalance() {
      return publicJs.toBigNumber(this.sAsset.OHMDAILPBalanceOfUser).dividedBy(10**this.sAsset.OHMDAILPDecimals);
    },
    stakedBalance() {
      return publicJs.toBigNumber(this.sAsset.sOHMBalanceOfUser).dividedBy(10**this.sAsset.sOHMDecimals);
    },
    OHMPrice() {
      return publicJs.toBigNumber(this.sAsset.USDFragmentsPerOHM).dividedBy(10**this.sAsset.USDDecimals).toFixed(this.sAsset.USDDecimals);
    },

    OHMDAILPBondPriceDisplay() {
      const DAIPriceOfOHM = this.sAsset.OHMBalanceOfOHMDAILP / this.sAsset.DAIBalanceOfOHMDAILP / 10**this.sAsset.OHMDecimals;
      return (this.sAsset.OHMDAILPBondPriceInUSD * DAIPriceOfOHM * this.OHMPrice).toFixed(3);
    },
    OHMDAILPBondMaxYouCanBuy() {
      const amount = this.sAsset.OHMDAILPBondMaxPayout / 10**this.sAsset.OHMDecimals * (this.sAsset.OHMDAILPBondPrice / 100).toFixed(2)
      return (amount * 0.95).toFixed(2)
    },
    OHMDAILPBondROI() {
      return ((this.OHMPrice - this.OHMDAILPBondPriceDisplay) / this.OHMDAILPBondPriceDisplay * 100).toFixed(2);
    },
    OHMDAILPBondTimeUntilFullyVested() {
      const fullyVestBlocks = parseInt(this.sAsset.OHMDAILPBondInfoVesting) + parseInt(this.sAsset.OHMDAILPBondInfoLastBlock);
      if (fullyVestBlocks === 0) {
        return '--'
      }
      const blocksDiff = fullyVestBlocks - this.sAsset.blockNumber;
      const milliSecondsDiff = publicJs.calcBlockSeconds(blocksDiff) * 1000;
      return publicJs.dateFormat(new Date().getTime() + milliSecondsDiff);
    },
    OHMDAILPBondDuration() {
      const seconds = publicJs.calcBlockSeconds(this.sAsset.OHMDAILPBondTermsVestingTerm)
      return publicJs.prettifySeconds(seconds, 'day');
    },
    DAIBondPriceDisplay() {
      const DAIPriceOfOHM = publicJs.toBigNumber(this.sAsset.OHMBalanceOfOHMDAILP).dividedBy(this.sAsset.DAIBalanceOfOHMDAILP).dividedBy(10**this.sAsset.OHMDecimals);
      return (this.sAsset.DAIBondPriceInUSD * DAIPriceOfOHM * this.OHMPrice).toFixed(3);
    },
    DAIBondMaxYouCanBuy() {
      const amount = this.sAsset.DAIBondMaxPayout / 10**this.sAsset.OHMDecimals * (this.sAsset.DAIBondPrice / 100).toFixed(2)
      return (amount * 0.95).toFixed(2)
    },
    DAIBondROI() {
      return ((this.OHMPrice - this.DAIBondPriceDisplay) / this.DAIBondPriceDisplay * 100).toFixed(2);
    },
    DAIBondTimeUntilFullyVested() {
      const fullyVestBlocks = parseInt(this.sAsset.DAIBondInfoVesting) + parseInt(this.sAsset.DAIBondInfoLastBlock);
      const blocksDiff = fullyVestBlocks - this.sAsset.blockNumber;
      const milliSecondsDiff = publicJs.calcBlockSeconds(blocksDiff) * 1000;
      return publicJs.dateFormat(new Date().getTime() + milliSecondsDiff);
    },
    DAIBondDuration() {
      const seconds = publicJs.calcBlockSeconds(this.sAsset.DAIBondTermsVestingTerm)
      return publicJs.prettifySeconds(seconds, 'day');
    },
    bond() {
      switch (this.bondIndex) {
        case 1: return {
          address: this.sAsset.contract.DAI_Bond,
          tokenAddress: this.sAsset.contract.DAI,
          tokenDecimals: this.sAsset.DAIDecimals,
          name: this.sAsset.DAISymbol,
          symbol: this.sAsset.DAISymbol,
          yourBalance: this.DAIBalance,
          priceDisplay: this.DAIBondPriceDisplay,
          maxYouCanBuy: this.DAIBondMaxYouCanBuy,
          pendingRewards: publicJs.toBigNumber(this.sAsset.DAIBondInfoPayout).dividedBy(10**this.sAsset.OHMDecimals).toFixed(2),
          claimableRewards: publicJs.toBigNumber(this.sAsset.DAIBondPendingPayoutFor).dividedBy(10**this.sAsset.OHMDecimals).toFixed(2),
          timeUntilFullyVested: this.DAIBondTimeUntilFullyVested,
          ROI: this.DAIBondROI,
          debtRatio: (this.sAsset.DAIBondStandardizedDebtRatio * 100 / 1e9).toFixed(2),
          duration: this.DAIBondDuration,
          isApproved: this.sAsset.DAIAllowanceOfUserToDAIBond > 999999 * 10**this.sAsset.DAIDecimals,
          bondPrice: this.sAsset.DAIBondPrice,
        };
        default: return {
          address: this.sAsset.contract.OHM_DAI_LP_Bond,
          tokenAddress: this.sAsset.contract.OHM_DAI_LP,
          tokenDecimals: this.sAsset.OHMDAILPDecimals,
          name: this.OHMSymbol + '-' + this.DAISymbol + ' LP',
          symbol: 'LP',
          yourBalance: this.OHMDAILPBalance,
          priceDisplay: this.OHMDAILPBondPriceDisplay,
          maxYouCanBuy: this.OHMDAILPBondMaxYouCanBuy,
          pendingRewards: publicJs.toBigNumber(this.sAsset.OHMDAILPBondInfoPayout).dividedBy(10**this.sAsset.OHMDecimals).toFixed(2),
          claimableRewards: publicJs.toBigNumber(this.sAsset.OHMDAILPBondPendingPayoutFor).dividedBy(10**this.sAsset.OHMDecimals).toFixed(2),
          timeUntilFullyVested: this.OHMDAILPBondTimeUntilFullyVested,
          ROI: this.OHMDAILPBondROI,
          debtRatio: (this.sAsset.OHMDAILPBondStandardizedDebtRatio * 100 / 1e18).toFixed(2),
          duration: this.OHMDAILPBondDuration,
          isApproved: this.sAsset.OHMDAILPAllowanceOfUserToDAIBond > 999999 * 10**this.sAsset.OHMDAILPDecimals,
          bondPrice: this.sAsset.OHMDAILPBondPrice,
        }
      }
    }
  },

  created() {},
  methods:{
    clickTabBond(val){
      this.isBondMenu = val;
    },
    inputChange(){},
    clickMaxValue(){
      this.bondInputAmount = this.bond.yourBalance;
    },
    goLink(){},
    closeDialog(){
      this.$emit('clickCloseDialog', {});
    },
    clickApprove() {
      this.approvePending = true;
      const baseNumber = publicJs.toBigNumber(99999999999);
      const power = publicJs.toBigNumber(10**this.bond.tokenDecimals);
      const amount = baseNumber.multipliedBy(power)
      wallet.callApprove(this.bond.tokenAddress, this.bond.address, amount)
          .then(() => {
            this.$refs.MessageTipOkDialog.showClick();
          }).catch((reason) => {
            this.$refs.MessageTipErrorDialog.showClick(reason.message);
          }).finally(() => {
            this.approvePending = false;
          })
    },
    clickBond() {
      if (!this.invite_address) {
        this.$refs.MessageTipErrorDialog.showClick('inviter not exist');
        return;
      }
      if (isNaN(this.bondInputAmount) || this.bondInputAmount <= 0) {
        this.$refs.MessageTipErrorDialog.showClick('amount must be positive integer');
        return
      }
      if (Number(this.bondInputAmount) > Number(this.bond.yourBalance)) {
        this.$refs.MessageTipErrorDialog.showClick('insufficient balance');
        return
      }
      if (Number(this.bondInputAmount) > Number(this.bond.maxYouCanBuy)) {
        this.$refs.MessageTipErrorDialog.showClick('amount should be less than the max you can buy');
        return
      }
      this.bondPending = true;
      const amount = publicJs.toBigNumber(Number(this.bondInputAmount)*10**this.bond.tokenDecimals);
      const maxPrice = this.bond.bondPrice * 2
      wallet.bondDeposit(this.bond.address, amount, maxPrice, this.address, this.invite_address)
          .then(() => {
            this.$refs.MessageTipOkDialog.showClick();
          }).catch((reason) => {
            this.$refs.MessageTipErrorDialog.showClick(reason.message);
          }).finally(() => {
            this.bondPending = false;
          })
    },
    clickClaim(stake) {
      if (stake) {
        this.claimAndStakePending = true;
      } else {
        this.claimPending = true;
      }
      wallet.bondRedeem(this.bond.address, this.address, stake)
          .then(() => {
            this.$refs.MessageTipOkDialog.showClick();
          }).catch((reason) => {
            this.$refs.MessageTipErrorDialog.showClick(reason.message);
          }).finally(() => {
            if (stake) {
              this.claimAndStakePending = false;
            } else {
              this.claimPending = false;
            }
          })
    },
  }
}
</script>

<style lang="scss" scoped>
.pc-dialog-div-close{
  padding-top: 20px;position: relative;
}
.pc-dialog-div-close-img{
  width: 17px;height: 17px;margin-left: 15px;
}
.pc-dialog-div-header{
  width: 750px;margin: 50px auto 0px auto;
}
.pc-dialog-div-header-up{
  flex: 1;text-align: center;font-size: 18px;font-family: Lato;font-weight: bold;color: #808080;padding-top: 15px;
}
.pc-dialog-div-header-down{
  flex: 1;text-align: center;font-size: 20px;font-family: Fredoka One;font-weight: bold;color: #FFFFFF;padding-top: 12px;
}
.pc-bond-tab{
  display: flex; width: 280px;margin: 48px auto 0px auto;
}
.pc-bond-tab-left-p{
  width: 130px;height: 35px;border-radius: 10px; background: linear-gradient(-45deg, #5ED1E1 0%, #BFC2FE 50%, #E8BDDB 100%);
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 35px;text-align: center;
}
.pc-bond-tab-left-n{
  width: 130px;height: 35px;border-radius: 10px; background: rgba(115, 115, 115, 0.3);
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 35px;text-align: center;
}
.pc-bond-tab-right-p{
  margin-left:20px;width: 130px;height: 35px;border-radius: 10px; background: linear-gradient(-45deg, #5ED1E1 0%, #BFC2FE 50%, #E8BDDB 100%);
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 35px;text-align: center;
}
.pc-bond-tab-right-n{
  margin-left:20px;width: 130px;height: 35px;border-radius: 10px; background: rgba(115, 115, 115, 0.3);
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 35px;text-align: center;
}
.pc-bond-div-tip1{
  margin:25px auto 0px auto; width: 750px;display: flex;position: relative;
}
.pc-bond-div-tip2{
  width: 500px;height: 50px;position: absolute;top: 0; font-size: 14px;font-family: Selawik;font-weight: 400; color: #808080;text-align: center
}
.pc-bond-div-input{
  width: 500px;height: 50px;background: #FFFFFF;border: 1px solid #FFFFFF;position: absolute;top: 0;border-radius: 5px;
}
.pc-bond-div-input1{
  height:40px;width: 450px;line-height: 40px;padding-left: 10px;position: absolute;top: 5px;font-size: 20px;
}
.pc-bond-div-input-max{
  font-size: 20px;font-family: Fredoka One;font-weight: 400; color: #F94F01;position: absolute;right: 30px;top: 12px;cursor: pointer;
}
.pc-bond-div-btn{
  position: absolute;right: 10px;top: 0px;cursor: pointer; width: 210px;height: 50px;background: #0792E3; border-radius: 5px;z-index: 999;text-align: center;line-height: 50px;color: #FFFFFF;font-size: 20px;font-family: Selawik; font-weight: 600;
}
.pc-bond-div-gif{
  position: absolute;right: 10px;top: 0px;width: 210px;height: 50px;background: #414346; border-radius: 5px;z-index: 999;line-height: 50px;
}
.pc-bond-div-detail{
  display: flex;padding-top: 6px;
}
.pc-bond-div-detail-left{
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 24px;flex: 1;
}
.pc-bond-div-detail-right{
  font-size: 16px;font-family: Lato;font-weight: 400;color: #ffffff;line-height: 24px;flex: 1;text-align: right;
}
.pc-bond-div-btn1{
  margin: 25px auto 0px auto; width: 540px;height: 50px; background: #0792E3; border-radius: 5px;text-align: center;line-height: 50px;font-size: 20px;font-family: Selawik;font-weight: 600;color: #FFFFFF;
}
.h5-bond-dialog-btn{
  line-height: 0.93rem;text-align: center;margin: 0.8rem auto 0rem auto;
  width: 8rem;
  height: 0.93rem;
  background: #0792E3;
  border-radius: 0.07rem;
  font-size: 0.32rem;
  font-family: Selawik;
  font-weight: 600;
  color: #FFFFFF;
}
.h5-bond-dialog-btn:hover{
  background: #00A0E9;
}
.h5-bond-dialog-item{
  width: 8rem;margin: 0.3rem auto 0rem auto; font-size: 0.35rem; font-family: Selawik; font-weight: 400; color: #FFFFFF;display: flex;
}
.h5-bond-tab-p{
  width: 2rem; height: 0.67rem; background: #0792E3;font-size: 0.32rem; font-family: Selawik;font-weight: 600; color: #FFFFFF;text-align: center;line-height:0.67rem;
}
.h5-bond-tab-n{
  width: 2rem; height: 0.67rem; background: #737373;font-size: 0.32rem; font-family: Selawik;font-weight: 600; color: #FFFFFF;text-align: center;line-height:0.67rem;
}
::v-deep .el-input__inner {
  -webkit-appearance: none;
  background-color: #FFF;
  background-image: none;
  //border-radius:10px;
  border: 1px solid #DCDFE6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 50px;
  line-height:50px;
  outline: 0;
  padding:10px;
  -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 100%;
}
@media screen and (max-width: 750px){


  .el-select-dropdown__item {
    font-size: 0.18667rem;
    padding: 0 0.26667rem;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 0.93rem;
    line-height: 0.45333rem;
    box-sizing: border-box;
    cursor: pointer;
  }

  /*  .el-input__inner {
      -webkit-appearance: none;
      background-color: #FFF;
      background-image: none;
      border-radius: 0.05333rem;
      border: 1px solid #DCDFE6;
      box-sizing: border-box;
      color: #606266;
      display: inline-block;
      font-size: inherit;
      height: 0.93rem;
      line-height: 0.93rem;
      outline: 0;
      padding: 0 0.2rem;
      -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
    }*/

  ::v-deep .el-input__inner {
    -webkit-appearance: none;
    background-color: #FFF;
    background-image: none;
    border-radius: 0.05333rem;
    border: 1px solid #DCDFE6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 0.93rem;
    line-height: 0.53333rem;
    outline: 0;
    padding: 0 0.2rem;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }

}

</style>
