<template>
  <div class="addresss">
        <div class="manage" >
            <ul>
            <li v-show="!operating"><a @click="$router.push({path:'/'})" class="return" href="#"><img src="../assets/stylus/返回.png"></a>
                <p>管理城市</p>
            </li>
            <li><a v-show="!operating" @click="operate" class="revise"><img src="../assets/stylus/编辑.png"></a></li>
                <li v-show="operating" class="wrong"><a href="#" @click="cancel"><img src="../assets/stylus/错.png"></a><p>编辑城市</p></li>
                <li><a href="#" v-show="operating" @click="save" class="right"><img src="../assets/stylus/right.png"></a></li>
            </ul>
            <div class="clicktop" >
            </div>
        </div>
            <div class="vessel">
       <li v-for="(item,index) in list"  :class="'n'+item.number" :key="index">
         <div class="name">{{item.name}}</div>
           <div v-show="item.number==1" class="place"><img src="../assets/stylus/位置.png"></div>
         <div class="box">
             <a href="#" v-show="operating" @click="del(item)"><img src="../assets/stylus/删除.png"></a>
           <div class="temperature">{{item.temperature}}°</div>
           <div class="weather">{{item.wether}}</div>
         </div>
       </li>
  </div>
    </div>
</template>
<script>
export default {
  name: 'addresss',
  data() {
    return {
      list: [],
      operating: false,
      tath: [],
      ding: false
    }
  },
  mounted() {
    this.changeList()
  },
  methods: {
    changeList() {
      this.list = this.$store.state.list
      console.log(this.list)
    },
    operate() {
      this.operating = true
    },
    del(item) {
      if (!this.tath.length) {
        this.tath = [...this.list]
      }
      this.list.splice(item, 1)
    },
    save() {
      this.tath = []
      this.operating = false
    },
    cancel() {
      if (this.tath.length) {
        this.list = this.tath
        this.tath = []
      }
      this.operating = false
    }
  }
}
</script>
<style scoped>
    *body{
        text-align: center;
    }
    .addresss{
        margin-left: 17% ;
        width: 50%;
        text-align: center;
        min-width: 1000px;
        height: 1000px;
        background: url("../assets/stylus/总.jpg");
        background-size: 100% 100%;
    }
    .manage{
        background-color: black;
        text-align: center;
        height:50px;
    }
    .manage li{
    display: inline;
    color: white;
    width: 30%;
    padding-top: 15px;
    }
    .manage ul{
    list-style-type: none;
       display: flex;
        justify-content: space-between;
    }
    .manage p{
        margin-left: 20%;
        position: relative;
        bottom: 10px;
    }
    p{
        display: inline;
        padding-left: 2%;
    }
    ul{
        list-style-type: none;
    }
    .vessel{
        position: relative;

        text-align: center;

    }
    .vessel li{
        list-style-type: none;
        padding-left: 5%;
        color: white;
    }
    .name{
        float: left;
        padding-top: 5px;
    }
    .place{
        height:0px;
    }
    .place img{
        height: 15px;
        position: relative;
        right: 42%;
        top:8px;
    }
    .box{
        padding-left: 90%;
    }
    .box a{
        float: right;
        position: relative;
        top: 5px;
        right: 10%;
    }
    .box img{
        height: 25px;
    }
    .weather{
        padding-right: 38%;
    }
    .temperature{
        padding-right: 32%;
    }
    .revise{
        position: relative;
        left:190%;
    }
    .return img{
        height: 25px;
        position: relative;
        bottom: 3px;
        right: 20%;
    }
    .revise img{
        height:35px;
        position: relative;
        bottom:8px;
        right: 45%;
    }
    .wrong img{
        height: 35px;
        position: relative;
        bottom: 8px;
        right: 140%;
    }
    .wrong p{
        position: relative;
        bottom: 20px;
        right: 30%;
    }
    .right img{
        height: 35px;
        position: relative;
        bottom: 8px;
        left: 30%;
    }
    .n1{
        background:url("../assets/stylus/阴天1.jpg");
        background-size: 100% 100%;
    }
    .n2{
        background:url("../assets/stylus/阴天2.jpg");
        flex-flow: column-reverse wrap-reverse;
        background-size: 100% 100%;
    }
    .n3{
        background:url("../assets/stylus/阴天3.jpg");
        flex-flow: column-reverse wrap-reverse;
        background-size: 100% 100%;
    }
</style>
