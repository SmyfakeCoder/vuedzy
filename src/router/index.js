import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from '../components/mainpage'
import blog from '../components/blog'
import error1 from '../components/error1'
import testSql from "../components/testSql";
import article from "../components/article";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name:'main',
      component: main,
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog,
    },
    {
      path: '/error1',
      name: 'error1',
      component: error1
    },
    {
      path: '/testSql',
      name: 'testSql',
      component: testSql
    },
    {
      path: '/article',
      name: 'article',
      component: article
    }
  ]
})
