<template>
  <div id="articleControl">
    <el-main>
      <el-table :data="article">
        <el-table-column prop="id" label="编号" width="140">
        </el-table-column>
        <el-table-column prop="title" label="标题" width="120">
        </el-table-column>
        <el-table-column prop="con" label="内容概要">
        </el-table-column>
        <el-table-column prop="author" label="作者">
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script>
import Cookies from "js-cookie";

export default {
  name: "articleControl",
  data(){
    return {
      article: []
    }
  },
  created() {
    this.$http.post('/api/article/showAllArticle').then((response)=>{this.article = response.data})
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
