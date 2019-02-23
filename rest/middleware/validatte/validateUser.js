const jsv = require('json-validator');
const _ = require('lodash');

const userSchema = {
    userName: {
        required: true,
        isEmail: true
    },
    cellPhone: {
        required: true,
        validate: value => {
            const phoneValid = /^\+?([0-9]{2})?[- ]?([0-9]{2})?[- ]?([0-9]{4})[- ]?([0-9]{4})$/;
            let validate;

            if (value.match(phoneValid)) {
                validate = {
                    isValid: true,
                    message: 'Invalid cellPhone'
                };
            } else {
                validate = {
                    isValid: false,
                    message: 'Invalid cellPhone'
                };
            }
            return validate;
        }
    }
};

module.exports = (req, res, next) => {
    if(req.url.includes('signin')) {
        jsv.validate(req.body, userSchema, (err, result) => {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: err
                });
            }
            if (!_.isEmpty(result)) {
                res.status(500).send({
                    success: false,
                    message: result
                });
            }
            return next();
        });
    } else {
        return next();
    }
};
