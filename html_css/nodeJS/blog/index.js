const express = require('express')
const app = express()
const port = 3000

app.get('/trangchu', (req, res) => {
  res.send('mai dinh tien')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})