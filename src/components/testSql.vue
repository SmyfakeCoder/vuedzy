<template>
  <div id = 'testSql'>
    <table class="table">
      <tr>
        <th>id</th>
        <th>用户名</th>
        <th>权限</th>

      </tr>
      <tbody>
      <tr class="item" v-for="(item,index) in user">
        <td>{{item.id}}</td>
        <td>{{item.username}}</td>
        <td>{{item.role}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data(){
    return{
      user:[]
    }
  },
  name: "testSql",
  created(){
    this.$http.post('/api/user/testSql').then((response)=>{this.user = response.data})
  }

}
</script>

<style scoped>

</style>
