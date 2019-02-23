'use strict';

const DB = require('../DB');

module.exports = {

    get(req, res) {
        DB.Idea.getIdias(req).then(_res => {
            res.send(_res);
        }).catch(_err => {
            console.log(_err);
            if(_err.status) {
                res.status(_err.status).send(_err.message);
            } else {
                res.status(500).send(_err);
            }
        });
    }
};
