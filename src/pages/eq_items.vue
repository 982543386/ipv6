<template>
      <tr>
      <th>{{data.dday}}</th>
      <th>{{data.dtime}}</th>
      <th>{{data.ddata}}</th>
    </tr>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    props:{//指定属性名和属性值得类型
        data:Object,
        index:Number
    }
}
</script>

<style>

</style>