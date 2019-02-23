'use strict';

const randomize = require('randomatic');
const token = randomize('0000');

module.exports = {
    authenticate(req) {
        return new Promise((resolve, reject) => {
            console.log(req.session.userToken);
            req.session.userToken = {
                userName: req.body.userName,
                token: token
            };
            resolve('Hi ' + req.body.userName + '! Your verification code for Rever is ' + token);
        });
    }
};
