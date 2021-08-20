<template>
  <div>
    <i class="el-icon-circle-check"></i>
    <p class="text">登录成功！</p>
    <el-button :default-active="routerName"
               type="primary"
               @click="ok">返回</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routerName: ''
    }
  },
  mounted () {
    this.routerName = this.$route.path
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    ok () {
      this.$router.push({ 'path': '/firstpage' })
    }
  }
}
</script>

<style scoped>
.app {
  width: 100%;
  height: 100%;
}
.el-icon-circle-check {
  margin-top: 60px;
  font-size: 100px;
}
.text {
  margin-left: 25px;
  font-size: 30px;
  color: rgb(20, 169, 238);
  font-weight: 600;
}
.el-button {
  margin-top: 50px;
  font-size: 20px;
}
</style>
