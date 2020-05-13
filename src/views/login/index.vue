<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="注册 / 登录"
      left-arrow
      @click-left="$router.back()"
    />

    <!-- 基于 Vant 的表单验证:
        1. 使用 van-form 组件包裹所有的表单项 van-field
        2. 给 van-form 绑定 submit 事件 当表单提交的时候出发该事件
           只有表单验证通过 它菜调用 submit
        3. 使用 Field 的rules属性定义校验规则
    -->
    <!-- 登录表单 -->
    <van-form
      :show-error="false"
      :show-error-message="false"
      :validate-first="true"
      ref="login-form"
      @submit="onLogin"
      @failed="onFailed"
    >
      <van-field
        v-model="user.mobile"
        icon-prefix="hh"
        left-icon="shouji"
        center
        placeholder="请输入手机号"
        name="mobile"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="hh"
        center
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        name="code"
        :rules="formRules.code"
      >
        <template #button>
          <van-count-down
            v-if="isCountDownShow"
            :time="1000 * 60"
            format="ss s"
            @finish="isCountDownShow = false"
          />
          <van-button
            v-else
            class="send-btn"
            size="small"
            round
            type="primary"
            :loading="isSendSmsLoading"
            @click.prevent="onSendSms"
          >发送验证码</van-button>
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button
          class="login-btn"
          type="info"
          block
        >登录</van-button>
      </div>
    </van-form>
    <!-- /登录表单 -->
  </div>
</template>

<script>
import { login, sendSms } from '@/api/user'
// import { Toast } from 'vant'
export default {
  name: 'LoginIndex',
  components: {},
  props: {},
  data () {
    return {
      user: {
        mobile: '18519689002', // 手机号
        code: '246810' // 验证码
      },
      formRules: {
        mobile: [
          { required: true, message: '请输入手机号' },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: '手机号格式错误' }
        ],
        code: [
          { required: true, message: '请输入验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式错误' }
        ]
      },
      isCountDownShow: false, // 控制倒计时和发送按钮的显示状态
      isSendSmsLoading: false // loading显示状态
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
        forbidClick: true, // 禁止背景点击
        loadingType: 'spinner',
        duration: 0 //  loading 展示时长 值为0时 不会消失  单位(ms)
      })
      try {
        const { data } = await login(this.user)
        // 下一个提示会把上一个提示覆盖掉
        this.$toast.success('登录成功')
        // 将后端返回的用户状态(token等数据)放到 Vuex 容器中
        this.$store.commit('setUser', data.data)
        // 登录成功 跳转回原来的页面
        this.$router.back()
      } catch (err) {
        console.log(err)
        this.$toast.fail('登录失败, 手机号或验证码错误')
      }
    },
    onFailed (error) {
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: 'top'
        })
      }
    },
    async onSendSms () {
      // 校验手机号码
      try {
        const res = await this.$refs['login-form'].validate('mobile'
        )
        console.log(res)
        // 开启loading
        this.isSendSmsLoading = true
        // 验证通过, 请求发送验证码 // 请求发送验证码 隐藏发送按钮 显示倒计时
        this.isCountDownShow = true
        // 倒计时结束 隐藏倒计时 显示发送按钮
        // 监视倒计时的 finish 事件处理
        await sendSms(this.user.mobile)

        // 显示倒计时
      } catch (err) {
        // try 里面任何代码的错误都会进入到 catch
        // 不同的错误需要不同的提示, 需要判断
        let message = ''
        if (err && err.response && err.response.status === 429) {
          // 发送短信失败错误提示
          message = '发送频繁,请稍后重试'
        } else if (err.name === 'mobile') {
          // 表单验证失败错误提示
          message = err.message
        } else {
          message = '发送失败, 请稍后重试'
        }
        // 提示用户
        this.$toast({
          message,
          position: 'top'
        })
      }
      // 关闭loading
      this.isSendSmsLoading = false
      // this.$refs['login-form'].validate('mobile').then(
      //   data => {
      //   }
      // )
      // 验证通过 请求发送验证码 用户接受短信 输入验证码 请求登录
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
.van-button--primary {
      border-color: #ffffff !important;
}

</style>
