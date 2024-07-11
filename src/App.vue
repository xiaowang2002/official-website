<template>
  <div>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <GoTop></GoTop>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}


nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoTop from "@/components/GoTop";
export default {
  components: {GoTop, Footer, Header}
}
</script>
