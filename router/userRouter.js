const router = require('express').Router()
const { Router } = require('express')
const userController = require('../controllers/userController')
const UserController = require('../controllers/userController')
const auth = require('../middleware/auth')

router.post('/register', UserController.register)

router.post('/login', UserController.login)

router.get('/logout', UserController.logout)

router.get('/refresh_token', UserController.refreshToken)

router.get('/infor', auth, UserController.getUser)

router.patch('/addcart', auth, userController.addCart)

router.get('/history', auth, userController.history)
module.exports = router