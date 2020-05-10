<template>
  <div class="login-container">
    <van-nav-bar
    class="app-nav-bar"
      title="注册 / 登录"
      left-arrow
      @click-left="$router.back()"
    />

    <!-- 登录表单 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        icon-prefix="hh"
        left-icon="shouji"
        placeholder="请输入手机号"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="hh"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
      >
        <template #button>
          <van-button class="send-btn" size="small" round >发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <div class="login-btn-wrap">
      <van-button
        class="login-btn"
        type="info"
        block
        @click="onLogin"
      >登录</van-button>
    </div>
    <!-- /登录表单 -->
  </div>
</template>

<script>
import { login } from '@/api/user'
// import { Toast } from 'vant'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: '' // 验证码
      }
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onLogin () {
      this.$toast.loading({
        message: '登录中.....', // 提示文本
        forbidClick: true,
        loadingType: 'spinner',
        duration: 0 //  loading 展示时长 值为0时 不会消失  单位(ms)
      })
      try {
        const res = await login(this.user)
        console.log(res)
        // 下一个提示会把上一个提示覆盖掉
        this.$toast.success('登录成功')
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败, 手机号或验证码错误')
      }
    }
  }
}
</script>
<style scoped lang="less">
.login-container {
  .login-btn-wrap {
     padding: 27px 16px;
     .login-btn {
       background-color: #6db4fb;
       border:none;
     }
     .van-button__text {
       font-size: 17px;
     }
  }
  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;
    .van-button__text {
      font-size: 11px;
      color: #666666;
    }
  }
}

</style>
