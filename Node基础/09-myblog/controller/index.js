// 导入数据库操作对象
const connection = require('../db/db')
// 源代码说明：首页的业务逻辑
const showIndexPage = (req, res) => {
    let pageSize = 2;
    let pageNow = Number(req.query.page)||1;
    // 定义sql 
    let sql =
        `
    select article.id,article.title,article.ctime,user.nickname
    from article left join 
    user 
    on article.authorId = user.id order by article.ctime desc
    limit ${pageNow-1},${pageSize};
    select count(*) as count from article 
    `
    // 处理sql
    connection.query(sql, (error, result) => {
        if (error) {
            res.render('index.ejs', { user: req.session.user, islogin: req.session.islogin,data:[] })
        } else {
            // 渲染对应的模版
            let totalPage = Math.ceil(result[1][0].count/pageSize);
            res.render('index.ejs', { user: req.session.user, islogin: req.session.islogin,data:result[0],totalPage:totalPage,pageNow:pageNow});
        }
    });


};

// 暴露
module.exports = {
    showIndexPage
}