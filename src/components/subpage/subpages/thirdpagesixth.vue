<template>
  <div class="main">
    <div class="maths">
      <div class="title">中国语言文学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">汉语言文学</div>
        <div class="item_name">汉语言</div>
        <div class="item_name">汉语国际教育</div>
        <div class="item_name">中国少数民族语言文学</div>
        <div class="item_name">古典文献学</div>
        <div class="item_name">应用语言学</div>
        <div class="item_name">秘书学</div>
        <div class="item_name">中国语言与文化</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">外国语言文学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">英语</div>
        <div class="item_name">俄语</div>
        <div class="item_name">德语</div>
        <div class="item_name">法语</div>
        <div class="item_name">西班牙语</div>
        <div class="item_name">阿拉伯语</div>
        <div class="item_name">日语</div>
        <div class="item_name">朝鲜语</div>
        <div class="item_name">语言学</div>
        <div class="item_name">爪哇语</div>
        <div class="item_name">希腊语</div>
        <div class="item_name">波兰语</div>
        <div class="item_name">拉丁语</div>
        <div class="item_name">乌克兰语</div>
        <div class="item_name">匈牙利语</div>
        <div class="item_name">意大利语</div>
        <div class="item_name">泰语</div>
        <div class="item_name">瑞典语</div>
        <div class="item_name">葡萄牙语</div>
        <div class="item_name">孟加拉语</div>
        <div class="item_name">世界语</div>
        <div class="item_name">商务英语</div>
        <div class="item_name">丹麦语</div>
        <div class="item_name">哈萨克语</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">新闻传播学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">新闻学</div>
        <div class="item_name">广播电视学</div>
        <div class="item_name">广告学</div>
        <div class="item_name">传播学</div>
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
