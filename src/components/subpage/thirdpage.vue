<template>
  <div id="thirdpage">
    <div id="daohang">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>挑大学</el-breadcrumb-item>
        <el-breadcrumb-item>挑专业
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <el-container>
        <el-aside width="300px">
          <div class="title_title"
               style="line-height: 50px;font-size: 20px;">学科类别</div>
          <div class="title_main">
            <el-link :underline="false" @click="goA">理学</el-link>
            <el-link :underline="false" @click="goB">工学</el-link>
            <el-link :underline="false" @click="goC">经济学</el-link>
            <el-link :underline="false" @click="goD">法学</el-link>
            <el-link :underline="false" @click="goE">教育学</el-link>
            <el-link :underline="false" @click="goF">文学</el-link>
            <el-link :underline="false" @click="goG">医学</el-link>
            <el-link :underline="false" @click="goH">艺术学</el-link>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <div>
              <el-input v-model="search_data"
                        placeholder="请输入搜索内容">
                <template slot="append">
                  <el-button type="primary"
                             icon="el-icon-search">
                  </el-button>
                </template>
              </el-input>
            </div>
            <div class="router">
              <router-view />
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio1: '1'
    }
  },
  methods: {
    goA () {
      this.$router.push({ 'path': '/thirdpage/thirdpagefirst' })
    },
    goB () {
      this.$router.push({ 'path': '/thirdpage/thirdpagesecond' })
    },
    goC () {
      this.$router.push({ 'path': '/thirdpage/thirdpagethird' })
    },
    goD () {
      this.$router.push({ 'path': '/thirdpage/thirdpagefourth' })
    },
    goE () {
      this.$router.push({ 'path': '/thirdpage/thirdpagefifth' })
    },
    goF () {
      this.$router.push({ 'path': '/thirdpage/thirdpagesixth' })
    },
    goG () {
      this.$router.push({ 'path': '/thirdpage/thirdpageseventh' })
    },
    goH () {
      this.$router.push({ 'path': '/thirdpage/thirdpageeighth' })
    }
  }
}
</script>

<style scoped>
#daohang {
  padding-top: 35px;
  padding-left: 40px;
}
.el-aside {
  background-color: #c4d4e6a2;
  color: rgba(182, 199, 255, 0.767);
  margin-left: 40px;
  margin-top: 35px;
  height: auto;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  margin-left: 15px;
  margin-top: 35px;
  margin-right: 40px;
  height: auto;
}
.title_title {
  background-color: rgba(119, 178, 255, 0.637);
  color: rgb(255, 254, 254);
  height: 50px;
  margin: 0;
}
.title_main {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  padding-bottom: 40px;
  flex-direction: column
}
.el-link {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 50px;
  font-size: 20px;
}
.router{
  margin-top: 20px;
}
</style>
