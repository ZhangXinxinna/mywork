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
          <div class="filter-view-list"
               style="border-bottom: 1px solid rgb(236, 236, 236)">
            <div class="filter-view-item" style="margin-top: 7px;">全部</div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">北京</div>
            </div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">上海</div>
            </div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">天津</div>
            </div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">广州</div>
            </div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">重庆</div>
            </div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">黑龙江</div>
            </div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">浙江</div>
            </div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">四川</div>
            </div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">甘肃</div>
            </div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">新疆</div>
            </div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">西藏</div>
            </div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">青海</div>
            </div>
            <div class="filter-view-item-view">
              <div class="filter-view-item">云南</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="listview">
      <el-tabs type="border-card">
        <el-tab-pane label="知名度"></el-tab-pane>
        <el-tab-pane label="博士点"></el-tab-pane>
        <el-tab-pane label="硕士点"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
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
  height: 500px;
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
  width: 200px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.filter-view-list {
  margin-top: 20px;
  margin-left: 49px;
  margin-right: 40px;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}
.filter-view-item {
  cursor: pointer;
  font-size: 20px;
  border-radius: 5px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 5px 7px;
  background-color: rgb(53, 155, 250);
  color: aliceblue;
  margin-right: 70px;
  margin-bottom: 30px;
}
.filter-view-item-view {
  margin: 5px;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>
