<template>
  <div id="app">
    <div id="app1">
      <div id="title">
      </div>
      <el-input v-model="search_data"
                placeholder="请输入搜索内容">
        <template slot="append">
          <el-button type="primary"
                     icon="el-icon-search">
          </el-button>
        </template>
      </el-input>
      <div>
        <el-menu :default-active="routerName"
                 class="el-menu-demo"
                 mode="horizontal"
                 @select="handleSelect">
          <el-menu-item @click="goIndex">首页</el-menu-item>
          <el-menu-item @click="goRank">挑大学</el-menu-item>
          <el-menu-item @click="goAllApp">挑专业</el-menu-item>
          <el-menu-item @click="goIndex1" class="el-icon-s-platform" style="float:right">登录</el-menu-item>
          <el-menu-item @click="goIndex2" class="el-icon-s-platform" style="float:right">注册</el-menu-item>
        </el-menu>
        <div class="line">
          <div>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      search_data: (''),
      routerName: '',
      navList: [
        { name: '/login', navItem: '登录' },
        { name: '/register', navItem: '注册' }
      ]
    }
  },
  mounted () {
    this.routerName = this.$route.path
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    goIndex () {
      this.$router.push({ 'path': '/firstpage' })
    },
    goRank () {
      this.$router.push({ 'path': '/secondpage' })
    },
    goAllApp () {
      this.$router.push({ 'path': '/thirdpage' })
    },
    goIndex1 () {
      this.$router.push({ 'path': '/login' })
    },
    goIndex2 () {
      this.$router.push({ 'path': '/register' })
    }
  }
}
</script>

<style scoped>
#app {
  margin: 0px;
  padding: 0px;
  min-width: 1500px;
}
#title {
  padding-top: 10px;
  padding-right: 60px;
}
.el-link {
  float: right;
  margin-right: 20px;
  font-size: 20px;
}
.el-input {
  padding-top: 40px;
  width: 500px;
}
.el-menu {
  margin-top: 30px;
  background-color: rgba(130, 164, 238, 0.253);
  height: 60px;
}
.el-menu-item {
  padding: 0 50px;
  font-size: 16px;
}
</style>
