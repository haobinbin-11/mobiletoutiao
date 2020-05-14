<template>
  <div class="home-container">
    <!-- 导航栏 -->
    <van-nav-bar
      class="app-nav-bar"
    >
      <van-button
        class="search-btn"
        slot="title"
        icon="search"
        type="info"
        round
        size="small"
      >搜索</van-button>
    </van-nav-bar>
    <!-- /导航栏 -->

    <!--文章频道列表 -->
    <van-tabs class="channel-tabs" v-model="active">
      <van-tab
        :title="channel.name"
        v-for="channel in channels"
        :key="channel.id"
      >
        <!-- 文章列表 -->
        <article-list :channel="channel" />
        <!-- /文章列表 -->
      </van-tab>
      <!-- 添加占位元素 -->
      <div slot="nav-right" style="width:33px; flex-shrink: 0;"></div>
      <div slot="nav-right">
        <van-icon
          name="wap-nav"
          class="wap-nav-warp"
          @click="isChannelEditShow = true"
        ></van-icon>
      </div>
    </van-tabs>
    <!-- /文章频道列表 -->
    <van-popup
      v-model="isChannelEditShow"
      position="bottom"
      class="channel-edit-popup"
      close-icon-position="top-left"
      get-container="body"
      style="height: 100%"
      closeable
    >
      <channel-edit
        :user-channels="channels"
      >
      </channel-edit>
    </van-popup>
  </div>
</template>

<script>
import { getUserChannels } from '@/api/user'
import ArticleList from './components/article-list'
import ChannelEdit from './components/channel-edit'
export default {
  name: 'HomeIndex',
  components: {
    ArticleList,
    ChannelEdit
  },
  props: {},
  data () {
    return {
      active: 0, // 控制被激活的标签
      channels: [], // 频道列表
      isChannelEditShow: true // 控制弹出层的显示状态
    }
  },
  computed: {},
  watch: {},
  created () {
    this.loadChannels()
  },
  mounted () {},
  methods: {
    async loadChannels () {
      // 请求获取频道数据
      const { data } = await getUserChannels()
      this.channels = data.data.channels
    }
  }
}
</script>
<style scoped lang="less">
.home-container{
  /deep/ .van-nav-bar__title {
      max-width: none;
  }
  .search-btn {
    width: 277px;
    height: 32px;
    background: #5babfb;
    border: none;
    .van-icon {
      font-size: 16px;
    }
    .van-button__text {
      font-size: 14px;
    }
  }
  .channel-tabs {
    /deep/ .van-tab {
      border-right: 1px solid #edeff3;
      border-bottom: 1px solid #edeff3;
    }
    /deep/ .van-tabs__line {
      width: 15px !important;
      height: 3px;
      background-color: #3296fa;
      bottom: 20px;
    }
  }
  .wap-nav-warp {
    position: fixed;
    right: 0;
    width: 33px;
    height: 43px;
    line-height: 43px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: .9;
    .van-icon {
      font-size: 25px;
    }
    &::before {
      display: block;
      height: 43px;
      background: url("./line.png") no-repeat;
      background-size: contain;
      position: absolute;
      margin-right: -2px;
      left: 0;
      top: 0;
    }
  }
}

</style>
