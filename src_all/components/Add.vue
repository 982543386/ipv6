<template>
    <div class="col-md-4">
        <form class="form-horizontal">
          <div class="form-group">
            <label>用户名</label>
            <input type="text" class="form-control" placeholder="用户名" v-model="username">
          </div>
          <div class="form-group">
            <label>评论内容</label>
            <textarea class="form-control" rows="6" placeholder="评论内容" v-model="content"></textarea>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <input type="file" @change="loadTextFromFile">
              <button size="small" @click="ExportData()" type="primary" style="margin:0px 10px 0px 0px">导出</button>
              <button type="button" class="btn btn-default pull-right" @click="add">提交</button>
            </div>
          </div>
        </form>
      </div>
</template>
// <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
// <script src="https://cdn.bootcss.com/vue/2.6.10/vue.min.js"></script>
<script>
export default {
    props:{
         addComment:{//指定属性名、属性值的类型、必要性
            type:Function,
            required:true
        },
        comments:{
          
        },
        user_name:{
            type:String,
            required:true
        }
    },
    data(){
        return{
            username:this.user_name,
            content:''
        }
    },
    methods:{
        add(){
            //1.检查输入的合法性
            const username = this.username.trim()
            const content = this.content.trim()
            if(!username||!content){
                alert('姓名数据不能为空')
                return
            }
            //2.根据输入的数据，封装成一个comment对象
            const comment = {
                username,
                content
            }
            //3.添加到comments中
            //console.log(comment),
            this.addComment(comment),
            //this.addComment(JSON.parse('{"name":"h2222aha","content":"2222"}'))
            //4.清除输入
            this.username=this.user_name,
            this.content=''
        },

        loadTextFromFile(e){
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onload = e => this.$emit("load", this.dealNum(e.target.result));
          reader.readAsText(file);
        },
        dealNum(item){
          console.log(item)
          //this.addComment(JSON.parse(item))
          //console.log(eval("(" + item + ")"))
          //this.addComment(eval("(" + item + ")"))
          //this.addComment(JSON.parse(item))
          console.log(JSON.parse(item))
          var cs=JSON.parse(item)
          
          for(var i=0;i<cs.length;i++){
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
	  	el.download ="todo文件导出.txt"
	  	//必须点击否则不会下载
	  	el.click()		
	  	//移除链接释放资源		
	    urlObject.revokeObjectURL(url)
	  }

    }
}
</script>
    

<style>

</style>