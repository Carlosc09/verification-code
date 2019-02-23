'use strict';

const express = require('express');
const router = express.Router();
const user = require('../Controller/userController');

router.post('/user/signin', (req, res) => {
    user.signin(req, res);
});

module.exports = router;
