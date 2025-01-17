module.exports = {
    getAllInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory().then(result => {
            res.status(200).send(result)
        })
    },
    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img} = req.body
        db.create_product({name, price, img}).then(result => {
            res.status(200).send(result)
        })
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product([id]).then(result => {
            res.status(200).send(result)
        })
    },
    editProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name, price, img} = req.body
        db.edit_product([id, name, price, img]).then(result => {
            res.status(200).send(result)
        })
    },
    getOneProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_one_product([id]).then(result => {
            res.status(200).send(result)
        })
    }
}