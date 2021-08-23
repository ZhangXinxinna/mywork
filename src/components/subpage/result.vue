<template>
  <div class="result">
    <el-card>
    <el-table :data="tableData"
              stripe
              style="width: 100%">
      <el-table-column prop="date"
                       label="学校"
                       width="180">
      </el-table-column>
      <el-table-column prop="name"
                       label="人数"
                       width="180">
      </el-table-column>
      <el-table-column prop="address"
                       label="其它">
      </el-table-column>
    </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        school: '',
        peopledata: '',
        else: ''
      }]
    }
  }
}
</script>
<style scoped>
.el-card{
  margin-top: 100px;
  margin-left:275px;
  width: 1000px;
}
.el-table{
  font-size: 18px;
}
</style>
