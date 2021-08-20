<template>
  <div class="main">
    <div class="maths">
      <div class="title">基础医学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">生物医学</div>
        <div class="item_name">基础医学</div>
        <div class="item_name">生物医学科学</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">临床医学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">临床医学</div>
        <div class="item_name">麻醉学</div>
        <div class="item_name">医学影像学</div>
        <div class="item_name">眼视光医学</div>
        <div class="item_name">精神医学</div>
        <div class="item_name">放射医学</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">口腔医学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">口腔医学</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">公共卫生与预防医学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">预防医学</div>
        <div class="item_name">食品卫生与营养学</div>
        <div class="item_name">妇幼保健医学</div>
        <div class="item_name">卫生监督</div>
        <div class="item_name">全球健康学</div>
        <div class="item_name">运动与公共健康</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">中医学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">中医学</div>
        <div class="item_name">针灸推拿学</div>
        <div class="item_name">藏医学</div>
        <div class="item_name">蒙医学</div>
        <div class="item_name">维医学</div>
        <div class="item_name">壮医学</div>
        <div class="item_name">哈医学</div>
        <div class="item_name">傣医学</div>
        <div class="item_name">回医学</div>
        <div class="item_name">中医养生学</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">中西医结合类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">中西医临床医学</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">法医学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">法医学</div>
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
