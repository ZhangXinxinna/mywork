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
        <el-container>
          <el-aside width="200px"></el-aside>
          <el-container>
            <el-main>
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
}
</script>

<style scoped>
#daohang {
  padding-top: 35px;
  padding-left: 40px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  margin-left: 40px;
  margin-top: 35px;
  height: auto;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  margin-left: 15px;
  margin-top: 35px;
  margin-right: 40px;
  height: auto;
}
</style>
