const { GoogleSpreadsheet } = require('google-spreadsheet');
const dotenv = require("dotenv")
dotenv.config()

const sheetId = process.env.GOOGLE_SHEET_ID
const sheetApiKey = process.env.GOOGLE_SHEET_API
const doc = new GoogleSpreadsheet(sheetId)

doc.useApiKey(sheetApiKey)

const googleSheet = async () => {
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[1]
  // 設置提取那些格
  await sheet.loadCells('A9:F9')
  const rows = await sheet.getRows()

  const value = await Promise.all(rows.map((row, index)=> {
    return  row._rawData
  }))


  console.log({
    header: rows[0]._sheet.headerValues,
    ...value
  })

  return {
    header: rows[0]._sheet.headerValues,
    ...value
  }
}

googleSheet()