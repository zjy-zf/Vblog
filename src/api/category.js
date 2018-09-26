import request from '@/utils/request'
import path from './path'

export function getCategoryList(query) {
  return request({
    url: path+'/blog/category/list',
    method: 'get',
    params: query
  })
}