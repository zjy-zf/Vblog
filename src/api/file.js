import request from '@/utils/request'
import path from './path'
import { param } from '@/utils'

//上传文件
export function uploadFile(data){
  request({
    url: path + '/file/upload',
    method: 'post',
    data: data
  })
}

//下载文件
export function downloadFile(data){
  request({
    url: path + '/file',
    method: 'get',
    param: data
  })
}