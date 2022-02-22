<template>
  <div>
  <my-dialog :is-show="isShow" @isClose="closeDialog"  :width="isMobile ? '8.27rem' : '834px'" :pubVue="pubVue">
    <div>
      <div v-show="!isMobile">
        <div style="padding-top: 20px;position: relative;">
          <img
              :src="close"
              style="width: 17px;height: 17px;left: 45px;top: 20px;position: absolute;z-index: 999;"
              @click="closeDialog"
          />
          <div style="width: 770px;margin: 0px auto;">
            <el-select v-model="value" placeholder="" class="pc-dialog-div-spanner">
              <el-option
                   :style="value==item.value ? 'background: #00A0E9;':'background: #FFFFFF;' "
                  v-for="item in spanners"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                <div style=" width: 730px;height: 30px; display: flex;z-index: 999;"     @click="onClickOptionItem(item.value)">
                  <img
                      :src="icon_sat"
                      v-show="item.label=='SAT WL spot'"
                      style="width: 20px;height:20px;z-index: 999;margin-top: 5px;margin-left: 10px;"
                  />
                  <img
                      :src="icon_dot"
                      v-show="item.label=='sDOT WL spot'"
                      style="width: 20px;height:20px;z-index: 999;margin-top: 5px;margin-left: 10px;"
                  />
                  <img
                      :src="icon_bnb"
                      v-show="item.label=='sBNB WL spot'"
                      style="width: 20px;height:20px;z-index: 999;margin-top: 5px;margin-left: 10px;"
                  />
                  <img
                      :src="icon_matic"
                      v-show="item.label=='sMatic WL spot'"
                      style="width: 20px;height:20px;z-index: 999;margin-top: 5px;margin-left: 10px;"
                  />
                  <div style="margin-left: 25px;line-height: 30px; font-size: 16px;font-family: Selawik;font-weight: 400; color: #000000;">{{ item.label }}</div>
                </div>
              </el-option>
            </el-select>
          </div>



          <div style=" width: 770px;margin: 5px auto 0px auto;font-size: 16px;font-family: Selawik;font-weight: 400;color: #FFFFFF;z-index: 0;">Your WL counter : {{whitelist_og_counter}}</div>



          <div  class="pc-dialog-div-tip1">
            <div style="width: 550px;position: relative;">



              <div class='pc-dialog-div-input'>
                <input v-model="whitelistInputAddress" type="text"  @input="inputChange()" placeholder="Recipient address"
                       class='pc-dialog-div-input1'
                />

              </div>

            </div>
            <div class="pc-dialog-div-btn" @click="onClickSend"  >
              Send
            </div>
            <div class="pc-dialog-div-gif" v-show="isShowProgress">
              <img :src="gif" style="width: 30px;height: 30px;margin-top: 10px;margin-left: 90px;" alt="zh" />
            </div>


          </div>
          <div style=" width: 770px;margin: 60px auto 0px auto;font-size: 16px;font-family: Selawik;font-weight: 400;color: #FFFFFF;">*Each address only need one spot to join the early market and you cannot reback your spot after sending.</div>


          <div  @click="goLink('https://doc.synassets.finance/')" style="cursor: pointer; width: 770px;margin: 100px auto 0px auto;font-size: 16px;font-family: Selawik;font-weight: 400;color: #0792E3;text-decoration: underline;text-align: center;">doc</div>


          <div style="width:54px;height: 30px;"></div>
        </div>
      </div>

      <div v-show="isMobile">
        <div style="width: 8.27rem;position: relative; ">
          <img
              :src="close"
              style="width: 0.3rem;height: 0.3rem;left: 0.36rem;top: 0.36rem;position: absolute;z-index: 999;"
              @click="closeDialog"
          />
        </div>
        <div style="width: 6.79rem;margin: 0rem auto;">
          <el-select v-model="value" placeholder="" class="h5-dialog-div-spanner">
            <el-option
                :style="value==item.value ? 'background: #00A0E9;':'background: #FFFFFF;' "
                v-for="item in spanners"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              <div style=" width: 6rem;height: 0.93rem; display: flex;z-index: 999;"    @click="onClickOptionItem(item.value)">
                <img
                    :src="icon_sat"
                    v-show="item.label=='SAT WL spot'"
                    style="width: 0.45rem;height:0.45rem;z-index: 999;margin-top: 0.2rem;margin-left: 0.32rem"
                />
                <img
                    :src="icon_dot"
                    v-show="item.label=='sDOT WL spot'"
                    style="width: 20px;height:20px;z-index: 999;margin-top: 5px;margin-left: 10px;"
                />
                <img
                    :src="icon_bnb"
                    v-show="item.label=='sBNB WL spot'"
                    style="width: 20px;height:20px;z-index: 999;margin-top: 5px;margin-left: 10px;"
                />
                <img
                    :src="icon_matic"
                    v-show="item.label=='sMatic WL spot'"
                    style="width: 20px;height:20px;z-index: 999;margin-top: 5px;margin-left: 10px;"
                />
                <div style="margin-left: 0.4rem;line-height: 0.93rem; font-size: 0.35rem;font-family: Selawik;font-weight: 400; color: #000000;">{{ item.label }}</div>
              </div>
            </el-option>
          </el-select>
        </div>
        <div style=" width:  6.79rem;margin: 0.1rem auto 0px auto;font-size: 0.27rem;font-family: Selawik;font-weight: 400;color: #737373;">Your Balance: 2</div>

        <div style=" width:  6.79rem;margin: 0.4rem auto 0px auto;">
          <input v-model="whitelistInputAddress" type="text"  @input="inputChange()" placeholder="Recipient address"
                style="height:0.93rem;width: 6.59rem;line-height: 0.93rem;padding-left: 0.2rem; background: #FFFFFF; border-radius: 0.07rem;"

          />
        </div>
        <div style=" width:  6.79rem;margin: 0.1rem auto 0px auto;font-size: 0.27rem;font-family: Selawik;font-weight: 400;color: #737373;">
          *Each address only need one spot to join the early
          market and you cannot reback your spot after sending.
        </div>

        <div style="text-align: center;line-height:  0.93rem; width:  6.79rem; height: 0.93rem; background: #0792E3;border-radius: 0.07rem;margin: 0.4rem auto 0px auto;font-size: 0.32rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;">
          Send
        </div>

        <div  @click="goLink('https://doc.synassets.finance/')"  style="margin: 1rem auto 0px auto;width:  6.79rem;padding-bottom: 0.4rem;font-size: 0.32rem; font-family: Selawik; font-weight: 400; text-decoration: underline; color: #0792E3;text-align: center">doc</div>

      </div>
    </div>
  </my-dialog>
  <MessageTipErrorDialog   ref="messageTipErrorDialog" />
  </div>
