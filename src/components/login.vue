<template>
  <div class="login-container">
    <div class="avatar">
      <img src="../assets/logo.png" alt="">
    </div>
    <el-form ref="loginform" :rules="rulesform" :model="loginform">
      <el-form-item prop="username">
        <el-input prefix-icon="el-icon-edit" v-model="loginform.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" prefix-icon="el-icon-edit" v-model="loginform.password"></el-input>
      </el-form-item>
      <el-form-item class="btn">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="info" @click="resset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import mix from './login-mixins.js'
export default {
  mixins: [mix]
}
</script>
<style lang="less" scoped>
.login-container {
  width: 450px;
  height: 304px;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar {
    width: 148px;
    height: 148px;
    border-radius: 50%;
    padding: 7px;
    background-color: #eee;
    position: absolute;
    left: 50%;
    top: -25%;
    transform: translateX(-50%);
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: 0 0 10;
    border: 10px solid #fff;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.el-form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
.btn {
  display: flex;
  justify-content: flex-end;
}
</style>