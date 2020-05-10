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
        placeholder="请输入手机号"
        name="mobile"
        :rules="formRules.mobile"
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="hh"
        left-icon="yanzhengma"
        placeholder="请输入验证码"
        name="code"
        :rules="formRules.code"
      >
        <template #button>
          <van-button
            class="send-btn"
            size="small"
            round
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
        await this.$refs['login-form'].validate('mobile')
        // 验证通过, 请求发送验证码
      } catch (err) {
        this.$toast({
          message: err.message, // 提示
          position: 'top'
        })
      }
      // this.$refs['login-form'].validate('mobile').then(
      //   data => {
      //   }
      // )
      // 验证通过 请求发送验证码 用户接受短信 输入验证码 请求登录
      // 请求发送验证码 隐藏发送按钮 显示倒计时
      // 倒计时结束 隐藏倒计时 显示发送按钮
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
