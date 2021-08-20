<template>
  <div class="main">
    <div class="maths">
      <div class="title">教育学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">教育学</div>
        <div class="item_name">科学教育</div>
        <div class="item_name">人文教育</div>
        <div class="item_name">教育技术学</div>
        <div class="item_name">学前教育</div>
        <div class="item_name">小学教育</div>
        <div class="item_name">特殊教育</div>
        <div class="item_name">华文教育</div>
        <div class="item_name">教育康复学</div>
        <div class="item_name">卫生教育</div>
        <div class="item_name">认知科学与技术</div>
        <div class="item_name">融合教育</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">体育学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">体育教育</div>
        <div class="item_name">运动训练</div>
        <div class="item_name">社会体育指导与管理</div>
        <div class="item_name">武术与民族传统体育</div>
        <div class="item_name">运动人体科学</div>
        <div class="item_name">运动康复</div>
        <div class="item_name">休闲体育</div>
        <div class="item_name">体能训练</div>
        <div class="item_name">冰雪运动</div>
        <div class="item_name">电子竞技运动与管理</div>
        <div class="item_name">智能体育工程</div>
        <div class="item_name">体育旅游</div>
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
