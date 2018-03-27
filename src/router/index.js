import Vue from 'vue'
import Router from 'vue-router'
import Calculator from '@/components/calculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Calculator',
      component: Calculator
    }
  ]
})
