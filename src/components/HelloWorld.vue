<template>
<div id='login'>
  <div style="text-align: center ; margin-top: 100px" >
    <img src="../assets/wp.png" text-align="center" width="200" height="200">
  </div>
  <div style="text-align: center ; margin-top: 100px">
    <form>
    <el-input placeholder="请输入用户名" v-model="username"  style="width: 300px"></el-input>
    <el-input placeholder="请输入密码" v-model="password" show-password style="width: 300px"></el-input>
  </form>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  name: "login",
  methods:{
    login(){
      var username = this.username;
      var password = this.password;
      console.log(username);
      console.log(password);
      var re = this.$http.post('/api/user/login',{username,password}).then((response) => {
        console.log(response.body);
          if(response.body.length != 0){
            console.log('登录成功');
            // window.location.href="http://www.baidu.com/";
            this.$router.push('/blog');
            Cookies.set('name','admin');
            console.log(Cookies.get());
          }
        }
      );
      console.log(re);
    }
  }
}
</script>

<style scoped>

</style>
