var express = require('express');
var router = express.Router();
var communitiesCtrl = require('../controllers/communities');

// communities

// GET index
router.get('/', communitiesCtrl.index);

module.exports = router;