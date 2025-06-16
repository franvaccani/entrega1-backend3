import express from 'express';
import mocksRouter from './routes/mocks.router.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api/mocks', mocksRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});