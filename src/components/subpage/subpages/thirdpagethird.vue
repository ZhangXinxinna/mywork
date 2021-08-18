<template>
  <div class="main">
    <div class="maths">
      <div class="title">数学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">数学与应用数学</div>
        <div class="item_name">信息技术与计算科学</div>
        <div class="item_name">数理基础科学</div>
        <div class="item_name">数据计算与应用</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">物理学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">物理学</div>
        <div class="item_name">应用物理学</div>
        <div class="item_name">声学</div>
        <div class="item_name">核物理</div>
        <div class="item_name">系统科学与工程</div>
        <div class="item_name">量子信息科学</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">天文学类类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">天文学</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.main {
  margin-left: 30px;
  margin-right: 30px;
}
.maths {
  padding-top: 20px;
  padding-bottom: 20px;
}
.title {
  font-size: 20px;
  font-weight: 1000;
  color: rgb(20, 134, 241);
  float: left;
}
.el-divider {
  margin-top: 5px;
  background-color: rgb(20, 134, 241);
  float: left;
  width: 100%;
}
.item {
  display: flex;
  width: 100%;
  margin-left: 25px;
  margin-right: 25;
}
.item_name {
  margin-left: 35px;
  font-size: 16px;
  font-weight: 200;
}
</style>
