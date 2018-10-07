/*收藏API*/
import request from '@/utils/request'

//添加收藏
export function addCollection(data){
  return request({
    url: '/collection/add',
    method: 'post',
    data: data
  })
}

//删除收藏
export function delCollection(data){
  return request({
    url: '/collection/del',
    method: 'post',
    data: data
  })
}

//获取收藏列表
export function getCollectionList(){
  return request({
    url: '/collection/list',
    method: 'get'
  })
}