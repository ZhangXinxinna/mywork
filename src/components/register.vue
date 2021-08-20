<template>
  <el-card class="box-card">
    <div slot="header"
         class="clearfix">
      <span>用户注册</span>
    </div>
    <div>
      <el-form ref="register"
               :model="register"
               :rules="rules"
               label-width="100px">
        <el-form-item label="用户名："
                      prop="username">
          <el-input v-model="register.username"
                    placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="设置密码："
                      style="padding-top:10px"
                      prop="setpword">
          <el-input type="password"
                    placeholder="请输入密码"
                    on-value="1"
                    off-value="0"
                    v-model="register.setpword"
                    show-password
                    prop="pass"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="checkpword">
          <el-input type="password"
                    placeholder="请再次输入密码"
                    on-value="1"
                    off-value="0"
                    v-model="register.checkpword"
                    show-password
                    prop="pass"
                    autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-row>
        <el-button type="success">注册</el-button>
        <el-button>重置</el-button>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.register.checkpword !== '') {
          this.$refs.form.validateField('checkpword')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.register.setpass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      register: {
        username: '',
        setpword: '',
        checkpword: ''
      },
      rules: {
        username: [
          // 验证用户名是否合法
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        setpword: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkpword: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
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
  padding-top: 50px;
}
.el-switch {
  float: left;
  padding-left: 45px;
}
.el-row {
  text-align: center;
  padding-top: 40px;
}
</style>
