import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstpage from '@/components/subpage/firstpage'
import secondpage from '@/components/subpage/secondpage'
import thirdpage from '@/components/subpage/thirdpage'
import thirdpagefirst from '@/components/subpage/subpages/thirdpagefirst'

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
            }
          ]
        }
      ]
    }
  ]
})
