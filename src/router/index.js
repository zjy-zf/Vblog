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
      meta: { title: '韶华随笔', noCache: true }
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
      meta: { title: '技术分享', noCache: true }
    }]
  },
  {
    path: "/classify",
    component: Layout,
    redirect: '/classify/index',
    children: [{
      path: '/classify/index',
      component: () => import('@/view/classify'),
      name: 'classify',
      meta: { title: '个人归档', noCache: true }
    }]
  },
  {
    path: "/book",
    component: Layout,
    redirect: '/book/index',
    children: [{
      path: '/book/index',
      component: () => import('@/view/book'),
      name: 'book',
      meta: { title: '书屋', noCache: true }
    }]
  },
  {
    path: "/leaveMessage",
    component: Layout,
    redirect: '/leaveMessage/index',
    children: [{
      path: '/leaveMessage/index',
      component: () => import('@/view/leaveMessage'),
      name: 'leaveMessage',
      meta: { title: 'Blog留言', noCache: true }
    }]
  },
  {
    path: "/aboutMone",
    component: Layout,
    redirect: '/aboutMone/index',
    children: [{
      path: '/aboutMone/index',
      component: () => import('@/view/aboutMone'),
      name: 'aboutMone',
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
