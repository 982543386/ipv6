<template>
<div>
  
  <table id="c_list">
    <p class="bt"><button type="button" @click="f5">刷新</button></p>
    <tr>
      <th>设备ID</th>
      <th>设备名</th>
      <th>设备类型</th>
      <th>节点地址</th>
      <th>设备地址</th>
      <th>数据类型</th>
      <th>控制类型</th>
      <th>操作</th>
    </tr>
    <eqitem v-for="(comment,index) in comments" :index="index" :key="index" :comment="comment" :del="del"/>
  </table>
  </div>
</template>


<script>
import eqitem from './eq_item.vue'

  export default {
    
    data(){
        return{
            comments:this.$route.query
        }
    },
   components:{eqitem},
   methods:{
     f5(){
       this.comments=this.$route.query
     },
     del(index){
      //  console.log("del被执行了"+index)
       this.$emit('deleteComment', index)
       this.$router.replace({path:'/base_control'})
       this.comments=this.$route.query
      //  console.log("刷新")
     }
   }
  }
</script>

<style>
table,td,th
{
	border:1px solid black;
}
table
{
	width:80%;
}
th
{
	height:50px;
  text-align:center;
}
td
{
    text-align:center;
}
#c_list{
    position: absolute;
    top: 270%;
    left: 5%;
}
.bt{
	  position: absolute;
    top: 270%;
    left: 40%;
}
</style>