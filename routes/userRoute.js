const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController')

router.get('/', userController.index)
// router.post('/store', userController.store)

module.exports = router