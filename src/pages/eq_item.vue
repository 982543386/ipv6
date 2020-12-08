<template>
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
      <th>
          <button type="button" @click="rdel">删除</button>
      </th>
    </tr>
</template>

<script>
export default {
    data(){
        return{
            devtype:''
        }
        //,window.confirm(this.comments)
    },
    props:{//指定属性名和属性值得类型
        comment:Object,
        index:Number,
        del:Function
    },
    methods:{
        rdel(){
            const{comment,del,index} = this
            if(window.confirm(`确定删除设备吗？`)){
                del(index)
            }
        }
    }
}
</script>

<style>

</style>