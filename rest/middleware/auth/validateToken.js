
module.exports = (req, res, next) => {
    /** get the token from the headers. */
    let token = req.body.verification || null;
    if (req.url.includes('signin')) {
        // test
        return next();
    }
    if (!token) {
        res.status(400).send({
            success: false,
            message: 'Unauthorized'
        });
    } else {
        if (req.session.userToken) {
            return res.status(401).json({
                message: 'Failed to authenticate token'
            });
        }
        if (decoded) {
            return next();
        }
    }
};