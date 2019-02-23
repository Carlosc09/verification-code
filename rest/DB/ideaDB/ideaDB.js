'use strict';

module.exports = {
    getIdias(req) {
        return new Promise(resolve => {
            resolve(`Hi ${ req.session.userToken.userName}, you have been verified!`);
        });
    }
};
