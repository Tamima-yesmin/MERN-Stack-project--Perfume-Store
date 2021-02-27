const router = require('express').Router()
const UserController = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post('/register', UserController.register)

router.post('/login', UserController.login)

router.get('/logout', UserController.logout)

router.get('/refresh_token', UserController.refreshToken)

router.get('/infor', auth, UserController.getUser)


module.exports = router