const express = require('express')
const app = express()

const logger = require('./logger')
const authorise = require('./authorise')

// req => middleware => res

app.use([logger, authorise])

app.get('/',(req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('items')
})
app.listen(5000, () => {
  console.log('listening to server from port: 5000..')
})