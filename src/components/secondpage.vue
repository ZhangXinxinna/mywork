<template>
<div id="secondpage">
  <div id="daohang">
    <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>挑大学</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
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
  <div id="option">
    <div style="height:30px">
    </div>
    <div id="option1">
       <div>
         <p id="font">院校地区：</p>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" style="padding-right:25px">全选</el-checkbox>
          <div style="margin: 15px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
       </div>
    </div>
  </div>
  <div id="listview">
<el-tabs type="border-card">
  <el-tab-pane label="知名度"></el-tab-pane>
  <el-tab-pane label="博士点"></el-tab-pane>
  <el-tab-pane label="硕士点"></el-tab-pane>
</el-tabs>>
  </div>
</div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳', '天津', '河北', '重庆', '安徽', '福建', '广西', '甘肃', '贵州',
  '河南', '海南', '湖北', '湖南', '黑龙江', '吉林', '江苏', '江西', '辽宁', '内蒙古', '宁夏', '青海', '四川', '山东',
  '山西', '陕西', '新疆', '云南', '浙江', '西藏', '台湾', '香港', '澳门']
export default {
  data () {
    return {
      search_data: (''),
      checkedCities: ['上海'],
      cities: cityOptions,
      checkAll: false,
      isIndeterminate: true
    }
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
#daohang{
  padding-top:35px;
  padding-left:40px;
}
#search{
  padding-left:40px;
  padding-right:40px;
  padding-top:30px;
}
#option{
  margin-left:40px;
  margin-right:40px;
  margin-top:30px;
  background-color: rgba(255, 250, 250, 0.562);
  height: 500px;
}
.el-checkbox-group{
  font-size: 20px;
}
.el-checkbox{
  float: left;
  font-size: 35px;
  word-break: normal;
  width: auto;

  white-space: pre-line;
  word-wrap: break-word;
  overflow: hidden;
  line-height: 14px;
}
#font{
  float: left;
}
.el-tabs{
  margin-left:40px;
  margin-right:40px;
  margin-top:30px;
  margin-bottom: 60px;
  background-color: rgba(255, 253, 253, 0.829);
  height: 1000px;
}
</style>
