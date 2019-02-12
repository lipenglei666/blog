// 导入日期处理包
const monment = require('moment');
// 导入db
const connection = require('../db/db');
// 导入marked 转换md为html
const marked = require('marked');
// 现实发表文章页面
const showAddArticle = (req,res)=>{
    if(req.session.islogin!=true) {
        return res.redirect('/');
    }
    res.render('./article/add.ejs',{user:req.session.user,islogin:req.session.islogin})
};

// 发表文章
const addArticle = (req,res)=>{
    //  获取用户提交的表单数据
    let params = req.body;
    // 添加时间
    params.ctime = monment().format('YYYY-MM-DD HH:mm:ss');
    // 定义的sql
    let sql = 'insert into article set ?';
    // 处理sql
    connection.query(sql,params,(error,result)=>{
        if(error) {
            return res.send({status:500,msg:error.message});
        }else {
            console.log(result);
            return res.send({status:200,articleId:result.insertId});
        }
    });
    


};

// 显示详情页面
const showArticleInfo = (req,res) => {
    // 获取参数id
    let id = req.params.id;
    // 定义sql
    let sql = 'select * from article where id = ?';
    // 处理sql
    connection.query(sql,id,(error,result)=>{
        if(error) {
            return res.send({status:500,msg:error.message});
        }
        result[0].content = marked(result[0].content);
        return res.render('./article/articleInfo.ejs',{user:req.session.user,islogin:req.session.islogin,data:result[0]});
    });
};

// 显示编辑页面
const edit = (req,res)=>{
    // 如何用户没有登录，则不现实编辑页面
    if(req.session.islogin!=true) {
        res.redirect('/');
    }
    // 获取文章id
    let id = req.params.id;
    // 定义sql查询
    let sql = 'select * from article where id=?';
    // 处理sql
    connection.query(sql,id,(error,result)=>{
        if(error) {
            return res.send({status:500,msg:error.message});
        }
        if(result.length==1) {
            res.render('./article/edit.ejs',{user:req.session.user,islogin:req.session.islogin,data:result[0]})
        }else {
            res.redirect('/');
        }
        
    });
};

// 保存页面
const save = (req,res)=>{
    // 获取页面提交的数据
    let body = req.body;
    // 获取id
    let id = req.params.id;
    // 定义sql
    let sql = 'update article set ? where id=?';
    // 处理sql
    connection.query(sql,[body,id],(error,result)=>{
        if(error) {
            return res.send({status:500,msg:error.message});
        }else {
            console.log(result)
            if(result.affectedRows==1) {
                res.send({status:200});
            }else {
                res.send({status:500,msg:'修改失败'});
            }
        }
        
        
    });
};
module.exports = {
    showAddArticle,
    addArticle,
    showArticleInfo,
    edit,
    save
    
}