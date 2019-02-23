'use strict';

const express = require('express');
const router = express.Router();
const ideaController = require('../Controller/ideaController');

router.get('/idea', (req, res) => {
    ideaController.get(req, res);
});

module.exports = router;
