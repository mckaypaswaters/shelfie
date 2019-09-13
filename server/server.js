require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controllers/controller')

const app = express()

app.use(express.json())

app.get('/api/inventory', ctrl.getAllInventory)
app.post('/api/product', ctrl.createProduct)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} times I've died to Piranha Plant`))
})
