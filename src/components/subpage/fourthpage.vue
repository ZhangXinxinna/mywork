<template>
  <div class="fourthpage">
    <div class="step">
      <el-steps :active="1"
                align-center>
        <el-step title="填写成绩信息"
                 icon="el-icon-edit"></el-step>
        <el-step title="筛选学校结果"
                 icon="el-icon-upload"></el-step>
        <el-step title="生成志愿"
                 icon="el-icon-picture"></el-step>
      </el-steps>
    </div>
    <div>
      <div class="text">请输入您的高考信息
      </div>
      <div class="input">
        <el-form :model="form">
          <el-input placeholder="请输入内容"
                    v-model="form.input1">
            <template slot="prepend">所在省份：</template>
          </el-input>
          <el-input placeholder="请输入内容"
                    v-model="form.input2">
            <template slot="prepend">排名：</template>
          </el-input>
          <el-input placeholder="请输入内容"
                    v-model="form.input3">
            <template slot="prepend">所在批次：</template>
          </el-input>
          <el-input placeholder="请输入内容"
                    v-model="form.input4">
            <template slot="prepend">高考分数：</template>
          </el-input>
        </el-form>
      </div>
    </div>
    <div class="button">
      <el-button :default-active="routerName"
                 type="primary"
                 round
                 @click="submit">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        input1: '',
        input2: '',
        input3: '',
        input4: ''
      }
    }
  },
  mounted () {
    this.routerName = this.$route.path
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    submit () {
      this.$router.push({ 'path': '/result' })
    }
  }
}
</script>
<style scoped>
.step {
  margin-top: 100px;
}
.text {
  font-size: 40px;
  margin-top: 100px;
  color: rgb(86, 168, 245);
}
.input {
  margin-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.el-input {
  width: 500px;
  margin-top: 50px;
}
.button {
  margin-top: 100px;
}
.el-button {
  font-size: 20px;
  margin-bottom: 100px;
}
.fourthpage {
  height: auto;
}
.el-form {
  display: flex;
  flex-direction: column;
}
</style>
