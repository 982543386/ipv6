<template>
<div>
  <div class="eq_watch_title">
    <h2 align="center">设备监控</h2>
    <p>设备ID号：<input type="text"  placeholder="输入要查询的设备ID号" v-model="sid"><button @click="select()" style="margin:0px 10px 0px 0px">查询</button><button @click="f5()" style="margin:0px 10px 0px 0px">刷新</button></p>
    
  </div>
  <div>
    <eqwatchshow :comment="comment" :index="sid" :modt="modt" :modf="modf"/>
  </div>
</div>
</template>

<script>
import eqwatchshow from './eq_watchshow.vue'

  export default {
    data(){
        return{
            //数据在哪个组件，更新数据的行为（方法）就应该定义在哪个组件
            comments:this.$route.query,
            comment:'',
            sid:''
        }
    },
    methods:{
      select(){
        //this.sid = this.sid.trim().int()
        this.comment=this.comments[this.sid]
        // console.log(this.comments)
        // console.log(this.comments[this.sid])
      },
       f5(){
       this.comments=this.$route.query
     },
     modt(index){
      console.log("modt被执行了"+index)
       this.$emit('modtComment', index)
       this.$router.replace({path:'/base_control'})
       this.comments=this.$route.query
      //  console.log("刷新")
     },
     modf(index){
      console.log("modf被执行了"+index)
       this.$emit('modfComment', index)
       this.$router.replace({path:'/base_control'})
       this.comments=this.$route.query
      //  console.log("刷新")
     }
    },
    components:{
        eqwatchshow
    }
  }
</script>

<style>
.eq_watch_title{
  position: absolute;
    top: 170%;
    left: 30%;
}
</style>