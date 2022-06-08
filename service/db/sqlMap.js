// SQL语句
var sqlMap = {
    // 商品
    user: {
        login: 'select * from users where username=? and password=?',
        showAllUser:' select id,username,role from users'
        // showAllArticle: '' //todo
    },
    article:{
        showAll:'select id,author,title,substr(content,1,10) as con from article',
        delete: 'delete from article where id = ?',
        add: 'insert into article(title, content, author) values (?,?,?);'
    }
}
module.exports = sqlMap;
