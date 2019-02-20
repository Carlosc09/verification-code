'use strict';

const express = require('express');
const router = express.Router();
const user = require('../Controller/user/userController');

router.post('/user/authenticate', (req, res) => {
    user.authenticate(req, res);
});

router.post('/user/verification', (req, res) => {
    user.authenticate(req, res);
});

module.exports = router;