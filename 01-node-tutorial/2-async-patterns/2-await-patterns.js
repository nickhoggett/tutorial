<<<<<<< HEAD:01-node-tutorial/2-async-patterns/2-await-patterns.js
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
=======
const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-genade.txt', `THIS IS AWESOME: ${first} ${second}`, 
            { flag: 'a' }  
        )
    } catch (error) {
        console.log(error)
    }
}

start()

// const getText = (path) => {
//     return new Promise ((resolve, reject) => {
//         readFile (path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
>>>>>>> c93296a8c75684be43c106b3f4694d39acc4e14d:2-async-patterns/2-await-patterns.js
