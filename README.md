# pj start

提取 google sheet

```
yarn
```

記得開 .env 檔案，然後設名稱 GOOGLE_SHEET_API,GOOGLE_SHEET_ID (下面有教學)

```
yarn start
```

## 拿 api 和 sheet id

### Api Key

首先去 google cloud platform 建立新項目，然後選 API 和服務，按  啟用 API 和服務，搜尋 Google Sheets API，按啟用，再設回到上一頁，按憑證，建立憑證，類型 API 金鑰，完成。

---

### Sheet Id

去自己建立的文檔，設定為公開，任何人都可看，然後看一下網址, sheet-id 的位置按 copy，就可以了。

```
https://docs.google.com/spreadsheets/d/{sheet-id}/edit#gid=0
```
