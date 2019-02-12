
// 源代码说明：操作用户业务逻辑
// 导入数据库对象
const connection = require('../db/db');
// 导入加密的模块
const bcrypt = require('bcrypt');
// 导入moment模块处理日期
const moment = require('moment');
// 显示注册页面
const showRegisterPage = (req, res) => {
    res.render('./user/register.ejs')
};
// 显示登录页面
const showLoginPage = (req, res) => {
    res.render('./user/login.ejs')
};
// 处理注册
const registerHandler = (req, res) => {
    // 获取请求的参数
    let params = req.body;
    // 添加创建时间
    params.ctime = moment().format('YYYY-MM-DD HH:mm:ss');
    // 检测用户是否存在 
    // 定义sql
    let sql1 = 'select count(*) as count from user where username=?';
    // 查询处理
    connection.query(sql1, params.username, (error, result) => {
        if (error) {
            return res.send({ status: 500, msg: error.message });
        } else {

            if (result[0].count == 0) {
                // 不存在，可以注册
                // 定义sql
                let sql2 = 'insert into user set ?';
                // 定义一个 幂次
                const saltRounds = 10
                // 加密的方法
                bcrypt.hash(params.password, saltRounds, (err, pwdCryped) => {
                    if (err) {
                        return res.send({ status: 500, mas: err.message });
                    } else {
                        params.password = pwdCryped;
                        connection.query(sql2, params, (error, result) => {
                            if (error) {
                                return res.send({ status: 500, msg: error.message });
                            } else {
                                return res.send({ status: 200, msg: '注册成功' });
                            }
                        });
                    }
                });

            } else {
                // 已经存在
                return res.send({ status: 510, msg: '用户名已经存在' });
            }
        }
    });
};

// 处理登录
const loginHandler = (req, res) => {
    // 获取参数
    let params = req.body;
    // 定义sql检测用户名和秘密
    let sql = 'select * from user where username = ?';
    // 处理sql
    connection.query(sql, params.username, (error, result) => {
        if (error) {
            return res.send({ status: 500, msg: error.message })
        } else {
            if (result.length != 1) {
                return res.send({ status: 501, msg: '用户或密码错误' })
            } else {
                console.log(params.password,result[0].password)
                 var isOk = bcrypt.compare(params.password,result[0].password ,(err,isOk)=>{
                    console.log(isOk)
                    if(err) {
                        return res.send({status:500});
                    }else {
                        if(isOk) {
                            req.session.user = result[0];
                            req.session.islogin = true;
                            return res.send({ status: 200, msg: 'success' })
                        }else {
                            return res.send({ status: 501, msg: '密码错误' })
                        }
                    }
                } );
                console.log(isOk);
                
            };
        }


    });


};

const loginOut = (req, res) => {
    // 清除session
    req.session.destroy((error) => {
        // 重定向
        res.redirect('/');
    });
};

// 暴露
module.exports = {
    showLoginPage,
    showRegisterPage,
    loginHandler,
    registerHandler,
    loginOut
}

