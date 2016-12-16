const express = require('express');
const router = express.Router();

const getUsers = require('./handlers/getUsers');
const createUsers = require('./handlers/createUsers');


router.get('/', getUsers);
router.post('/', createUsers);

module.exports = router;