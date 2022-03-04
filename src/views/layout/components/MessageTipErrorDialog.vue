<template>
  <my-dialog :is-show="isShow"   :width="isMobile ? '7rem' : '400px'" :pubVue="pubVue">
    <div>
      <div v-show="!isMobile" style="padding-bottom: 40px;padding-top: 40px;">
        <div style="display: flex;">
          <img
              :src="tip_error"
              style="width: 42px;height: 23px;margin-left: 100px;"

          />
          <div style=" font-size: 18px;font-family: Selawik; font-weight: bold;color: #F54280;margin-left: 40px;">Failed</div>

        </div>

        <div style="text-align: center;word-wrap: break-word; word-break: normal; width:285px;margin: 20px auto 0px auto;font-size: 14px;font-family: Selawik;font-weight: 400;color: #FFFFFF; line-height: 30px;">{{tipMessgae}}</div>
      </div>


      <div v-show="isMobile"  style="padding-bottom: 0.8rem;padding-top: 0.8rem;">

        <div style="display: flex;">
          <img
              :src="tip_error"
              style="width: 1rem;height:0.51rem;margin-left: 2rem;"

          />
          <div style=" font-size: 0.35rem;font-family: Selawik; font-weight: bold;color: #F54280;margin-left: 0.5rem;">Failed</div>

        </div>

        <div style="word-wrap: break-word; word-break: normal; text-align: center;width:4.5rem;margin: 0.4rem auto 0px auto;font-size: 0.35rem;font-family: Selawik;font-weight: 400;color: #FFFFFF; line-height: 0.6rem;">{{tipMessgae}}</div>



      </div>
    </div>
  </my-dialog>
</template>

<script>
import myDialog from "@/views/components/myDialog";

import {
  tip_error
} from "@/utils/images";
import {mapState} from "vuex";


export default {
  name: "MessageTipErrorDialog",
  components:{ myDialog },
  data(){
    return {
      tip_error,
      tipMessgae:'',
      isShow:false,
    }
  },
  props: {

    pubVue: {
      type: Object
    }
  },
  computed:{
    ...mapState({
      isMobile: state => state.sys.isMobile
    })
  },
  methods:{
    showClick(message) {
      this.tipMessgae = message;
     this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      },3000)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  box-shadow: 0 0 0 rgba(245, 66, 128, 0.7);
  border:1px solid #F54280;
}
::v-deep .el-dialog {
  background-color: #242424;
  box-shadow: 0 0 0 rgba(245, 66, 128, 0.7);
  font-size: 0.32rem;
  color: #fff;
  border-radius: 0.2rem;
  border:1px solid #F54280;
}
@media screen and (max-width: 750px){



}

</style>
