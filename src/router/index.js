import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import firstpage from '@/components/subpage/firstpage'
import secondpage from '@/components/subpage/secondpage'
import thirdpage from '@/components/subpage/thirdpage'
import thirdpagefirst from '@/components/subpage/subpages/thirdpagefirst'
import seconedpagefirst from '@/components/subpage/subpages/secondpagefirst'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: 'firstpage',
          name: 'firstpage',
          component: firstpage
        },
        {
          path: 'secondpage',
          name: 'secondpage',
          component: secondpage,
          children: [
            {
              path: 'seccondpagefirst',
              name: 'seconedpagefirst',
              component: seconedpagefirst
            }
          ]
        },
        {
          path: 'thirdpage',
          name: 'thirdpage',
          component: thirdpage,
          children: [
            {
              path: 'thirdpagefirst',
              name: 'thirdpagefirst',
              component: thirdpagefirst
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
