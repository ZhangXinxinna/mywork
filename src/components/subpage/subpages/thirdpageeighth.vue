<template>
  <div class="main">
    <div class="maths">
      <div class="title">艺术学理论类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">艺术史论</div>
        <div class="item_name">艺术管理</div>
        <div class="item_name">非物质文化遗产保护</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">音乐与舞蹈学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">音乐表演</div>
        <div class="item_name">音乐学</div>
        <div class="item_name">作曲与作曲技术理论</div>
        <div class="item_name">舞蹈表演</div>
        <div class="item_name">舞蹈学</div>
        <div class="item_name">舞蹈编导</div>
        <div class="item_name">舞蹈教育</div>
        <div class="item_name">航空服务艺术与管理</div>
        <div class="item_name">流行音乐</div>
        <div class="item_name">音乐治疗</div>
        <div class="item_name">流行舞蹈</div>
        <div class="item_name">音乐教育</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">戏剧与影视学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">表演</div>
        <div class="item_name">戏剧学</div>
        <div class="item_name">电影学</div>
        <div class="item_name">戏剧影视文学</div>
        <div class="item_name">广播电视编导</div>
        <div class="item_name">戏剧影视导演</div>
        <div class="item_name">戏剧影视美术设计</div>
        <div class="item_name">录音艺术</div>
        <div class="item_name">播音与主持艺术</div>
        <div class="item_name">动画</div>
        <div class="item_name">影视摄影与制作</div>
        <div class="item_name">影视技术</div>
      </div>
    </div>
        <div class="maths">
      <div class="title">美术学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">美术学</div>
        <div class="item_name">绘画</div>
        <div class="item_name">雕塑</div>
        <div class="item_name">摄影</div>
        <div class="item_name">书法学</div>
        <div class="item_name">中国画</div>
        <div class="item_name">实验艺术</div>
        <div class="item_name">跨媒体艺术</div>
        <div class="item_name">文物保护与修复</div>
        <div class="item_name">漫画</div>
        <div class="item_name">纤维艺术</div>
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
