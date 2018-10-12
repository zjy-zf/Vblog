import request from '@/utils/request'
import path from './path'
import { param } from '@/utils'

//新增关注
export function addConcern(data){
  return request({
    url: path + '/concern/add',
    method: 'post',
    data
  })
}

//删除关注
export function delConcern(data) {
  return request({
    url: path + '/concern/del',
    method: 'post',
    data: data
  })
}

//获取关注列表
export function getConcernList(){
  return request({
    url: path + '/concern/list',
    method: 'get'
  })
}