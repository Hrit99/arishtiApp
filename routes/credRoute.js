const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');

const credController = require('../controllers/credController')

router.post('/login',(req, res) => { credController.login(req, res);})
router.post('/signup', [body('password').isStrongPassword()], (req, res) => {
    const errors = validationResult(req);
    console.log(errors)
    credController.signup(req, res, validationResult); })

module.exports = router