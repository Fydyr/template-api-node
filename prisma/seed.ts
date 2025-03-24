import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
const saltRounds = 10;

const prisma = new PrismaClient();

async function main() {

  // Suppression de tous les posts
  await prisma.type.deleteMany();
  await prisma.pokemonCard.deleteMany();

  const hash_admin = bcrypt.hashSync('admin', saltRounds);

  await prisma.user.createMany({
    data: {
      email: 'admin@mail.com',
      password: hash_admin,
    },
  });

  console.log('🌱 Seed completed!');
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

    // Suppression de tous les posts
    await prisma.type.deleteMany();
    await prisma.pokemonCard.deleteMany();

    const hash_admin = bcrypt.hashSync('admin', saltRounds);

    await prisma.user.createMany({
        data: {
            email: 'admin@mail.com',
            password: hash_admin,
        },
    });

    console.log('🌱 Seed completed!');
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

