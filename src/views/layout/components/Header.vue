<template>
  <div >
    <div v-show="isMobile" style="  width: 10rem;height: 1.5rem;  background: #070707;position: fixed;top: 0rem;z-index: 9999;">
      <div  style="  width: 10rem;  background: #070707;position: relative;">
        <div @click="onShowMenu"   class="div-header-menu-btn">
          <img :src="h5_menu" style="cursor: pointer;width: 0.48rem;height: 0.39rem;margin-left: 0.3rem;margin-bottom: 0.24rem;"/>
        </div>

        <div  v-show="this.address == null || this.address.length < 8 ||  this.address =='0x0000000000000000000000000000000000000000'||this.chainId != this.configData.chainId" @click="initCollect"   class="div-header-connect-btn">
          Connect Wallet
        </div>

        <div  @click="isShowAddWallet=true" v-show="this.address != null && this.address.length >8 && this.address !='0x0000000000000000000000000000000000000000'&&this.chainId == this.configData.chainId"   class="div-header-connect-btn">
          {{this.address != null && this.address.length >8 ? this.address.substr(0,4) +"****"+ this.address.substr(this.address.length-4,this.address.length-1) : 0 }}
        </div>
      </div>
    </div>

    <div v-show="isMobile&&isShowAddWallet" style="  width: 10rem;height: 30rem;  background: #161616;position: fixed;top: 0rem;z-index: 9999;">
      <div style="width: 7.87rem;margin: 1rem auto 0rem auto;position: relative;">
        <div style="position: absolute;left: 0rem;font-size: 0.4rem;font-family: Selawik;font-weight: bold;color: #808080;">My Wallet</div>
        <img :src="close" style="cursor: pointer;width: 0.3rem;height: 0.3rem;right: 0rem;position: absolute;top: 0.2rem;" @click="isShowAddWallet=false"/>
      </div>

      <div style="width: 7.87rem;margin: 1.6rem auto 0rem auto;position: relative;">
        <div style="position: absolute;left: 0rem;font-size: 0.4rem;font-family: Selawik;font-weight: bold;color: #FFFFFF;">$--</div>
      </div>

      <div style="width: 7.87rem;margin: 3.5rem auto 0rem auto;position: relative;">
        <img :src="sat_icon" style="width: 0.68rem;height: 0.68rem;top: 0.2rem;position: absolute;left: 0rem;" />
        <div style="position: absolute;left: 1.4rem;font-size: 0.32rem;font-family: Selawik;font-weight: bold;color: #FFFFFF;top: 0.3rem;">SAT</div>
        <div style="position: absolute;right: 0rem;font-size: 0.32rem;font-family: Selawik;font-weight: bold;color: #FFFFFF;top: 0rem;">{{satBalance+' '+this.data.IDO.OG.symbol}}</div>
        <div style="position: absolute;right: 0rem;top: 0.5rem;font-size: 0.21rem;font-family: Selawik;font-weight: bold;color: #FFFFFF;color: #808080">{{'$ '+calcT12Amount}}</div>

      </div>

      <div class="h5-add-wallet-btn"  @click="addSatCoin">
        Add to Wallet
      </div>


    </div>



    <div v-show="!isMobile" style="width: 100%;height: 85px;background: #161616;position: fixed;top: 0px;z-index: 9999;">
      <div style="width: 100%;height: 85px;background: #161616;position: relative;">
        <div  v-show="this.address == null || this.address.length < 8 ||  this.address =='0x0000000000000000000000000000000000000000'||this.chainId != this.configData.chainId" @click="initCollect"
              class="pc-div-btn1">
          Connect Wallet
        </div>

        <div  v-show="this.address != null && this.address.length >8 && this.address !='0x0000000000000000000000000000000000000000'&&this.chainId == this.configData.chainId"
              class="pc-div-btn1">
          {{this.address != null && this.address.length >8 ? this.address.substr(0,4) +"****"+ this.address.substr(this.address.length-4,this.address.length-1) : 0 }}
        </div>

        <div class="pc-div-btn2"> <img :src="metamask"  style="width: 29px;height: 26px;margin-left: 30px;margin-top: 6px;" alt /> <div style="margin-left: 10px;line-height: 40px;">{{this.data.IDO.OG.symbol}}</div>
          <div class="pc-div-btn2-item">
            <div  class="pc-div-btn2-item0" >My Wallet</div>
            <div class="pc-div-btn2-item1">
              <img  class="pc-div-btn2-item2" :src="sat_icon" />
              <div  class="pc-div-btn2-item3" >{{this.data.IDO.OG.symbol}}</div>
              <div  class="pc-div-btn2-item4" >{{satBalance+' '+this.data.IDO.OG.symbol}}</div>
              <div  class="pc-div-btn2-item5" >{{'$ '+calcT12Amount}}</div>
            </div>

            <div class="add-wallet-btn" @click="addSatCoin">Add to Wallet </div>

          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import { mapState } from "vuex";
