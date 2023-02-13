var express = require('express');
var router = express.Router();
var shopsCtrl = require('../controllers/shops');

// /shops

// GET index
router.get('/', shopsCtrl.index);

module.exports = router;