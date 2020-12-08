//路由器模块
import Vue from 'vue'
import VueRouter from 'vue-router'

import baselogin from '../pages/base_login.vue'
import basecontrol from '../pages/base_control.vue'
import controlwelcom from '../pages/control_welcom.vue'
import eqlist from '../pages/eq_list.vue'
import eqadd from '../pages/eq_add.vue'
import eqwatch from '../pages/eq_watch.vue'
// import eqdel from '../pages/eq_del.vue'
import usermodpsw from '../pages/user_modpsw.vue'
import eqwatchshow from '../pages/eq_watchshow.vue'

Vue.use(VueRouter)

export default new VueRouter({
  //配置N个路由
  routes: [
    {
      path: '/base_login',
      name: "baselogin",
      component: baselogin
    },
    {
      path: '/base_control',
      name: "basecontrol",
      component: basecontrol,
      children: [
        {
          path: '/base_control/control_welcom',
          name: "controlwelcom",
          component: controlwelcom
        },
        {
          path: '/base_control/eq_list',
          name: "eqlist",
          component: eqlist
        },
        {
          path: '/base_control/eq_add',
          name: "eqadd",
          component: eqadd
        },
        {
          path: '/base_control/eq_watch',
          name: "eqwatch",
          component: eqwatch,
          children:[
            {
              path:'/base_control/eq_watch/eq_watchshow',
              name: "eqwatchshow",
              component:eqwatchshow
            }
          ]
        },
        // {
        //   path: '/base_control/eq_del',
        //   name: "eqdel",
        //   component: eqdel
        // },
        {
          path: '/base_control/user_modpsw',
          name: "usermodpsw",
          component: usermodpsw
        },
        {
          path:'',
          redirect:'/base_control/control_welcom'
        }
      ]
    },
    {
      path: '/',
      redirect: '/base_login'
    }
  ]
})
