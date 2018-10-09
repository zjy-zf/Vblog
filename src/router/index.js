import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/layout/Layout'
import MainLayout from '@/view/managerLayout/Layout'
Vue.use(Router)

export const constantRouterMap = [
  {
    path: "",
    component: Layout,
    redirect: 'index',
    children: [{
      path: 'index',
      component: () => import('@/view/index'),
      name: 'index',
      meta: { title: '首页', noCache: true }
    }]
  },{
    path: "/editArtical",
    component: MainLayout,
    redirect: '/editArtical/index',
    children: [{
      path: '/editArtical/index',
      component: () => import('@/view/artical/EditArtical'),
      name: 'editArtical',
      meta: { title: '编辑文章', noCache: true }
    }]
  },{
    path: "/articalList",
    component: MainLayout,
    redirect: '/articalList/index',
    children: [{
      path: '/articalList/index',
      component: () => import('@/view/index/ArticalList'),
      name: 'articalList',
      meta: { title: '文章列表', noCache: true }
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
      meta: { title: '生活笔记', noCache: true }
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
      meta: { title: '技术杂谈', noCache: true }
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
      meta: { title: '留言板', noCache: true }
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
      meta: { title: '关于我', noCache: true }
    }]
  }
]

export default new Router({
  // mode: "history",
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
