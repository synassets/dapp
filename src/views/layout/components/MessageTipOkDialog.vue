<template>
  <my-dialog :is-show="isShow"   :width="isMobile ? '7rem' : '400px'" :pubVue="pubVue">
    <div>
      <div v-show="!isMobile" style="padding-bottom: 40px;padding-top: 40px;">
        <div style="display: flex;">
          <img
              :src="tip_ok"
              style="width: 42px;height: 23px;margin-left: 100px;"

          />
          <div style=" font-size: 18px;font-family: Selawik; font-weight: bold;color: #32B16C;margin-left: 40px;">Success</div>

        </div>
      </div>

      <div v-show="isMobile"  style="padding-bottom: 0.8rem;padding-top: 0.8rem;">

        <div style="display: flex;">
          <img
              :src="tip_ok"
              style="width: 1rem;height:0.51rem;margin-left: 2rem;"

          />
          <div style=" font-size: 0.35rem;font-family: Selawik; font-weight: bold;color: #32B16C;margin-left: 0.5rem;">Success</div>

        </div>





      </div>
    </div>
  </my-dialog>
</template>

<script>
import myDialog from "@/views/components/myDialog";

import {
  tip_ok
} from "@/utils/images";
import {mapState} from "vuex";


export default {
  name: "MessageTipOkDialog",
  components:{ myDialog },
  data(){
    return {
    tip_ok
    }
  },
  props: {
    isShow: Boolean,
    showClose: {
      type: Boolean,
      default: true
    },
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
    showClick() {
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
  box-shadow: 0 0 0 rgba(50, 177, 108, 0.7);
  border:1px solid #32B16C;
}
::v-deep .el-dialog {
  background-color: #242424;
  box-shadow: 0 0 0 rgba(50, 177, 108, 0.7);
  font-size: 0.32rem;
  color: #fff;
  border-radius: 0.2rem;
  border:1px solid #32B16C;
}
@media screen and (max-width: 750px){



}

</style>
