<template>
  <div>
<el-container style="height: 500px; border: 1px solid #eee">
<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
  <el-menu :default-openeds="['1', '3']">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-message"></i>后台管理</template>
      <el-menu-item-group>
        <el-menu-item index="1-1" @click="viewUser()">用户管理</el-menu-item>
        <el-menu-item index="1-2" @click="viewArticle()">文章管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</el-aside>

<el-container>

  <el-header style="text-align: right; font-size: 12px">
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <button @click="add()">新增</button>
        <button>删除</button>
      </el-dropdown-menu>
    </el-dropdown>
    <span>{{curUser}}</span>
  </el-header>
<mainpage></mainpage>
<userControl v-show="userShow"></userControl>
  <articleControl v-show="artShow"></articleControl>
  <addArticle v-show="addart" v-on:hideAddArticle="hideAddA"></addArticle>
</el-container>
</el-container>
  </div>
</template>
<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
import Cookies from "js-cookie";
import userControl from "./userControl";
import articleControl from "./articleControl";
import addArticle from "./addArticle";
import mainpage from "./mainpage";
export default {
  data() {
    return {
      artShow : false,
      userShow: false,
      curUser: Cookies.get('name'),
      nowin: '',
      addart: false,
      adduser:false,
    }
  },
  components:{
      userControl,articleControl,addArticle,mainpage
  },
  created() {
    this.$http.post('/api/user/testSql').then((response)=>{this.user = response.data})
    console.log('create');
    console.log(Cookies.get());
    console.log(this.isEmptyObject(Cookies.get()))
    if(this.isEmptyObject(Cookies.get())) {
      this.$router.push('/error1');
    }
  },
  methods: {
    hideAddA(e){
      this.addart=e;
    },
    isEmptyObject(obj){
      for(var item in obj){
        return false
      }
      {
        return true
      }
    },
    viewUser(){
      this.artShow=false;
      this.addart = false;
      this.adduser = false;
      this.userShow=true;
      this.nowin = 'user';

    },
    viewArticle(){
      this.userShow = false;
      this.addart = false;
      this.adduser = false;
      this.artShow=true;
      this.nowin = 'article';
      console.log(this.nowin);
    },
    add(){
      console.log('add');
      console.log(this.nowin)
      this.userShow = false;
      this.addart = false;
      this.adduser = false;
      this.artShow=false;
      if(this.nowin=='article'){
        this.addart = true;
      }
    }
  }
};
</script>
