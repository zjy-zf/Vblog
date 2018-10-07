import request from '@/utils/request'
import path from './path'
import { param } from '@/utils'

//登陆
export function login(data) {
  return request({
    url: path+'/userLogin',
    method: 'post',
    data: param(data)
  })
}

//注册
export function register(data){
  return request({
    url: path+'/registry',
    method: 'post',
    data: param(data)
  })
}


//登出
export function logout() {
  return request({
    url: path+'/userLogout',
    method: 'post'
  })
}

//获取用户信息
export function getUserInfo(token) {
  return request({
    url: '/user/getUserInfo',
    method: 'get',
    params: { token }
  })
}

