<template>
  <div>
      <ul class="base_c">
          <li><router-link :to="{ name: 'eqlist', query:comments}" class="list-group-item">设备列表</router-link></li>
          <!-- <li><router-link to="/base_control/eq_list" class="list-group-item">设备列表</router-link></li> -->
          <li><router-link to="/base_control/eq_add" class="list-group-item" >添加设备</router-link></li>
          <!-- <li><router-link :to="{ name: 'eqadd', query:addComment}" class="list-group-item">添加设备</router-link></li> -->
          <li><router-link :to="{ name: 'eqwatch', query:comments}" class="list-group-item">设备监控</router-link></li>
          <!-- <li><router-link to="/base_control/eq_del" class="list-group-item">设备删除</router-link></li> -->
          <!-- <li><router-link to="/base_control/user_modpsw" class="list-group-item">用户密码更改</router-link></li> -->
          <li><router-link :to="{ name: 'usermodpsw', query:zh}" class="list-group-item">用户密码更改</router-link></li>
      </ul>
      <!-- <hr> -->
      <div>
      <keep-alive>
      <router-view @addComment="this.addComment" @deleteComment="this.deleteComment" @modtComment="this.modtComment" @modfComment="this.modfComment" @modzh="this.modzh"></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import eqadd from './eq_add.vue'

  export default {
    props:{
      addComment:{//指定属性名、属性值的类型、必要性
            type:Function,
            required:true
      },
      comments:{

      },
      modzh:{
      },
      zh:{

      },
      deleteComment:{

      },
      modtComment:{

      },
      modfComment:{

      }
      // ,
      // addzh:{

      // }
    },
    data(){
        return{

        }
    },
    components:{
        eqadd
    }
  }
</script>

<style>
.base_c{
    position: absolute;
    left: 20%;
    top: 100%;
}
.base_c li{
  list-style: none;
  float: left;
  
}
</style>