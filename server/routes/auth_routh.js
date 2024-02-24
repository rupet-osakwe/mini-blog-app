const express = require('express');
const auth = require('../controllers/auth_controller.js')


const router = express.Router()

router.route('/')
    .post(auth.register)
    .post(auth.logIn)
    .post(auth.logOut)

module.exports = router