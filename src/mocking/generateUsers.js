import bcrypt from 'bcrypt';

export const generateMockUsers = (amount) => {
  const users = [];

  for (let i = 0; i < amount; i++) {
    const hashedPassword = bcrypt.hashSync('coder123', 10);

    users.push({
      first_name: `User${i + 1}`,
      last_name: `Last${i + 1}`,
      email: `user${i + 1}@mail.com`,
      password: hashedPassword,
      role: Math.random() > 0.5 ? 'admin' : 'user',
      pets: [],
    });
  }

  return users;
};