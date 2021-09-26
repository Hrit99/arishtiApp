const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');

const userController = require('../controllers/userController')

router.get('/', userController.index)
router.post('/store', [body('contact').isMobilePhone()], (req, res) => {
    const errors = validationResult(req);
    console.log(errors)
    userController.storeDetails(req, res, validationResult); })
router.post('/delete', userController.deleteit)

module.exports = router