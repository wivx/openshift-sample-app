const express = require('express');
const cors = require('cors'); // 測試用, 暫時跳脫 CORS 問題, 正式環境需移除
const app = express();

app.use(cors()); // 測試用, 暫時跳脫 CORS 問題, 正式環境需移除

// 測試用的 configMap 及 secret
const testConfigMap = process.env.testConfigMap;
const testSecrrt = process.env.testSecret;

// 將 ./public 裡面的靜態資源暴露
app.use("/", express.static('public'));

// 測試用 API (ConfigMap)
app.get('/api/configmap', (req, res, next) => {
    return res.json({ result: testConfigMap});
});

// 測試用 API (Secret)
app.get('/api/secret', (req, res, next) => {
    return res.json({ result: testSecrrt});
});

// 啟動伺服器
const port = 8080;
app.listen(port, () => console.log('Server listening on port ' + port));
