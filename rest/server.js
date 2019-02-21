'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express(); // Please do not remove this line, since CLI uses this line as guidance to import new controllers
const userRoutes = require('./Routes/userRoutes');
const authToken = require('./common/auth/validateToken');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/** Implement authToken midleware. */
// app.use(authToken);
/** Implement user routs. */
app.use('/api', userRoutes);

/** start server. */
const server = app.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log('Server is running', process.env.PORT);
});

module.exports = server;
