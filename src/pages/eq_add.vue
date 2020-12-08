<template>
  <div class="c_add">
	<div id="example-1">
		<p>设备名称：<input v-model="name" placeholder="请输入设备名称(不带空格)"></p>
		<p>节点类型：
			<select v-model="dev_type">
				<option value="1">can</option>
				<option value="0">zigbee</option>
			</select>
		</p>

		<p>工作模式：
			<select v-model="work_model">
				<option value="1">被动读</option>
				<option value="0">主动传</option>
			</select>
		</p>

		<p>数据类型：
			<select v-model="data_type">
				<option value="1">开关类</option>
				<option value="0">数据类</option>
			</select>
		</p>

		<p>可控类型：
			<select v-model="work_model">
				<option value="1">开关类控制</option>
				<option value="0">不可控</option>
			</select>
		</p>
		<p>节点地址：<input v-model="node_add" placeholder="按十进制输入"></p>
		<p>设备地址：<input v-model="device_add" placeholder="按十进制输入"></p>
		<p class="bt"><button type="button" @click="submit">提交</button></p>
	</div>
	
</div>
</template>

<script>
  export default {
	data(){
    return{
		 name : "",
		 dev_type:"1",
		 node_add:"",
		 device_add:"",
		 data_type:"1",
		 work_model:"1",
		 s_data:"0"
    }
	
	},
	methods: {
		submit : function () {
			//1.检查输入的合法性
			const name = this.name.trim()
			const devtype = this.dev_type
			const nodeadd = parseInt(this.node_add.trim(),10).toString(16)//先将String转10进制  再将10进制转为16进制
			const deviceadd = parseInt(this.device_add.trim(),10).toString(16)
			const datatype = this.data_type
			const workmodel = this.work_model
			const sdata = this.s_data
			// const seusername = 'admin'
			// const sepassword = '123456'
            if(!name||!nodeadd||!deviceadd){
                alert('姓名数据不能为空')
                return
			}
			 //2.根据输入的数据，封装成一个comment对象
            const comment = {
                name,
				devtype,
				nodeadd,
				deviceadd,
				datatype,
				workmodel,
				sdata
			}
			// const zh ={
			// 	seusername,
			// 	sepassword
			// }
			if(window.confirm(`确定添加此设备么？`)){
			//3.添加操作
				//console.log(comment)
				this.$emit('addComment', comment)
				// this.$emit('addzh', zh)
			//4.清除输入
            	this.name='',
				this.node_add='',
				this.device_add=''
            }
			
		}
	}
  }
</script>

<style>
.c_add{
	position: absolute;
    top: 200%;
    left: 35%;
}
.bt{
	position: absolute;
    top: 100%;
    left: 35%;
}
</style>