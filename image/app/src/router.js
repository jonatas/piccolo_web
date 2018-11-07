import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BlogList from './views/BlogList.vue'
import BlogSingle from './views/BlogSingle.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogList
    },
    {
      path: '/blog/:articleName',
      name: 'blog_single',
      component: BlogSingle,
      props: true
    }
  ]
})
