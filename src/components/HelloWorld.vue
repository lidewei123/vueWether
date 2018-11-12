<template>
    <div class="container">
        <div class="heading">
            <p class=" temperature">{{temperature}}°</p>
            <p class="wether">{{wether}}</p>
            <p class="section">{{high}}°/{{low}}°</p>
            <p class="air">空气{{air}}</p>
        </div>
        <div class="release">
            <hr>
            <p class="time">31分钟前发布</p>
            <p class="AccuWeather"><img src="../assets/stylus/太阳.png">AccuWeather</p>
        </div>
        <div class="cle">
        <div v-for="(list,index) in lists" :key="index" class="box">
            <div class="particular">
                <div>{{list.time|datafmt('HH:mm')}}</div>
                <div>{{list.text}}</div>
                <div>{{list.temperature}}°</div>
            </div>
        </div>
        </div>
        <div v-for="(list,index) in list2" :key="index" class="day">
                <div>{{list.date|datafmt('MM-DD')}}</div>
                <div class="text_day">{{list.text_day}}</div>
                <div>{{list.high}}°/{{list.low}}°</div>
        </div>
        <div class="wind">
        <hr>
        <div class="winds">风向风力</div>
            <div class="windImg">
                <img src="../assets/stylus/天气.png">
            </div>
            <div class="windBox">
              <div class="windDirection">
                  <p>
                      风向
                  </p>
                  <p class="wind_direction">
                      {{wind_direction}}
                  </p>
              </div>
              <div class="wind-scale">
                  <p>
                      风力
                  </p>
                  <P class="wind_scale">
                      {{wind_scale}}级
                  </P>
              </div>
            </div>
        </div>
        <div>
            <hr>
            <div class="moon">
               <img src="../assets/stylus/月球.png">
               <p>{{phase_name}}</p>
            </div>
            <div class="sonUp">
                <img src="../assets/stylus/太阳升起.png">
                <p>{{sunrise}}</p>
            </div>
            <div class="sonDown">
                <img src="../assets/stylus/太阳下落.png">
                <p>{{sunset}}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { getNowWeather, getNow, getair, gethours, getdays, getmoons, getsun } from '../services/weatherServices'
export default {
  name: 'v1',
  data() {
    return {
      temperature: '',
      wether: '',
      high: '',
      low: '',
      air: '',
      wind_direction: '',
      wind_scale: '',
      phase_name: '',
      sunrise: '',
      sunset: '',
      params: {
        location: this.$store.state.place,
        unit: this.$store.state.unit,
        start: 1,
        days: 3,
        hours: 24
      },
      params1: {
        location: this.$store.state.place,
        start: 0
      },
      lists: [],
      list2: [],
      list3: [],
      list4: [],
      obj: {},
      kv: {}
    }
  },
  beforeMount() {
    this.getData()
  },
  mounted() {
    this.listf()
  },
  updated() {
  },
  methods: {
    listf() {
    },
    getData() {
      getNowWeather(this.params).then(res => {
        this.temperature = res.results[0].now.temperature
        this.wether = res.results[0].now.text
        this.wind_direction = res.results[0].now.wind_direction
        this.wind_scale = res.results[0].now.wind_scale
        this.list3 = { temperature: res.results[0].now.temperature, name: this.$store.state.place, wether: res.results[0].now.text }
        this.$store.state.list.push(this.list3)
        for (let i = 0; i < this.$store.state.list.length;) {
          if (this.kv[this.$store.state.list[i].name + ',' + this.$store.state.list[i].wether]) {
            this.$store.state.list.splice(i, 1)
          } else {
            this.kv[this.$store.state.list[i].name + ',' + this.$store.state.list[i].wether] = true
            i++
          }
        }
      })
      getNow(this.params).then(res => {
        this.high = res.results[0].daily[0].high
        this.low = res.results[0].daily[0].low
      })
      getair(this.params).then(res => {
        this.air = res.results[0].air.city.quality
      })
      gethours(this.params).then(res => {
        this.lists = res.results[0].hourly
      })
      getdays(this.params).then(res => {
        this.list2 = res.results[0].daily
      })
      getmoons(this.params1).then(res => {
        this.phase_name = res.results[0].moon[0].phase_name
      })
      getsun(this.params1).then(res => {
        this.sunrise = res.results[0].sun[0].sunrise
        this.sunset = res.results[0].sun[0].sunset
      })
    }
  }
}
</script>
<style scoped>
    .container{
        color: white;
    }
    .heading{
        padding-left: 4%;
        height: 120px
    }
    .temperature{
        font-size: 400%;
        position: relative;
        bottom: 50px;
        left: 1%;
    }
    .wether{
        position: relative;
        bottom: 115px;
        right: 1%;
    }
    .section{
        position: relative;
        bottom: 120px;
        right: 1%;
    }
    .air{
        position: relative;
        bottom: 128px;
        right: 1%;
    }
    .release{
        height: 50px;
    }
    .release p{
        font-size:50% ;
    }
    .time{
        float: left;
        position: relative;
        bottom: 40px;
        left: 5%;
    }
    .AccuWeather{
        float: right;
        position: relative;
        bottom: 40px;
        right: 5%;
    }
    .AccuWeather img{
        height: 15px;
    }
    hr{
        width: 90%;
    }
    .weatherImg img{
        height: 15px;
    }
    .cle{
        height:200px;
        width: 100%;
        display: flex;
        justify-content: center
    }
    .box{
        height:50px ;
        float: left;
        margin-left: 1%;
        font-size: 10%;
        text-align: center
    }
    .particular{
    }
    .day{
        clear: both;
        position: relative;
        bottom: 80px;
        display: flex;
        justify-content:space-between;
        margin-left: 10%;
        margin-right: 10%;
    }
    .wind{
        width: 100%
    }
    .winds{
        float: left;
        margin-left: 13%
    }
    .windImg img{
        height: 150px;
        clear: left;
        float: left;
        margin-left: 12%;
        margin-top: 5px
    }
    .windDirection{
        margin-top: 20px
    }
    .windDirection p{
        display: inline;
    }
    .moon{
        width: 100%
    }
    .moon p{
        float: left;
        margin-left: 2%
    }
    .moon img{
        height:50px;
        float: left;
        margin-left: 5%
    }
    .son img{
        margin-top: 30px;
        height:50px;
        clear: left
    }
    .sonUp img{
        margin-top: 60px;
        height:50px;
        clear: left;
        float: left;
        margin-left: 10%
    }
    .sonUp p{
        clear: left;
        float: left;
        margin-left: 11%
    }
    .sonDown img{
        position: relative;
        height:50px;
        float: right;
        margin-right: 10%;
        bottom: 52px
    }
    .sonDown p{
        position: relative;
        clear: left;
        float: right;
        margin-right: 10%;
        bottom: 52px
    }
    .wind-scale p{
        display: inline;
    }
    .text_day{
        margin-left: 5%
    }
    .windBox{
        width: 30%;
        float: right;
        text-align: left
    }
</style>
