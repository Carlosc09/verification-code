'use strict';

const randomize = require('randomatic');
const SMSService = require('../../smsService/smsService');
const token = randomize('0000');

module.exports = {
    signin(req) {
        return new Promise((resolve, reject) => {
            let msg = `Hi ${req.body.userName}! Your verification code for Rever is ${token}`;
            let number;
            let phone = req.body.cellPhone;

            req.session.userToken = {
                userName: req.body.userName,
                token: token
            };

            number = phone.replace(/\D/g, '');

            SMSService.sendSMS(number, msg).then(() => {
                resolve(msg);
            }).catch(err => {
                console.log(msg);
                reject(err);
            });
        });
    }
};
