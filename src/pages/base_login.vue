<template>
  <div id="login" class="login">
    <br><br>
    <h3>{{nowtime | timeStr(this)}}</h3>
    <br>
    <br>
    <br>
    <form class="form_login">
          <div>
            <ul id="row_lt">
            <li><label>用户:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></li>
            <li><input type="text" class="form-control" placeholder="用户名" v-model="username"></li>
            </ul>
            <br>
            <ul id="row_lt">
            <li><label>密码:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></li>
            <li><input type="password" class="form-control" placeholder="密码" v-model="password"></li>
            </ul>
            <br>
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="but_submit" @click="jump('/base_control')">提交</button>
            </div>
          </div>
          <router-view></router-view>
    </form>
  </div>
</template>

<script type="text/javascript" src="../js/vue.js"></script>
<script>
//过滤器  控制时间格式

  
  export default {
    props:['zh'],
    data(){
            return{
                nowtime:new Date(),
                username:'',
                password:''
            }
        },
        methods:{
            padDate(value){
                return value<10?"0"+value:value
            },
            jump(page){
                const username = this.username.trim()
                const password = this.password.trim()
                const seusername = this.zh[0].seusername
                const sepassword = this.zh[0].sepassword
                if(!username||!password){
                alert('姓名密码数据不能为空')
                return
                }
                if(username==seusername&&password==sepassword){
                this.$router.replace({path:page})
                }
                else{
                alert('用户名或密码错误')
                return
                }
            }
        },
            filters:{
             timeStr(value,vue) {
                var date = new Date(value);
                var year = date.getFullYear();
                var month = vue.padDate(date.getMonth()+1);
                var day = vue.padDate(date.getDate());
                var hours = vue.padDate(date.getHours());
                var minutes = vue.padDate(date.getMinutes());
                var seconds = vue.padDate(date.getSeconds());
                var myday = vue.padDate(date.getDay());//注:0-6对应为星期日到星期六 
                var xingqi 
                switch(parseInt(myday)) { 
                    case 0:xingqi="星期日";break; 
                    case 1:xingqi="星期一";break; 
                    case 2:xingqi="星期二";break; 
                    case 3:xingqi="星期三";break; 
                    case 4:xingqi="星期四";break; 
                    case 5:xingqi="星期五";break; 
                    case 6:xingqi="星期六";break; 
                    default:xingqi="系统错误！" 
                    } 
                return "今天是"+year+"年"+month+"月"+day+"日 "+xingqi+" "+hours+":"+minutes+":"+seconds;
      },
        mounted(){
            this.timer = setInterval(()=>{
                this.date = new Date();
            },1000);
        },
        beforeDestory(){
            if(this.timer){
                clearInterval(this.timer);//在vue实例销毁前，清除我们的定时器
            }
        }
  }
  }


  
</script>

<style>
.but_submit {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    width: 100%;
}
.login{
        position: absolute;
        /* top: 50%; */
        left: 25%;
    }

#row_lt li{
  list-style: none;
  float: center;
}
</style>