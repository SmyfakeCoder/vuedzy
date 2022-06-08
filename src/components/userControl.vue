<template>
<div id="userControl">

  <el-main>
    <el-table :data="user">
      <el-table-column prop="id" label="编号" width="140">
      </el-table-column>
      <el-table-column prop="username" label="用户名" width="120">
      </el-table-column>
      <el-table-column prop="role" label="角色">
      </el-table-column>
    </el-table>
  </el-main>
</div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "userControl",
  data(){
    return {
      user: []
    }
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
    isEmptyObject(obj){
      for(var item in obj){
        return false
      }
      {
        return true
      }
    }
  }
}
</script>

<style scoped>

</style>
