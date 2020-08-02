import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login'
import Signin from '@/components/signin'
import Moveout from '@/components/moveout'

import Index from '@/pages/index/index'
import About from '@/pages/index/about'
import Courses from '@/pages/courses'

import UiFirst from '@/pages/courselist/uifirst'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses
    },
    {
      path: '/courses/uifirst',
      name: 'UiFirst',
      component: UiFirst
    },
    {
      path: '/helloworld',
      name: 'Helloworld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/moveout',
      name: 'Moveout',
      component: Moveout
    }
  ]
})
