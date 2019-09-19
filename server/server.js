require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controllers/controller')

const app = express()

app.use(express.json())

app.get('/api/inventory', ctrl.getAllInventory)
app.post('/api/product', ctrl.createProduct)
app.delete('/api/product/:id', ctrl.deleteProduct)
app.put('/api/product/:id', ctrl.editProduct)
app.get('/api/product/:id', ctrl.getOneProduct)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} times I've died to Piranha Plant`))
})
