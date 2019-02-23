'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // Please do not remove this line, since CLI uses this line as guidance to import new controllers
const userRoutes = require('./Routes/userRoutes');
const ideaRoutes = require('./Routes/ideaRoutes');
const session = require('express-session');
// const tokenService = require('./middleware/token/smsService');
const authToken = require('./middleware/auth/validateToken');
const validate = require('./middleware/validatte/validateUser');

require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
/** Implement authToken midleware. */
app.use(authToken);
app.use(validate);

/** Implement user routs. */
app.use('/api', userRoutes);
app.use('/api', ideaRoutes);

/** start server. */
const server = app.listen(process.env.PORT || 3000, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running', process.env.PORT);
});

module.exports = server;
