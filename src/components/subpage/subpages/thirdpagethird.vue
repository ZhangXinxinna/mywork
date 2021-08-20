<template>
  <div class="main">
    <div class="maths">
      <div class="title">经济学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">经济学</div>
        <div class="item_name">经济统计学</div>
        <div class="item_name">国民经济管理</div>
        <div class="item_name">资源与环境经济学</div>
        <div class="item_name">商务经济学</div>
        <div class="item_name">能源经济</div>
        <div class="item_name">劳动经济学</div>
        <div class="item_name">经济工程</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">财政学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">财政学</div>
        <div class="item_name">税收学</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">金融学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">精算学</div>
        <div class="item_name">金融学</div>
        <div class="item_name">金融工程</div>
        <div class="item_name">保险学</div>
        <div class="item_name">投资学</div>
        <div class="item_name">金融数学</div>
      </div>
    </div>
        <div class="maths">
      <div class="title">经济与贸易类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">国际经济与贸易</div>
        <div class="item_name">贸易经济</div>
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
  flex-wrap: wrap;
}
.item_name {
  margin-top: 10px;
  margin-left: 35px;
  font-size: 16px;
  font-weight: 200;
}
</style>
