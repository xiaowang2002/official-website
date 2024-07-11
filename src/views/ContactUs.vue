<template>
  <div>
    <div class="contactUs">
      <div style="position: absolute;;display: flex;gap: 2vw;margin-left: 24vw;">
        <div style="width: 27vw;height: 30vw;;margin-top: 5vw;">
          <div style="font-size: 3vw;">CONTACT US</div>
          <div style="font-size: 2vw;">免费咨询热线</div>
          <div style="font-size: 1vw;margin-top: 1vw;margin-bottom: 1.5vw;">联系我们的团队，或者给我打电话，我们会尽快给您回复</div>
          <div style="width: 2.5vw;height: 2.5vw;" class="photo"></div>
          <div style="margin-top: 6vw;font-size: 1vw;">邮箱：qyystech@163.com</div>
          <div style="font-size: 1vw;">地址：浙江省杭州市余杭区菜鸟智谷产业园1期A座802室</div>
        </div>
        <div style="width: 23vw;height: 28vw;;margin-top: 5vw" class="wechat"></div>
      </div>
    </div>
    <div class="submit" style="display: flex;align-items: center;justify-content: center;gap: 3vw;">
      <div style="width: 35vw;height: 20vw;;background-color: white;border-radius: 1vw">
        <input type="text" placeholder="您的姓名" v-model="name" size="5vw">
        <input type="text" placeholder="公司名称" v-model="company">
        <input type="text" placeholder="您的电话" v-model="phone">
        <input type="text" placeholder="项目主题" v-model="subject">
        <textarea placeholder="请描述您的需求" v-model="content">

        </textarea>
        <div><button class="aButton" @click="sendMsg">提交需求</button></div>
      </div>
      <div style="width: 25vw;height: 20vw;">
        <div style="font-size: 2vw;margin-top: 2vw;">快速提交您的需求</div>
        <div style="font-size: 1vw;margin-top: 1vw;">您可以填写右边的表格，让我们了解您的项目需求，我们将会尽快与您取得联系。当然也欢迎您拨打上面的咨询热线，我们将竭力为您提供网络服务</div>
        <div style="font-size: 1vw;margin-top: 2vw;font-weight: bold">温馨提示</div>
        <div style="font-size: 1vw;margin-top: 0.5vw;">用户提交的需求，将自动发送到邮箱：</div>
        <div style="font-size: 1vw;margin-top: 0.5vw;">qyystech@163.com</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      name: '',
      company: '',
      phone: '',
      subject: '',
      content: '',
    }
  },
  methods:{
    sendMsg() {
      const data = {
        name: this.name,
        company: this.company,
        phone: this.phone,
        subject: this.subject,
        content: this.content
      };


      axios.post('/path/common/ow/send/mail', data)
        .then(response => {
          console.log(response.data);
          alert('提交成功');
        })
        .catch(error => {
          console.error(error);
          alert('提交失败');
        });
    }
  }
}
</script>
<style scoped>
input:placeholder-shown {
  font-size: 1vw;
}

textarea:placeholder-shown{
  font-size: 1vw;
}
.aButton {
  margin-left: 1vw;
  background-color: #006ffd;
  color: white;
  font-size: 1vw;
  border: none;
  border-radius: 0.5vw;
  cursor: pointer;
  width: 31.5vw;
  height: 2.5vw;
}
textarea{
  width: 32.7vw;
  height: 8vw;
  border-radius: 0.5vw;
  background-color: whitesmoke;
  border: none;
  margin-left: 1vw;
  margin-top: 1vw;
  font-size: 1.2vw;
}
input{
  width: 15.7vw;
  height: 2.5vw;
  border-radius: 0.5vw;
  background-color: whitesmoke;
  border: none;
  margin-left: 1vw;
  margin-top: 1vw;
  font-size: 1.2vw;
}
.submit{
  height: 30vw;
  background-image: url("../assets/img/service/submit.png");
  background-size: 100% 100%;
  ;
}
.photo{
  background-image: url("../assets/img/service/箭头.png");
  background-size: 100% 100%;
}
.wechat{
  background-image: url("../assets/img/wechat.png");
  background-size: 100% 100%;
}
.contactUs{
  width: 100vw;
  height: 38vw;
  background-size: 100% 100%;
  background-image: url("../assets/backgroundImage/lianxiwomenba.png");
}
</style>

