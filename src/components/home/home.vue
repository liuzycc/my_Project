<template>
  <el-container>
    <!-- 这里是头部 -->
    <el-header>
      <div class="left">
        <img src="../../assets/heima.png" alt="">
        <span>电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logOut">退出</el-button>
    </el-header>
    <el-container>
      <!-- 这里是左侧边兰 -->
      <el-aside :width="collapse ? '64px':'200px'">
        <div class="flexible" @click="collapse = !collapse">|||</div>
        <el-menu :collapse-transition="false" :collapse="collapse" unique-opened router default-active="2" background-color="#333744" text-color="#fff" active-text-color="#409eff">
          <el-submenu :index="item.id + ''" v-for="(item) in menuList" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.authName}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id">
                <i class="el-icon-menu"></i>{{subItem.authName}}
                </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 内容区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import mix from './home-mixins.js'
export default {
  mixins: [mix]
}
</script>
<style lang="less" scoped>
.el-header {
  background: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  color: #fff;
  font-size: 22px;
  .el-button {
    width: 70px;
    height: 40px;
  }
  .left {
    display: flex;
    align-items: center;
    font-weight: 700;
    img {
      margin-right: 10px;
    }
  }
}
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #333744;
  user-select: none;
}
.el-main {
  background-color: #eaedf1;
}
.flexible {
  text-align: center;
  line-height: 30px;
  height: 30px;
  color: white;
  background-color: #4a5064;
  box-sizing: border-box;
  cursor: pointer;
}
</style>

