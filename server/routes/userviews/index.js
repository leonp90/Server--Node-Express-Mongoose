const express = require('express');
const passport = require('passport');
const router = express.Router();

const getIndex = require('./handlers/getIndex');

// User routes
router.get('/', getIndex);



module.exports = router;
