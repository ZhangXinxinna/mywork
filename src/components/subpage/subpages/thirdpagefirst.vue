<template>
  <div id="box">
    <div id="search">
      <el-input v-model="search_data"
                placeholder="请输入搜索内容">
        <template slot="append">
          <el-button type="primary"
                     icon="el-icon-search">
          </el-button>
        </template>
      </el-input>
    </div>
    <div>
      <el-col>
        <el-card shadow="always">
        </el-card>
      </el-col>
    </div>
    <div id="card">
      <template>
        <el-tabs v-model="activeName"
                 type="card"
                 @tab-click="handleClick">
          <el-tab-pane label="用户管理"
                       name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理"
                       name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理"
                       name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿"
                       name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.el-card {
  width: 100%;
  height: 200px;
}
#card {
  height: 200px;
}
</style>
