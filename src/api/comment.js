/*评论API*/
import request from '@/utils/request'

//获取我的评论
export function getMyComment(){
  return request({
    url: '/comment/',
    method: 'get'
  })
}

//获取博客的评论
export function getBlogComment(data){
  return request({
    url: '/comment/a',
    method: 'post',
    data
  })
}

//添加评论
export function addComment(data){
  return request({
    url: '/comment/add',
    method: 'post',
    data
  })
}

//删除评论
export function delComment(data){
  return request({
    url: '/comment/del',
    method: 'post',
    data
  })
}