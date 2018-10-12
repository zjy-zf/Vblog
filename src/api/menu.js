import request from '@/utils/request'
import path from './path'
import { param } from '@/utils'

export function getMenu() {
  return request({
    url: path+'/menu/list',
    method: 'GET'
  })
}