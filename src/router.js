import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Post from './views/Post.vue'
import Post2 from './views/Post2.vue'
import Post3 from './views/Post3.vue'
import Post4 from './views/Post4.vue'
import Post5 from './views/Post5.vue'
import Post6 from './views/Post6.vue'
import Post7 from './views/Post7.vue'
import Post8 from './views/Post8.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/post2',
      name: 'post2',
      component: Post2
    },
    {
      path: '/post3',
      name: 'post3',
      component: Post3
    },
    {
      path: '/post4',
      name: 'post4',
      component: Post4
    },
    {
      path: '/post5',
      name: 'post5',
      component: Post5
    },
    {
      path: '/post6',
      name: 'post6',
      component: Post6
    },
    {
      path: '/post7',
      name: 'post7',
      component: Post7
    },
    {
      path: '/post8',
      name: 'post8',
      component: Post8
    }
  ]
})
