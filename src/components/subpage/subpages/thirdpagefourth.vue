<template>
  <div class="main">
    <div class="maths">
      <div class="title">法学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">国际经贸规则</div>
        <div class="item_name">司法警察学</div>
        <div class="item_name">法学</div>
        <div class="item_name">知识产权</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">政治学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">政治学与行政学</div>
        <div class="item_name">国际政治</div>
        <div class="item_name">外交学</div>
        <div class="item_name">国际事务与国际关系</div>
        <div class="item_name">政治学、经济学与哲学</div>
        <div class="item_name">国际组织与全球治理</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">社会学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">社会学</div>
        <div class="item_name">社会工作</div>
        <div class="item_name">人类学</div>
        <div class="item_name">女性学</div>
        <div class="item_name">家政学</div>
        <div class="item_name">老年学</div>
        <div class="item_name">社会政策</div>
      </div>
    </div>
        <div class="maths">
      <div class="title">马克思主义理论类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">科学社会主义</div>
        <div class="item_name">中国共产党历史</div>
        <div class="item_name">思想政治教育</div>
        <div class="item_name">马克思主义理论</div>
      </div>
    </div>
            <div class="maths">
      <div class="title">公安学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">治安学</div>
        <div class="item_name">侦查学</div>
        <div class="item_name">边防管理</div>
        <div class="item_name">禁毒学</div>
        <div class="item_name">警犬技术</div>
        <div class="item_name">经济犯罪侦查</div>
        <div class="item_name">边防指挥</div>
        <div class="item_name">消防指挥</div>
        <div class="item_name">公安情报学</div>
        <div class="item_name">犯罪学</div>
        <div class="item_name">公安管理学</div>
        <div class="item_name">涉外警务</div>
        <div class="item_name">国内安全保卫</div>
        <div class="item_name">警务指挥与战术</div>
        <div class="item_name">技术侦查学</div>
        <div class="item_name">海警执法</div>
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
