import bcrypt from 'bcrypt';
import prisma from '../src/config/db.js';

try {
  await prisma.post.deleteMany();
  await prisma.user.deleteMany();

  const usersData = [
    {
      email: 'alice@test.com',
      password: await bcrypt.hash('alice1234', 10),
    },
    {
      email: 'bob@example.com',
      password: await bcrypt.hash('bob1234', 10),
    },
    {
      email: 'charlie@demo.com',
      password: await bcrypt.hash('charlie1234', 10),
      role: 'ADMIN',
    },
  ];

  const users = await Promise.all(
    usersData.map((user) => prisma.user.create({ data: user })),
  );

  for (const user of users) {
    await prisma.post.createMany({
      data: [
        {
          title: `Welcome Post by ${user.email.split('@')[0]}`,
          content: `This is the first post by ${user.email.split('@')[0]}.`,
          userId: user.id,
        },
        {
          title: `Thoughts by ${user.email.split('@')[0]}`,
          content: `Another insightful post by ${user.email.split('@')[0]}.`,
          userId: user.id,
        },
      ],
    });
  }

  console.log('Seed completed successfully!');
} catch (error) {
  console.error('Seed failed:', error);
} finally {
  await prisma.$disconnect();
}
