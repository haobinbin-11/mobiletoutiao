<template>
  <div class="my-container">
    <!-- <div class="user-info">
      <div class="base-info"></div>
      <div class="data-info"></div>
    </div> -->
    <van-cell-group class="header">
      <!-- 头部用户信息 -->
      <van-cell
        class="co"
        center
        title="单元格"
        value="内容"
        :border="false"
      >
        <van-image
          class="avator"
          slot="icon"
          round
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="name" slot="title">昵称</div>
        <van-buttton
          class="update-btn"
          size="small"
          round
        >编辑资料</van-buttton>
      </van-cell>
      <!-- /头部用户信息 -->

      <!-- 头部用户数据 -->
      <van-grid :border="false" class="shuju">
        <van-grid-item class="shuju-item">
          <div slot="text" class="text-wrap">
            <div class="count">123</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="shuju-item">
          <div slot="text" class="text-wrap">
            <div class="count">123</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item class="shuju-item">
          <div slot="text" class="text-wrap">
            <div class="count">123</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item class="shuju-item">
          <div slot="text" class="text-wrap">
            <div class="count">123</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
      <!-- /头部用户信息 -->
    </van-cell-group>
      <!-- 宫格导航 -->
      <van-grid class="nav-grid" :column-num="2">
        <van-grid-item
          class="nav-grid-item"
          icon-prefix="hh"
          icon="shoucang"
          text="收藏"
        />
        <van-grid-item
          class="nav-grid-item"
          icon-prefix="hh"
          icon="lishi"
          text="历史"
        />
      </van-grid>
      <!-- /宫格导航 -->
      <van-cell
        class="cell-message"
        title="消息通知"
        is-link
        to="/"
      />
      <van-cell
        title="小智同学"
        is-link
        to="/"
      />
      <van-cell
        class="jz"
        title="退出登录"
        center
      />
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
<style scoped lang="less">
.my-container {
  .header {
    background: url("./1.png") no-repeat;
    background-size: cover;
    .co {
      height: 115px;
      box-sizing: border-box;
      padding-top: 38px;
      padding-bottom: 11px;
      background-color: unset;
      .avator {
        width: 66px;
        height: 66px;
        border: 0.5px solid #ffffff;
        box-sizing: border-box;
        margin-right: 11px;
      }
      .naem {
        font-size: 15px;
        color: white;
      }
      .update-btn {
        height: 7px;
        background-color: #ffff;
        padding: 3px;
        font-size: 10px;
        color: #666666;
        border-radius: 20px;
      }
    }
    .shuju {
      .shuju-item {
        height: 65px;
        color: white;
        .text-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .count {
            font-size: 18px;
          }
          .text {
            font-size: 11px;
          }
        }
      }
    }
    /deep/ .van-grid-item__content {
      background-color: unset;
    }
  }
  /deep/.nav-grid {
    .nav-grid-item {
      height: 70px;
      .hh {
        font-size: 22px;
      }
      .hh-shoucang {
        color: #eb5253;
      }
      .hh-lishi {
        color: #ff9d1d;
      }
      .van-grid-item__text {
        font-size: 14px;
        color: #333333;
      }
    }
  }
}
.jz {
  text-align: center;
  margin-top: 5px;
  color: #d86262;
}
.cell-message {
  margin-top: 5px;
}
.c {
  background: none !important;
}
</style>
