<template>
  <div class="home">
    <div class="heading">
    <a class="address"  @click="$router.push({path:'/address'})">Address</a>
    <a class="place"   @click="$router.push({path:'/place'})">{{x()}}<img src="../assets/stylus/位置.png"></a>
    <a class="install"  @click="$router.push({path:'/install'})">Install</a>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getNowWeather } from '../services/weatherServices'
export default {
  name: 'home',
  data() {
    return {
      params: {
        location: this.$store.state.place
      }
    }
  },
  methods: {
    getData() {
      getNowWeather(this.params).then(res => {
        console.log(res.results[0].now.text)
      })
    },
    x() {
      return this.$store.state.place
    }
  },
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
  *body{
    text-align: center;

  }
  .heading a{
    color: white;
    text-decoration: none;
  }
  .home{
    margin-left: 17% ;
    width: 50%;
    text-align: center;
    min-width: 1000px;
    height: 1000px;
    background: url("../assets/stylus/总.jpg");
    background-size: 100% 100%;
    margin-top: 16px;
  }
  .address{
    float: left;
    margin-left: 4%;
    margin-top: 5px;
  }
  .place img{
    height: 13px;
    margin-top: 5px;
  }
  .install{
    float:right;
    margin-right: 2%;
    margin-top: 5px;
  }
</style>
