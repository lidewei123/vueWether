<template>
<div class="place">
    <div class="hadding">
        <a @click="$router.push({path:'/'})" class="return">
            <img src="../assets/stylus/返回.png">
        </a>
        <p class="add">添加城市</p>
    </div>
    <hr/>
    <div class="table">
        <div>
            <input type="text" class="text" value="" v-model="params.q" ref="lef" v-on:input="sul(), getPlace()">
        </div>
        <div class="recommend">
            <p>
                推荐城市
            </p>
        </div>
        <table border="1" v-show="use" class="list" v-for="(item,index) in list" :key="index" @click="fn($event)">
          <tr>
          <td><a>{{item.place1}}</a></td>
          <td><a>{{item.place2}}</a></td>
          <td><a>{{item.place3}}</a></td>
          </tr>
        </table>
    </div>
        <div v-for="(item,index) in list2" :key="index" class="city">
            <a @click="fn($event)">{{item.name}}</a>
            <p>({{item.path}})</p>
        </div>
</div>
</template>
<script>
import { getplace } from '../services/weatherServices'
export default {
  name: 'place',
  data() {
    return {
      msg: 'change',
      use: true,
      params: {
        q: ''
      },
      list: [
        { place1: '长沙', place2: '北京', place3: '上海' },
        { place1: '广州', place2: '深圳', place3: '天津' },
        { place1: '武汉', place2: '沈阳', place3: '重庆' },
        { place1: '杭州', place2: '南京', place3: '哈尔滨' },
        { place1: '长春', place2: '呼和浩特', place3: '石家庄' },
        { place1: '银川', place2: '乌鲁木齐', place3: '拉萨' },
        { place1: '西宁', place2: '西安', place3: '兰州' },
        { place1: '太原', place2: '安徽', place3: '南宁' }
      ],
      list2: [],
      list3: []
    }
  },
  mounted() {
    this.sul()
  },
  methods: {
    getPlace() {
      getplace(this.params).then(res => {
        this.list2 = res.results
      })
    },
    place() {
      return this.$store.state.place
    },
    re() {
      this.$store.commit('increment', this.msg)
    },
    fn($event) {
      if ($event.target.nodeName === 'A') {
        this.$store.state.place = $event.target.innerHTML
      }
    },
    sul() {
      console.log(this.params.q)
      if (this.params.q !== '') {
        this.list3 = this.list2
        this.use = false
      } else {
        this.use = true
        this.list3 = []
      }
    }
  }
}
</script>
<style scoped>
 *body{
        text-align: center;
    }
    .place{
        margin-left: 17% ;
        width: 50%;
        text-align: center;
        min-width: 1000px;
        height: 1000px;
        background: url("../assets/stylus/总.jpg");
        background-size: 100% 100%;
        margin-top: 16px;
    }
    .hadding{
        position: relative;
        right: 35%;
        top:10px;
        margin-bottom: 20px
    }
    .return img {
  height: 15px;
    }
    .add{
    display: inline;
    padding-left: 5%
    }
    .text{
        width: 90%;
        border-radius: 9px;
        background-color:ghostwhite;
    }
    .recommend{
        width: 100%;
        background-color: gray;
        height:30px;
        position: relative;
        bottom: 10px
    }
    .recommend p{
      margin-right: 78%;
      padding-top: 4px
    }
    .list{
        width: 90%;
        margin-left: 5%
    }
    .list td{
        width: 30%
    }
    .city{
        float: left;
        margin-left: 5%
    }
</style>