import { h5_menu,metamask ,sat_icon,close} from "@/utils/images";


import Cookies from "js-cookie";
import {addSATCoin, getAddress, getChainId, getChainIdVlaue, getConfigData, getDATA, init} from "../../../utils/Wallet";
import { createWatcher } from '@makerdao/multicall';



export default {
  name: "Header",
  components: {

  },
  data() {
    return {
      close,
      sat_icon,
      h5_menu,
      metamask,
      loops: "",
      firstRun: true,
      loading: "",
      showIdailog: false,
      showHd4: false,
      showHD5: false,
      tab: 1,
      isZh: true,
      isShowMenu: false,
      address: '',
      interval:'',
      chainId:1,
      satBalance:0,
      calcT12Amount:0,
      calcT15Amount:0,
      isShowAddWallet:false,
      configData:{
        chainId :0
      },
      data:{}
    };
  },
  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile,
    }),
  },
  created() {
    this.data =  getDATA();

    this.initData()
  },

mounted() {
  let thisThat = this;
  window.ethereum.on("accountsChanged", function(accounts) {
    init();
    thisThat.address= accounts[0];
    console.log('accountsChanged1='+accounts[0]);//一旦切换账号这里就会执行

  });
},

  methods: {
    addSatCoin(){
      // this.$message.info("Coming Soon!");
      addSATCoin()
    },
    async initData(){

      this.address = await getAddress();

      this.configData =  getConfigData()
      this.interval =  setInterval(this.getAddress(), 2000);
      this.getInfo();
    },
    async getAddress(){
      this.chainId = await getChainIdVlaue();
      if(this.address&&this.address.length>10&&this.interval&&this.chainId == this.configData.chainId){

        this.address =   getAddress();
        clearInterval(this.interval)
        this.interval = null;
        return
      }else{

        this.address =   getAddress();

      }
    },
    async getAddress1(){
      this.address = await this.getChainId();
    },
    async getChainId(){
      let msg = await getChainId();
      if(msg.length > 0){
        this.$message.error(msg);
        return;
      }
      let thatthis = this;
      setTimeout(() => {
        thatthis.address = getAddress();
      }, 3000);
    },
    async initCollect() {
      await init();
      await this.getChainId();
      this.chainId = await getChainIdVlaue();
    },
    onShowMenu() {
      this.$bus.$emit("formBus", true);
    },
    changeLang() {
      let code = Cookies.get("lang");
      if (this.isZh) {
        code = "en";
      } else {
        code = "zh-CN";
      }

      this.isZh = !this.isZh;
      switch (code) {
        case "zh":
          code = "zh-CN";
          break;
        case "en":
          code = "en";
          break;
        default:
          break;
      }
      Cookies.set("lang", code, { expires: 31 });
      localStorage.setItem("language", code);
      this.$store.dispatch("setLanguage", code);
      this.$i18n.locale = code;
    },

    onClickShowMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
    goPageMark(url) {
      this.tab = 1;
      if (this.$route.path !== url) {
        this.$router.push(url);
      }
    },
    onTabClick(index) {
      this.tab = index;
      // this.changeLang()
      if (index == 1) {
        this.$router.push("/dashboard");
      } else if (index == 2) {
        this.$router.push("/staking");
      } else if (index == 3) {
        // this.$router.push("/vault")
      } else if (index == 5) {
        this.$router.push("/mine");
      }
    },
    getInfo(){

      if(this.address==''){
        this.address = '0x0000000000000000000000000000000000000000';
      }
      const watcher = createWatcher(
          [
            {
              target: this.data.IDO.OG.address,
              call: ['balanceOf(address)(uint256)',this.address],
              returns: [['balanceOf']]
            },
            {
              target: this.data.IDO.OG.contractAddress,
              call: ['calcT1(uint256)(uint256)',this.data.IDO.OG.scala],
              returns: [['calcT12']]
            },
            {
              target: this.data.IDO.NOG.contractAddress,
              call: ['calcT1(uint256)(uint256)',this.data.IDO.NOG.scala],
              returns: [['calcT15']]
            }
          ],
          {
            rpcUrl: this.configData.rpcUrl,
            multicallAddress: this.configData.multicallAddress,
            interval: 15000
          }
      );
      watcher.subscribe(update => {
        console.log(`Update: ${update.type} = ${update.value}`);
        if(update.type=='balanceOf'){
          if(update.value>0){
            this.satBalance = update.value / this.data.IDO.OG.symbolScala
            this.satBalance   =  this.satBalance.toFixed(2)
          }

        }else if(update.type=='calcT12'){
          let calcT12 = update.value / this.data.IDO.OG.scala
          let calcT12PricePerToken =   (1 /  calcT12).toFixed(6)
          this.calcT12Amount =  this.satBalance * calcT12PricePerToken;
          this.calcT12Amount = this.calcT12Amount.toFixed(2)
        }else if(update.type=='calcT15'){
          let calcT15 = update.value / this.data.IDO.NOG.scala
          let calcT15PricePerToken =  ( 1 /  calcT15).toFixed(6)
          this.calcT15Amount =  this.satBalance * calcT15PricePerToken;
          this.calcT15Amount = this.calcT15Amount.toFixed(2)
        }


      });
      watcher.onNewBlock(blockNumber => {
        this.blockNumber = blockNumber;
      });
      watcher.start();
    },

  }
};
</script>