</template>

<script>
import myDialog from "@/views/components/myDialog";

import { close ,gif,icon_sat,
  icon_bnb ,
  icon_dot,
  icon_matic, } from "@/utils/images";
import {mapState} from "vuex";
// eslint-disable-next-line no-unused-vars
import {getDATA,isAddress, transfer_white_list} from "@/utils/Wallet";
import MessageTipErrorDialog from "@/views/layout/components/MessageTipErrorDialog";

export default {
  name: "WhitelistTransferDialog",
  components:{ myDialog ,MessageTipErrorDialog},
  data(){
    return {
      close,
      gif,
      icon_sat,
      icon_bnb ,
      icon_dot,
      icon_matic,
      spanners: [
        {
          value: 'sMatic WL spot',
          label: 'sMatic WL spot'
        }, {
          value: 'sBNB WL spot',
          label: 'sBNB WL spot'
        },
        {
          value: 'SAT WL spot',
          label: 'SAT WL spot'
        }, {
          value: 'sDOT WL spot',
          label: 'sDOT WL spot'
        }],
      value: 'SAT WL spot',
      whitelistInputAddress:"",
      isShowProgress:false,
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
    }
  },
  computed:{
    ...mapState({
      isMobile: state => state.sys.isMobile,
      whitelist_og_counter:state => state.wallet.whitelist_og_counter
    })
  },

  created() {
    this.data = getDATA();
  },
  methods:{
    goLink(url) {
      window.open(url);
    },
    closeDialog(){
      // this.isShow = false;
      this.$emit('clickCloseDialog', {});

    },
    onClickOptionItem(value){
      this.$refs.messageTipErrorDialog.showClick('Address is worry! ' +value);
    },
     inputChange(){},

    async onClickSend(){
      alert(1111)
      try {
        this.isShowProgress = true;
        if (isAddress(this.whitelistInputAddress)) {
          this.$refs.messageTipErrorDialog.showClick('Address is worry! ');
        }
     // await transfer_white_list(this.whitelistInputAddress, this.data.IDO.OG.contractAddress);


      } catch (e) {
        console.log(e);
      }
      this.isShowProgress = false;
    },
  }
}
</script>

<style lang="scss" scoped>
.pc-dialog-div-spanner{
  width: 770px;background: #FFFFFF; border-radius: 5px;margin: 80px auto 0px auto;
}
.pc-dialog-div-tip1{
  margin:25px auto 0px auto; width: 770px;display: flex;position: relative;
}
.pc-dialog-div-tip2{
  width: 500px;height: 50px;position: absolute;top: 0; font-size: 14px;font-family: Selawik;font-weight: 400; color: #808080;text-align: center
}
.pc-dialog-div-input{
  width: 520px;height: 50px;background: #FFFFFF;border: 1px solid #FFFFFF;position: absolute;top: 0;border-radius: 5px;
}
.pc-dialog-div-input1{
  height:40px;width: 460px;line-height: 40px;padding-left: 10px;position: absolute;top: 5px;font-size: 20px;
}
.pc-dialog-div-input-max{
  font-size: 20px;font-family: Fredoka One;font-weight: 400; color: #F94F01;position: absolute;right: 30px;top: 12px;cursor: pointer;
}
.pc-dialog-div-btn{
  position: absolute;right: 10px;top: 0px;cursor: pointer; width: 210px;height: 50px;background: #0792E3; border-radius: 5px;z-index: 999;text-align: center;line-height: 50px;color: #FFFFFF;font-size: 20px;font-family: Selawik; font-weight: 600;
}
.pc-dialog-div-gif{
  position: absolute;right: 10px;top: 0px;width: 210px;height: 50px;background: #414346; border-radius: 5px;z-index: 999;line-height: 50px;
}

.h5-dialog-div-spanner{
  width: 6.79rem;background: #FFFFFF; border-radius: 0.07rem;margin: 1.1rem auto 0rem auto;
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
