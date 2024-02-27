const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is our home page')
    } 
    if (req.url === '/about') {
        res.end('This is going to be our about page')
    }
    res.end(`
        <h1>Oops! This is a <b>404</b></h1>
    `)
})

server.listen(8888)