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
          <div style="border-bottom: 1px solid rgb(236, 236, 236)">
            <el-checkbox-group v-model="checkedCities"
                               @change="handleCheckedCitiesChange">
              <el-checkbox-button :indeterminate="isIndeterminate"
                                  v-model="checkAll"
                                  @change="handleCheckAllChange">全选</el-checkbox-button>
              <el-checkbox-button v-for="city in cities"
                                  :label="city"
                                  :key="city">{{city}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div id="option1">
        <div>
          <div class="filter-view-left-text">
            <div class="filter-view-left-text"
                 style="margin-left:3px">办学性质:</div>
          </div>
          <div style="border-bottom: 1px solid rgb(236, 236, 236)">
            <el-checkbox-group v-model="checkedCities"
                               @change="handleCheckedCitiesChange1">
              <el-checkbox-button :indeterminate="isIndeterminate1"
                                  v-model="checkAll"
                                  @change="handleCheckAllChange1">全选</el-checkbox-button>
              <el-checkbox-button v-for="city1 in cities1"
                                  :label="city1"
                                  :key="city1">{{city1}}</el-checkbox-button>
            </el-checkbox-group>
          </div>
        </div>
      </div>
    </div>
    <div id="listview">
      <el-tabs type="border-card">
        <el-tab-pane label="知名度">
          <div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.pku.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/cd8dcad9425445aea961900aa67922e9.png"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">北京大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：81</div>
                    <div class="school-item-content-text1">硕士点数：312</div>
                    <div class="school-item-content-text1">博士点个数：259</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="http://gkcx.eol.cn/school/31?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.tsinghua.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491462956668.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">清华大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：37</div>
                    <div class="school-item-content-text1">硕士点数：271</div>
                    <div class="school-item-content-text1">博士点个数：253</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="http://kaoshi.edu.sina.com.cn/college/c/score/10003.shtml">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.sjtu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491462990767.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">上海交通大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：77</div>
                    <div class="school-item-content-text1">硕士点数：79</div>
                    <div class="school-item-content-text1">博士点个数：41</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/125?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.fudan.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/logo_1571276757812.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">复旦大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：30</div>
                    <div class="school-item-content-text1">硕士点数：68</div>
                    <div class="school-item-content-text1">博士点个数：33</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/132?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.ruc.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463128362.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">中国人民大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：26</div>
                    <div class="school-item-content-text1">硕士点数：221</div>
                    <div class="school-item-content-text1">博士点个数：145</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/46?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.zju.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/logo_1493612155913.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">浙江大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：35</div>
                    <div class="school-item-content-text1">硕士点数：25</div>
                    <div class="school-item-content-text1">博士点个数：63</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/114?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.nju.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463162635.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">南京大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：21</div>
                    <div class="school-item-content-text1">硕士点数：50</div>
                    <div class="school-item-content-text1">博士点个数：44</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="http://kaoshi.edu.sina.com.cn/college/c/score/10003.shtml">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.nankai.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463403038.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">南开大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：42</div>
                    <div class="school-item-content-text1">硕士点数：49</div>
                    <div class="school-item-content-text1">博士点个数：32</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/59?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.whu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463059890.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">武汉大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：22</div>
                    <div class="school-item-content-text1">硕士点数：58</div>
                    <div class="school-item-content-text1">博士点个数：44</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/42?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.sysu.edu.cn/cn/index.htm">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463231251.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">中山大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：25</div>
                    <div class="school-item-content-text1">硕士点数：53</div>
                    <div class="school-item-content-text1">博士点个数：43</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/104?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.tju.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463677842.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">天津大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：40</div>
                    <div class="school-item-content-text1">硕士点数：37</div>
                    <div class="school-item-content-text1">博士点个数：27</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/60?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.seu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463746522.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">东南大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：27</div>
                    <div class="school-item-content-text1">硕士点数：49</div>
                    <div class="school-item-content-text1">博士点个数：30</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/109?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.xjtu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463505778.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">西安交通大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：198</div>
                    <div class="school-item-content-text1">硕士点数：242</div>
                    <div class="school-item-content-text1">博士点个数：154</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/330?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.csu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463471648.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">中南大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：79</div>
                    <div class="school-item-content-text1">硕士点数：45</div>
                    <div class="school-item-content-text1">博士点个数：30</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/123?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.cqu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491464020846.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">重庆大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：60</div>
                    <div class="school-item-content-text1">硕士点数：236</div>
                    <div class="school-item-content-text1">博士点个数：121</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/119?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.sdu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463437208.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">山东大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：86</div>
                    <div class="school-item-content-text1">硕士点数：83</div>
                    <div class="school-item-content-text1">博士点个数：44</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/126?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.jlu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463196891.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">吉林大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：19</div>
                    <div class="school-item-content-text1">硕士点数：347</div>
                    <div class="school-item-content-text1">博士点个数：288</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/122?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.neu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491464054889.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">东北大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：7</div>
                    <div class="school-item-content-text1">硕士点数：189</div>
                    <div class="school-item-content-text1">博士点个数：100</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/134?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.lzu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491464192169.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">兰州大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：40</div>
                    <div class="school-item-content-text1">硕士点数：44</div>
                    <div class="school-item-content-text1">博士点个数：19</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/97?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.szu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491466299771.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">深圳大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：广东省教育局</div>
                    <div class="school-item-content-text1">重点学科数：16</div>
                    <div class="school-item-content-text1">硕士点数：154</div>
                    <div class="school-item-content-text1">博士点个数：9</div>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/284?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="博士点">
          <div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.whu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463059890.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">武汉大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：22</div>
                    <div class="school-item-content-text1">硕士点数：58</div>
                    <div class="school-item-content-text1">博士点个数：44</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/42?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.sysu.edu.cn/cn/index.htm">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463231251.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">中山大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：25</div>
                    <div class="school-item-content-text1">硕士点数：53</div>
                    <div class="school-item-content-text1">博士点个数：43</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/104?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.tju.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463677842.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">天津大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：40</div>
                    <div class="school-item-content-text1">硕士点数：37</div>
                    <div class="school-item-content-text1">博士点个数：27</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/60?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.seu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463746522.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">东南大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：27</div>
                    <div class="school-item-content-text1">硕士点数：49</div>
                    <div class="school-item-content-text1">博士点个数：30</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/109?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.xjtu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463505778.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">西安交通大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：198</div>
                    <div class="school-item-content-text1">硕士点数：242</div>
                    <div class="school-item-content-text1">博士点个数：154</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/330?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.csu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463471648.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">中南大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：79</div>
                    <div class="school-item-content-text1">硕士点数：45</div>
                    <div class="school-item-content-text1">博士点个数：30</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/123?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
                        <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.pku.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/cd8dcad9425445aea961900aa67922e9.png"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">北京大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：81</div>
                    <div class="school-item-content-text1">硕士点数：312</div>
                    <div class="school-item-content-text1">博士点个数：259</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="http://gkcx.eol.cn/school/31?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.tsinghua.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491462956668.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">清华大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：37</div>
                    <div class="school-item-content-text1">硕士点数：271</div>
                    <div class="school-item-content-text1">博士点个数：253</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="http://kaoshi.edu.sina.com.cn/college/c/score/10003.shtml">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.sjtu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491462990767.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">上海交通大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：77</div>
                    <div class="school-item-content-text1">硕士点数：79</div>
                    <div class="school-item-content-text1">博士点个数：41</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/125?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.fudan.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/logo_1571276757812.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">复旦大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：30</div>
                    <div class="school-item-content-text1">硕士点数：68</div>
                    <div class="school-item-content-text1">博士点个数：33</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/132?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.ruc.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463128362.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">中国人民大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：26</div>
                    <div class="school-item-content-text1">硕士点数：221</div>
                    <div class="school-item-content-text1">博士点个数：145</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/46?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.zju.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/logo_1493612155913.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">浙江大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：35</div>
                    <div class="school-item-content-text1">硕士点数：25</div>
                    <div class="school-item-content-text1">博士点个数：63</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/114?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.nju.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463162635.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">南京大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：21</div>
                    <div class="school-item-content-text1">硕士点数：50</div>
                    <div class="school-item-content-text1">博士点个数：44</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="http://kaoshi.edu.sina.com.cn/college/c/score/10003.shtml">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.nankai.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463403038.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">南开大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：42</div>
                    <div class="school-item-content-text1">硕士点数：49</div>
                    <div class="school-item-content-text1">博士点个数：32</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/59?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
                        <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.cqu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491464020846.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">重庆大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：60</div>
                    <div class="school-item-content-text1">硕士点数：236</div>
                    <div class="school-item-content-text1">博士点个数：121</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/119?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.sdu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463437208.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">山东大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：86</div>
                    <div class="school-item-content-text1">硕士点数：83</div>
                    <div class="school-item-content-text1">博士点个数：44</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/126?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.jlu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463196891.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">吉林大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：19</div>
                    <div class="school-item-content-text1">硕士点数：347</div>
                    <div class="school-item-content-text1">博士点个数：288</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/122?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.neu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491464054889.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">东北大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：7</div>
                    <div class="school-item-content-text1">硕士点数：189</div>
                    <div class="school-item-content-text1">博士点个数：100</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/134?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.lzu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491464192169.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">兰州大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：40</div>
                    <div class="school-item-content-text1">硕士点数：44</div>
                    <div class="school-item-content-text1">博士点个数：19</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/97?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.szu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491466299771.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">深圳大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：广东省教育局</div>
                    <div class="school-item-content-text1">重点学科数：16</div>
                    <div class="school-item-content-text1">硕士点数：154</div>
                    <div class="school-item-content-text1">博士点个数：9</div>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/284?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="硕士点">
          <div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.pku.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/cd8dcad9425445aea961900aa67922e9.png"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">北京大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：81</div>
                    <div class="school-item-content-text1">硕士点数：312</div>
                    <div class="school-item-content-text1">博士点个数：259</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="http://gkcx.eol.cn/school/31?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.tsinghua.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491462956668.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">清华大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：37</div>
                    <div class="school-item-content-text1">硕士点数：271</div>
                    <div class="school-item-content-text1">博士点个数：253</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="http://kaoshi.edu.sina.com.cn/college/c/score/10003.shtml">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.sjtu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491462990767.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">上海交通大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：77</div>
                    <div class="school-item-content-text1">硕士点数：79</div>
                    <div class="school-item-content-text1">博士点个数：41</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/125?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.fudan.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/logo_1571276757812.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">复旦大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：30</div>
                    <div class="school-item-content-text1">硕士点数：68</div>
                    <div class="school-item-content-text1">博士点个数：33</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/132?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.ruc.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463128362.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">中国人民大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：26</div>
                    <div class="school-item-content-text1">硕士点数：221</div>
                    <div class="school-item-content-text1">博士点个数：145</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/46?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.sdu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463437208.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">山东大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：86</div>
                    <div class="school-item-content-text1">硕士点数：83</div>
                    <div class="school-item-content-text1">博士点个数：44</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/126?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.jlu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463196891.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">吉林大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：19</div>
                    <div class="school-item-content-text1">硕士点数：347</div>
                    <div class="school-item-content-text1">博士点个数：288</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/122?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.neu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491464054889.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">东北大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：7</div>
                    <div class="school-item-content-text1">硕士点数：189</div>
                    <div class="school-item-content-text1">博士点个数：100</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/134?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.lzu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491464192169.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">兰州大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：40</div>
                    <div class="school-item-content-text1">硕士点数：44</div>
                    <div class="school-item-content-text1">博士点个数：19</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/97?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.szu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491466299771.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">深圳大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：广东省教育局</div>
                    <div class="school-item-content-text1">重点学科数：16</div>
                    <div class="school-item-content-text1">硕士点数：154</div>
                    <div class="school-item-content-text1">博士点个数：9</div>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/284?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
                        <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.zju.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/logo_1493612155913.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">浙江大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：35</div>
                    <div class="school-item-content-text1">硕士点数：25</div>
                    <div class="school-item-content-text1">博士点个数：63</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/114?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.nju.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463162635.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">南京大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：21</div>
                    <div class="school-item-content-text1">硕士点数：50</div>
                    <div class="school-item-content-text1">博士点个数：44</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="http://kaoshi.edu.sina.com.cn/college/c/score/10003.shtml">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.nankai.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463403038.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">南开大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：42</div>
                    <div class="school-item-content-text1">硕士点数：49</div>
                    <div class="school-item-content-text1">博士点个数：32</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/59?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.whu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463059890.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">武汉大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：22</div>
                    <div class="school-item-content-text1">硕士点数：58</div>
                    <div class="school-item-content-text1">博士点个数：44</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/42?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.sysu.edu.cn/cn/index.htm">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463231251.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">中山大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：25</div>
                    <div class="school-item-content-text1">硕士点数：53</div>
                    <div class="school-item-content-text1">博士点个数：43</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/104?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.tju.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463677842.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">天津大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：40</div>
                    <div class="school-item-content-text1">硕士点数：37</div>
                    <div class="school-item-content-text1">博士点个数：27</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/60?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.seu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463746522.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">东南大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：27</div>
                    <div class="school-item-content-text1">硕士点数：49</div>
                    <div class="school-item-content-text1">博士点个数：30</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/109?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="http://www.xjtu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463505778.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">西安交通大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：198</div>
                    <div class="school-item-content-text1">硕士点数：242</div>
                    <div class="school-item-content-text1">博士点个数：154</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/330?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.csu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463471648.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">中南大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：79</div>
                    <div class="school-item-content-text1">硕士点数：45</div>
                    <div class="school-item-content-text1">博士点个数：30</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/123?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.cqu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491464020846.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">重庆大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：60</div>
                    <div class="school-item-content-text1">硕士点数：236</div>
                    <div class="school-item-content-text1">博士点个数：121</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/119?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
            <div class="school-list-view">
              <div class="school-item">
                <div class="school-item-left"
                     style="width:120px;height:164px">
                  <div class="image"
                       style="margin:30px 20px 30px 0px">
                    <a href="https://www.sdu.edu.cn/">
                      <img class="el-image"
                           src="https://www.shengx100.com/image/gx/logo/gxlogo_1491463437208.jpg"
                           style="object-fit:contain;width:100px;height:100px;">
                    </a>
                  </div>
                </div>
                <div class="school-item-content">
                  <div class="school-item-content-text">山东大学</div>
                  <div class="school-item-content-main">
                    <div class="school-item-content-text1">教育行政主管部门：教育部</div>
                    <div class="school-item-content-text1">重点学科数：86</div>
                    <div class="school-item-content-text1">硕士点数：83</div>
                    <div class="school-item-content-text1">博士点个数：44</div>
                  </div>
                  <div class="tag">
                    <el-tag type="warning">985</el-tag>
                    <el-tag type="warning">211</el-tag>
                    <el-tag type="warning">双一流</el-tag>
                    <el-tag type="warning">教育部直属</el-tag>
                    <el-tag type="warning">研究生院</el-tag>
                  </div>
                </div>
                <a href="https://gkcx.eol.cn/school/126?fromcoop=bdkp">
                  <div class="school-item-right">
                    <el-button type="primary"
                               round>投档线预测
                    </el-button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
const city1Options = ['公办', '民办', '中外合作', '内港合作', '独立学院']
const cityOptions = ['上海', '北京', '广州', '深圳', '天津', '河北', '山西', '内蒙', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '台湾']
export default {
  data () {
    return {
      checkedCities: ['上海'],
      cities: cityOptions,
      cities1: city1Options,
      isIndeterminate: true,
      isIndeterminate1: true
    }
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    },
    handleCheckAllChange1 (val) {
      this.checkedCities = val ? city1Options : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange1 (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities1.length
      this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.cities1.length
    }
  }
}
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
  height: auto;
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
  height: auto;
}
.filter-view-left-text {
  font-size: 20px;
  font-weight: 800;
  margin-bottom: 10px;
  width: 200px;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.el-checkbox-button {
  margin-left: 50px;
  margin-right: 20px;
  margin-top: 20px;
  font-size: 20px;
  float: left;
  border: 1px solid rgba(221, 221, 221, 0.616);
  margin-bottom: 30px;
  font-family: '微软雅黑';
}
.school-list-view {
  border-bottom: 1px solid #ececec;
  cursor: pointer;
  width: 100%;
}
.school-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
}
.school-item-view {
  border-bottom: 1px solid #ececec;
  cursor: pointer;
  display: flex;
}
.school-item-content {
  flex-direction: column;
  margin-left: 20px;
  width: 1100px;
}
.school-item-content-text {
  margin-top: 20px;
  font-family: '微软雅黑';
  font-size: 30px;
  width: 100%;
  text-align: left;
}
.school-item-content-text1 {
  margin-top: 10px;
  font-family: '微软雅黑';
  font-size: 16px;
  text-align: left;
  margin-right: 50px;
  color: grey;
}
.school-item-content-main {
  display: flex;
}
.tag {
  text-align: left;
  margin-top: 20px;
}
.el-tag {
  margin-right: 35px;
  font-size: 15px;
}
.el-button {
  margin-top: 50px;
}
</style>
