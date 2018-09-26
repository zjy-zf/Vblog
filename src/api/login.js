import request from '@/utils/request'
import path from './path'

export function login(data) {
  return request({
    url: path+'/blog/user/login',
    method: 'post',
    data: data
  })
}

export function register(data){
  return request({
    url: path+'/blog/user/registry',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: path+'/login/logout',
    method: 'post'
  })
}

export function checkLoginStatus() {
  return request({
    url: path+"/blog/user/checkLogin",
    method: 'get'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

