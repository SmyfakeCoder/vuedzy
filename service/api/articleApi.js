var models = require('../db/db');  //导入db.js文件
var express = require('express'); //导入express插件
var router = express.Router();   //导入路由中间件
var mysql = require('mysql');    //导入mysql插件
//在ES6中，js变量名变量名是由数字，英文字母，英文下划线，$符组成的。
//开始必须是英文字母或英文下划线或$符，后续可跟字母，数字，下划线，$符
var $sql = require('../db/sqlMap');  //导入sqlMap.js文件
// 连接MySQL数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function(res, ret) {
  if(typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    });
  } else {
    //把ret结果作为body存入res后发送一个json响应。
    res.json(ret);
  }
};
//router的post方法的回调函数的第一个参数req是传入的参数
//第二个参数res是返回值
//router处理“添加商品”的http post请求。完整http post请求地址为：’/api/good/addGood’。

router.post('/showAllArticle',(req,res)=>{
  var sql = $sql.article.showAll;
  console.log(sql);
  conn.query(sql,null,function (err,result){
    if(err){
      console.log(err);
    }
    jsonWrite(res,result);
  })
})
router.post('/delete',(req,res)=>{
  var sql = $sql.article.delete;
  console.log(sql);
  var params = req.body;
  console.log(params);
  conn.query(sql,[params.id],function (err,result){
    if(err){
      console.log(err);
    }
    jsonWrite(res,result);
  })
})
router.post('/add',(req,res)=>{
  var sql = $sql.article.add;
  console.log(sql);
  var params = req.body;
  console.log(params);
  conn.query(sql,[params.title,params.content,params.author],function (err,result){
    if(err){
      console.log(err);
    }
    jsonWrite(res,result);
  })
});
module.exports = router;
