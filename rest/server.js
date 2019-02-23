'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // Please do not remove this line, since CLI uses this line as guidance to import new controllers
const userRoutes = require('./Routes/userRoutes');
let session = require('express-session')

// const tokenService = require('./middleware/token/smsService');

// const authToken = require('./common/auth/validateToken');
const validate = require('./middleware/validatte/validateUser');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Implement authToken midleware. */
// app.use(authToken);
app.use(validate);
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
/** Implement user routs. */
app.use('/api', userRoutes);

/** start server. */
const server = app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running', process.env.PORT);
});

module.exports = server;
