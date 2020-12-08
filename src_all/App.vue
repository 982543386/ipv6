<template>
    <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对XXX小游戏的的评论</h1>
          </div>
        </div>
        
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment" :comments="comments" :user_name="user_name"/>
      <!--传递参数comments -->
      <List :comments="comments" :deleteComment="deleteComment" :user_name="user_name"/>
    </div>
  </div>
</template>

<script>
import Add from './components/Add.vue'
import List from './components/List.vue'

export default {
  
    data(){
        return{
            //数据在哪个组件，更新数据的行为（方法）就应该定义在哪个组件
            //从localStrage读取comments
            comments:JSON.parse('[]'),
            user_name:'888888'//当前登录用户姓名
        }
        //,window.confirm(window.localStorage.getItem('comments_key1')||'[]')
    },
    methods:{
      
        //添加评论
        addComment(comment){
            this.comments.unshift(comment)
            // console.log(comment);
            // console.log(JSON.stringify(comment));      
        },
        //删除指定下标评论
        deleteComment(index){
            this.comments.splice(index,1)
        }
    },
    watch:{//监视
      comments:{
        deep:true,//深度监视
        handler:function(value){
          //将comments最新的json值,存储在localstorage
          //window.confirm(JSON.stringify(value))
          //window.localStorage.setItem('comments_linshi',JSON.stringify(value))
        }
      }

    },
    components:{
        Add,
        List
    }
}
</script>

<style>

</style>