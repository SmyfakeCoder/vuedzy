<template>
  <div id="addArticle">
  <el-main>
    <el-input
      type="textarea"
      autosize
      placeholder="请输入标题"
      v-model="title">
    </el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="content">
    </el-input>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入作者"
      v-model="author">
    </el-input>
    <el-button type="primary" @click="submit()">提交</el-button>
  </el-main>
  </div>
</template>

<script>
export default {
  name: "addArticle",
  data(){
    return {
      title:'',
      content:'',
      author:''
    }
  },
  methods:{
    submit(){
      var title = this.title;
      var content = this.content;
      var author = this.author;
      this.$http.post('/api/article/add',{title,content,author});
      this.$emit('hideAddArticle',false);
    }
  }
}
</script>

<style scoped>

</style>
