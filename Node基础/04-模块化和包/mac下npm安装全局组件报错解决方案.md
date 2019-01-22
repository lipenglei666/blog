# mac下npm安装全局组件报错解决方案

## 1.没有权限安装

在你的安装指令前面加上sudo，然后会提醒你输入密码，这个密码是你mac的开机解锁码！如：

```sudo npm install egg-init -g```

## 2.更换全局变量文件夹

### 2.1.回到用户根目录下再新建一个全局安装的路径

`cd ~`

`mkdir ~/.npm-global` 
之前安装过的话会提醒存在了.npm-global这个文件夹

### 2.2.配置npm使用新的路径

`npm config set prefix ‘~/.npm-global’`

### 2.3打开或者新建~/.profile

`vi ~/.profile` 

进入了vim编辑器之后，增加这样换环境变量配置代码：

`export PATH=~/.npm-global/bin:$PATH` 

按esc键，然后在最下面入:wq保存退出

### 2.4.更新系统环境变量

`source ~/.profile` 