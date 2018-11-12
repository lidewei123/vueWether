<template>
  <div>
    <p>F12打开控制台，点击network，查看数据请求</p>
    <p>F12打开控制台，console里面也有输出</p>
    <button @click="getData">点击请求数据</button>
    <p ref="text">{{text}}</p>
  </div>
</template>
<script>
import { getNowWeather, getNow, getair, gethours, getdays, getmoons, getsun, getplace } from '../services/weatherServices'
export default {
  data() {
    return {
      text: 'tianqi',
      params: {
        location: '北京',
        start: 1,
        days: 3
      },
      params1: {
        location: this.$store.state.place,
        start: 0
      },
      params2: {
        q: '北'
      }
    }
  },
  mounted() {
    this.getDeta()
  },
  methods: {
    getDeta() {
      getNowWeather(this.params).then(res => {
        this.text = res.results[0].now.text
      })
    },
    getData() {
      getNowWeather(this.params).then(res => {
        console.log(res)
      })
      getNow(this.params).then(res => {
        console.log(res)
      })
      getair(this.params).then(res => {
        console.log(res)
      })
      gethours(this.params).then(res => {
        console.log(res)
      })
      getdays(this.params).then(res => {
        console.log(res)
      })
      getmoons(this.params1).then(res => {
        console.log(res)
      })
      getsun(this.params1).then(res => {
        console.log(res)
      })
      getplace(this.params2).then(res => {
        console.log(res.results)
      })
    }
  }
}
</script>
