var express = require('express');
var router = express.Router();

var userId = require('./handlers/userId');

router.get('/:id', userId)

module.exports = router;