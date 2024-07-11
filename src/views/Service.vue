<template>
  <div id="service">
    <div class="back-image">
      <div style="position: absolute">
        <div style="width: 28vw;height: 27vw;margin-top: 8vw;margin-left: 15vw;">
          <div style="font-size: 1.8vw">我们的服务不仅限于此!</div>
          <div style="font-size: 0.9vw;margin-top: 2vw;">我们还是专业的软件服务商，我们的客户遍布各个行业，我们有资深的软件开发工程师，经验丰富的架构师，
          思维灵活的产品经理，审核与美同时在线的UI设计师，灵工行业是我们的强项，其他互联网产品也如囊中取物。。。</div>
          <div style="font-size: 1vw;font-weight: bold;margin-top: 2vw">我们的理念：价格不是第一要素，价值才是杀手锏</div>
          <div style="font-size: 0.9vw;margin-top: 0.5vw;">欢迎各位大佬，随时联系我们</div>
          <div style=";height: 5vw;"><button class="button1" @click="jumpTo">联系我们</button></div>
          <div style="font-size: 0.9vw;margin-bottom: 10vw;margin-top: 5.2vw;">以下软件案例展示，仅展示部分功能截图，更多案例，请联系我们</div>
        </div>
      </div>
    </div>
    <div style=";height: 105vw;" class="back-exam">
      <div style="height: 35vw;display: flex;align-items: center;justify-content: center;gap: 1vw">
        <div style=";width: 40vw;height: 28vw;" class="sug1"></div>
        <div style=";width: 25vw;height: 20vw;">
          <div style="font-size: 1.5vw;color: grey">软件开发客户案例展示（一）</div>
          <div style="font-size: 2vw;color: grey">•••</div>
          <div style="font-size: 1.7vw;">一款针对灵工招聘市场，打卡，排班，结算，签约，投保的平台</div>
        </div>
      </div>
      <div style="height: 35vw;display: flex;align-items: center;justify-content: center;gap: 1vw;">
        <div style=";width: 25vw;height: 20vw;">
          <div style="font-size: 1.5vw;color: grey">软件开发客户案例展示（二）</div>
          <div style="font-size: 2vw;color: grey">•••</div>
          <div style="font-size: 1.7vw;">一款针对零售品牌方小程序的积分兑换平台</div>
        </div>
        <div style=";width: 40vw;height: 28vw;" class="sug2"></div>
      </div>
      <div style="height: 35vw;display: flex;align-items: center;justify-content: center;gap: 1vw;">
        <div style=";width: 40vw;height: 28vw;" class="sug3"></div>
        <div style=";width: 25vw;height: 20vw;">
          <div style="font-size: 1.5vw;color: grey">软件开发客户案例展示（三）</div>
          <div style="font-size: 2vw;color: grey">•••</div>
          <div style="font-size: 1.7vw;">一款针对农村土地拍卖交易的平台</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Service',
  data() {
    return {
      carouseData:[
        { id: 1, url: require('../assets/img/phone/01@2x.png') },
        { id: 2, url: require('../assets/img/phone/02@2x.png') },
        { id: 3 , url: require('../assets/img/phone/03@2x.png') },
      ]
    }
  },
  mounted() {

  },
  methods: {
    jumpTo(){
      this.$router.push('/contactUs')
    },
    ServiceClick(id) {
      this.$router.push({
        name: 'servicedetail',
        params: {
          id: id
        }
      })
    }
  }
}
</script>
<style scoped>

.back-exam{
  background-image: url("../assets/img/service/exam.png");
  background-size: 100% 100%;
}
.sug1{
  background-image: url("../assets/img/service/sug1.png");
  background-size: 100% 100%;
}
.sug2{
  background-image: url("../assets/img/service/sug2.png");
  background-size: 100% 100%;
}
.sug3{
  background-image: url("../assets/img/service/sug3.png");
  background-size: 100% 100%;
}
.button1 {
  margin-top: 1vw;
  background-color: #006ffd;
  color: white;
  font-size: 1vw;
  border: none;
  border-radius: 1vw;
  cursor: pointer;
  width: 10vw;
  height: 2.3vw;
}

.back-image{
  background-image: url("../assets/img/service/back1.png");
  background-size: 100% 100%;
  width: 100vw;
  height: 38vw;
}

::v-deep .el-carousel-item{
  margin: 25px 53px;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  text-align: center;
  line-height: 100px;
}

.element-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}


.example1 {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  ;
}
#example1 > div {
  ;
  box-sizing: border-box;
}
@media (max-width: 800px) {
  #example1 {
    flex-direction: column;
    align-items: center;
  }
  #example1 > div {
    width: 90%;
  }
}




.outer-container {
  display: flex;
  align-items: center;
  padding: 20px;
}
.inner-container {
  ;
  padding: 20px;
  max-width: 90%;
  width: 500px;
  margin-left: 18%;
  box-sizing: border-box;
}
h2, h5, h6 {
  margin: 0;
}
h2 {
  margin-bottom: 30px;
}
h5 {margin: 30px 0 10px;
}
button {
  margin-bottom: 140px;
  cursor: pointer;
}
.text-content {
  margin: 30px 0 50px;
  word-wrap: break-word;
  word-break: break-all;
}
.software-showcase {
  margin-top: 20px;
}

/* Responsive Design */
@media (max-width: 600px) {
  .inner-container {
    width: 100%;
    margin: 20px;
    padding: 10px;
  }
  button {
    margin-bottom: 60px;
  }
}
</style>
