/*关注API*/
import request from '@/utils/request'

//新增关注
export function addConcern(data){
  return request({
    url: '/concern/add',
    method: 'post',
    data
  })
}

//删除关注
export function delConcern(data) {
  return request({
    url: '/concern/del',
    method: 'post',
    data: data
  })
}

//获取关注列表
export function getConcernList(){
  return request({
    url: '/concern/list',
    method: 'get'
  })
}