<template>
  <div style="width: 100%;height: 100%;">
    <!--pc--->
    <div
      v-show="!isMobile"
      style="padding-bottom:20px;width: 100%;min-height: 1500px;background: #161616;padding-top: 85px;"
    >
      <div style="width: 100%;display: flex;">
        <div style="width: 249px;height: 100px;"></div>
        <div
          style="flex: 1;height: 114px;background: linear-gradient(-45deg, #25434A 0%,  #4A3E48 100%);"
        >
          <div style="max-width:980px ;margin: 0px auto;">
            <div
              style="font-size: 24px;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-top: 28px;"
            >IDO: Initial DAO Offerings</div>
            <div
              style="font-size: 12px;font-family: Selawik;font-weight: 400;color: #FFFFFF;padding-top: 13px;"
            >All consensus-builder can buy token fairly.</div>
          </div>
        </div>
      </div>
      <div style="width: 100%;display: flex;">
        <div style="width: 249px;height: 100px;"></div>
        <div style="flex: 1;z-index: 999;">
          <div style="max-width:980px ;margin: 0px auto;">
            <div style="width: 270px;padding-top: 60px;margin: 0px auto;display: flex;">
              <div
                @click="clickOgMarket(true)"
                v-show="isOgMarket"
                style=" cursor: pointer;width: 130px;height: 35px;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 10px;text-align: center;line-height: 35px;font-size: 16px;font-family: Selawik;font-weight: 400;color: #FFFFFF;"
              >OG Market</div>
              <div
                @click="clickOgMarket(true)"
                v-show="!isOgMarket"
                style=" cursor: pointer;width: 130px;height: 35px;background: #242424; border-radius: 10px;text-align: center;line-height: 35px;font-size: 16px;font-family: Selawik;font-weight: 400;color: #FFFFFF;"
              >OG Market</div>

              <div
                @click="clickOgMarket(false)"
                v-show="!isOgMarket"
                style=" cursor: pointer; width: 130px;height: 35px;background:  linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 10px;text-align: center;line-height: 35px;margin-left: 20px;font-size: 16px;font-family: Selawik;font-weight: 400;color: #FFFFFF;"
              >Public Market</div>
              <div
                @click="clickOgMarket(false)"
                v-show="isOgMarket"
                style=" cursor: pointer; width: 130px;height: 35px;background: #242424; border-radius: 10px;text-align: center;line-height: 35px;margin-left: 20px;font-size: 16px;font-family: Selawik;font-weight: 400;color: #FFFFFF;"
              >Public Market</div>
            </div>

            <div
              style="max-width: 980px;height: 3px;background: #808080;margin:15px auto 0px auto;z-index: -1;"
            ></div>

            <div style="max-width:980px ;margin: 60px auto 0px auto;display: flex;">
              <div
                style=" max-width: 480px; height: 570px;background: #242424;border-radius: 10px;"
              >
                <div
                  style="padding-top: 40px;padding-left: 50px;font-size: 14px;font-family: Selawik;font-weight: 600;color: #DDDDDD;"
                >Token Information</div>
                <div class="pc-div1">
                  <div class="pc-div1-left">Contract address</div>
                  <div
                    v-show="isOgMarket"
                    class="pc-div1-right"
                    style="text-decoration: underline;cursor: pointer;"
                    @click="goContract()"
                  >{{ this.data.IDO.OG.address.substr(0,10)+"****"+this.data.IDO.OG.address.substr(this.data.IDO.OG.address.length-10,this.data.IDO.OG.address.length)}}</div>
                  <div
                    v-show="!isOgMarket"
                    class="pc-div1-right"
                    style="text-decoration: underline;cursor: pointer;"
                    @click="goContract()"
                  >{{ this.data.IDO.NOG.address.substr(0,10)+"****"+this.data.IDO.NOG.address.substr(this.data.IDO.NOG.address.length-10,this.data.IDO.NOG.address.length)}}</div>
                </div>

                <div class="pc-div1">
                  <div class="pc-div1-left">Token symbol</div>
                  <div v-show="isOgMarket" class="pc-div1-right">{{ this.data.IDO.OG.symbol}}</div>
                  <div v-show="!isOgMarket" class="pc-div1-right">{{ this.data.IDO.NOG.symbol}}</div>
                </div>

                <div class="pc-div1" style="margin-top: 40px;">
                  <div
                    class="pc-div1-left"
                    style="font-size: 14px;font-family: Selawik;font-weight: 600;color: #DDDDDD;"
                  >IDO Information</div>
                </div>

                <div class="pc-div1">
                  <div class="pc-div1-left">IDO amount</div>
                  <div
                    v-show="isOgMarket"
                    class="pc-div1-right"
                  >{{ this.formatAmount( this.data.IDO.OG.maxAmount1 / this.data.IDO.OG.scala)}}</div>
                  <div
                    v-show="!isOgMarket"
                    class="pc-div1-right"
                  >{{ this.formatAmount( this.data.IDO.NOG.maxAmount1 / this.data.IDO.NOG.scala)}}</div>
                </div>

                <div class="pc-div1">
                  <div class="pc-div1-left">IDO currency</div>
                  <div v-show="isOgMarket" class="pc-div1-right">{{ this.data.IDO.OG.current}}</div>
                  <div v-show="!isOgMarket" class="pc-div1-right">{{ this.data.IDO.NOG.current}}</div>
                </div>

                <div class="pc-div1">
                  <div class="pc-div1-left">Price per unit, $</div>
                  <div v-show="isOgMarket" class="pc-div1-right">{{ this.calcT12PricePerToken}}</div>
                  <div v-show="!isOgMarket" class="pc-div1-right">{{ this.calcT15PricePerToken}}</div>
                </div>

                <div class="pc-div1">
                  <div class="pc-div1-left">Minimum amount</div>
                  <div
                    v-show="isOgMarket"
                    class="pc-div1-right"
                  >{{ this.formatAmount( this.data.IDO.OG.minAmount1PerWallet / this.data.IDO.OG.scala)}}</div>
                  <div
                    v-show="!isOgMarket"
                    class="pc-div1-right"
                  >{{ this.formatAmount( this.data.IDO.NOG.minAmount1PerWallet / this.data.IDO.NOG.scala)}}</div>
                </div>

                <div class="pc-div1">
                  <div class="pc-div1-left">Allocation per Whitelist</div>
                  <div
                    v-show="isOgMarket"
                    class="pc-div1-right"
                  >{{ this.formatAmount( this.data.IDO.OG.maxAmount1PerWallet / this.data.IDO.OG.scala)}}</div>
                  <div
                    v-show="!isOgMarket"
                    class="pc-div1-right"
                  >{{ this.formatAmount( this.data.IDO.NOG.maxAmount1PerWallet / this.data.IDO.NOG.scala)}}</div>
                </div>

                <div class="pc-div1">
                  <div class="pc-div1-left">IDO Start Time (UTC)</div>
                  <div v-show="isOgMarket" class="pc-div1-right">{{ this.time2}}</div>
                  <div v-show="!isOgMarket" class="pc-div1-right">{{ this.time5}}</div>
                </div>

                <div class="pc-div1">
                  <div class="pc-div1-left">IDO End Time (UTC)</div>
                  <div v-show="isOgMarket" class="pc-div1-right">{{ this.timeEnd2}}</div>
                  <div v-show="!isOgMarket" class="pc-div1-right">{{ this.timeEnd5}}</div>
                </div>

                <div class="pc-div1" style="margin-top: 40px;">
                  <div
                    class="pc-div1-left"
                    style="font-size: 14px;font-family: Selawik;font-weight: 600;color: #DDDDDD;"
                  >IDO Progress</div>
                  <!--                           <div v-show="isOgMarket"  style="position: absolute;right: 0.5rem;">{{ this.og_amount_total +'/'+ this.formatAmount(this.data.IDO.OG.maxAmount1 / this.data.IDO.OG.scala) + ' '+this.data.IDO.OG.current  }} </div>
                  <div v-show="!isOgMarket"  style="position: absolute;right: 0.5rem;">{{ this.nog_amount_total +'/'+ this.formatAmount(this.data.IDO.NOG.maxAmount1 / this.data.IDO.NOG.scala) + ' '+this.data.IDO.OG.current  }}</div>-->
                  <div
                    v-show="isOgMarket"
                    class="pc-div1-right"
                  >{{ this.og_amount_total +'/'+ this.formatAmount(this.data.IDO.OG.maxAmount1 / this.data.IDO.OG.scala) +' '+ this.data.IDO.OG.current }}</div>
                  <div
                    v-show="!isOgMarket"
                    class="pc-div1-right"
                  >{{ this.nog_amount_total +'/'+ this.formatAmount(this.data.IDO.NOG.maxAmount1 / this.data.IDO.NOG.scala) +' '+ this.data.IDO.OG.current }}</div>
                </div>
                <div
                  style="width: 380px;height: 16px;background: #5F5F5F;border-radius:  8px;margin: 20px auto 0px auto;position: relative;"
                >
                  <div
                    v-show="isOgMarket"
                    :style="'width:'+ this.pc_OG_Progress+'px;'"
                    class="pc-progress"
                  ></div>
                  <div
                    v-show="!isOgMarket"
                    :style="'width:'+ this.pc_NOG_Progress+'px;'"
                    class="pc-progress"
                  ></div>
                </div>
              </div>

              <div
                style=" width: 480px; height: 570px;background: #242424;border-radius: 10px;margin-left: 20px;position: relative;"
              >
                <img
                  :src="pc_ido_img2"
                  style="width: 120px;height: 120px;position: absolute;top: 0px;left: 0px;"
                  alt="zh"
                />
                <div
                  v-show="step==1"
                  style="width: 120px;height: 120px;padding-top: 25px;padding-left: 18px; font-size: 16px;font-family: Selawik;font-weight: 400;color: #242424;transform: rotate(-45deg)"
                >Coming Soon</div>
                <div
                  v-show="step==2"
                  style="text-align: center;width: 120px;height: 120px;padding-top: 25px;padding-left: 18px; font-size: 16px;font-family: Selawik;font-weight: 400;color: #242424;transform: rotate(-45deg)"
                >Live</div>
                <div
                  v-show="step==3"
                  style="text-align: center;width: 120px;height: 120px;padding-top: 25px;padding-left: 18px; font-size: 16px;font-family: Selawik;font-weight: 400;color: #242424;transform: rotate(-45deg)"
                >Closed</div>

                <img v-show="this.is_og_ambassador" :src="share" class="pc_share_img" alt />
                <div
                  v-show="this.is_og_ambassador"
                  class="pc_share_img"
                  style="font-size: 14px;z-index: 999"
                  @click="showInviteClick()"
                >
                  <span class="pc_share_div">
                    Only ambassador have the right of invitation
                    and gain SAT invite reward of 4%,
                    the invitee will gain 1% SAT invite reward.
                  </span>
                </div>
                <div
                  style="position: absolute;top: 0px;left: 0px;text-align: center;font-size: 14px;font-family: Selawik; font-weight: 600; color: #FFFFFF;width:480px;padding-top: 45px; "
                >Fundraise Goal</div>

                <div
                  v-show="isOgMarket&&step!=3"
                  style="position: absolute;top: 50px;left: 0px;text-align: center;font-size: 20px;font-family: Selawik; font-weight: 600; color: #FFFFFF;width:480px;padding-top: 20px; "
                >{{ this.formatAmount( this.data.IDO.OG.maxAmount1 / this.data.IDO.OG.scala) + ' '+this.data.IDO.OG.current }}</div>
                <div
                  v-show="!isOgMarket&&step!=3"
                  style="position: absolute;top: 50px;left: 0px;text-align: center;font-size: 20px;font-family: Selawik; font-weight: 600; color: #FFFFFF;width:480px;padding-top: 20px; "
                >{{ this.formatAmount( this.data.IDO.NOG.maxAmount1 / this.data.IDO.NOG.scala)+ ' '+this.data.IDO.NOG.current }}</div>

                <div
                  v-show="step==3"
                  style="position: absolute;top: 50px;left: 0px;text-align: center;font-size: 20px;font-family: Selawik; font-weight: 600; color: #EB6877;width:480px;padding-top: 20px; "
                >{{ 'Closed' }}</div>

                <div style="width: 400px;height: 2px;background: #5F5F5F;margin: 0px auto;"></div>

                <div
                  v-show="step!=3"
                  style="width: 400px;margin:20px auto 0px auto;display: flex;font-size: 14px; font-family: Selawik;font-weight: 400;color: #AAAAAA;position: relative;"
                >
                  Allocation
                  <div
                    v-show="isOgMarket"
                    style="position: absolute;right: 0px;color: #FFFFFF;"
                  >{{ this.my_Allocation_OG_Amount_format + ' ' + this.data.IDO.OG.current + ' (Max)' }}</div>
                  <div
                    v-show="!isOgMarket"
                    style="position: absolute;right: 0px;color: #FFFFFF;"
                  >{{ this.my_Allocation_NOG_Amount_format + ' ' + this.data.IDO.NOG.current + ' (Max)' }}</div>
                </div>
                <div
                  v-show="step!=3"
                  style="width: 400px;margin:20px auto 0px auto;display: flex;font-size: 14px; font-family: Selawik;font-weight: 400;color: #AAAAAA;position: relative;"
                >
                  Price per token
                  <div
                    v-show="isOgMarket"
                    style="position: absolute;right: 0px;color: #FFFFFF;"
                  >{{ this.calcT12PricePerToken +' '+ this.data.IDO.OG.current }}</div>
                  <div
                    v-show="!isOgMarket"
                    style="position: absolute;right: 0px;color: #FFFFFF;"
                  >{{ this.calcT15PricePerToken +' '+ this.data.IDO.NOG.current }}</div>
                </div>

                <div class="pc-ido-btn3" v-show="step==1" @click="goLink(1)">Join Discord</div>
                <div
                  class="pc-ido-btn3"
                  style="margin-top: 20px;"
                  v-show="step==1&&isOgMarket"
                  @click="goLink(2)"
                >How to get Whitelist ?</div>

                <div
                  v-show="step==2"
                  style="max-width: 400px;margin:20px auto 0px auto;font-size: 12px; font-family: Selawik;font-weight: 400;color: #FFFFFF;text-align: right;"
                >{{'Balance '+this.currentAddressBalanceOf2_format+' '+ this.data.IDO.OG.current}}</div>
                <div
                  v-show="step==2"
                  style="width:  400px;height:  40px;background: #FFFFFF;margin: 15px auto 0px auto;position: relative"
                >
                  <input
                    v-model="stakeAmount"
                    type="text"
                    style="height:38px;width: 360px;position: absolute;top:1px;left: 5px;"
                  />

                  <div
                    @click="clickMaxValue()"
                    style="cursor: pointer;text-align: center;line-height:  24px;border-radius: 24px;width: 50px;height: 24px;background: #1f1f1f;font-size: 12px; font-family: Selawik; font-weight: 600; color: #FFFFFF;position: absolute;right: 10px;top: 8px;"
                  >{{'MAX'}}</div>
                </div>
                <div
                  @click="OgApprove()"
                  class="pc-ido-btn3"
                  v-show="step==2&&!isOGApproved&&isOgMarket&&!isShowProgress&&ogWhitelist"
                >Approve</div>
                <div
                  @click="PublicApprove()"
                  class="pc-ido-btn3"
                  v-show="step==2&&!isPublicSaleApproved&&!isOgMarket&&!isShowProgress"
                >Approve</div>
                <div
                  @click="OgSale()"
                  class="pc-ido-btn3"
                  v-show="step==2&&isOGApproved&&isOgMarket&&!isShowProgress&&ogWhitelist"
                >Enable</div>
                <div
                  @click="publicSale()"
                  class="pc-ido-btn3"
                  v-show="step==2&&isPublicSaleApproved&&!isOgMarket&&!isShowProgress"
                >Enable</div>

                <div v-show="isShowProgress&&ogWhitelist" class="pc-ido-btn3x" @click="waiting">
                  <img :src="gif" style="width: 20px;height: 20px;margin-top: 15px;" alt="zh" />
                </div>
                <div
                  class="pc-ido-btn3"
                  v-show="isOgMarket&&!ogWhitelist&&step==2"
                  @click="goLink(1)"
                >need whitelist</div>

                <div
                  v-show="step!=3"
                  style="width: 400px;height: 2px;background: #5F5F5F;margin: 40px auto 0px auto;"
                ></div>

                <div
                  v-show="step==1"
                  style="width: 480px;text-align: center;font-size: 14px;font-family: Selawik;font-weight: 400;color: #FFFFFF;padding-top: 20px;"
                >IDO will be live in</div>
                <div
                  v-show="step==2"
                  style="width: 480px;text-align: center;font-size: 14px;font-family: Selawik;font-weight: 400;color: #FFFFFF;padding-top: 20px;"
                >IDO will be finished in</div>

                <div
                  v-show="step!=3"
                  style="width: 300px;margin: 20px auto 0px auto;display: flex;"
                >
                  <div class="pc-ido-time">{{ this.mDay >=10 ? this.mDay:'0'+this.mDay}}</div>
                  <div style="margin-left: 27px;margin-top: 8px">
                    <div
                      style="width: 6px; height: 6px;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 50%;"
                    ></div>

                    <div
                      style="width: 6px; height: 6px;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 50%;margin-top: 0.05rem;"
                    ></div>
                  </div>
                  <div class="pc-ido-time" style="margin-left: 27px;">{{ this.mH0+''+this.mH1}}</div>

                  <div style="margin-left: 27px;margin-top: 8px">
                    <div
                      style="width: 6px; height: 6px;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 50%;"
                    ></div>

                    <div
                      style="width: 6px; height: 6px;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 50%;margin-top: 0.05rem;"
                    ></div>
                  </div>
                  <div class="pc-ido-time" style="margin-left: 27px;">{{ this.mM0+''+this.mM1}}</div>

                  <div style="margin-left: 27px;margin-top: 8px">
                    <div
                      style="width: 6px; height: 6px;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 50%;"
                    ></div>

                    <div
                      style="width: 6px; height: 6px;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 50%;margin-top: 0.05rem;"
                    ></div>
                  </div>
                  <div class="pc-ido-time" style="margin-left: 27px;">{{ this.mS0+''+this.mS1}}</div>
                </div>
                <div v-show="step!=3" style="width: 300px;margin: 8px auto 0px auto;display: flex;">
                  <div class="pc-ido-time1">{{ 'Days'}}</div>
                  <div style="margin-left: 27px;margin-top: 10px"></div>
                  <div class="pc-ido-time1" style="margin-left: 27px;">{{ 'Hours'}}</div>

                  <div style="margin-left: 27px;margin-top: 10px"></div>
                  <div class="pc-ido-time1" style="margin-left: 27px;">{{ 'Minutes'}}</div>

                  <div style="margin-left: 27px;margin-top: 10px"></div>

                  <div class="pc-ido-time1" style="margin-left: 15px;">{{ 'Seconds'}}</div>
                </div>
                <div
                  v-show="step==3"
                  style="width: 400px;margin:20px auto 0px auto;display: flex;font-size: 14px; font-family: Selawik;font-weight: 400;color: #AAAAAA;position: relative;"
                >
                  Ratio
                  <div
                    v-show="isOgMarket"
                    style="position: absolute;right: 0px;color: #FFFFFF;"
                  >{{ ' 1 '+ this.data.IDO.OG.symbol + ' = ' +this.calcT12PricePerToken +' ' +this.data.IDO.OG.current }}</div>
                  <div
                    v-show="!isOgMarket"
                    style="position: absolute;right: 0px;color: #FFFFFF;"
                  >{{ ' 1 '+ this.data.IDO.NOG.symbol + ' = ' +this.calcT15PricePerToken +' ' +this.data.IDO.NOG.current }}</div>
                </div>

                <div
                  v-show="step==3"
                  style="width: 400px;margin:20px auto 0px auto;display: flex;font-size: 14px; font-family: Selawik;font-weight: 400;color: #AAAAAA;position: relative;"
                >
                  Total IDO amount
                  <div
                    v-show="isOgMarket"
                    style="position: absolute;right: 0px;color: #FFFFFF;"
                  >{{ this.formatAmount( this.data.IDO.OG.maxAmount1 / this.data.IDO.OG.scala) + this.data.IDO.OG.current }}</div>
                  <div
                    v-show="!isOgMarket"
                    style="position: absolute;right: 0px;color: #FFFFFF;"
                  >{{ this.formatAmount( this.data.IDO.NOG.maxAmount1 / this.data.IDO.NOG.scala) + this.data.IDO.NOG.current }}</div>
                </div>
                <div
                  v-show="step==3"
                  style="width: 400px;margin:20px auto 0px auto;display: flex;font-size: 14px; font-family: Selawik;font-weight: 400;color: #AAAAAA;position: relative;"
                >
                  Successful IDO amount
                  <div
                    v-show="isOgMarket"
                    style="position: absolute;right: 0px;color: #FFFFFF;"
                  >{{ this.amountTotal12_format + this.data.IDO.OG.current }}</div>
                  <div
                    v-show="!isOgMarket"
                    style="position: absolute;right: 0px;color: #FFFFFF;"
                  >{{ this.amountTotal15_format + this.data.IDO.NOG.current }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          :src="pc_ido_img1"
          style="width: 1135px;height: 294px;position: fixed;bottom:0px ;left: 110px;"
          alt="zh"
        />
      </div>
    </div>
    <!--h5--->
    <div
      v-show="isMobile"
      style="width: 10rem;background: #070707;min-height: 20rem; padding-bottom: 3rem;padding-top: 2.11rem;"
    >
      <div
        style="font-size: 0.38rem;font-family: Selawik;font-weight: 600;color: #808080;padding-left: 0.87rem;"
      >IDO: Initial DAO Offerings</div>
      <div
        style="margin-top: 0.1rem;font-size: 0.3rem;font-family: Selawik;font-weight: 400;color: #808080;padding-left: 0.87rem;"
      >All consensus-builder can buy token fairly.</div>

      <div style="padding-left: 0.84rem;margin-top:0.81rem;display: flex ">
        <div @click="clickOgMarket(true)" :class="isOgMarket ?'h5-ido-btn1':'h5-ido-btn2'">OG Market</div>

        <div
          @click="clickOgMarket(false)"
          :class="!isOgMarket ?'h5-ido-btn1':'h5-ido-btn2'"
          style="margin-left: 0.27rem;"
        >Public Market</div>
      </div>
      <!----not start  --->
      <div
        v-show="step==1"
        style="width: 8.27rem;padding-bottom: 0.63rem;background: #242424;border-radius: 0.13rem;margin:0.55rem auto 0rem auto;position: relative; "
      >
        <img v-show="this.is_og_ambassador" :src="share" class="h5_share_img" alt />
        <div v-show="this.is_og_ambassador" class="h5_share_img" @click="showInviteClick()">
          <span class="h5_share_div">
            Only ambassador have the right of invitation
            and gain SAT invite reward of 4%,
            the invitee will gain 1% SAT invite reward.
          </span>
        </div>

        <div
          style="font-size: 0.35rem;font-family: Selawik;font-weight: 600; color: #FFFFFF;width: 8.27rem;text-align: center;padding-top: 0.59rem;"
        >Fundraise Goal</div>

        <div
          style="font-size: 0.3rem;font-family: Selawik; font-weight: 600;color: #FFFFFF;width: 8.27rem;text-align: center;padding-top: 0.19rem;"
          v-show="isOgMarket&&step!=3"
        >{{ this.formatAmount( this.data.IDO.OG.maxAmount1 / this.data.IDO.OG.scala) + ' '+this.data.IDO.OG.current }}</div>
        <div
          style="font-size: 0.3rem;font-family: Selawik; font-weight: 600;color: #FFFFFF;width: 8.27rem;text-align: center;padding-top: 0.19rem;"
          v-show="!isOgMarket&&step!=3"
        >{{ this.formatAmount( this.data.IDO.NOG.maxAmount1 / this.data.IDO.NOG.scala)+ ' '+this.data.IDO.NOG.current }}</div>

        <div
          style="height: 0.03rem; background: #5F5F5F;width: 6.8rem;text-align: center;margin: 0.32rem auto 0rem auto;"
        ></div>

        <div
          style="width: 6.8rem;margin: 0.27rem auto 0rem auto; font-size: 0.19rem;font-family: Selawik;font-weight: 400; color: #808080;"
        >
          Allocation Price per token
          <div
            v-show="isOgMarket"
            style="float: right;font-size: 0.19rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
          >{{ this.my_Allocation_OG_Amount_format + ' ' + this.data.IDO.OG.current + ' (Max)' }}</div>
          <div
            v-show="!isOgMarket"
            style="float: right;font-size: 0.19rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
          >{{ this.my_Allocation_NOG_Amount_format + ' ' + this.data.IDO.NOG.current + ' (Max)' }}</div>
        </div>
        <div
          style="width: 6.8rem;margin: 0.27rem auto 0rem auto; font-size: 0.21rem;font-family: Selawik;font-weight: 400; color: #808080;"
        >
          Price per token
          <div
            v-show="isOgMarket"
            style="float: right;font-size: 0.27rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
          >{{ this.calcT12PricePerToken + this.data.IDO.OG.current }}</div>
          <div
            v-show="!isOgMarket"
            style="float: right;font-size: 0.27rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
          >{{ this.calcT15PricePerToken + this.data.IDO.NOG.current }}</div>
        </div>
        <div class="h5-ido-btn3" @click="goLink(1)">Join Discord</div>
        <div class="h5-ido-btn3" @click="goLink(2)" v-show="isOgMarket">How to get Whitelist ?</div>

        <div
          style="height: 0.03rem; background: #5F5F5F;width: 6.8rem;text-align: center;margin: 0.4rem auto 0rem auto;"
        ></div>

        <div
          style="font-size: 0.3rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;width: 8.27rem;text-align: center;padding-top: 0.32rem;"
        >IDO will be live in</div>

        <div style="width: 3.7rem;margin: 0.5rem auto 0 auto;display: flex;">
          <div
            style="font-size: 0.32rem;font-family: Selawik; font-weight: 600; color: #FFFFFF;"
          >{{ this.mDay >=10 ? this.mDay:'0'+this.mDay}}</div>
          <div style="margin-left: 0.3rem;padding-top: 0.11rem;">
            <div
              style="width: 0.1rem; height: 0.1rem;background: linear-gradient(-45deg, #FED6E3 0%, #A8EDEA 100%); border-radius: 50%;"
            ></div>

            <div
              style="width: 0.1rem; height: 0.1rem;background: linear-gradient(-45deg, #A8EDEA 0%, #FED6E3 100%); border-radius: 50%;margin-top: 0.05rem;"
            ></div>
          </div>
          <div
            style="font-size: 0.32rem;font-family: Selawik; font-weight: 600; color: #FFFFFF;margin-left: 0.3rem;"
          >{{ this.mH0+''+this.mH1}}</div>
          <div style="margin-left: 0.3rem;padding-top: 0.11rem;">
            <div
              style="width: 0.1rem; height: 0.1rem;background: linear-gradient(-45deg, #FED6E3 0%, #A8EDEA 100%); border-radius: 50%;"
            ></div>

            <div
              style="width: 0.1rem; height: 0.1rem;background: linear-gradient(-45deg, #A8EDEA 0%, #FED6E3 100%); border-radius: 50%;margin-top: 0.05rem;"
            ></div>
          </div>
          <div
            style="font-size: 0.32rem;font-family: Selawik; font-weight: 600; color: #FFFFFF;margin-left: 0.3rem;"
          >{{ this.mM0+''+this.mM1}}</div>
          <div style="margin-left: 0.3rem;padding-top: 0.11rem;">
            <div
              style="width: 0.1rem; height: 0.1rem;background: linear-gradient(-45deg, #FED6E3 0%, #A8EDEA 100%); border-radius: 50%;"
            ></div>

            <div
              style="width: 0.1rem; height: 0.1rem;background: linear-gradient(-45deg, #A8EDEA 0%, #FED6E3 100%); border-radius: 50%;margin-top: 0.05rem;"
            ></div>
          </div>
          <div
            style="font-size: 0.32rem;font-family: Selawik; font-weight: 600; color: #FFFFFF;margin-left: 0.3rem;"
          >{{ this.mS0+''+this.mS1}}</div>
        </div>
        <div style="width: 4.5rem;margin: 0.3rem auto 0 auto;display: flex;">
          <div
            style="font-size: 0.1rem;font-family: Selawik;  color: #FFFFFF;margin-left: 0.1rem;width: 0.9rem"
          >{{ 'Days'}}</div>
          <div style="margin-left: 0.3rem;padding-top: 0.11rem;"></div>
          <div
            style="font-size: 0.1rem;font-family: Selawik;  color: #FFFFFF;width: 0.9rem"
          >{{ 'Hours'}}</div>
          <div style="margin-left: 0.3rem;padding-top: 0.11rem;"></div>
          <div
            style="font-size: 0.1rem;font-family: Selawik;  color: #FFFFFF;width: 0.9rem"
          >{{ 'Minutes'}}</div>
          <div style="margin-left: 0.3rem;padding-top: 0.11rem;"></div>
          <div
            style="font-size: 0.1rem;font-family: Selawik;  color: #FFFFFF;width: 0.9rem"
          >{{ 'Seconds'}}</div>
        </div>
      </div>

      <!---close-->
      <div
        style="width: 8.27rem;padding-bottom: 2.63rem;background: #242424;border-radius: 0.13rem;margin:0.55rem auto 0rem auto; "
        v-show="step==3"
      >
        <div
          style="font-size: 0.35rem;font-family: Selawik;font-weight: 600; color: #FFFFFF;width: 8.27rem;text-align: center;padding-top: 0.59rem;"
        >Fundraise Goal</div>

        <div
          style="font-size: 0.35rem;font-family: Selawik; font-weight: 600;color: #EB6877;width: 8.27rem;text-align: center;padding-top: 0.19rem;"
        >Closed</div>

        <div
          style="height: 0.03rem; background: #5F5F5F;width: 6.8rem;text-align: center;margin: 0.32rem auto 0rem auto;"
        ></div>

        <div
          style="width: 6.8rem;margin: 0.27rem auto 0rem auto; font-size: 0.35rem;font-family: Selawik;font-weight: 400; color: #808080;"
        >
          Ratio
          <div
            style="float: right;font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
            v-show="isOgMarket"
          >{{ ' 1 '+ this.data.IDO.OG.symbol + ' = ' +this.calcT12PricePerToken +' ' +this.data.IDO.OG.current }}</div>
          <div
            style="float: right;font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
            v-show="!isOgMarket"
          >{{ ' 1 '+ this.data.IDO.NOG.symbol + ' = ' +this.calcT15PricePerToken +' ' +this.data.IDO.NOG.current }}</div>
        </div>
        <div
          style="width: 6.8rem;margin: 0.27rem auto 0rem auto; font-size: 0.35rem;font-family: Selawik;font-weight: 400; color: #808080;"
        >
          Total IDO amount
          <div
            v-show="isOgMarket"
            style="float: right;font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
          >{{ this.formatAmount( this.data.IDO.OG.maxAmount1 / this.data.IDO.OG.scala) + this.data.IDO.OG.current }}</div>
          <div
            v-show="!isOgMarket"
            style="float: right;font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
          >{{ this.formatAmount( this.data.IDO.NOG.maxAmount1 / this.data.IDO.NOG.scala) + this.data.IDO.NOG.current }}</div>
        </div>

        <div
          style="width: 6.8rem;margin: 0.35rem auto 0rem auto; font-size: 0.35rem;font-family: Selawik;font-weight: 400; color: #808080;"
        >
          Successful IDO amount
          <div
            v-show="isOgMarket"
            style="float: right;font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
          >{{ this.amountTotal12_format + this.data.IDO.OG.current }}</div>
          <div
            v-show="!isOgMarket"
            style="float: right;font-size: 0.35rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
          >{{ this.amountTotal15_format + this.data.IDO.NOG.current }}</div>
        </div>
      </div>
      <!-----end close-->
      <!--0   -->
      <div
        v-show="step==2"
        style="width: 8.27rem;padding-bottom: 0.63rem;background: #242424;border-radius: 0.13rem;margin:0.55rem auto 0rem auto;position: relative; "
      >
        <img v-show="this.is_og_ambassador" :src="share" class="h5_share_img" alt />
        <div v-show="this.is_og_ambassador" class="h5_share_img" @click="showInviteClick()">
          <span class="h5_share_div">
            Only ambassador have the right of invitation
            and gain SAT invite reward of 4%,
            the invitee will gain 1% SAT invite reward.
          </span>
        </div>
        <div
          style="font-size: 0.35rem;font-family: Selawik;font-weight: 600; color: #FFFFFF;width: 8.27rem;text-align: center;padding-top: 0.59rem;"
        >Fundraise Goal</div>
        <div
          style="font-size: 0.35rem;font-family: Selawik; font-weight: 600;color: #FFFFFF;width: 8.27rem;text-align: center;padding-top: 0.19rem;"
          v-show="isOgMarket&&step!=3"
        >{{ this.formatAmount( this.data.IDO.OG.maxAmount1 / this.data.IDO.OG.scala) + ' '+this.data.IDO.OG.current }}</div>
        <div
          style="font-size: 0.35rem;font-family: Selawik; font-weight: 600;color: #FFFFFF;width: 8.27rem;text-align: center;padding-top: 0.19rem;"
          v-show="!isOgMarket&&step!=3"
        >{{ this.formatAmount( this.data.IDO.NOG.maxAmount1 / this.data.IDO.NOG.scala)+ ' '+this.data.IDO.NOG.current }}</div>

        <div
          style="height: 0.03rem; background: #5F5F5F;width: 6.8rem;text-align: center;margin: 0.32rem auto 0rem auto;"
        ></div>
        <div
          style="width: 6.8rem;margin: 0.27rem auto 0rem auto; font-size: 0.15rem;font-family: Selawik;font-weight: 400; color: #808080;"
        >
          Allocation Price per token
          <div
            v-show="isOgMarket"
            style="float: right;font-size: 0.2rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
          >{{ this.my_Allocation_OG_Amount_format + ' ' + this.data.IDO.OG.current + '(Max)' }}</div>
          <div
            v-show="!isOgMarket"
            style="float: right;font-size: 0.2rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
          >{{ this.my_Allocation_NOG_Amount_format + ' ' + this.data.IDO.NOG.current + '(Max)' }}</div>
        </div>
        <div
          style="width: 6.8rem;margin: 0.27rem auto 0rem auto; font-size: 0.21rem;font-family: Selawik;font-weight: 400; color: #808080;"
        >
          Price per token
          <div
            v-show="isOgMarket"
            style="float: right;font-size: 0.21rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
          >{{ this.calcT12PricePerToken +' '+ this.data.IDO.OG.current }}</div>
          <div
            v-show="!isOgMarket"
            style="float: right;font-size: 0.21rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;"
          >{{ this.calcT15PricePerToken + ' '+this.data.IDO.NOG.current }}</div>
        </div>

        <div
          v-show="isOgMarket"
          style="width: 6.8rem;margin: 0.3rem auto 0rem auto; font-size: 0.3rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;text-align: right"
        >{{'Balance '+this.currentAddressBalanceOf2_format+' '+ this.data.IDO.OG.current}}</div>
        <div
          v-show="!isOgMarket"
          style="width: 6.8rem;margin: 0.3rem auto 0rem auto; font-size: 0.3rem;font-family: Selawik;font-weight: 400;color: #FFFFFF;text-align: right"
        >{{'Balance '+this.currentAddressBalanceOf5_format+' '+ this.data.IDO.NOG.current}}</div>

        <div
          style="width: 6.8rem;height: 0.7rem;background: #FFFFFF;margin: 0.1rem auto 0 auto;position: relative"
        >
          <input
            v-model="stakeAmount"
            type="text"
            style="height:0.6rem;width: 3rem;margin-left: 0.2rem;position: absolute;top: 0.1rem;left: 0.1rem"
          />

          <div
            @click="clickMaxValue()"
            style="cursor: pointer;border-radius: 0.5rem;padding: 0.05rem 0.2rem;font-size: 0.1rem; font-family: Selawik;background: #1f1f1f; color: #FFFFFF;position: absolute;right: 0.2rem;
          top: 0.25rem;"
          >{{'MAX'}}</div>
          <!--<div @click="clickMaxValue()" style="cursor: pointer;text-align: center;line-height:  24px;border-radius: 24px;width: 50px;
          height: 24px;background: #1f1f1f;font-size: 12px; font-family: Selawik; font-weight: 600; color: #FFFFFF;position: absolute;right: 10px;top: 12px;" >{{'MAX'}}</div>-->
        </div>

        <div
          @click="OgApprove()"
          v-show="step==2&&!isOGApproved&&isOgMarket&&!isShowProgress&&ogWhitelist"
          class="h5-ido-btn3"
        >Approve</div>
        <div
          @click="PublicApprove()"
          v-show="step==2&&!isPublicSaleApproved&&!isOgMarket&&!isShowProgress"
          class="h5-ido-btn3"
        >Approve</div>

        <div
          @click="OgSale()"
          v-show="step==2&&isOGApproved&&isOgMarket&&!isShowProgress&&ogWhitelist"
          class="h5-ido-btn3"
        >Enable</div>
        <div
          @click="publicSale()"
          v-show="step==2&&isPublicSaleApproved&&!isOgMarket&&!isShowProgress"
          class="h5-ido-btn3"
        >Enable</div>

        <div v-show="isShowProgress" class="h5-ido-btn3x" @click="waiting">
          <img :src="gif" style="width: 0.37rem;height: 0.37rem;margin-top: 0.15rem;" alt="zh" />
        </div>
        <div
          v-show="isOgMarket&&!ogWhitelist&&step==2"
          class="h5-ido-btn3"
          @click="goLink(1)"
        >need whitelist</div>

        <div
          style="height: 0.03rem; background: #5F5F5F;width: 6.8rem;text-align: center;margin: 0.4rem auto 0rem auto;"
        ></div>

        <div
          style="font-size: 0.19rem;font-family: Selawik; font-weight: 400;color: #FFFFFF;width: 8.27rem;text-align: center;padding-top: 0.32rem;"
        >IDO will be finished in</div>

        <div style="width: 3.7rem;margin: 0.5rem auto 0 auto;display: flex;">
          <div
            style="font-size: 0.32rem;font-family: Selawik; font-weight: 600; color: #FFFFFF;"
          >{{ this.mDay >=10 ? this.mDay:'0'+this.mDay}}</div>
          <div style="margin-left: 0.3rem;padding-top: 0.11rem;">
            <div
              style="width: 0.1rem; height: 0.1rem;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 50%;"
            ></div>

            <div
              style="width: 0.1rem; height: 0.1rem;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 50%;margin-top: 0.05rem;"
            ></div>
          </div>
          <div
            style="font-size: 0.32rem;font-family: Selawik; font-weight: 600; color: #FFFFFF;margin-left: 0.3rem;"
          >{{ this.mH0+''+this.mH1}}</div>
          <div style="margin-left: 0.3rem;padding-top: 0.11rem;">
            <div
              style="width: 0.1rem; height: 0.1rem;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 50%;"
            ></div>

            <div
              style="width: 0.1rem; height: 0.1rem;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 50%;margin-top: 0.05rem;"
            ></div>
          </div>
          <div
            style="font-size: 0.32rem;font-family: Selawik; font-weight: 600; color: #FFFFFF;margin-left: 0.3rem;"
          >{{ this.mM0+''+this.mM1}}</div>
          <div style="margin-left: 0.3rem;padding-top: 0.11rem;">
            <div
              style="width: 0.1rem; height: 0.1rem;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 50%;"
            ></div>

            <div
              style="width: 0.1rem; height: 0.1rem;background: linear-gradient(-45deg, #25434A 0%, #4A3E48  100%); border-radius: 50%;margin-top: 0.05rem;"
            ></div>
          </div>
          <div
            style="font-size: 0.32rem;font-family: Selawik; font-weight: 600; color: #FFFFFF;margin-left: 0.3rem;"
          >{{ this.mS0+''+this.mS1}}</div>
        </div>
        <div style="width: 4.5rem;margin: 0.3rem auto 0 auto;display: flex;">
          <div
            style="font-size: 0.1rem;font-family: Selawik;  color: #FFFFFF;margin-left: 0.1rem;width: 0.9rem"
          >{{ 'Days'}}</div>
          <div style="margin-left: 0.3rem;padding-top: 0.11rem;"></div>
          <div
            style="font-size: 0.1rem;font-family: Selawik;  color: #FFFFFF;width: 0.9rem"
          >{{ 'Hours'}}</div>
          <div style="margin-left: 0.3rem;padding-top: 0.11rem;"></div>
          <div
            style="font-size: 0.1rem;font-family: Selawik;  color: #FFFFFF;width: 0.9rem"
          >{{ 'Minutes'}}</div>
          <div style="margin-left: 0.3rem;padding-top: 0.11rem;"></div>
          <div
            style="font-size: 0.1rem;font-family: Selawik;  color: #FFFFFF;width: 0.9rem"
          >{{ 'Seconds'}}</div>
        </div>
      </div>

      <!--end 0-->
      <!-----1--->
      <div
        style="width: 8.27rem;padding-bottom: 0.63rem;background: #242424;border-radius: 0.13rem;margin:0.4rem auto 0rem auto; "
      >
        <div
          style="font-size: 0.19rem; font-family: Selawik;font-weight: 600; color: #FFFFFF;padding-top: 0.57rem;padding-left: 0.73rem;position: relative;display: flex;"
        >
          IDO Progress
          <div
            v-show="isOgMarket"
            style="position: absolute;right: 0.5rem;"
          >{{ this.og_amount_total +'/'+ this.formatAmount(this.data.IDO.OG.maxAmount1 / this.data.IDO.OG.scala) + ' '+this.data.IDO.OG.current }}</div>
          <div
            v-show="!isOgMarket"
            style="position: absolute;right: 0.5rem;"
          >{{ this.nog_amount_total +'/'+ this.formatAmount(this.data.IDO.NOG.maxAmount1 / this.data.IDO.NOG.scala) + ' '+this.data.IDO.OG.current }}</div>
        </div>
        <div
          style="width: 6.8rem; height: 0.21rem;background: #5F5F5F;border-radius: 0.13rem;margin: 0.31rem auto 0rem auto;position: relative;"
        >
          <div
            v-show="isOgMarket"
            :style="'width:'+ this.h5_OG_Progress+'rem;'"
            class="h5-progress"
          ></div>
          <div
            v-show="!isOgMarket"
            :style="'width:'+ this.h5_NOG_Progress+'rem;'"
            class="h5-progress"
          ></div>
        </div>

        <div
          style="font-size: 0.3rem; font-family: Selawik;font-weight: 600; color: #FFFFFF;padding-top: 0.8rem;padding-left: 0.73rem;"
        >Token Information</div>

        <div
          style="font-size: 0.3rem; font-family: Selawik;font-weight: 600; color: #808080;margin-top: 0.34rem;padding-left: 0.73rem;"
        >
          Contract address
          <div
            v-show="isOgMarket"
            style="color: #FFFFFF;margin-top: 0.3rem;text-decoration: underline;cursor: pointer;"
            @click="goContract()"
          >{{ this.data.IDO.OG.address.substr(0,10)+"****"+this.data.IDO.OG.address.substr(this.data.IDO.OG.address.length-10,this.data.IDO.OG.address.length)}}</div>
          <div
            v-show="!isOgMarket"
            style="color: #FFFFFF;margin-top: 0.2rem;text-decoration: underline;cursor: pointer;"
            @click="goContract()"
          >{{ this.data.IDO.NOG.address.substr(0,10)+"****"+this.data.IDO.NOG.address.substr(this.data.IDO.NOG.address.length-10,this.data.IDO.NOG.address.length)}}</div>
        </div>
        <div
          style="font-size: 0.3rem; font-family: Selawik;font-weight: 600; color: #808080;margin-top: 0.34rem;padding-left: 0.73rem;"
        >
          Token symbol
          <div
            v-show="isOgMarket"
            style="color: #FFFFFF;margin-top: 0.2rem"
          >{{ this.data.IDO.OG.symbol}}</div>
          <div
            v-show="!isOgMarket"
            style="color: #FFFFFF;margin-top: 0.2rem"
          >{{ this.data.IDO.NOG.symbol}}</div>
        </div>
        <div
          style="font-size: 0.3rem; font-family: Selawik;font-weight: 600; color: #FFFFFF;margin-top: 0.56rem;padding-left: 0.73rem;"
        >IDO Information</div>
        <div
          style="font-size: 0.3rem; font-family: Selawik;font-weight: 600; color: #808080;margin-top: 0.34rem;padding-left: 0.73rem;"
        >
          IDO amount
          <div
            v-show="isOgMarket"
            style="color: #FFFFFF;margin-top: 0.2rem"
          >{{ this.formatAmount( this.data.IDO.OG.maxAmount1 / this.data.IDO.OG.scala ) }}</div>
          <div
            v-show="!isOgMarket"
            style="color: #FFFFFF;margin-top: 0.2rem"
          >{{ this.formatAmount( this.data.IDO.NOG.maxAmount1 / this.data.IDO.NOG.scala ) }}</div>
        </div>

        <div
          style="font-size: 0.3rem; font-family: Selawik;font-weight: 600; color: #808080;margin-top: 0.34rem;padding-left: 0.73rem;"
        >
          IDO currency
          <div
            style="color: #FFFFFF;margin-top: 0.2rem"
            v-show="isOgMarket"
          >{{ this.data.IDO.OG.current}}</div>
          <div
            style="color: #FFFFFF;margin-top: 0.2rem"
            v-show="!isOgMarket"
          >{{ this.data.IDO.NOG.current}}</div>
        </div>
        <div
          style="font-size: 0.3rem; font-family: Selawik;font-weight: 600; color: #808080;margin-top: 0.34rem;padding-left: 0.73rem;"
        >
          Price per unit, $
          <div
            v-show="isOgMarket"
            style="color: #FFFFFF;margin-top: 0.3rem"
          >{{ this.calcT12PricePerToken }}</div>
          <div
            v-show="!isOgMarket"
            style="color: #FFFFFF;margin-top: 0.3rem"
          >{{ this.calcT15PricePerToken }}</div>
        </div>
        <div
          style="font-size: 0.3rem; font-family: Selawik;font-weight: 600; color: #808080;margin-top: 0.34rem;padding-left: 0.73rem;"
        >
          Minimum amount
          <div
            v-show="isOgMarket"
            style="color: #FFFFFF;margin-top: 0.3rem"
          >{{ this.formatAmount( this.data.IDO.OG.minAmount1PerWallet/ this.data.IDO.OG.scala ) }}</div>
          <div
            v-show="!isOgMarket"
            style="color: #FFFFFF;margin-top: 0.3rem"
          >{{ this.formatAmount( this.data.IDO.NOG.minAmount1PerWallet / this.data.IDO.NOG.scala ) }}</div>
        </div>
        <div
          style="font-size: 0.3rem; font-family: Selawik;font-weight: 600; color: #808080;margin-top: 0.34rem;padding-left: 0.73rem;"
        >
          Allocation per Whitelist
          <div
            v-show="isOgMarket"
            style="color: #FFFFFF;margin-top: 0.2rem"
          >{{ this.formatAmount( this.data.IDO.OG.maxAmount1PerWallet/ this.data.IDO.OG.scala ) }}</div>
          <div
            v-show="!isOgMarket"
            style="color: #FFFFFF;margin-top: 0.2rem"
          >{{ this.formatAmount( this.data.IDO.NOG.maxAmount1PerWallet / this.data.IDO.NOG.scala ) }}</div>
        </div>

        <div
          style="font-size: 0.3rem; font-family: Selawik;font-weight: 600; color: #808080;margin-top: 0.34rem;padding-left: 0.73rem;"
        >
          IDO Start Time (UTC)
          <div v-show="isOgMarket" style="color: #FFFFFF;margin-top: 0.2rem">{{ this.time2}}</div>
          <div v-show="!isOgMarket" style="color: #FFFFFF;margin-top: 0.2rem">{{ this.time5}}</div>
        </div>
        <div
          style="font-size: 0.3rem; font-family: Selawik;font-weight: 600; color: #808080;margin-top: 0.34rem;padding-left: 0.73rem;"
        >
          IDO End Time (UTC)
          <div v-show="isOgMarket" style="color: #FFFFFF;margin-top: 0.2rem">{{ this.timeEnd2}}</div>
          <div v-show="!isOgMarket" style="color: #FFFFFF;margin-top: 0.2rem">{{ this.timeEnd5}}</div>
        </div>
      </div>
    </div>

    <my-dialog
      :is-show="showInviteDialog"
      @isClose="showInviteDialog = false"
      :width="isMobile ? '8.27rem' : '700px'"
    >
      <div v-show="!isMobile">
        <div style="padding-top: 20px;position: relative;">
          <img
            :src="close"
            style="width: 17px;height: 17px;left: 45px;top: 20px;position: absolute;z-index: 999;"
            @click="showInviteDialog = false"
          />
          <div
            style="position: absolute;text-align: center;left: 0px;top: 20px;font-size: 18px;font-family: Selawik; font-weight: 600;color: #FFFFFF;width: 700px;"
          >Invite</div>

          <div
            style="width: 600px; height: 50px; background: #FFFFFF;border-radius: 10px;margin: 80px auto 0px auto;
                line-height: 50px;padding-left: 20px;font-size: 16px;font-family: Selawik;font-weight: 300;color: #000000;"
          >{{this.shareLinkUrl.length >55 ? this.shareLinkUrl.substr(0,35)+'****'+ this.shareLinkUrl.substr(this.shareLinkUrl.length -20,this.shareLinkUrl.length):this.shareLinkUrl}}</div>

          <div
            class="bbbttt"
            v-clipboard:copy="this.shareLinkUrl"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError"
          >Copy</div>

          <div
            style="width: 580px; margin: 30px auto 0px auto;
             font-size:12px;font-family: Selawik;font-weight: 300;color: #FFFFFF;"
          >*Only ambassador have the right of invitation.</div>
          <div
            style="width: 580px; margin: 10px auto 0px auto;padding-bottom: 40px;
             font-size:12px;font-family: Selawik;font-weight: 300;color: #FFFFFF;"
          >Ambassador can gain SAT invite reward of 4%, the invitee will gain 1% SAT invite reward.</div>
        </div>
      </div>

      <div v-show="isMobile">
        <div style="width: 8.27rem;position: relative; ">
          <img
            :src="close"
            style="width: 0.3rem;height: 0.3rem;left: 0.36rem;top: 0.36rem;position: absolute;z-index: 999;"
            @click="showInviteDialog=false"
          />
        </div>
        <div
          style="width: 8.27rem;position: relative;font-size: 0.21rem;font-family: Selawik;font-weight: 600;color: #FFFFFF;padding-top: 0.3rem;text-align: center;"
        >Invite</div>

        <div
          style="width: 6.8rem; height:0.67rem; background: #FFFFFF;border-radius: 0.13rem;margin: 0.6rem auto 0rem auto;
                line-height: 0.67rem;padding-left:0.1rem;font-size: 0.19rem;font-family: Selawik;font-weight: 300;color: #000000;"
        >{{this.shareLinkUrl.length >35 ? this.shareLinkUrl.substr(0,20)+'****'+ this.shareLinkUrl.substr(this.shareLinkUrl.length -15,this.shareLinkUrl.length):this.shareLinkUrl}}</div>

        <div
          class="h5bbbttt"
          v-clipboard:copy="this.shareLinkUrl"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >Copy</div>

        <div style="width: 1rem;height: 1rem;"></div>
      </div>
    </my-dialog>
    <MessageTipOkDialog    ref="messageTipOkDialog" />
    <MessageTipWarnDialog   ref="messageTipWarnDialog" />
    <MessageTipErrorDialog   ref="messageTipErrorDialog" />

  </div>
</template>


<script>
import { mapState } from "vuex";
import { pc_ido_img1, pc_ido_img2 } from "@/utils/images";
import MyDialog from "@/views/components/myDialog";
import MessageTipOkDialog from "@/views/layout/components/MessageTipOkDialog";
import MessageTipWarnDialog from "@/views/layout/components/MessageTipWarnDialog";
import MessageTipErrorDialog from "@/views/layout/components/MessageTipErrorDialog";
let Base64 = require("js-base64").Base64;

import moment from "moment";
import {
  toWei,
  getDATA,
  doApprove2New,
  saleSwap,
  getConfigData,
  isAddress,
  InitRef
} from "../../utils/Wallet";
import { createWatcher } from "@makerdao/multicall";
import { share, close, gif } from "../../utils/images";
export default {
  name: "Index",
  components: {
    MyDialog,
    MessageTipOkDialog,
    MessageTipWarnDialog,
    MessageTipErrorDialog
  },
  data() {
    return {
      share,
      close,
      gif,
      pc_ido_img1,
      pc_ido_img2,
      OG_allowance: 0,

      NOG_allowance: 0,
      timePurchased2: "",
      timePurchased5: "",
      countDown: "Count down   ",
      poolBalance2: 0,
      poolBalance5: 0,
      totalOffered2: 0,
      totalOffered5: 0,
      // progressIndex:1,
      chainId: 0,
      isLoading: false,
      isApproveOk: false,
      data: {},
      configData: {},
      time5: "",
      time2: "",
      timeEnd5: "",
      timeEnd2: "",
      calcT12: "",
      calcT15: "",
      calcT12PricePerToken: 0,
      calcT15PricePerToken: 0,
      og_amount_total: "",
      nog_amount_total: "",
      amountTotal02: "",
      amountTotal05: "",

      amountTotal12_format: "",
      amountTotal15_format: "",
      amountTotal02_format: "",
      amountTotal05_format: "",


      amountSwapped15: 0,

      myAllocationAmount2: 0,
      myAllocationAmount5: 0,

      my_Allocation_OG_Amount_format: 0,
      my_Allocation_NOG_Amount_format: 0,

      pc_OG_Progress: 0,
      pc_NOG_Progress: 0,
      h5_OG_Progress: 0,
      h5_NOG_Progress: 0,

      mDay: 0,
      mH0: 0,
      mH1: 0,
      mM0: 0,
      mM1: 0,
      mS0: 0,
      mS1: 0,

      step: 1, // 1 no open  2 open  3 close

      currentAddressBalanceOf2: 0,
      currentAddressBalanceOf5: 0,
      currentAddressBalanceOf2_format: 0,
      currentAddressBalanceOf5_format: 0,

      isShowTimestamp2: false,
      isShowTimestamp5: false,
      showTimestamp2: "",
      showTimestamp5: "",
      stakeAmount: "",
      isOgMarket: true,
      is_og_ambassador: false,

      isShowProgress: false,
      showInviteDialog: false,
      shareLinkUrl: "",
      openAtOG: 0,
      closeAtOG: 0,
      openAtNOG: 0,
      closeAtNOG: 0,
      gasPrice: 0,
      Mult_watcher: 0
    };
  },
  computed: {
    ...mapState({
      isMobile: state => state.sys.isMobile,
      address: state => state.wallet.address,
      refAddress: state => state.wallet.invite_address,
      ogWhitelist:state => {
        return (state.wallet.my_amount_og_swapped > 0 || state.wallet.whitelist_og_counter > 0)
      },
      isPublicSaleApproved: state => {
        return state.NOG_allowance > 999999;
      },
      isOGApproved: state => {
        return state.OG_allowance > 999999;
      }
    }),

    inviteLink() {
      return "https://" + window.location.host + "?ref=" + this.myAddress;
    }
  },
  created() {
    this.data = getDATA();

    this.configData = getConfigData();
    this.getStartWatch();

    setInterval(this.timeDeal, 1000);
     this.getRefAddress();
  },


  watch: {
    // ��� `question` �����ı䣬��������ͻ�����
    immediate: true,
    address: function (newQuestion, oldQuestion) {
      console.log(newQuestion + "ido :" + oldQuestion);
      if(this.Mult_watcher != null){
        this.Mult_watcher.stop();
        this.Mult_watcher = null;
      }
      this.getStartWatch();
    }
  },

  methods: {
    onCopy(e) {
      console.log("" + e);
      // this.$message.success("success ");
      this.$refs.messageTipOkDialog.showClick();
      this.showInviteDialog = false;
    },
    async getRefAddress(){
    await InitRef()
   },
    onError(e) {
      console.log("" + e);
      // this.$message.error("copy error ");
      this.$refs.messageTipErrorDialog.showClick('copy error ');
    },
    showInviteClick() {
      if (this.address.length < 10) {
        this.$refs.messageTipWarnDialog.showClick('address error ');
        return;
      }
      this.showInviteDialog = true;
      let myAddress = Base64.encode(this.address);
      this.shareLinkUrl =
        "http://" + window.location.host + "?ref=" + myAddress;
    },

    closedClickSetDialog() {
      this.showMigrateDialog = false;
    },

    clickMaxValue() {
      if (this.isOgMarket) {
        if (this.myAllocationAmount2 > this.currentAddressBalanceOf2) {
          this.stakeAmount = this.currentAddressBalanceOf2;
        } else {
          this.stakeAmount = this.myAllocationAmount2;
        }
      } else {
        if (this.myAllocationAmount5 > this.currentAddressBalanceOf5) {
          this.stakeAmount = this.currentAddressBalanceOf5;
        } else {
          this.stakeAmount = this.myAllocationAmount5;
        }
      }
      if (this.stakeAmount <= 0) {
        this.stakeAmount = 0;
      }
    },
    clickOgMarket(val) {
      this.isOgMarket = val;
      this.mDay = 0;
      this.mH0 = 0;
      this.mH1 = 0;
      this.mM0 = 0;
      this.mM1 = 0;
      this.mS0 = 0;
      this.mS1 = 0;
      if (this.isOgMarket) {
        this.stakeAmount = ""; //4000000
      } else {
        this.stakeAmount = ""; //5000000
      }
    },

    goLink(url) {
      if (url == 1) {
        window.open(this.configData.discord);
      } else if (url == 2) {
        window.open(this.configData.whiteListURL);
      } else {
        window.open(url);
      }
    },
    goContract() {
      if (this.isOgMarket) {
        window.open(
          "https://polygonscan.com/address/" + this.data.IDO.OG.contractAddress
        );
      } else {
        window.open(
          "https://polygonscan.com/address/" + this.data.IDO.NOG.contractAddress
        );
      }
    },
    format(shijianchuo) {
      var time = new Date(shijianchuo * 1000);
      var m = time.getMonth() + 1;
      if (m == 1) {
        m = "Jan";
      } else if (m == 2) {
        m = "Feb";
      } else if (m == 3) {
        m = "Mar";
      } else if (m == 4) {
        m = "Apr";
      } else if (m == 5) {
        m = "May";
      } else if (m == 6) {
        m = "Jun";
      } else if (m == 7) {
        m = "Jul";
      } else if (m == 8) {
        m = "Aug";
      } else if (m == 9) {
        m = "Sep";
      } else if (m == 10) {
        m = "Oct";
      } else if (m == 11) {
        m = "Nov";
      } else if (m == 12) {
        m = "Dec";
      }

      var d = time.getDate();

      var h = time.getUTCHours();

      if (h > 12) {
        h = h - 12;
        h = h + "pm";
      } else {
        h = h + "am";
      }
      // return m + ' '+d+'th'+' @ '+h+' UTC'
      return h + " , " + d + "th" + " ,  " + m + " UTC";
    },
    getStartWatch() {
      if (this.Mult_watcher) {
        console.error("this.Mult_watcher Is Created");
        return;
      }
      this.Mult_watcher = createWatcher(
        [
          {
            target: this.data.IDO.OG.currentAddress,
            call: [
              "allowance(address,address)(uint256)",
              this.address,
              this.data.IDO.OG.contractAddress
            ],
            returns: [["OG_allowance"]]
          },
          {
            target: this.data.IDO.NOG.currentAddress,
            call: [
              "allowance(address,address)(uint256)",
              this.address,
              this.data.IDO.NOG.contractAddress
            ],
            returns: [["NOG_allowance"]]
          },
          {
            target: this.data.IDO.OG.contractAddress,
            call: ["amountSwapped1(address)(uint256)", this.address],
            returns: [["my_amount_OG_Swapped"]]
          },
          {
            target: this.data.IDO.NOG.contractAddress,
            call: ["amountSwapped1(address)(uint256)", this.address],
            returns: [["my_amount_NOG_Swapped"]]
          },
          {
            target: this.data.IDO.OG.contractAddress,
            call: ["amountTotal1()(uint256)"],
            returns: [["og_amount_total"]]
          },
          {
            target: this.data.IDO.NOG.contractAddress,
            call: ["amountTotal1()(uint256)"],
            returns: [["nog_amount_total"]]
          },

          {
            target: this.data.IDO.OG.contractAddress,
            call: ["amountTotal0()(uint256)"],
            returns: [["amountTotal02"]]
          },
          {
            target: this.data.IDO.NOG.contractAddress,
            call: ["amountTotal0()(uint256)"],
            returns: [["amountTotal05"]]
          },
          {
            target: this.data.IDO.OG.contractAddress,
            call: ["calcT1(uint256)(uint256)", this.data.IDO.OG.scala],
            returns: [["calcT12"]]
          },
          {
            target: this.data.IDO.NOG.contractAddress,
            call: ["calcT1(uint256)(uint256)", this.data.IDO.NOG.scala],
            returns: [["calcT15"]]
          },
          {
            target: this.data.IDO.OG.currentAddress,
            call: ["balanceOf(address)(uint256)", this.address],
            returns: [["currentAddressBalanceOf2"]]
          },
          {
            target: this.data.IDO.NOG.currentAddress,
            call: ["balanceOf(address)(uint256)", this.address],
            returns: [["currentAddressBalanceOf5"]]
          },
          {
            target: this.data.IDO.OG.contractAddress,
            call: ["whitelist(address)(uint256)", this.address],
            returns: [["OGwhitelist"]]
          },
          {
            target: this.data.IDO.OG.contractAddress,
            call: ["inviteable(address)(bool)", this.address],
            returns: [["OG_ambassador"]]
          },
          {
            target: this.data.IDO.OG.contractAddress,
            call: ["openAt()(uint256)"],
            returns: [["openAtOG"]]
          },
          {
            target: this.data.IDO.OG.contractAddress,
            call: ["closeAt()(uint256)"],
            returns: [["closeAtOG"]]
          },
          {
            target: this.data.IDO.NOG.contractAddress,
            call: ["openAt()(uint256)"],
            returns: [["openAtNOG"]]
          },
          {
            target: this.data.IDO.NOG.contractAddress,
            call: ["closeAt()(uint256)"],
            returns: [["closeAtNOG"]]
          },
          {
            target: this.data.IDO.OG.address,
            call: ["balanceOf(address)(uint256)", this.address],
            returns: [["balanceOfSat"]]
          }
        ],
        {
          rpcUrl: this.configData.rpcUrl,
          multicallAddress: this.configData.multicallAddress,
          interval: 15000
        }
      );
      this.Mult_watcher.subscribe(update => {
        console.log(`Update: ${update.type} = ${update.value}`);

        if (update.type == "OG_allowance") {
          this.OG_allowance = (Number(update.value) / 10 ** 18).toFixed(0);
        } else if (update.type == "NOG_allowance") {
          this.NOG_allowance = (Number(update.value) / 10 ** 18).toFixed(0);
        } else if (update.type == "my_amount_OG_Swapped") {
          let my_amount_OG_Swapped = update.value / this.data.IDO.OG.scala;
          this.$store.commit("SET_AMOUNT_OG_SWAPPED", my_amount_OG_Swapped);
          let maxAmount1PerWallet =
            this.data.IDO.OG.maxAmount1PerWallet / this.data.IDO.OG.scala;
          this.myAllocationAmount2 =
            maxAmount1PerWallet - my_amount_OG_Swapped;
          this.my_Allocation_OG_Amount_format = this.formatAmount(
            this.myAllocationAmount2
          );
        } else if (update.type == "my_amount_NOG_Swapped") {
          this.amountSwapped15 = update.value / this.data.IDO.NOG.scala;
          let maxAmount1PerWallet =
            this.data.IDO.NOG.maxAmount1PerWallet / this.data.IDO.NOG.scala;
          this.myAllocationAmount5 = maxAmount1PerWallet - this.amountSwapped15;
          this.my_Allocation_NOG_Amount_format = this.formatAmount(
            this.myAllocationAmount5
          );
        } else if (update.type == "og_amount_total") {
          this.og_amount_total = update.value / this.data.IDO.OG.scala;
          this.amountTotal12_format = this.formatAmount(this.og_amount_total);
          if (this.og_amount_total > 0) {
            this.pc_OG_Progress =
              (update.value * 380) / this.data.IDO.OG.maxAmount1;
            this.h5_OG_Progress =
              (update.value * 6.8) / this.data.IDO.OG.maxAmount1;
          }
        } else if (update.type == "nog_amount_total") {
          this.nog_amount_total = update.value / this.data.IDO.NOG.scala;
          this.amountTotal15_format = this.formatAmount(this.nog_amount_total);
          if (this.nog_amount_total > 0) {
            this.pc_NOG_Progress =
              (update.value * 380) / this.data.IDO.NOG.maxAmount1;
            this.h5_NOG_Progress =
              (update.value * 6.8) / this.data.IDO.NOG.maxAmount1;
          }
        } else if (update.type == "amountTotal02") {
          this.amountTotal02 = update.value / this.data.IDO.OG.scala;
          this.amountTotal02_format = this.formatAmount(this.amountTotal02);
        } else if (update.type == "amountTotal05") {
          this.amountTotal05 = update.value / this.data.IDO.NOG.scala;
          this.amountTotal05_format = this.formatAmount(this.amountTotal05);
        } else if (update.type == "calcT12") {
          this.calcT12 = update.value / 1000000000000000000;
          this.calcT12PricePerToken = (1 / this.calcT12).toFixed(5);
        } else if (update.type == "calcT15") {
          this.calcT15 = update.value / 1000000000000000000;
          this.calcT15PricePerToken = (1 / this.calcT15).toFixed(5);
        } else if (update.type == "currentAddressBalanceOf2") {
          this.currentAddressBalanceOf2 = update.value / this.data.IDO.OG.scala;
          this.currentAddressBalanceOf2_format = this.formatAmount(
            this.currentAddressBalanceOf2
          );
        } else if (update.type == "currentAddressBalanceOf5") {
          this.currentAddressBalanceOf5 =
            update.value / this.data.IDO.NOG.scala;
          this.currentAddressBalanceOf5_format = this.formatAmount(
            this.currentAddressBalanceOf5
          );
        } else if (update.type == "OGwhitelist") {

            let temp = Number(update.value);
            this.$store.commit("SET_OG_WHITE_LIST_COUNTER",temp);

        } else if (update.type == "OG_ambassador") {
          this.is_og_ambassador = update.value;
        } else if (update.type == "openAtOG") {
          this.openAtOG = update.value;
          this.timePurchased2 = this.openAtOG;
          this.time2 = this.format(this.timePurchased2);
        } else if (update.type == "closeAtOG") {
          this.closeAtOG = update.value;
          this.timeEnd2 = this.format(this.closeAtOG);
        } else if (update.type == "closeAtNOG") {
          this.closeAtNOG = update.value;
          this.timeEnd5 = this.format(this.closeAtNOG);
        } else if (update.type == "openAtNOG") {
          this.openAtNOG = update.value;
          this.timePurchased5 = this.openAtNOG;
          this.time5 = this.format(this.timePurchased5);
        } else if("balanceOfSat" == update.type){
          let temp = update.value / this.data.IDO.OG.symbolScala;
          temp = temp.toFixed(2);
          this.$store.commit("SET_SAT_BALANCE", temp);
        }
      });

      this.Mult_watcher.start();
    },

    async OgApprove() {
      if (this.isShowProgress) {
        // this.$message.info("Waiting ");
        this.$refs.messageTipWarnDialog.showClick('Waiting ');
        return;
      }
      if (!this.is_og_ambassador) {
        if (!isAddress(this.refAddress)) {
          // this.$message.error("Error,please use invitation link!");
          this.$refs.messageTipErrorDialog.showClick('Error,please use invitation link! ');
          return;
        }
        if (this.refAddress.length < 10) {
          // this.$message.error("Error,please use invitation link! ");
          this.$refs.messageTipErrorDialog.showClick('Error,please use invitation link! ');
          return;
        }
        if (this.refAddress == this.address) {
          // this.$message.error("Error,invalid invitation! ");
          this.$refs.messageTipErrorDialog.showClick('Error,invalid invitation! ');
          return;
        }
      } else {
        this.$store.commit("SET_REF_ADDRESS", this.address);
      }

      if (!this.ogWhitelist) {
        // this.$message.error("Error,please use whitelist! ");
        this.$refs.messageTipErrorDialog.showClick('Error,please use whitelist! ');
        return;
      }
      if (this.isShowTimestamp2) {
        // this.$message.error("Coming soon....");
        this.$refs.messageTipErrorDialog.showClick('Coming soon.... ');
        return;
      }
      this.isShowProgress = true;

      try {
       let data =   await doApprove2New(
          toWei(99999999999),
          "coin",
          this.data.IDO.OG.currentAddress,
          this.data.IDO.OG.contractAddress
        );
       if(data.status == true){
         await this.Mult_watcher.poll();
       }
       else {
         this.$refs.messageTipErrorDialog.showClick('Approve failed ! ');
       }
      } catch (e) {
        console.error("OgApprove failed");
      }
      this.isShowProgress = false;
    },
    async PublicApprove() {
      if (this.isShowProgress) {
        // this.$message.info("Waiting.....");
        this.$refs.messageTipWarnDialog.showClick('Waiting ');
        return;
      }
      if (this.isShowTimestamp5) {
        // this.$message.error("Coming soon");
        this.$refs.messageTipErrorDialog.showClick('Coming soon.... ');
        return;
      }
      this.isShowProgress = true;

      try {
        await doApprove2New(
          toWei(99999999999),
          "coin",
          this.data.IDO.NOG.currentAddress,
          this.data.IDO.NOG.contractAddress
        );
        await this.Mult_watcher.poll();
      } catch (e) {
        console.error("PublicApprove failed");
      }

      this.isShowProgress = false;
    },
    async OgSale() {
      if (this.isShowProgress) {
        // this.$message.info("Waiting ");
        this.$refs.messageTipWarnDialog.showClick('Waiting ');
        return;
      }
      if (!this.is_og_ambassador) {
        if (!isAddress(this.refAddress)) {
          // this.$message.error("Error,please use invitation link!");
          this.$refs.messageTipErrorDialog.showClick('Error,please use invitation link! ');
          return;
        }
        if (this.refAddress == this.address) {
          // this.$message.error("Error,invalid invitation! ");
          this.$refs.messageTipErrorDialog.showClick('Error,invalid invitation!  ');
          return;
        }
      } else {
        this.refAddress = this.address;
      }
      if (!this.ogWhitelist) {
        // this.$message.error("Error,please use whitelist! ");
        this.$refs.messageTipErrorDialog.showClick('Error,please use whitelist!  ');
        return;
      }
      if (this.isShowTimestamp2) {
        // this.$message.error("Coming soon");
        this.$refs.messageTipErrorDialog.showClick('Coming soon  ');
        return;
      }

      try {
        if (isNaN(this.stakeAmount)) {
          // this.$message.error("Error,please enter the correct amount!"); //this.$t("mining.AmountNAN")
          this.$refs.messageTipErrorDialog.showClick('Error,please enter the correct amount! ');
          return;
        }
        let xxx = this.data.IDO.OG.minAmount1PerWallet / this.data.IDO.OG.scala;
        let max = this.data.IDO.OG.maxAmount1PerWallet / this.data.IDO.OG.scala;
        if (this.stakeAmount < xxx || this.stakeAmount > max) {
          // this.$message.error("Error,please enter the correct amount!");
          this.$refs.messageTipErrorDialog.showClick('Error,please enter the correct amount! ');
          return;
        }

        if (this.stakeAmount > this.myAllocationAmount2) {
          // this.$message.error("Error,please enter the correct amount!");
          this.$refs.messageTipErrorDialog.showClick('Error,please enter the correct amount! ');
          return;
        }

        if (this.OG_allowance < this.stakeAmount) {
      /*    this.$message.error(
            "Error,please try again and confirm the transaction!"
          );*/
          this.$refs.messageTipErrorDialog.showClick('Error,please try again and confirm the transaction! ');
          this.isOGApproved = false;
          return;
        }

        if (this.currentAddressBalanceOf2 < this.stakeAmount) {
          // this.$message.error("Insufficient Balance !");
          this.$refs.messageTipErrorDialog.showClick('Insufficient Balance ! ');
          return;
        }
        this.isShowProgress = true;
        let res = await saleSwap(
          this.stakeAmount * this.data.IDO.NOG.scala,
          "TokenSale",
          this.data.IDO.OG.contractAddress,
          this.refAddress
        );
        if (res.status) {
          this.stakeAmount = "";
          // this.$message.success("Success");
          this.$refs.messageTipOkDialog.showClick();
        } else {
          // this.$message.error(res.error.message);
          this.$refs.messageTipErrorDialog.showClick(res.error.message);
        }
        await this.Mult_watcher.poll();
        this.isShowProgress = false;
      } finally {
        console.error("ok");
      }
    },
    waiting() {
      // this.$message.info("please wait.....");
      this.$refs.messageTipWarnDialog.showClick('Waiting ');
    },
    async publicSale() {
      if (this.isShowProgress) {
        // this.$message.info("Waiting ");
        this.$refs.messageTipWarnDialog.showClick('Waiting ');
        return;
      }

      if (!isAddress(this.refAddress)) {
        // this.$message.error("Error,please use invitation link!");
        this.$refs.messageTipErrorDialog.showClick('Error,please use invitation link!');
        return;
      }

      if (this.refAddress == this.address) {
        // this.$message.error("Error,invalid invitation !");
        this.$refs.messageTipErrorDialog.showClick('Error,invalid invitation !');
        return;
      }

      if (this.isShowTimestamp5) {
        // this.$message.error("Coming soon");
        this.$refs.messageTipErrorDialog.showClick('Coming soon');
        return;
      }
      // this.showMask = true;
      try {
        if (isNaN(this.stakeAmount)) {
          // this.$message.error("Error,please enter the correct amount!"); //this.$t("mining.AmountNAN")
          this.$refs.messageTipErrorDialog.showClick('Error,please enter the correct amount!');
          return;
        }
        let xxx =
          this.data.IDO.NOG.minAmount1PerWallet / this.data.IDO.NOG.scala;
        let max =
          this.data.IDO.NOG.maxAmount1PerWallet / this.data.IDO.NOG.scala;
        if (this.stakeAmount < xxx || this.stakeAmount > max) {
          // this.$message.error("Error,please enter the correct amount!");
          this.$refs.messageTipErrorDialog.showClick('Error,please enter the correct amount!');
          return;
        }

        if (this.NOG_allowance < this.stakeAmount) {
         /* this.$message.error(
            "Error,please try again and confirm the transaction!"
          );*/
          this.$refs.messageTipErrorDialog.showClick('Error,please try again and confirm the transaction!');
          this.isPublicSaleApproved = false;
          return;
        }
        if (this.stakeAmount > this.myAllocationAmount5) {
          // this.$message.error("Error,please enter the correct amount!");
          this.$refs.messageTipErrorDialog.showClick('Error,please enter the correct amount!');
          return;
        }
        if (this.currentAddressBalanceOf5 < this.stakeAmount) {
          // this.$message.error("Insufficient Balance !");
          this.$refs.messageTipErrorDialog.showClick("Insufficient Balance !");
          return;
        }
        this.isShowProgress = true;
        let res = await saleSwap(
          this.stakeAmount * this.data.IDO.NOG.scala,
          "TokenSale",
          this.data.IDO.NOG.contractAddress,
          this.refAddress
        );
        await this.Mult_watcher.poll();
        if (res.status) {
          this.stakeAmount = "";
          // this.$message.success("Success");
          this.$refs.messageTipOkDialog.showClick();
        } else {
          // this.$message.error(res.error.message);
          this.$refs.messageTipErrorDialog.showClick(res.error.message);
        }

        this.isShowProgress = false;
      } finally {
        /*     this.showMask = false;
             this.showStakeDialog = false;*/
      }
    },
    timeDeal() {
      if (
        this.openAtOG == 0 ||
        this.closeAtOG == 0 ||
        this.openAtNOG == 0 ||
        this.closeAtNOG == 0
      )
        return;
      if (this.isOgMarket) {
        var timestamp2 = moment(this.openAtOG * 1000).diff(moment(), "seconds");
        if (timestamp2 > 0) {
          this.step = 1;
          this.formatTime1(timestamp2);
        } else {
          timestamp2 = moment(this.closeAtOG * 1000).diff(moment(), "seconds");
          if (timestamp2 > 0) {
            this.step = 2;
            this.formatTime1(timestamp2);
          } else {
            this.step = 3;
          }
        }
      } else {
        var timestamp5 = moment(this.openAtNOG * 1000).diff(
          moment(),
          "seconds"
        );
        if (timestamp5 > 0) {
          this.step = 1;
          this.formatTime1(timestamp5);
        } else {
          timestamp5 = moment(this.closeAtNOG * 1000).diff(moment(), "seconds");
          if (timestamp5 > 0) {
            this.step = 2;
            this.formatTime1(timestamp5);
          } else {
            this.step = 3;
          }
        }
      }
      var timestamp21 = moment(this.openAtOG * 1000).diff(moment(), "seconds"); //   this.timePurchased2 - timestamp;
      var timestamp51 = moment(this.openAtNOG * 1000).diff(moment(), "seconds");

      if (timestamp21 <= 0) {
        this.isShowTimestamp2 = false;
      } else {
        this.showTimestamp2 = this.formatTime1(timestamp21);
        this.isShowTimestamp2 = true;
      }
      if (timestamp51 <= 0) {
        this.isShowTimestamp5 = false;
      } else {
        this.showTimestamp5 = this.formatTime1(timestamp51);
        this.isShowTimestamp5 = true;
      }
    },
    formatTime1(difTime) {
      var h0Time = "0";
      var h1Time = "0";
      var m0Time = "0";
      var m1Time = "0";
      var s0Time = "0";
      var s1Time = "0";
      var day = "";
      if (difTime < 60) {
        if (difTime < 10) {
          s0Time = "0";
          s1Time = difTime;
        } else {
          s1Time = parseInt(difTime % 10);
          s0Time = parseInt((difTime % 100) / 10);
        }
      } else {
        var min_total = parseInt(difTime / 60); //
        var sec = parseInt(difTime % 60);
        //  console.log("min_total"+min_total+"======sec="+ sec)
        if (min_total < 60) {
          h0Time = "0";
          h1Time = "0";
          if (min_total < 10) {
            m0Time = "0";
            m1Time = min_total;
          } else {
            m1Time = parseInt(min_total % 10);
            m0Time = parseInt((min_total % 100) / 10);
          }
          if (sec < 10) {
            s0Time = "0";
            s1Time = sec;
          } else {
            s1Time = parseInt(sec % 10);
            s0Time = parseInt((sec % 100) / 10);
          }
        } else {
          var hour_total = parseInt(min_total / 60); //
          // console.log("hour_total"+hour_total+"======min_total="+ min_total)
          var min = parseInt(min_total % 60); //
          //  console.log("hour_total"+hour_total+"min"+min+"======sec="+ sec)
          if (hour_total < 10) {
            h0Time = "0";
            h1Time = hour_total;
          } else {
            if (hour_total > 24) {
              day = parseInt(hour_total / 24);
              hour_total = parseInt(hour_total % 24);
            }
            if (hour_total < 10) {
              h0Time = "0";
              h1Time = hour_total;
            } else {
              h1Time = parseInt(hour_total % 10);
              h0Time = parseInt(hour_total / 10);
            }
          }
          if (min < 10) {
            m0Time = "0";
            m1Time = min;
          } else {
            m1Time = parseInt(min % 10);
            m0Time = parseInt((min % 100) / 10);
          }
          if (sec < 10) {
            s0Time = "0";
            s1Time = sec;
          } else {
            s1Time = parseInt(sec % 10);
            s0Time = parseInt((sec % 100) / 10);
          }
        }
      }
      // console.log(h0Time +'======================'+ h1Time)
      this.mDay = day;
      this.mH0 = h0Time;
      this.mH1 = h1Time;
      this.mM0 = m0Time;
      this.mM1 = m1Time;
      this.mS0 = s0Time;
      this.mS1 = s1Time;

      return (
        day +
        "days" +
        h0Time +
        "" +
        h1Time +
        "hours" +
        m0Time +
        "" +
        m1Time +
        "mins" +
        s0Time +
        "" +
        s1Time +
        "secs"
      );
    },
    formatAmount(val) {
      var str = val.toFixed(2) + "";
      var intSum = str
        .substring(0, str.indexOf("."))
        .replace(/\B(?=(?:\d{3})+$)/g, ",");

      var ret = intSum; //+ dot;
      return ret;
    }
  }
};
</script>


<style lang="scss" scoped>
.h5_share_img {
  cursor: pointer;
  width: 0.27rem;
  height: 0.27rem;
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}
.h5_share_div {
  display: none;
  border-radius: 0.13rem;
  background: #333333;
  width: 3.07rem;
  padding: 0.2rem;
  position: absolute;
  right: 0.5rem;
  top: 0.6rem;
  font-size: 14px;
  z-index: 999;
}
.h5_share_img:hover span {
  font-size: 0.13rem;
  font-family: Selawik;
  font-weight: 400;
  color: #cccccc;
  display: inline-block;
}
.bbbttt {
  width: 600px;
  height: 50px;
  background: #0792e3;
  border-radius: 10px;
  margin: 25px auto 0px auto;
  cursor: pointer;
  font-size: 20px;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: 50px;
}
.bbbttt:hover {
  background: #59aee0ff;
}
.h5bbbttt {
  width: 6.8rem;
  height: 0.67rem;
  background: #0792e3;
  border-radius: 0.13rem;
  margin: 0.3rem auto 0rem auto;
  cursor: pointer;
  font-size: 0.24rem;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  line-height: 0.67rem;
}
.h5bbbttt:hover {
  background: #59aee0ff;
}
.pc_share_img {
  width: 20px;
  height: 20px;
  position: absolute;
  right: 35px;
  top: 35px;
  //background-image: url("../../assets/img/share.png");
  cursor: pointer;
}
.pc_share_div {
  display: none;
  color: #cccccc;
  line-height: 16px;
  background: #333333;
  border-radius: 10px;
  padding: 5px;
  position: absolute;
  right: 0px;
  top: 20px;
  width: 208px;
  font-size: 10px;
  font-family: Selawik;
  font-weight: 400;
}
.pc_share_img:hover span {
  display: inline-block;
}
.h5-progress {
  height: 0.21rem;
  left: 0rem;
  top: 0rem;
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
  border-radius: 0.13rem;
  position: absolute;
}

.pc-progress {
  height: 16px;
  left: 0px;
  top: 0px;
  background: linear-gradient(-45deg, #4a3e48 0%, #25434a 100%);
  border-radius: 8px;
  position: absolute;
}

.pc-div1 {
  width: 480px;
  display: flex;
  position: relative;
  font-size: 14px;
  font-family: Selawik;
  font-weight: 400;
  color: #ffffff;
  margin-top: 18px;
  .pc-div1-left {
    padding-left: 50px;
    color: #dddddd;
  }
  .pc-div1-right {
    position: absolute;
    right: 50px;
  }
}
.pc-ido-btn3 {
  width: 400px;
  height: 50px;
  background: rgba(65, 67, 70, 0.5);
  border-radius: 10px;
  font-size: 16px;
  line-height: 50px;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin: 30px auto 0px auto;
  cursor: pointer;
}

.pc-ido-btn3:hover {
  background: #0792e3;
}

.pc-ido-btn3x {
  width: 400px;
  height: 50px;
  background: #414346;
  border-radius: 10px;
  font-size: 16px;
  line-height: 50px;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin: 30px auto 0px auto;
}

.pc-ido-time {
  font-size: 24px;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
}

.pc-ido-time1 {
  font-size: 12px;
  font-family: Selawik;
  color: #ffffff;
}

.h5-ido-btn1 {
  font-size: 0.35rem;
  font-family: Selawik;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  width: 2.8rem;
  height: 0.55rem;
  background: linear-gradient(-45deg, #4a3e48 0%, #25434a 100%);
  border-radius: 0.13rem;
  text-align: center;
  line-height: 0.55rem;
}
.h5-ido-btn1:hover {
  background: linear-gradient(-45deg, #25434a 0%, #4a3e48 100%);
}

.h5-ido-btn2 {
  font-size: 0.35rem;
  font-family: Selawik;
  font-weight: 400;
  color: #ffffff;
  cursor: pointer;
  width: 2.8rem;
  height: 0.55rem;
  background: #242424;
  border-radius: 0.13rem;
  text-align: center;
  line-height: 0.55rem;
}

.h5-ido-btn2:hover {
  background: rgba(18, 18, 18, 0.7);
}
.h5-ido-btn3 {
  width: 6.8rem;
  height: 0.67rem;
  background: rgba(65, 67, 70, 0.5);
  border-radius: 0.13rem;
  font-size: 0.21rem;
  line-height: 0.67rem;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin: 0.3rem auto 0rem auto;
  cursor: pointer;
}

.h5-ido-btn3:hover {
  background: #0792e3;
}

.h5-ido-btn3x {
  width: 6.8rem;
  height: 0.67rem;
  background: #414346;
  border-radius: 0.13rem;
  font-size: 0.21rem;
  line-height: 0.67rem;
  font-family: Selawik;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  margin: 0.3rem auto 0rem auto;
}

.approve_btn1 {
  cursor: pointer;

  font-size: 20px;
  font-family: Lato;
  font-weight: bold;
  color: #ffffff;
  width: 750px;
  height: 56px;
  background: #101529;
  border-radius: 12px;
  line-height: 56px;
  text-align: center;
  margin: 56px auto 0px auto;
}
.approve_btn1x {
  cursor: pointer;

  font-size: 20px;
  font-family: Lato;
  font-weight: bold;
  color: #ffffff;
  width: 750px;
  height: 56px;
  background: #a6a6a6;
  border-radius: 12px;
  line-height: 56px;
  text-align: center;
  margin: 56px auto 0px auto;
}
.approve_btn1:hover {
  background: #a6a6a6;
}

.approve_btn2 {
  cursor: pointer;
  width: 8.53rem;
  height: 1.33rem;
  background: #101529;
  font-size: 0.4rem;
  font-family: Lato;
  font-weight: bold;
  color: #ffffff;
  border-radius: 12px;
  line-height: 1.33rem;
  text-align: center;
  margin: 0.85rem auto 0px auto;
}

.approve_btn2x {
  cursor: pointer;
  width: 8.53rem;
  height: 1.33rem;
  background: #a6a6a6;
  font-size: 0.4rem;
  font-family: Lato;
  font-weight: bold;
  color: #ffffff;
  border-radius: 12px;
  line-height: 1.33rem;
  text-align: center;
  margin: 0.85rem auto 0px auto;
}

.approve_btn2:hover {
  background: #a6a6a6;
}
.add_vvs_coin {
  width: 60px;
  height: 30px;
  font-size: 20px;
  font-family: Lato;
  font-weight: 600;
  color: #101529;
  background-color: rgba(255, 255, 255, 0.3);
  line-height: 0.6;
  border-radius: 3px 3px;
  padding-left: 5px;
  position: absolute;
  right: 20px;
  top: 25px;
  display: flex;
}
.add_vvs_coin:hover {
  background-color: rgba(255, 255, 255, 0.9);
}
.add_vvs_coin1 {
  margin-top: 0.2rem;
  margin-left: 0.3rem;
  width: 1.2rem;
  height: 0.6rem;
  font-size: 0.32rem;
  font-family: Lato;
  font-weight: 600;
  color: #101529;
  background-color: rgba(249, 79, 1, 0.3);
  line-height: 0.6rem;
  border-radius: 0.13rem 0.13rem;
  padding-left: 0.2rem;
  //position: absolute;
  //right: 20px;
  //top: 3rem;
  display: flex;
}
.add_vvs_coin1:hover {
  background-color: rgba(249, 79, 1, 0.8);
}
.header_link {
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
  color: #ffffff;
}
.header_link:hover {
  background: #451a1a;
}
.btn {
  cursor: pointer;
  margin: 13px auto 0px auto;
  width: 750px;
  line-height: 56px;
  height: 56px;
  background: #2c3852;
  border-radius: 5px;
  font-size: 18px;
  font-family: Lato;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
}
.btnx {
  margin: 13px auto 0px auto;
  width: 750px;
  line-height: 56px;
  height: 56px;
  background: #a6a6a6;
  border-radius: 5px;
  font-size: 18px;
  font-family: Lato;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
}
.btn:hover {
  background: #a6a6a6;
}
.btn1 {
  cursor: pointer;
  margin: 0.2rem auto 0px auto;
  width: 8.53rem;
  line-height: 56px;
  height: 0.75rem;
  background: #2c3852;
  border-radius: 0.07rem;
  font-size: 0.24rem;
  font-family: Lato;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
}
.btn1x {
  margin: 0.2rem auto 0px auto;
  width: 8.53rem;
  line-height: 56px;
  height: 0.75rem;
  background: #a6a6a6;
  border-radius: 0.07rem;
  font-size: 0.24rem;
  font-family: Lato;
  font-weight: bold;
  color: #ffffff;
  text-align: center;
}
.btn1:hover {
  background: #a6a6a6;
}

.el-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  box-shadow: 0 0 0.16rem rgba(0, 0, 0, 0.7);
}

::v-deep.el-dialog__headerbtn .el-dialog__close {
  color: #242424;
}
::v-deep.el-dialog__header {
  padding: 0px 0px;
}
::v-deep .el-dialog__body {
  padding: 0px 0px;
  color: #242424;
  font-size: 14px;
  word-break: break-all;
}
::v-deep.el-dialog {
  background-color: #242424;
  box-shadow: 0 0 0.16rem rgba(0, 0, 0, 0.7);
  //box-shadow: 0px 3px 9px 0px rgba(231, 87, 121, 0.56);
  /*  font-size: 0.32rem;
    color: #fff;*/
  /*  border-radius: 0.4rem;*/
  //width: 830px;
  //height: 600px;

  border-radius: 20px;
}
::v-deep.el-message {
  margin-top: 400px !important;
}
.el-message {
  margin-top: 400px !important;
}
</style>
