<template>
  <div id = 'testSql'>
    <table class="table">
      <tr>
        <th>id</th>
        <th>标题</th>
        <th>简要内容</th>
        <th>作者</th>
        <th>操作</th>
      </tr>
      <tbody>
      <tr class="item" v-for="(item,index) in article">
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
        <td>{{item.con}}</td>
        <td>{{item.author}}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      article:[]
    }
  },
  name: "article",
  created(){
    this.$http.post('/api/article/showAllArticle').then((response)=>{console.log(response.data);this.article = response.data})
  },
  methods:{
    del(id){
      this.$http.post('/api/article/delete',{id}).then((response)=>{console.log(response.data);this.article = response.data})
    }
  }

}
</script>

<style scoped>

</style>
