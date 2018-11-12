<template>
   <div class="install">
     <div class="hadding">
       <a @click="$router.push({path:'/'})" class="return">
       <img src="../assets/stylus/返回.png">
       </a>
       <p class="text">设置</p>
     </div>
     <div>
       <button class="temperature" @click="muck()">
         <p>温度单位</p>
         <p>自动({{msg}}°)</p>
       </button>
      <div class="list" v-show="fnc">
        <div>
          <p>C°</p>
          <input type="radio" name="sex" @click="chock()"/>
          <br />
          <p>F°</p>
          <input type="radio" name="sex" @click="change()"/>
          <br />
        </div>
      </div>
     </div>
   </div>
</template>
<script>
export default {
  name: 'Install',
  data() {
    return {
      msg: 'c',
      fnc: false
    }
  },
  methods: {
    muck() {
      this.fnc = true
    },
    chock() {
      this.msg = 'c'
      this.$store.commit('include', this.msg)
    },
    change() {
      this.msg = 'f'
      this.$store.commit('include', this.msg)
    }
  }
}
</script>

<style scoped>
 *body{
        text-align: center;
    }
    .install{
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
        top:10px
    }
    .text{
        display: inline;
        padding-left: 5%
    }
    .return img{
        height: 15px;
    }
    .temperature{
        display: flex;
        justify-content: space-between;
        width:100%;
        margin-top: 20px;
        padding-left: 10%;
        padding-right: 10%;
        background-color:grey;
        color:aliceblue;
        border:none
    }
    .list{
        width:100%;
        margin-top: 20px;
        padding-left: 10%;
        padding-right: 10%;
        color:aliceblue;
    }
    .list p{
      display: inline;
      display: flex;
      justify-content: space-between;
    }
    .list input{
      position: relative;
      bottom: 35px;
      margin-left:50%
    }
</style>
