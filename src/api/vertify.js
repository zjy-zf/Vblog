/*验证码API*/
import request from '@/utils/request'

export function getVertifyCode(data) {
  return request({
    url: '/getVertifyCode',
    method: 'get'
  })
}

export function getVertifyCodeImage(data) {
  return request({
    url: '/getVertifyCodeImage',
    method: 'get'
  })
}