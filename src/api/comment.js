import request from '@/utils/request'
import path from './path'
import { param } from '@/utils'

//获取我的评论
export function getMyComment(){
  return request({
    url: path + '/comment/',
    method: 'get'
  })
}

//获取博客的评论
export function getBlogComment(data){
  return request({
    url: path + '/comment/a',
    method: 'post',
    data
  })
}

//添加评论
export function addComment(data){
  return request({
    url: path + '/comment/add',
    method: 'post',
    data
  })
}

//删除评论
export function delComment(data){
  return request({
    url: path + '/comment/del',
    method: 'post',
    data
  })
}