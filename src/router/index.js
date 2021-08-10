import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import firstpage from '@/components/firstpage'
import secondpage from '@/components/secondpage'
import thirdpage from '@/components/thirdpage'

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
          component: thirdpage
        }
      ]
    }
  ]
})
