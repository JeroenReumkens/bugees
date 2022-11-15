const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Example seeds from documentation
async function main() {
  //   const alice = await prisma.user.upsert({
  //     where: { email: 'alice@prisma.io' },
  //     update: {},
  //     create: {
  //       email: 'alice@prisma.io',
  //       name: 'Alice',
  //     },
  //   });

  //   const bob = await prisma.user.upsert({
  //     where: { email: 'bob@prisma.io' },
  //     update: {},
  //     create: {
  //       email: 'bob@prisma.io',
  //       name: 'Bob',
  //     },
  //   });
  //   console.log({ alice, bob });
  console.log('Seeding disabled');
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
