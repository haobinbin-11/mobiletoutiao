<template>
  <div class="chanbel-eadit">
    <!-- 我的频道 -->
    <van-cell center :border="false">
      <div
        slot="title"
        class="channel-title"
      >我的频道</div>
      <van-button
        type="danger"
        round
        plain
        size="mini"
      >编辑</van-button>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        class="grid-item"
        v-for="value in 80"
        :key="value"
        text="文字"
      />
    </van-grid>
    <!-- /我的频道 -->

    <!-- 频道推荐 -->
    <van-cell center :border="false">
      <div
        slot="title"
        class="channel-title"
      >频道推荐</div>
    </van-cell>
    <van-grid :gutter="10">
      <van-grid-item
        class="grid-item"
        v-for="value in 8"
        :key="value"
        text="文字"
      />
    </van-grid>
    <!-- /频道推荐 -->
  </div>
</template>

<script>
export default {
  name: 'ChannelEdit',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style scoped lang="less">
.chanbel-eadit {
    padding-top: 55px;
    .channel-title {
        font-size: 16px;
        color: #333333;
    }
    .grid-item {
        width: 80px;
        height: 43px;
        /deep/ .van-grid-item__content{
            background-color: #f4f5f6;
            /deep/ .van-grid-item__text {
                font-size: 14px;
                color: #222;
            }
        }
    }
}
</style>
