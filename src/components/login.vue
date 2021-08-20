<template>
  <el-card class="box-card">
    <div slot="header"
         class="clearfix">
      <span>用户登录</span>
    </div>
    <div>
      <el-form ref="loginform"
               :model="loginform"
               label-width="100px"
               :rules="rules">
        <el-form-item label="用户名："
                      prop="username">
          <el-input v-model="loginform.username"
                    placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码："
                      style="padding-top:30px"
                      prop="password">
          <el-input type="password"
                    placeholder="请输入密码"
                    v-model="loginform.password"
                    show-password
                    autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-switch style="padding-top:20px"
                   v-model="value"
                   active-color="#13ce66"
                   active-text="记住密码"
                   inactive-color="#ff4949">
        </el-switch> -->
      </el-form>
      <el-row>
        <el-button type="success"
                   @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      loginform: {
        username: '',
        password: ''
      },
      value: '',
      rules: {
        username: [
          // 验证用户名是否合法
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    reset () {
      this.$refs.loginform.resetFields()
    },
    login () {
      this.$refs.loginform.validate(
        async valid => {
          if (!valid) return
          // eslint-disable-next-line standard/object-curly-even-spacing
          const { data: res} = await this.$http.post('lujing', this.loginform)
          if (res.meta.stauts !== 200) return console.log('登陆失败')
          console.log('登陆成功')
        }
      )
      this.$router.push({ 'path': '/sccess' })
    }
  }
}
</script>

<style scoped>
.box-card {
  height: 500px;
  width: 500px;
  margin: auto;
}
.el-form {
  text-align: center;
  padding-right: 30px;
  padding-top: 40px;
}
.el-switch {
  float: left;
  padding-left: 45px;
}
.el-row {
  text-align: center;
  padding-top: 100px;
}
</style>
