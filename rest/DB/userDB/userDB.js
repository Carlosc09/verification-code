'use strict';

const randomize = require('randomatic');
const SMSService = require('../../smsService/smsService');
const token = randomize('0000');

module.exports = {
    signin(req) {
        return new Promise((resolve, reject) => {
            let msg = `Hi ${req.body.userName}! Your verification code for ${process.env.company} is ${token}`;
            let number;
            let phone = req.body.cellPhone;

            req.session.userToken = {
                userName: req.body.userName,
                token: token
            };

            number = phone.replace(/\D/g, '');

            SMSService.sendSMS(number, msg).then(() => {
                // eslint-disable-next-line no-console
                console.log(msg);
                resolve(`Hi ${req.body.userName}, you have been verified!`);
            }).catch(err => {
                // eslint-disable-next-line no-console
                console.log(msg);
                reject(err);
            });
        });
    }
};
