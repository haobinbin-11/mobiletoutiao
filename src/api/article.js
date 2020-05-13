// 文章请求相关模块
import request from '@/utils/request'
// 获取文章利润表
export const getArticles = params => {
  return request({
    methods: 'GET',
    url: '/app/v1_1/articles',
    params
  })
}
