import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,//配置对象的属性名都是一些确定的名称，不能随便修改
  components: { App },
  template: '<App/>'
})
