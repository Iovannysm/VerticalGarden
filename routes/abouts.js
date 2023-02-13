var express = require('express');
var router = express.Router();
var aboutsCtrl = require('../controllers/abouts');

// abouts

// GET index
router.get('/', aboutsCtrl.index);

module.exports = router;