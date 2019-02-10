// 代码文件说明：处理业务逻辑
// 导入数据库操作对对象
const connection = require('./db.js');
// 暴露业务处理对象
module.exports = {
    // 获取所有英雄
    getAllhero: (req, res) => {
        // 定义sql
        let sql = 'select * from heros';
        // 查询处理
        connection.query(sql, (error, result) => {
            if (error) return res.send({ status: 500, msg: error.message, data: null });
            return res.send({ status: 200, data: result });
        });
    },
    // 添加英雄
    addHero: (req, res) => {
        // 定义mysql
        let sql = 'insert into heros set ?';
        let hero = req.body;
        // 创建日期对象，格式化日期
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth().toString().padStart(2, '0');
        let day = date.getDate().toString().padStart(2, '0');
        let hours = date.getHours().toString().padStart(2, '0');
        let minutes = date.getMinutes().toString().padStart(2, '0');
        let seconds = date.getSeconds().toString().padStart(2, '0');
        hero.ctime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        // 处理sql
        connection.query(sql, hero, (error) => {
            // 注意：在post请求中，不要再使用res的send方法，否则会出现错误Rethrow non-MySQL errors
            if (error != null) {
                console.log(error.message);
            }

        });
        res.send('ok');
    },
    // 根据id获取英雄
    getHero: (req, res) => {
        // 定义sql
        let sql = 'select * from heros where id=?';
        // 获取用户传入的id值
        let id = req.params.id;
        // 处理sql
        connection.query(sql, id, (error, result) => {
            if (error) {
                return res.send({ status: 500, mes: error.message, data: null });
            } else {
                return res.send({ status: 200, mes: 'success', data: result });
            }
        })
    },
    // 根据id更新英雄
    updateHero: (req, res) => {
        // 获取id值
        let id = req.params.id;
        // 获取用户更新的数据
        let obj = req.body;
        // 定义sql语句
        let sql = 'update heros set ? where id = ?';
        // 处理sql
        connection.query(sql, [obj, id], (error) => {
            if (error) {
                return error.message;
            } else {
                res.send({ status: 200, msg: 'ok' });
            }
        })
    },
    // 根据id删除英雄
    deleteHero: (req, res) => {
        // 获取id值
        let id = req.params.id;
        // 定义sql
        let sql = 'update heros set isdel=1 where id=?';
        // 处理sql
        connection.query(sql, id, (error) => {
            if (error) {
                return res.send({ status: 500, msg: error.message });
            } else {
                return res.send({ status: 200, mes: 'ok' });
            }
        });
    }

}