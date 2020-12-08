<template>
  <div id="mod" class="lmod">
    <br>
    <form class="form_mod">
          <div class="f_mod">
            <ul id="row_lt">
            <li><label>用户名:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></li>
            <li><input type="text" class="form-control" placeholder="用户名" v-model="seusername"></li>
            </ul>
            <br>
            <ul id="row_lt">
            <li><label>现在的密码:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></li>
            <li><input type="password" class="form-control" placeholder="现在的密码" v-model="now_password"></li>
            </ul>
            <br>
            <ul id="row_lt">
            <li><label>设置新密码:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></li>
            <li><input type="password" class="form-control" placeholder="设置新密码" v-model="newa_password"></li>
            </ul>
            <br>
            <ul id="row_lt">
            <li><label>重复新密码:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label></li>
            <li><input type="password" class="form-control" placeholder="重复的密码" v-model="newb_password"></li>
            </ul>
            <br>
            <div class="col-sm-offset-2 col-sm-10">
              <button type="button" class="but_submit" @click="jump('/base_control')">确定</button>
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
    data(){
            return{
                seusername:this.$route.query[0].seusername,
                now_password:'',
                newa_password:'',
                newb_password:''
            }
        },
        methods:{
            jump(page){
                const now_password = this.now_password.trim()
                const newa_password = this.newa_password.trim()
                const newb_password = this.newb_password.trim()
                if(!now_password||!newa_password||!newb_password){
                  alert('姓名密码数据不能为空')
                return
                }else if(now_password!=this.$route.query[0].sepassword){
                  alert('原密码输入错误')
                return
                }else if(newa_password!=newb_password){
                  alert('两次新密码输入不一致')
                return
                }else{
                  this.$emit('modzh', newa_password)
                  this.$router.replace({path:'/base_control'})
                  this.comments=this.$route.query  
                  alert('修改成功')
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
.mod{
        position: absolute;
        /* top: 50%; */
        left: 30%;
    }
.f_mod{
  position: absolute;
        top: 190%;
        left: 30%;
}
#row_lt li{
  list-style: none;
  float: center;
}
</style>