'use strict';

const jsv = require('json-validator');
const _ = require('lodash');

const userSchema = {
    userName: {
      required: true,
      isEmail: true
    },
    cellPhone: {
        required: true,
        validate: (value, path) => {
            var phoneValid = /^\+?([0-9]{2})?[- ]?([0-9]{2})?[- ]?([0-9]{4})[- ]?([0-9]{4})$/;

            if(value.match(phoneValid)) {
                return {
                    isValid: true,
                    message: 'Invalid cellPhone'
                };
            } else {
                return {
                    isValid: false,
                    message: 'Invalid cellPhone'
                };
            }
        }
    }
}

module.exports = {
    authenticate(_user) {
        return new Promise((resolve, reject) => {
            this.validate(_user).then(res => {
                resolve(res);
            }, err => {
                reject({
                    status: 422,
                    message: err
                });
            }).catch(err => {
                reject(err);
            });
        });
    },

    validate(_user) {
        return new Promise((resolve, reject) => {
            jsv.validate(_user, userSchema, (err, result) => {
                if(err) {
                    reject(err);
                }
                if(! _.isEmpty(result)) {
                    reject(result);
                }
                resolve(true);
            });
        });
    }
}