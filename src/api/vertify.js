import request from '@/utils/request'
import path from './path'
import { param } from '@/utils'

export function getVertifyCode(data) {
  return request({
    url: path + '/getVertifyCode',
    method: 'get'
  })
}

export function getVertifyCodeImage(data) {
  return request({
    url: path + '/getVertifyCodeImage',
    method: 'get'
  })
}