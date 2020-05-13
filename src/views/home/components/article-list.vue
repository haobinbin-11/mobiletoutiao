<template>
  <div class="article-list">
      <van-pull-refresh
        v-model="isPullDownLoading"
        :success-duration="800"
        :success-text="refreshSuccessText"
        @refresh="onRefresh"
      >
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <article-item
              v-for="(article, index) in articles"
              :key="index"
              :article="article"
            />
          </van-list>
      </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from '@/api/article'
import ArticleItem from '@/components/article-item'
export default {
  name: 'ArticleList',
  components: {
    ArticleItem
  },
  props: {
    channel: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      articles: [],
      loading: false,
      finished: false,
      timestamp: null, // 获取下一页数据的事件戳
      isPullDownLoading: false, // 下拉刷新的loading状态
      refreshSuccessText: '' // 下拉刷新成功的提示文本
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLoad () {
      // 1. 请求获取数据
      const { data } = await getArticles({
        channel_id: this.channel.id,
        timestamp: this.timestamp || Date.now(),
        with_top: 1
      })
      console.log(data)
      // 2. 把数据放到 list 数组中
      const { results } = data.data
      this.articles.push(...results)
      // 3. 设置本次加载状态结束,才可以判断是否需要
      // 加载下一次, 否则就会永远停在这里
      this.loading = false
      // 4. 数据全部加载完成
      if (results.length) {
        // 更新获取下一页数据的页码
        this.timestamp = data.data.pre_timestamp
      } else {
        this.finished = true
      }
    },
    async onRefresh () {
      // 下拉刷新 组件自己会把loading状态
      const { data } = await getArticles({
        channel_id: this.channel.id,
        timestamp: Date.now(),
        with_top: 1
      })
      const { results } = data.data
      this.articles.unshift(...results)
      this.isPullDownLoading = false
      this.refreshSuccessText = `更新了${results.length}条数据`
    }
  }
}
</script>
<style scoped lang="less">
.article-list {
    position: fixed;
    left: 0;
    right: 0;
    top: 90px;
    bottom: 50px;
    overflow-y: auto;
}
</style>
