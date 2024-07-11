<template>
  <div id="footer" class="container-fluid">
    <p class="copy"  @click="openBeianLink">@2024 友加云商 浙ICP备2020035760号</p>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {
    openBeianLink() {
      window.open('https://beian.miit.gov.cn', '_blank');
    }
  }
};
</script>
<style scoped>
#footer {
  width: 100%;
  height: 3vw;
  background-color: #abbacf;
  display: flex;
  align-items: center;
  justify-content: center; /* 水平居中 */
  padding: 0 10px; /* 添加一些内边距，以便在较小屏幕上有一些间距 */
  box-sizing: border-box;
}

.copy {
  color: white;
  margin: 0;
  text-align: center;
  font-size: 0.8vw;
}
</style>

