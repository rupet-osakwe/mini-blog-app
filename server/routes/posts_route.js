const express = require('express');


const router = express.Router()
router.get("/", require('../controllers/post_controller'))

module.exports = router