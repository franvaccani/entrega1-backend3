import { Router } from 'express';
import { generateMockUsers } from '../mocking/generateUsers.js';

const router = Router();

// POST /api/mocks/generateData
router.post('/generateData', async (req, res) => {
  const { users, pets } = req.body;

  if (!users || !pets || isNaN(users) || isNaN(pets)) {
    return res.status(400).json({ error: 'Debes enviar los parámetros numéricos "users" y "pets".' });
  }

  const generatedUsers = generateMockUsers(parseInt(users));
  const generatedPets = Array.from({ length: parseInt(pets) }, (_, i) => ({
    name: `Pet${i + 1}`,
    type: 'Dog',
    age: Math.floor(Math.random() * 15 + 1),
  }));

  res.status(200).json({ users: generatedUsers, pets: generatedPets });
});

// GET /api/mocks/mockingusers
router.get('/mockingusers', (req, res) => {
  const users = generateMockUsers(50);
  res.status(200).json({ users });
});

// GET /api/mocks/mockingpets
router.get('/mockingpets', (req, res) => {
  const pets = Array.from({ length: 10 }, (_, i) => ({
    name: `Pet${i + 1}`,
    type: 'Cat',
    age: Math.floor(Math.random() * 20 + 1),
  }));
  res.status(200).json({ pets });
});

export default router;