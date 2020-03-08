# openshift-sample-app
這個 App 為 **Angular**(前端網頁) 及 **NodeJS**(後端API) 組成的應用程式，用來展示讀取 configMap 及 secret 的環境變數。

## 前置條件
請先安裝 [NodeJS](https://nodejs.org/zh-tw/download/package-manager/) 及 npm (Node.js 在 0.6.3 版本開始內建 npm)

---

使用方法如下：

## sample-web (前端網頁)

### 本機測試及開發
```
# 切換至 web 目錄
cd ./sample-web

# 安裝 angular
npm install -g @angular/cli

# 安裝相依套件
npm install

# 以伺服器方式啟動
ng serve
```
請瀏覽本機網址 http://localhost:4200/

### 伺服器建置
```
# 切換至 web 目錄
cd ./sample-web

# 安裝相依套件
npm install

# 建置
ng build --configuration=dev-mono

# 檢查輸出結果
ls ./dist/sample-proj/

# 可將 ./dist/sample-proj/ 的結果，放置到網頁伺服器即可運行
```
**configuration 可選用**
- `production` (正式環境) api.gbs-university.org
- `test` (UAT) test.api.gbs-university.org
- `dev` (Dev-API/Web不同網址) dev.api.gbs-university.org
- `dev-mono` (Dev-API/Web同網址) dev.gbs-university.org

---

## sample-server (後端API)

### 本機測試及開發
```
# 切換至 web 目錄
cd ./sample-server

# (選擇性) 如要將 angular + nodejs 一起運行，可將 sample-web 產生的 dist 放到 public 裡
rm -rf ./public
mv ../sample-web/dist/sample-proj/ ./public

# 安裝相依套件
npm install

# (選擇性) 本機測試時，指定環境變數
export testConfigMap="testConfigMap1"
export testSecret="testSecret1"

# 以伺服器方式啟動
npm start
```

請瀏覽本機網址 http://localhost:8080/
```
# 或以 curl 測試
$ curl http://localhost:8080/api/configmap
{"result":"testConfigMap1"}

$ curl http://localhost:8080/api/secret
{"result":"testSecret1"}
```
