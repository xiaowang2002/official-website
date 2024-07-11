<template>
  <div id="HomePage">
    <div class="introduce" >
      <div style="position: absolute">
        <div class="back-Photo" style="width: 33vw;height: 23vw;float: right;margin-top: 5vw;margin-right: 12vw">
        </div>
        <div class="inner-box">
          <div class="h11">灵活就业•共同富裕</div>
          <div class="h11">新质引领•数字无限</div>
        </div>
        <button class="aButton" @click="jumpTo">申请演示</button>
        <div style="margin-top: 7vw;margin-left: 19vw;width: 674px;">
          <div style="font-size: 1.2vw">新商业文明下的新星平台</div>
          <div style="color: grey;font-size: 0.8vw;width: 32vw;">友加云商致力于服务2亿+灵活用工从业者，为平台企业还原最优的纳税场景，降低企业成本，提升企业竞争力，为互联网新经济平台赋能。</div>
        </div>
        <div>
          <div style="margin-left: 75vw;font-size: 2vw;margin-top: 10vw">我们的愿景</div>
          <div class="font-word" style="width: 32vw;height: 4vw;margin-left: 50vw;margin-top: 4vw">
            <div style="font-size: 1vw;text-align: center;margin-top: 1vw">助力企业更轻松的的灵活用工管理模式</div>
          </div>
          <div class="font-word" style="width: 45vw;height: 4vw;margin-left: 30vw;margin-top: 4vw">
            <div style="font-size: 1vw;text-align: center;margin-top: 1vw">助力企业和灵活就业者享受到更高效、便捷、安心的产品与服务体验，并从中获益</div>
          </div>
          <div class="font-word" style="width: 32vw;height: 4vw;margin-left: 50vw;margin-top: 4vw">
            <div style="font-size: 1vw;text-align: center;margin-top: 1vw">成就企业持续发展、陪伴成长、收获成功</div>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100vw;height: 23vw;" class="ban1">
      <div style="width: 20vw;height: 12vw;margin-left: 15vw;margin-top: 2vw;float:left;" >
        <div style="font-size: 1.8vw">化繁为简，一键搞定</div>
        <li class="word1">支持一键导入人员信息</li>
        <li class="word1">支持短信、专属二维码批量邀约个人</li>
        <li class="word1">支持企业多部门独立邀约个人</li>
        <li class="word1">支持合同批量签约</li>
        <li class="word1">支持API签约、支付，秒级响应</li>
      </div>
      <div class="item1" style="float: right;width: 28vw;height: 18vw;margin-right: 12vw;margin-top: 2vw">
      </div>
    </div>
    <div style="width: 100vw;height: 23vw;" class="ban2">
      <div style="width: 20vw;height: 12vw;margin-right: 12vw;margin-top: 2vw;float:right;" >
        <div style="font-size: 1.8vw">任务管理</div>
        <li class="word1">支持多种计费模式</li>
        <li class="word1">支持一键批量结算</li>
        <li class="word1">支持按任务分类筛选</li>
        <li class="word1">支持API接口对接</li>
      </div>
      <div class="item2" style="float: left;width: 28vw;height: 18vw;margin-left: 15vw;margin-top: 2vw">
      </div>
    </div>
    <div style="width: 100vw;height: 23vw;"  class="ban3">
      <div style="width: 20vw;height: 12vw;margin-left: 15vw;margin-top: 2vw;float:left;">
        <div style="font-size: 1.8vw">费用结算</div>
        <li class="word1">支持多种计费模式</li>
        <li class="word1">支持一键批量结算</li>
        <li class="word1">支持支付宝、微信、银行卡结算收款</li>
        <li class="word1">支持结算凭证查看</li>
        <li class="word1">支持7*24小时结算</li>
        <li class="word1">支持秒级发放</li>
      </div>
      <div class="item3" style="float: right;width: 28vw;height: 18vw;margin-right: 12vw;margin-top: 2vw">
      </div>
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
li::marker{
  color: dodgerblue;
}

li{
  margin: 1vw 0;
}

.item1{
  background-image: url("../assets/backgroundImage/item1.png");
  background-size: 100% 100%;
}
.ban1{
  background-image: url("../assets/backgroundImage/ban1.png");
  background-size: 100% 100%;
}

.item2{
  background-image: url("../assets/backgroundImage/item2.png");
  background-size: 100% 100%;
}
.ban2{
  background-image: url("../assets/backgroundImage/ban2.png");
  background-size: 100% 100%;
}
.item3{
  background-image: url("../assets/backgroundImage/item3.png");
  background-size: 100% 100%;
}
.ban3{
  background-image: url("../assets/backgroundImage/ban3.png");
  background-size: 100% 100%;
}

.word1{
  font-size: 1vw;
}
.font-word{
  background-image: url("../assets/img/font.png");
  background-size: 100% 100%;
}
.introduce {
  background-image: url("../assets/img/back.png");
  background-size: 100% 100%;
  width: 100vw;
  height: 72vw;
}

.inner-box {
  margin-top: 9vw;
  margin-left: 19vw;
  text-align: left;
}
.h11{
  font-weight: bold;
  font-size: 2vw;
}

.aButton {
  margin-top: 1.5vw;
  margin-left: 19vw;
  background-color: #006ffd;
  color: white;
  font-size: 0.8vw;
  border: none;
  border-radius: 4vw;
  cursor: pointer;
  width: 8vw;
  height: 2vw;
}

.back-Photo{
  background-image: url("../assets/img/www.png");
  background-size: 100% 100%;
}
</style>

