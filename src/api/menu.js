import request from '@/utils/request'
import path from './path'

export function getMenu() {
  return request({
    url: path+'/blog/menu/list',
    method: 'GET'
  })
}