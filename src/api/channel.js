// 文章请求相关模块
import request from '@/utils/request'
// 获取所有文章列表
export const getAllChannels = () => {
  return request({
    methods: 'GET',
    url: '/app/v1_0/channels'
  })
}
