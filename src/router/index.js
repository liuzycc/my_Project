import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home/home'
import Welcome from '@/components/home/welcome'
import Users from '@/components/users/users'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          component: Welcome
        },
        {
          path: '/users',
          component: Users
        }
      ]
    }
  ]
})

// 路由守卫
router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  console.log(token)
  if (!token) return next('/login')
  next()
})

export default router
