import Vue from 'vue'
import Router from 'vue-router'
import Address from './views/Address'
import Home from './views/Home'
import Install from './views/Install'
import Place from './views/Place'
import Demo2 from './components/demo2'
import Demo from './views/Demo'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/address',
      name: 'address',
      component: Address
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/install',
      name: 'install',
      component: Install
    },
    {
      path: '/place',
      name: 'home',
      component: Place
    },
    {
      path: '/demo2',
      component: Demo2
    },
    {
      path: '/demo',
      component: Demo
    }
  ]
})
