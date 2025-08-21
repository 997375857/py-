


const express = require('express')
const app = express()



function addUser(c_1, c_2) {
    return new Promise((ok, no) => {
        try {
            // 直接尝试转换和计算
            const num1 = parseFloat(c_1);
            const num2 = parseFloat(c_2);

            if (isNaN(num1) || isNaN(num2)) {
                no('参数必须是有效数字');
                return;
            }

            const result = num1 + num2;
            ok(result);

        } catch (error) {
            no('计算过程中发生错误');
        }
    })
}

app.get('/user', (req, res) => {
    console.log('请求参数:', req.query);

    // 确保参数存在
    const admin = req.query.admin || '';
    const user = req.query.user || '';

    addUser(admin, user)
        .then((result) => {
            console.log("成功:", result);
            res.send(result.toString());
        })
        .catch((error) => {
            console.log("失败:", error);
            res.send(error);
        });
})

app.listen(3001, () => {
    console.log("服务器运行在端口 3001");
})

console.log('开始运行...');

