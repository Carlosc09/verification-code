const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    /** get the token from the headers. */
    let token = req.headers['x-access-token'] || null;
    if(req.url.includes('authenticate')) {
        // test
        return next();
    }
    if(!token) {
        res.status(400).send({
            success: false,
            message: 'Unauthorized'
        });
    } else {

        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Failed to authenticate token' });
            }
            if(decoded) {
                return next();
            }
        });
    }
};