<style lang="scss" scoped>
.h5-add-wallet-btn{
  cursor: pointer;
  font-size: 0.32rem; font-family: Selawik; font-weight: 400; color: #808080;width: 7.87rem;height: 1.07rem;margin: 6rem auto 0rem auto; border: 1px solid #808080;position: relative;text-align: center;line-height:1.07rem;
}
.h5-add-wallet-btn:hover{
  background: linear-gradient(-45deg, #25434A 0%,  #4A3E48 100%);
}
.add-wallet-btn{
  margin: 0px auto;
  font-size: 14px; font-family: Selawik; font-weight: 400;color: #808080;cursor: pointer; width: 260px; height: 40px; background: #242424; border: 2px solid #313131;text-align: center;line-height: 40px;
}
.add-wallet-btn:hover{
  background: linear-gradient(-45deg, #25434A 0%,  #4A3E48 100%);
}
.div-header-menu-btn{
  cursor: pointer;width: 1.07rem;height: 0.99rem;background:linear-gradient(-45deg, #4A3E48 0%, #25434A 100%);;
  border-radius: 0.27rem;top: 0.27rem;left: 0.53rem;position: absolute;
}
.div-header-menu-btn:hover{
  background: linear-gradient(-45deg, #25434A 0%,  #4A3E48 100%);
}
.div-header-connect-btn{
  position: absolute;right: 0.53rem;top: 0.27rem;cursor: pointer;text-align: center;line-height: 0.99rem;width: 3.73rem;height: 0.99rem; background: linear-gradient(-45deg, #4A3E48 0%, #25434A 100%); border-radius: 0.27rem;font-size: 0.32rem; font-family: Selawik;font-weight: 600;color: #FFFFFF;
}
.div-header-connect-btn:hover{
  background: linear-gradient(-45deg, #25434A 0%,  #4A3E48 100%);
}

.pc-div-btn1{
  width: 160px;height: 40px; background: #242424;border-radius: 5px;line-height: 40px;text-align: center;position: absolute;right: 16px;top: 21px;
  font-size: 16px;font-family: Selawik;font-weight: bold;color: #FFFFFF;cursor: pointer;
}
.pc-div-btn1:hover{
  background: linear-gradient(-45deg, #25434A 0%,  #4A3E48 100%);
}

.pc-div-btn2{
  cursor: pointer;display: flex;padding-right: 30px;
  position: absolute;right: 192px;top: 21px;height: 40px;background: #242424; border-radius: 5px;
  line-height: 40px;font-size: 16px;font-family: Fredoka One; font-weight: 400;color: #FFFFFF;
}

.pc-div-btn2-item{
  display: none;
  z-index: 999;
  position: absolute;right: 0px;top: 42px;width: 300px;height: 180px;background: #242424; border-radius: 10px;
}
pc-div-btn2-item:hover{
  display: inline-block;
}
.pc-div-btn2:hover .pc-div-btn2-item{
  display: inline-block;
}
.pc-div-btn2-item0{
  font-size: 14px;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 20px;padding-top: 10px;
}
.pc-div-btn2-item0:hover .pc-div-btn2-item{
  display: inline-block;
}
.pc-div-btn2-item1{
  display: flex;padding: 20px;position: relative;
}
.pc-div-btn2-item1:hover .pc-div-btn2-item{
  display: inline-block;
}


.pc-div-btn2-item2{
  width: 25px;height: 25px;
}
.pc-div-btn2-item2:hover .pc-div-btn2-item{
  display: inline-block;
}

.pc-div-btn2-item3{
  font-size: 16px;font-family: Selawik; font-weight: 400; color: #FFFFFF;line-height: 1.5;margin-left: 20px;
}
.pc-div-btn2-item3:hover .pc-div-btn2-item{
  display: inline-block;
}


.pc-div-btn2-item4{
  position: absolute; right: 20px;top: 0px; font-size: 14px;font-family: Selawik;font-weight: 400;color: #FFFFFF;
}
.pc-div-btn2-item4:hover .pc-div-btn2-item{
  display: inline-block;
}

.pc-div-btn2-item5{
  position: absolute; right: 20px;top: 20px; font-size: 10px;font-family: Selawik;font-weight: 400;color: #808080;
}
.pc-div-btn2-item5:hover .pc-div-btn2-item{
  display: inline-block;
}

.pc-div-btn2-item:hover{
  display: inline-block;
}
</style>
