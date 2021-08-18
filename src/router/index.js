import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import register from '@/components/register'
import firstpage from '@/components/subpage/firstpage'
import secondpage from '@/components/subpage/secondpage'
import thirdpage from '@/components/subpage/thirdpage'
import fourthpage from '@/components/subpage/fourthpage'
import result from '@/components/subpage/result'
import thirdpagefirst from '@/components/subpage/subpages/thirdpagefirst'
import thirdpagesecond from '@/components/subpage/subpages/thirdpagesecond'
import thirdpagethird from '@/components/subpage/subpages/thirdpagethird'
import thirdpagefourth from '@/components/subpage/subpages/thirdpagefourth'
import thirdpagefifth from '@/components/subpage/subpages/thirdpagefifth'
import thirdpagesixth from '@/components/subpage/subpages/thirdpagesixth'
import thirdpageseventh from '@/components/subpage/subpages/thirdpageseventh'
import thirdpageeighth from '@/components/subpage/subpages/thirdpageeighth'

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
          component: secondpage
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
            },
            {
              path: 'thirdpagesecond',
              name: 'thirdpagesecond',
              component: thirdpagesecond
            },
            {
              path: 'thirdpagethird',
              name: 'thirdpagethird',
              component: thirdpagethird
            }, {
              path: 'thirdpagefourth',
              name: 'thirdpagefourth',
              component: thirdpagefourth
            }, {
              path: 'thirdpagefifth',
              name: 'thirdpagefifth',
              component: thirdpagefifth
            },
            {
              path: 'thirdpagesixth',
              name: 'thirdpagesixth',
              component: thirdpagesixth
            },
            {
              path: 'thirdpageseventh',
              name: 'thirdpageseventh',
              component: thirdpageseventh
            },
            {
              path: 'thirdpageeighth',
              name: 'thirdpageeighth',
              component: thirdpageeighth
            }
          ]
        },
        {
          path: 'fourthpage',
          name: 'fourthpage',
          component: fourthpage
        },
        {
          path: 'result',
          name: 'result',
          component: result
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
