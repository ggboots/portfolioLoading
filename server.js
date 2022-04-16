const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('src'))

app.listen(3000)
