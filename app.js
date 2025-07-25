const express = require('express');
const usersRouter = require('./src/routes/users.router');
const adoptionRouter = require('./src/routes/adoption.router');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

const app = express();
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/adoptions', adoptionRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Error interno del servidor'
  });
});

module.exports = app;