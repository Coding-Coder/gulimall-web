import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import lxyVue from '@/components/LXY'
import MyTable from '@/components/MyTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/lxy',
      name: 'lxy',
      component: lxyVue
    },
    {
      path: '/table',
      name: 'MyTable',
      component: MyTable
    }
  ]
})
