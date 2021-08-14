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
          <div class="filter-view-left-text">
            <div class="filter-view-left-text"
                 style="margin-left:3px">院校地区：</div>
          </div>
          <div style="border-bottom: 1px solid rgb(236, 236, 236)">
            <el-checkbox-group v-model="checkedCities"
                               @change="handleCheckedCitiesChange">
              <el-checkbox-button :indeterminate="isIndeterminate"
                                  v-model="checkAll"
                                  @change="handleCheckAllChange">全选</el-checkbox-button>
              <el-checkbox-button v-for="city in cities"
                                  :label="city"
                                  :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div id="option1">
        <div>
          <div class="filter-view-left-text">
            <div class="filter-view-left-text"
                 style="margin-left:3px">办学性质:</div>
          </div>
          <div style="border-bottom: 1px solid rgb(236, 236, 236)">
            <el-checkbox-group v-model="checkedCities"
                               @change="handleCheckedCitiesChange1">
              <el-checkbox-button :indeterminate="isIndeterminate1"
                                  v-model="checkAll"
                                  @change="handleCheckAllChange1">全选</el-checkbox-button>
              <el-checkbox-button v-for="city1 in cities1"
                                  :label="city1"
                                  :key="city1">{{city1}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
        </div>
      </div>
    </div>
    <div id="listview">
      <el-tabs type="border-card">
        <el-tab-pane label="知名度">
        </el-tab-pane>
        <el-tab-pane label="博士点">
        </el-tab-pane>
        <el-tab-pane label="硕士点">
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
const city1Options = ['公办', '民办', '中外合作', '内港合作', '独立学院']
const cityOptions = ['上海', '北京', '广州', '深圳', '天津', '河北', '山西', '内蒙', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '台湾']
export default {
  data () {
    return {
      checkedCities: ['上海'],
      cities: cityOptions,
      cities1: city1Options,
      isIndeterminate: true,
      isIndeterminate1: true
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
    handleCheckAllChange1 (val) {
      this.checkedCities = val ? city1Options : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange1 (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities1.length
      this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.cities1.length
    }
  }
}
</script>

<style scoped>
#daohang {
  padding-top: 35px;
  padding-left: 40px;
}
#search {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
}
#option {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 30px;
  background-color: rgba(255, 250, 250, 0.562);
  height: auto;
}
#option1 {
  display: flex;
}
#font {
  float: left;
}
.el-tabs {
  margin-left: 40px;
  margin-right: 40px;
  margin-top: 30px;
  margin-bottom: 60px;
  background-color: rgba(255, 253, 253, 0.829);
  height: 1000px;
}
.filter-view-left-text {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;
  width: 200px;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.el-checkbox-button {
  margin-left: 50px;
  margin-right: 20px;
  margin-top: 20px;
  font-size: 20px;
  float: left;
  border: 1px solid rgba(221, 221, 221, 0.616);
  margin-bottom: 30px;
  font-family: '微软雅黑';
}
</style>
