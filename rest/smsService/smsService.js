'use strict';

const Nexmo = require('simple-nexmo');
require('dotenv').config();

const from = '​Verification';

module.exports.sendSMS = (to, message) => {
    return new Promise((resolve, reject) => {
        let phone;
        const nexmo = new Nexmo({
            apiKey: process.env.apiKey,
            apiSecret: process.env.apiSecret,
            useSSL: true,
            debug: false
        });

        if(to.length === 10) {
            phone = `52${to}`;
        } else {
            phone = to;
        }

        const options = {
            from,
            to: phone,
            type: 'text',
            text: message
        };

        nexmo.sendSMSMessage(options, (err, response) => {
            if (err) {
                reject(err);
            } else {
                resolve(response);
            }
        });
    });
};
