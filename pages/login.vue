<template>
  <div class="login-page">
    <div>
      <span>
        <img 
          src="~/assets/images/logo.svg" 
          alt="">
      </span>
    </div>
    <span class="login-type">短信登录</span>
    <mt-field 
      v-model="mobile" 
      placeholder="手机号">
      <span 
        class="get-code" 
        @click="getCode()">获取验证码</span>
    </mt-field>
    <mt-field 
      v-model="captcha" 
      placeholder="验证码"/>
    <mt-field 
      v-model="password" 
      placeholder="密码" 
      type="password"/>
    <p class="toast">
      温馨提示：未注册的手机号，登录时将自动注册。
    </p>
    <button 
      class="login" 
      @click="Login()">立即登录</button>
  </div>
</template>

<script>
  import {
    Toast
  } from "mint-ui";
  import v from "~/assets/utils/validate";
  import {
    loginApi
  } from "~/assets/services/user";
  import {
    mapActions
  } from "vuex";
  import md5 from "js-md5";

  export default {
    head: {
      title: "登录"
    },
    data() {
      return {
        mobile: "",
        captcha: "",
        password: ""
      };
    },
    methods: {
      ...mapActions(["login"]),
      getCode() {
        if (!v.tel(this.mobile)) {
          Toast("手机号格式不正确");
          return;
        }
        this.captcha = "1234";
      },
      async Login() {
        if (!v.tel(this.mobile)) {
          Toast("手机号格式不正确");
          return;
        }
        if (!v.required(this.captcha)) {
          Toast("请输入验证码");
          return;
        }
        if (!v.required(this.password)) {
          Toast("请输入密码");
          return;
        }
        const res = await loginApi({
          mobile: this.mobile,
          password: md5(this.password)
        });
        if (res.code === 0) {
          this.login(res.data);
          Toast("登录成功,欢迎回来～～～");
          setTimeout(() => {
            this.$router.go(-1);
          }, 1500);
        }
      }
    }
  };

</script>

<style lang="scss">
  @import "../assets/styles/mixin";

  .login-page {
    background: $fc;
    height: 100vh;
    padding: px2rem(100px) px2rem(90px) 0 px2rem(90px);
    text-align: center;
    color: #999;
    font-size: px2rem(28px);

    .login-type {
      display: inline-block;
      color: $primary;
      margin: px2rem(30px) 0 px2rem(30px) 0;
      font-weight: 700;
      border-bottom: 2px solid $primary;
    }

    .toast {
      text-align: left;
      margin-bottom: px2rem(60px);
    }

    .mint-cell {
      border: none;
      margin-bottom: px2rem(30px);
    }

    .mint-cell-wrapper {
      background-image: none;
      border: 1px solid #d9d9d9;
    }

    #logo {
      width: px2rem(280px);
      height: px2rem(112px);
      margin: 0 auto;
    }

    .get-code {
      display: inline-block;
      @include wh(100px, 45px);
      line-height: 45px;
    }

    .login {
      width: 100%;
      height: px2rem(80px);
      background: $primary;
      border: none;
      color: #fff;
      font-size: px2rem(28px);
      border-radius: 2px;
    }
  }

</style>
