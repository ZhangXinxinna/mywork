<template>
<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>用户注册</span>
  </div>
  <div>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="用户名：">
      <el-input v-model="input" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="设置密码：" style="padding-top:10px">
      <el-input type="password" placeholder="请输入密码" on-value="1" off-value="0" v-model="input1" show-password prop="pass"  autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" placeholder="请再次输入密码" on-value="1" off-value="0" v-model="input2" show-password prop="pass" autocomplete="off"></el-input>
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
    return {
      input: '',
      input1: '',
      input2: ''
    }
  }
}
</script>

<style scoped>
  .box-card {
    height: 500px;
    width: 500px;
    margin:auto;
  }
  .el-form{
    text-align: center;
    padding-right: 30px;
    padding-top: 50px;
  }
  .el-switch{
    float: left;
    padding-left: 45px;
  }
  .el-row{
    text-align: center;
    padding-top: 40px;
  }
</style>
