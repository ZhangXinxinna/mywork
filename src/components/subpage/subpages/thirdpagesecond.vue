<template>
  <div class="main">
    <div class="maths">
      <div class="title">力学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">理论与应用力学</div>
        <div class="item_name">工程力学</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">机械类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">机械工程</div>
        <div class="item_name">机械设计制造及其自动化</div>
        <div class="item_name">材料成型及控制工程</div>
        <div class="item_name">机械电子工程</div>
        <div class="item_name">工业设计</div>
        <div class="item_name">过程装备与控制工程</div>
        <div class="item_name">车辆工程</div>
        <div class="item_name">机械工艺技术</div>
        <div class="item_name">微电子系统工程</div>
        <div class="item_name">新能源汽车工程</div>
        <div class="item_name">智能交互设计</div>
        <div class="item_name">放生科学与工程</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">仪器学类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">测控技术与仪器</div>
        <div class="item_name">精密仪器</div>
        <div class="item_name">智能感知工程</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">材料类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">材料科学与工程</div>
        <div class="item_name">材料物理</div>
        <div class="item_name">材料化学</div>
        <div class="item_name">冶金工程</div>
        <div class="item_name">金属材料工程</div>
        <div class="item_name">无机非金属材料工程</div>
        <div class="item_name">高分子材料与工程</div>
        <div class="item_name">复合材料与工程</div>
        <div class="item_name">智能材料与结构</div>
        <div class="item_name">功能材料</div>
        <div class="item_name">纳米材料与技术</div>
        <div class="item_name">焊接技术与工程</div>
        <div class="item_name">宝石及材料工艺学</div>
        <div class="item_name">粉体材料科学与工程</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">自动化类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">自动化</div>
        <div class="item_name">机器人工程</div>
        <div class="item_name">邮政工程</div>
        <div class="item_name">工业智能</div>
        <div class="item_name">轨道交通信号与控制</div>
      </div>
    </div>
    <div class="maths">
      <div class="title">计算机类</div>
      <el-divider></el-divider>
      <div class="item">
        <div class="item_name">计算机科学与技术</div>
        <div class="item_name">软件工程</div>
        <div class="item_name">网络工程</div>
        <div class="item_name">信息安全</div>
        <div class="item_name">物联网工程</div>
        <div class="item_name">数字媒体技术</div>
        <div class="item_name">数据科学与大数据技术</div>
        <div class="item_name">虚拟现实技术</div>
        <div class="item_name">电子与计算机工程</div>
        <div class="item_name">电影制作</div>
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
