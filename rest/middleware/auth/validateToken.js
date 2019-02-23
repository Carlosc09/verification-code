'use strict';

module.exports = (req, res, next) => {
    let token = req.headers.auth || null;
    const tokenValid = /^\+?([0-9]{4})$/;

    if (req.url.includes('signin')) {
        return next();
    }

    if (!token) {
        res.status(400).send({
            success: false,
            message: 'Verification code was not provided'
        });
    }

    if(!token.match(tokenValid)) {
        res.status(422).send({
            success: false,
            message: 'Invalid verification code format'
        });
    }

    if (!req.session.userToken) {
        return res.status(401).json({
            message: 'Invalid verification code'
        });
    } else if(req.session.userToken.token === token) {
        return next();
    } else {
        return res.status(401).json({
            message: `Hi ${req.session.userToken.userName}, the verification code does not match the one we sent to you. Please try again`
        });
    }
};
