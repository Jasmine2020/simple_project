<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li class="layui-this">登入</li>
          <li><router-link :to="{ name: 'reg' }">注册</router-link></li>
        </ul>
        <div class="layui-form layui-tab-content" style="padding: 20px 0">
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">用户名</label>
                  <div class="layui-input-inline">
                    <input
                      type="text"
                      placeholder="请输入用户名"
                      name="email"
                      required
                      autocomplete="off"
                      class="layui-input"
                      v-model="email"
                      v-validate="'required|email'"
                    />
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00">{{ errors.first("email") }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <label for="L_pass" class="layui-form-label">密码</label>
                  <div class="layui-input-inline">
                    <input
                      type="password"
                      placeholder="请输入密码"
                      name="password"
                      required
                      autocomplete="off"
                      class="layui-input"
                      v-model="password"
                      v-validate="'required|min:6'"
                    />
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00">{{
                      errors.first("password")
                    }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <div class="layui-row">
                    <label class="layui-form-label">验证码</label>
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="code"
                        autocomplete="off"
                        class="layui-input"
                        v-model="code"
                        v-validate="'required|length:4 '"
                      />
                    </div>
                    <div class="svg" @click="getCaptcha()">
                      <span v-html="svg"></span>
                    </div>
                  </div>
                  <div class="layui-form-mid">
                    <span style="color: #c00">{{ errors.first("code") }}</span>
                  </div>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn">立即登录</button>
                  <span style="padding-left: 20px">
                    <router-link :to="{ name: 'forget' }"
                      >忘记密码？</router-link
                    >
                  </span>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者使用社交账号登入</span>
                  <a
                    href=""
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href=""
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCode } from '@/api/login'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      svg: '',
      code: ''
    }
  },
  methods: {
    getCaptcha () {
      getCode().then((res) => {
        this.svg = res.value
      })
    }
  },
  mounted () {
    this.getCaptcha()
  }
}
</script>

<style scoped>
.svg {
  position: relative;
  top: -5px;
  cursor: pointer;
}
</style>
