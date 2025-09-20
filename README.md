# Coach Potato

## 開發成員 (依字母排序)

- UI 組第 28 組：Jocelyn、Momo、shelly（組長）、Shu、Tzu
- 工程組第 12 組：elvina0_0（組長）、Hao、禹成林

## Node.js 版本

- v18 以上

### 指令列表

- `node -v` - 查看自己版本
- `npm install` - 初次下載安裝套件
- `npm run dev` - 執行開發模式＆監聽
  - 若沒有自動開啟瀏覽器，可嘗試手動在瀏覽器上輸入
    `http://localhost:5173/<專案名稱>/pages/index.html`
- `npm run build` - 執行編譯模式（不會開啟瀏覽器）
- `npm ru deploy` - 自動化部署

## 資料夾結構

- assets # 靜態資源放置處

  - images # 圖片放置處
  - scss # SCSS 的樣式放置處

- layout # ejs 模板放置處
- pages # 頁面放置處

- JavaScript 程式碼可寫在 main.js 檔案

### 注意事項

- 已將 pages 資料夾內的 index.html 預設為首頁，建議不要任意修改 index.html 的檔案名稱
- .gitignore 檔案是用來忽略掉不該上傳到 GitHub 的檔案（例如 node_modules），請不要移除 .gitignore
