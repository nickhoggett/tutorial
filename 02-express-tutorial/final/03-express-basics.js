const express = require('express')
const app = express()

//app.get (read data)
//app.post (insert data)
//app.put
//app.delete (remove data)
//app.all (covers all instances)
//app.use
//app.listen
//app.status (explicitly change status code)

app.get('/', (req, res) => {
    console.log('user hit resourse')
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    console.log('user hit the about page')
    res.status(200).send('This is the about page')
})

app.all('*', (req, res) => {
    console.log('user hit a 404 page')
    res.status(404).send('This is a 404 page')
})

app.listen(5000, () => {
    console.log('server is listening on post: 5000')
})
