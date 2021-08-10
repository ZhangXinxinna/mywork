<template>
  <div id="app">
    <div>
      <el-carousel height=360px
                   indicator-position="outside">
        <el-carousel-item v-for="item in 4"
                          :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div id="first">
      <div id="spc1">
        <div id="spc">
          <b>强大的数据分析&nbsp;&nbsp;&nbsp;&nbsp;-------------------></b>
          <el-divider></el-divider>
        </div>
        <div id="spc2">
          <p>以来自官方的千万级数据作支撑，涵盖2000多所高校，</p><br>
          <p> 1300多个专业的详细介绍、历史招生计划和录取信息等，</p><br>
          <p> 真实权威，助考生及家长进行科学决策，让高考没有难报的志愿。</p>
        </div>
      </div>
      <div id="img1">
        <a href="http://www.linxincn.com"
           target="-blank"
           title="源码家园">
          <img src="../../assets/link1.png"></a>
      </div>
      <div id="img2">
        <a href="http://www.linxincn.com"
           target="-blank"
           title="源码家园">
          <img src="../../assets/link2.png"></a>
      </div>
    </div>
    <div id="font">
      <p>百发百中 ● 捷报频传</p>
    </div>
    <div id="font1">
      <p>帮助考生实现低分增值，去喜欢的城市、上心仪的大学、读钟爱的专业！</p>
    </div>
    <el-divider></el-divider>
    <div id="font2">
      <p>使 用 流 程</p>
    </div>
    <div>
      <el-steps :active="1"
                align-center>
        <el-step title="填写成绩信息"
                 icon="el-icon-edit"></el-step>
        <el-step title="筛选学校结果"
                 icon="el-icon-upload"></el-step>
        <el-step title="生成志愿"
                 icon="el-icon-picture"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-image: url('../../assets/1.png');
}
.el-carousel__item:nth-child(2n + 1) {
  background-image: url('../../assets/5.png');
}
#first {
  background-color: rgba(114, 228, 228, 0.137);
  width: 100%;
  height: 500px;
  margin: 0%;
}
#img1 {
  float: right;
  padding-top: 100px;
  padding-right: 150px;
}
#img2 {
  float: right;
  padding-top: 100px;
  padding-right: 100px;
}
#font {
  font-size: 30px;
  font-family: '微软雅黑';
  padding-right: 580px;
}
#font1 {
  font-size: 25px;
  font-family: '微软雅黑';
  color: rgba(128, 128, 128, 0.644);
  padding-bottom: 25px;
}
#font2 {
  padding-top: 25px;
  font-size: 50px;
  font-family: '微软雅黑';
  color: rgba(128, 128, 128, 0.644);
}
.el-steps {
  padding-top: 50px;
  padding-bottom: 300px;
  font-size: 20px;
}
#spc {
  float: left;
  padding-top: 100px;
  padding-bottom: 40px;
  font-size: 35px;
  color: rgba(255, 166, 0, 0.699);
}
#spc1 {
  padding-left: 90px;
  float: left;
  height: 450px;
  padding-bottom: 100px;
}
#spc2 {
  font-size: 17px;
  color: rgba(128, 128, 128, 0.795);
}
</style>
