const express = require('express');
const router = express.Router();

const getEvents = require('./handlers/getEvents');
const createEvent = require('./handlers/createEvent');

router.get('/', getEvents);
router.post('/', createEvent);

module.exports = router;