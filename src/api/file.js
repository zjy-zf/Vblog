/*文件相关api*/
import request from  '@/utils/request'

//上传文件
export function uploadFile(data){
  request({
    url: '/file/upload',
    method: 'post',
    data: data
  })
}

//下载文件
export function downloadFile(data){
  request({
    url: '/file',
    method: 'get',
    param: data
  })
}