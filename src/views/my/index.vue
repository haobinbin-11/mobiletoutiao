<template>
  <div class="my-container">
    <!-- <div class="user-info">
      <div class="base-info"></div>
      <div class="data-info"></div>
    </div> -->
    <van-cell-group v-if="user" class="header">
      <!-- 头部用户信息 -->
      <van-cell
        class="co"
        center
        :border="false"
      >
        <van-image
          class="avator"
          slot="icon"
          round
          fit="cover"
          :src="currentUser.photo"
        />
        <div class="name" slot="title">{{currentUser.name}}</div>
        <van-button
          class="update-btn"
          size="small"
          round
        >编辑资料</van-button>
      </van-cell>
      <!-- /头部用户信息 -->

      <!-- 头部用户数据 -->
      <van-grid :border="false" class="shuju">
        <van-grid-item class="shuju-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{currentUser.art_count}}</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="shuju-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{currentUser.follow_count}}</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item class="shuju-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{currentUser.fans_count}}</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item class="shuju-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{currentUser.like_count}}</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
      <!-- /头部用户信息 -->
    </van-cell-group>

    <!-- 未登录显示页面 -->
    <div v-else class="not-login">
      <div @click="$router.push('./login')">
        <img src="./手机.png" class="mobile">
      </div>
      <div class="text">登录  /  注册</div>
    </div>
    <!-- /未登录显示页面 -->

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
        v-if="user"
        class="jz"
        title="退出登录"
        center
        @click="onLogout"
      />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getCurrentUser } from '@/api/user'
export default {
  name: 'MyIndex',
  components: {},
  props: {},
  data () {
    return {
      currentUser: {} // 当前登录用户信息
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},
  created () {
    this.loadCurrenUser()
  },
  mounted () {},
  methods: {
    async loadCurrenUser () {
      const { data } = await getCurrentUser()
      this.currentUser = data.data
    },
    onLogout () {
      // 用户退出
      this.$dialog.confirm({
        title: '推出提示',
        message: '确认退出吗？'
      })
        .then(() => {
          // 确认 清除登录状态
          this.$store.commit('setUser', null)
        })
        .catch(() => {
          // on cancel
        })
    }
  }
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
      /deep/ .update-btn {
        height: 20px;
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
  .not-login {
    height: 180px;
    background: url("./1.png") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .mobile {
      width: 66px;
      height: 66px;
    }
    .text {
      color: #ffffff;
      font-size: 14px;
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
