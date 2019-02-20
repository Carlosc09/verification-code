'use strict';

const DB = require('../../DB');

module.exports = {

    insert(req, res) {
        DB.User.insert(req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    },

    authenticate(req, res) {
        DB.User.authenticate(req.body).then(_res => {
            res.send(_res);
        }).catch(_err => {
            res.status(500).send(_err);
        });
    }
};
