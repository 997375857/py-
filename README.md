# Express.js 开放接口项目

一个基于 Express.js 的简单计算器 Web 应用，提供 RESTful API 接口和友好的用户界面。

## 功能特点

- 提供 RESTful API 接口用于计算两个数字的和
- 响应式网页界面，用户可以通过表单输入数字进行计算
- 前后端分离架构设计
- 错误处理和用户友好的提示信息

## 项目结构

```
.
├── public/                 # 前端静态资源文件
│   ├── index.html         # 主页面
│   ├── script.js          # 前端交互逻辑
│   └── style.css          # 样式文件
├── 带网站的服务.js          # 主服务文件
├── package.json           # 项目配置和依赖
└── README.md              # 项目说明文档
```

## 安装和运行

1. 安装依赖：
   ```
   npm install
   ```

2. 启动服务：
   ```
   npm start
   ```

3. 在浏览器中访问 `http://localhost:3001`

## API 接口

### POST /api/calculate

计算两个数字的和

**请求参数：**
```json
{
  "admin": 10,
  "user": 20
}
```

**响应示例：**
```json
{
  "success": true,
  "result": 30,
  "calculation": "10 + 20 = 30"
}
```

## 技术栈

- 后端：Node.js + Express.js
- 前端：HTML + CSS + JavaScript
- 构建工具：pkg (用于打包)

## 许可证

MIT