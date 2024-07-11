<template>
  <div class="aboutUs">
    <div class="information">
      <div style="margin-top: 3.71vw;display: flex;align-items: center;justify-content: center;gap: 1vw;position: absolute">
        <div style="width: 26vw;height: 25vw;;margin-top: 5vw;margin-left: 20vw;">
          <div style="font-size: 2vw;">杭州启盈云商科技有限公司</div>
          <div style="font-size: 1.2vw;">(品牌名：友加云商)</div>
          <div style="font-size: 0.8vw;margin-top: 2vw;color: darkgrey">
            作为国内领先的灵活用工一站式平台，致力于帮助广大的灵活用工平台解决平台上兼职众包人员的税务合规和风险管理问题，为平台企业还原最优的纳税场景。
            降低企业成本，提升企业竞争力，为互联网新经济平台赋能。
          </div>
          <div style="font-size: 0.8vw;margin-top: 2vw;color: darkgrey">
            友加云商提供整体财税结算SaaS解决方案。友加云上在全国多个省份拥有委托代征资质，服务1000家以上互联网平台客户，业务范围涵盖北京、上海、广州、深圳、杭州等一二线城市。
            为广大客户提供合规、安全、稳定的优质服务。
          </div>
          <div style="font-size: 1vw;margin-top: 2vw;"></div>
        </div>
        <div style="width: 30vw;height: 23vw;;margin-top: 5vw;" class="map"></div>
      </div>
    </div>
    <div class="grade" style=";padding-top: 5vw;">
      <div style="font-size: 2vw;text-align: center;;">服务成绩</div>
      <div style="width: 66vw;height: 20vw;;margin: 5vw auto 0;display: flex;justify-content: center;align-items: center;gap: 2vw;">
        <div style="width: 30vw;height: 14vw;;border-radius: 1vw;background-color: white">
          <div style="width: 2.5vw;height: 2.5vw;;margin-top: 2vw;margin-left: 2vw;" class="grade1"></div>
          <div style="font-size: 2.8vw;font-weight: bold;margin-left: 2vw">50+</div>
          <div style="font-size: 1vw;color: grey;margin-left: 2vw;">行业头部客户</div>
        </div>
        <div style="width: 30vw;height: 14vw;;border-radius: 1vw;background-color: white">
          <div style="width: 2.5vw;height: 2.5vw;;margin-top: 2vw;margin-left: 2vw;" class="grade2"></div>
          <div style="font-size: 2.8vw;font-weight: bold;margin-left: 2vw">1000+</div>
          <div style="font-size: 1vw;color: grey;margin-left: 2vw;">累计服务客户</div>
        </div>
        <div style="width: 30vw;height: 14vw;;border-radius: 1vw;background-color: white">
          <div style="width: 2.5vw;height: 2.5vw;;margin-top: 2vw;margin-left: 2vw;" class="grade3"></div>
          <div style="font-size: 2.8vw;font-weight: bold;margin-left: 2vw">10000000+</div>
          <div style="font-size: 1vw;color: grey;margin-left: 2vw;">累计服务的人次</div>
        </div>
      </div>
    </div>
    <div class="employment" style="height: 13vw;display: flex">
      <div style="width: 30vw;margin-left: 20vw;margin-top: 6vw">
        <div style="font-size: 2vw;">灵活就业*共同富裕</div>
        <div style="font-size: 1.2vw;margin-top: 0.5vw">新商业文明下的新星平台</div>
      </div>
      <div style="width: 10vw;margin-top: 8vw;margin-left: 22vw;"><button class="aButton" style="" @click="jumpTo">申请演示</button></div>

    </div>
  </div>
</template>
<script>
export default {
  methods:{
    jumpTo(){
      this.$router.push('/contactUs')
    }
  }
}
</script>
<style scoped>
.employment{
  background-image: url("../assets/backgroundImage/employment.png");
  background-size: 100% 100%;
}
.aButton {
  background-color: #006ffd;
  color: white;
  font-size: 1vw;
  border: none;
  border-radius: 4vw;
  cursor: pointer;
  width: 9vw;
  height: 2.3vw;
}
.grade1{
  background-image: url("../assets/img/333.png");
  background-size: 100% 100%;
}
.grade2{
  background-image: url("../assets/img/222.png");
  background-size: 100% 100%;
}
.grade3{
  background-image: url("../assets/img/111.png");
  background-size: 100% 100%;
}
.grade{
  background-image: url("../assets/backgroundImage/grade.png");
  background-size: 100% 100%;
  width: 100vw;
  height: 34vw;
}
.map{
  background-image: url("../assets/img/map.png");
  background-size: 100% 100%;
}
.information{
  background-image: url("../assets/backgroundImage/aboutBack.png");
  background-size: 100% 100%;
  width: 100vw;
  height: 38vw;
  ;
}
.ban1{
  background-image: url("../assets/img/111.png");
  background-size: 100% 100%;
}

.ban2{
  background-image: url("../assets/img/222.png");
  background-size: 100% 100%;
}

.ban3{
  background-image: url("../assets/img/333.png");
  background-size: 100% 100%;
}


.total{
  background-image: url("../assets/backgroundImage/shouye1.png");
  background-attachment:fixed;
}
.abutton {
  background-color: #006ffd;
  color: white;
  font-size: clamp(12px, 1.5vw, 12px);
  padding: 0.5vw 2vw;
  border: none;
  border-radius: 4vw;
  margin-top: 7px;
  cursor: pointer;
  width: 9%;
  max-width: 180px;
  min-width: 90px;
  max-height: 100px;
  min-height: 25px;
}
.custom-container {
  padding: 20px;
}
.custom-results {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 90px;
  margin-bottom: 50px;
  flex-wrap: wrap;
}
.custom-result-box {
  width: 250px;
  height: 170px;
  padding-left: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
}
.custom-result-box h2 {
  margin: 0;
  font-size: 24px;
}
.custom-result-box h5 {
  margin: 5px 0;
  font-size: 14px;
}

@media (max-width: 768px) {
  .custom-results {
    flex-direction: column;
    align-items: center;
  }
  .custom-result-box {
    width: calc(100% - 40px);
    margin-bottom: 10px;
  }
}


.outer-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  text-align: center;
}

.inner-box, .second-inner-box {
  width: 100%;
  height: 320px;
  margin: 0 auto;
  text-align: left;
}

.second-inner-box{
  padding-bottom: 30px;
  background-image: url("../assets/img/map.png");
  background-size: 100% 100%;
}

@media (min-width: 600px) {
  .outer-container {
    flex-direction: row;
  }
  .inner-box {
    width: 300px;
    margin-top: 100px;
    margin-bottom: 120px;
  }
  .second-inner-box {
    width: 450px;
    margin-top: 100px;
    margin-bottom: 150px;
  }
}

@media (max-width: 599px) {
  .outer-container {
    flex-direction: column;
  }
  .inner-box, .second-inner-box {
    width: calc(100% - 40px);
  }
}
</style>
