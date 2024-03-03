const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {
    console.log(`data received - name: ${name}, ${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other kind of logic `)
})
customEmitter.emit('response', 'john', 24)
