## 技术栈

后端：Next.js、Node.js、sqlite

前端：react、MUI 5、prosemirror

## 运行项目

使用免部署的sqlite做为数据库，简单3步即可运行项目：

1. 安装依赖包：`yarn install`
2. 创建数据库：`yarn run createdb`
3. 运行项目（开发模式）：`yarn dev`



## 命令行工具

- 创建数据库：`yarn run createdb`
- 删除数据库: `yarn run cleardb`
- 编译项目：`yarn run build`
- 运行项目（生产模式）：`yarn start`



## 实现模块

- 用户登录与注册
- 帖子无限滚动加载
- 帖子编辑器
  - 支持CTRL-Z（撤销），CTRL-Y（重做）快捷键
  - 支持插入表情、链接、图片
  - 输入网址后，按空格或回车键自动生成a链接
  - 自动将复制的URL生成a链接
  - 自动检查url生成社交元数据
- 通过帖子的社交元数据自动生成新闻链接

## 功能演示

![演示图片](https://github.com/fengcode-git/disk/blob/main/app.gif?raw=true)

