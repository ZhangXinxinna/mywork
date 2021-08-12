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
    <div id="main">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      search_data: (''),
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
.el-card {
  height: 200px;
}
#main{
  height: 100px;
  background-color: blue;
}
</style>
