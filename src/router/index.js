import Vue from 'vue'
import Router from 'vue-router'
import FormWeb from '@/components/FormWeb'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FormWeb',
      component: FormWeb
    }
  ]
})
