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
    <div id="search">
      <div id="sider">
      </div>
      <el-card class="box-card">
        <div slot="header"
             class="clearfix">
          <span>专业筛选</span>
        </div>
      </el-card>
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
.el-card {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 35px;
  height: auto;
}

</style>
