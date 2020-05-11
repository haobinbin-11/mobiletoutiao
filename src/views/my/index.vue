<template>
  <div class="my-container">
    <!-- <div class="user-info">
      <div class="base-info"></div>
      <div class="data-info"></div>
    </div> -->
    <van-cell-group>
      <!-- 头部用户信息 -->
      <van-cell
        center
        title="单元格"
        value="内容"
      >
        <van-image
          slot="icon"
          width="50"
          height="50"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div slot="title">昵称</div>
        <van-buttton
          size="small"
          round
        >编辑资料</van-buttton>
      </van-cell>
      <!-- /头部用户信息 -->

      <!-- 头部用户数据 -->
      <van-grid>
        <van-grid-item >
          <div slot="text">
            <div slot="span">123</div>
            <div slot="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item >
          <div slot="text">
            <div slot="span">123</div>
            <div slot="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item >
          <div slot="text">
            <div slot="span">123</div>
            <div slot="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item >
          <div slot="text">
            <div slot="span">123</div>
            <div slot="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
      <!-- /头部用户信息 -->
    </van-cell-group>
      <!-- 宫格导航 -->
      <van-grid :column-num="2">
        <van-grid-item
          icon-prefix="hh"
          icon="shoucang"
          text="文字"
        />
        <van-grid-item
          icon-prefix="hh"
          icon="lishi"
          text="文字"
        />
      </van-grid>
      <!-- /宫格导航 -->
      <van-cell
        title="消息通知"
        is-link
        to="/"
      />
      <van-cell
        title="小智同学"
        is-link
        to="/"
      />
      <van-cell title="退出登录" />
  </div>
</template>

<script>
export default {
  name: 'MyIndex',
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
<style scoped lang="less"></style>
