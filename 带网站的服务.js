const express = require('express')
const path = require('path')
const app = express()

// 中间件
app.use(express.static('public')); // 静态文件服务
app.use(express.json()); // 解析 JSON 请求体
app.use(express.urlencoded({ extended: true })); // 解析表单数据

// 首页路由 - 只返回静态HTML文件
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// POST API 接口
app.post('/api/calculate', (req, res) => {
    try {
        const { admin, user } = req.body;

        // 参数验证
        if (admin === undefined || user === undefined) {
            return res.status(400).json({
                success: false,
                error: '缺少参数'
            });
        }

        const num1 = Number(admin);
        const num2 = Number(user);

        if (isNaN(num1) || isNaN(num2)) {
            return res.status(400).json({
                success: false,
                error: '参数必须是数字'
            });
        }

        const result = num1 + num2;

        res.json({
            success: true,
            result: result,
            calculation: `${num1} + ${num2} = ${result}`
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            error: '服务器内部错误'
        });
    }
});

// 可选的 GET 接口（保持兼容性）
app.get('/api/calculate', (req, res) => {
    const { admin, user } = req.query;
    // ... 同样的验证逻辑
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`🚀 服务器运行在 http://localhost:${PORT}`);
});
