import express from 'express'
import database from "./bloodbanks.js"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/bloodbanks', (req, res) => {
    res.json(database);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

