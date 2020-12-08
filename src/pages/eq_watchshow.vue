<template>
<div>
  <table id="d_list">
    <tr>
      <th>设备ID</th>
      <th>设备名</th>
      <th>设备类型</th>
      <th>节点地址</th>
      <th>设备地址</th>
      <th>数据类型</th>
      <th>控制类型</th>
    </tr>
    <tr>
      <th>{{index}}</th>
      <th>{{comment.name}}</th>
      <th>
          <template v-if="comment.devtype == 1">can</template>    
          <template v-else-if="comment.devtype == 0">zigbee</template>
          <template v-else>无数据</template>
      </th>
      <!-- <th>{{comment.devtype}}</th> -->
      <th>{{comment.nodeadd}}</th>
      <th>{{comment.deviceadd}}</th>
      <!-- <th>{{comment.datatype}}</th> -->
      <th>
          <template v-if="comment.datatype == 1">开关类</template>    
          <template v-else-if="comment.datatype == 0">数据类</template>
          <template v-else>无数据</template>
      </th>
      <!-- <th>{{comment.workmodel}}</th> -->
      <th>
          <template v-if="comment.workmodel == 1">开关控制</template>    
          <template v-else-if="comment.workmodel == 0">不可控</template>
          <template v-else>无数据</template>
      </th>
    </tr>
  </table>
  <div>
   <template v-if="comment.workmodel == 1">
     <div class="sdata">
     <span class="sp">
       当前设备状态:
      <template v-if="comment.sdata == 1">开</template> 
      <template v-if="comment.sdata == 0">关</template> 
     </span>
      <br>
			<label><input type="radio" name="kg" value="1" v-model="dd">开</label>
			<label><input type="radio" name="kg" value="0" v-model="dd">关</label>
			<br>
			<!-- <span>Picked: {{sdata}}</span> -->
      <button @click="mod()" style="margin:0px 10px 0px 0px">修改</button>
		</div>
     </template> 
   <template v-else>
     <table id="dsdata">
       <tr>
        <th>日期</th>
        <th>时间</th>
        <th>数据</th>
      </tr>
      <eqitems v-for="(data,index) in comment.sdata" :index="index" :key="index" :data="data"/>
     </table>
   </template>
  </div>
</div>
</template>

<script>
import eqitems from './eq_items.vue'

  export default {
   props:{
        comment:Object,
        index:Number,
        modt:Function,
        modf:Function
    },
    methods:{
      mod(){
        //修改sdata状态
        const{comment,modt,modf,index,dd} = this
            if(window.confirm(`确定修改状态吗？`)){
              if(dd==="0"){
                modf(index)
              }else if(dd==="1"){
                modt(index)
              }
                
            }
      }
    },
    data(){
        return{
          dd:''
        }
    },
   components:{eqitems}
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
#d_list{
    position: absolute;
    top: 400%;
    left: 10%;
}
.sp{
  font-size:22px;
  color:rgb(235, 233, 233);
}
.sdata{
  position: absolute;
  text-align:center;
  top: 650%;
  left: 35%;
}
#dsdata{
  position: absolute;
  text-align:center;
  top: 650%;
  left: 10%;
}
</style>