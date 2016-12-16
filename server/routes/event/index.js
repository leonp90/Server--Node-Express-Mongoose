var express = require('express');
var router = express.Router();

var eventId = require('./handlers/eventId');

router.get('/:id', eventId)

module.exports = router;