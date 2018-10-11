import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home/Home'
import Layout from '@/view/layout/Layout'
import MainLayout from '@/view/managerLayout/Layout'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: "",
    component: Home,

  },{
    path: "/articleDetail",
    component: Layout,
    redirect: '',
    children: [{
      path: '/articleDetail/:id',
      component: () => import('@/view/article/ArticleDetail'),
      name: 'articleDetail',
      meta: { title: '文章详细' }
    }]
  },{
    path: "/articleEdit",
    component: MainLayout,
    redirect: '/articleEdit/index',
    children: [{
      path: '/articleEdit/index',
      component: () => import('@/view/article/ArticleEdit'),
      name: 'articleEdit',
      meta: { title: '编辑文章'}
    }]
  },{
    path: "/articleList",
    component: MainLayout,
    redirect: '/articleList/index',
    children: [{
      path: '/articleList/index',
      component: () => import('@/view/article/ArticleList'),
      name: 'articleList',
      meta: { title: '文章列表'}
    }]
  },
  {
    path: "/essays",
    component: Layout,
    redirect: '/essays/index',
    children: [{
      path: '/essays/index',
      component: () => import('@/view/essays'),
      name: 'essays',
      meta: { title: '生活笔记'}
    }]
  },
  {
    path: "/resources",
    component: Layout,
    redirect: '/resources/index',
    children: [{
      path: '/resources/index',
      component: () => import('@/view/resources'),
      name: 'resources',
      meta: { title: '资源共享'}
    }]
  },
  {
    path: "/technology",
    component: Layout,
    redirect: '/technology/index',
    children: [{
      path: '/technology/index',
      component: () => import('@/view/technology'),
      name: 'technology',
      meta: { title: '技术杂谈'}
    }]
  },
  {
    path: "/message",
    component: Layout,
    redirect: '/message/index',
    children: [{
      path: '/message/index',
      component: () => import('@/view/message'),
      name: 'message',
      meta: { title: '留言板'}
    }]
  },
  {
    path: "/me",
    component: Layout,
    redirect: '/me/index',
    children: [{
      path: '/me/index',
      component: () => import('@/view/aboutMone'),
      name: 'me',
      meta: { title: '关于我' }
    }]
  }
]

export default new Router({
  mode: "history",
  routes: constantRouterMap
})


export const asyncRouterMap = [
  /*{
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'table',
      icon: 'lock',
      roles: ['admin'] // you can set roles in root nav
    },
    children: [{
      path: 'table',
      component: () => import('@/view/table/index'),
      name: 'table',
      meta: {
        title: 'pagePermission',
        roles: ['admin'] // or you can only set roles in sub nav
      }
    }]
  }*/
]
