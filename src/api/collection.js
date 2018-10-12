import request from '@/utils/request'
import path from './path'
import { param } from '@/utils'

//添加收藏
export function addCollection(data){
  return request({
    url: path + '/collection/add',
    method: 'post',
    data: data
  })
}

//删除收藏
export function delCollection(data){
  return request({
    url: path + '/collection/del',
    method: 'post',
    data: data
  })
}

//获取收藏列表
export function getCollectionList(){
  return request({
    url: path + '/collection/list',
    method: 'get'
  })
}