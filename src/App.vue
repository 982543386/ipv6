<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div >
          <ul id="all_title">
          <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img class="logo" src="./assets/logo.png" alt="logo"></li>
          <li><h1>&nbsp;&nbsp;&nbsp;欢迎进入物联网网关远程交互系统</h1></li>
          </ul>
          </div>
          <div class="btt">
          <input type="file" @change="loadTextFromFile">
          <button size="small" @click="ExportData()" type="primary" style="margin:0px 10px 0px 0px">导出</button>
          </div>
      </div>
    </div>

    <div class="row">
      <!--生成路由链接-->
      <!-- <div class="col-xs-offset-2 col-xs-8">
        <div class="list-group">
          <ul class="nav nav-tabs">
          <li><router-link to="/about" class="list-group-item">About</router-link></li>
          <li><router-link to="/home" class="list-group-item">Home</router-link></li>
          <li><router-link to="/title" class="list-group-item">title</router-link></li>
          </ul>
        </div>
      </div> -->
      <div class="col-xs-offset-2 col-xs-8">
        <div class="panel">
          <div class="panel-body">
            <!--显示当前组件-->
            <keep-alive>
              <!--向当前组件传递消息-->
              <!-- <router-view :nowtime=nowdate></router-view> -->
              <router-view :comments="comments" :zh="zh" :modzh="modzh" :addComment="addComment" :deleteComment="deleteComment" :modtComment="modtComment" :modfComment="modfComment"></router-view>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import basecontrol from './pages/base_control.vue'

export default {
  data(){
    return{
      comments:JSON.parse('[]'),
      zh:JSON.parse(window.localStorage.getItem('saierwangluo')||'[]')
    }//,window.confirm(window.localStorage.getItem('saierwangluo')||'[]')
  },
    methods:{
      
        //添加评论
        addComment(comment){
          this.comments.push(comment)
            //this.comments.unshift(comment)    
        },
        // addzh(zhl){
        //   console.log("addzh被执行了"+zhl.seusername)
        //   this.zh.push(zhl)
        //     //this.comments.unshift(comment)    
        // },
        modzh(psw){
          console.log("modzh被执行了"+psw)
          this.zh[0].sepassword=psw
        },
        modtComment(index){
          // console.log("modtcomment被执行了")
          this.comments[index].sdata="1"
        },
        modfComment(index){
          // console.log("modfcomment被执行了")
          this.comments[index].sdata="0"
        },
        //删除指定下标评论
        deleteComment(index){
          // console.log("deletecomment被执行了"+index)
            this.comments.splice(index,1)
        },
        loadTextFromFile(e){
          const file = e.target.files[0]
          const reader = new FileReader()
          reader.onload = e => this.$emit("load", this.dealNum(e.target.result))
          reader.readAsText(file)
        },
        dealNum(item){
          console.log(item)
          //this.addComment(JSON.parse(item))
          //console.log(eval("(" + item + ")"))
          //this.addComment(eval("(" + item + ")"))
          //this.addComment(JSON.parse(item))
          console.log(JSON.parse(item))
          var cs=JSON.parse(item)
          
          for(var i=0; i<cs.length; i++){
            this.addComment(cs[i])
          }
        },
        ExportData(){
          //定义文件内容，类型必须为Blob 否则createObjectURL会报错
          let content = new Blob([JSON.stringify(this.comments)])
    
          //生成url对象
          let  urlObject = window.URL || window.webkitURL || window	
          let url = urlObject.createObjectURL(content)	
          //生成<a></a>DOM元素
          let el = document.createElement('a')
          //链接赋值
          el.href = url
          el.download ="导出的数据.txt"
          //必须点击否则不会下载
          el.click()		
          //移除链接释放资源		
          urlObject.revokeObjectURL(url)
        }

    },
    watch:{//监视
      zh:{
        deep:true,//深度监视
        handler:function(value){
          //将zh最新的json值,存储在localstorage
          window.confirm(JSON.stringify(value))
          window.localStorage.setItem('saierwangluo',JSON.stringify(value))
        }
      }

    },
    components:{
        basecontrol
    }
}
</script>

<style>
.logo{
    width: 80px;
    height: 80px;
}
#all_title li{
  list-style: none;
  float: left;
}
.btt{
    position: absolute;
    top: 40%;
    left: 80%;
}
</style>
