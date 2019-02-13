# 常用SQL语句-MySQL

## 1. 插入数据

### 1.1 插入单条数据

+ 语法

  ```sql
  insert into 表名
  (列名1,列名2...)
  values
  (值1,值2)
  ```

+ SQL语句

  ```sql
  -- 插入数据
  insert into student
  (username,age,gender,cdate)
  values
  ('张三',10,'男',NOW());
  ```


### 1.2 插入多条数据

+ 语法

  ```mysql
  insert into 表名
  (列名1,列名2...)
  values
  (值1,值2),
  (值1,值2),
  (值1,值2)
  ```

+ SQL语句

  ```mysql
  -- 插入多条数据
  insert into student
  (username,age,gender,cdate)
  values
  ('李四',11,'男',NOW()),
  ('王五',13,'男',NOW()),
  ('赵六',11,'男',NOW());
  ```


## 2. 查询数据

### 2.1 查询所有内容

+ 语法

  ```mysql
  select * from 表名 [where 条件] 
  ```

+ SQL语句

  ```mysql
  -- 查询表student所有内容
  select * from student
  ```


### 2.2 查找指定的内容

+ 语法

  ```mysql
  -- 语法1
  select 列名1,列名2... from 表名 [where 条件] 
  -- 语法2
  select 列名1 as 别名,列名2 as 别名... from 表名 [where 条件] 
  ```

+ SQL语句

  ```mysql
  -- 查询
  select username,age from student
  -- 带有别名查询
  select username as '姓名',age as '年龄' from student where age > 20
  ```


## 3. where子句

+ 语法

  ```mysql
  where condition1 [and [or]] condition2.....
  ```

+ 操作符号

  + `>` 
  + `=`
  + `<`
  + `>=`
  + `<=`
  + `!=` 或 `<>`

+ SQL语句

  ```mysql
  -- and
  select username ,age,gender from student where age > 16 and gender = '女'
  -- or
  select username ,age,gender from student where age > 16 or username like '赵%'
  ```

+ binary区分大小写

  + 关键字 `binary`

  + SQL语句

    ```mysql
    -- binary
    select * from student where binary username like 'b%'
    ```



## 4. like 子句

+ 语法

  ```mysql
  -- 语法
  where condition1 like 'value'   -- 和=号一致
  -- 语法 % 表示包含
  where condition1 like '%value'   -- 以...结尾
  where condition1 like 'value%'   -- 以...开头
  where condition1 like '%value%'   -- 包含... 
  ```

+ SQL语句

  ```mysql
  -- 以什么开头
  select * from student where binary username like '李%'
  -- 以什么结尾
  select * from student where binary username like '%ce'
  -- 包含什么
  select * from student where binary username like '%小%'
  ```


## 5. update更新

+ 语法

  ```mysql
  update 表名 set field1=value,field2=value,... [where clouse]
  ```

+ SQL语句

  ```mysql
  update student set gender = '女' where id=25;
  ```



## 6. delete删除

+ 语法

  ```mysql
  delete from 表名 [where clouse]
  ```

+ SQL语句

  ```mysql
  delete from student where  username like 'b%'
  ```



## 7. Left join 的使用

+ 语法

  ```mysql
  select <select_list> from 表1
  left join
  表2
  on 表1.key = 表2.key
  ```

+ SQL语句

  ```mysql
  select * from student
  left join
  score
  on score.stuId = student.stuId
  order by age
  ```



## 8. Order by 排序

+ 语法

  ```mysql
  -- 升序
  order by 列名 asc
  -- 降序
  order by 列名 desc
  ```

+ SQL语句

  ```mysql
  select * from student order by age -- 升序
  select * from student order by age asc -- 升序
  select * from student order by age desc -- 降序
  
  ```



## 9. limit 

```sql
-- limit是mysql的语法
select * from table limit m,n
-- 其中m是指记录开始的index，从0开始，表示第一条记录
-- n是指从第m+1条开始，取n条。
select * from tablename limit 2,4
-- 即取出第3条至第6条，4条记录
```



分页公式：(pagenow-1) * pagesize



