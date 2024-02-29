const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', {
    highWaterMark: 900000, 
    encoding: 'utf8'
})

// buffer is 64kb by default (65486 bytes)
// then remainder last
// highWaterMark changes the default value to new int
// encoding utf8 will add the text from big.txt into the console.log(result)

stream.on('data', (result) => {
    console.log(result)
})

//error event

stream.on('error'), (err) =>  {
    console.log(err)
}