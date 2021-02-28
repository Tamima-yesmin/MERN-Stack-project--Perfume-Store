
const router = require('express').Router()
const productController = require('../controllers/productController')

// const auth = require('../middleware/auth')
// const authAdmin = require('../middleware/authAdmin')


router.route('/products')
    .get(productController.getProducts)
    .post(productController.createProduct)


router.route('/products/:id')
    .delete(productController.deleteProduct)
    .put(productController.updateProduct)



module.exports = router