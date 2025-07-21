const express = require('express');
const usersRouter = require('./routes/users.router');
const adoptionRouter = require('./routes/adoption.router');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');

const app = express();
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/adoptions', adoptionRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = app;