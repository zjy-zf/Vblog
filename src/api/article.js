import request from '@/utils/request'
import { param } from '@/utils/index'

//添加新文章
export function createArticle(data) {
  return request({
    url: '/article/add',
    method: 'post',
    data: param(data)
  })
}

//删除文章
export function delArticle(data) {
  return request({
    url: '/article/del',
    method: 'post',
    data
  })
}

//获取文章详情
export function getArticleDetail(data) {
  return request({
    url: `/article/detail/${data.id}`,
    method: 'get',
  })
}


//获取文章列表
export function getArticleList(data){
  return request({
    url: '/article/list',
    method: 'post',
    data: param(data)
  })
}

//发布文章
export function publishArticle(data) {
  return reequest({
    url: '/article/publish',
    method: 'post',
    data
  })
}