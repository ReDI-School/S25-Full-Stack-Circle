import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create dummy user
  const user = await prisma.user.create({
    data: {
      email: "username1@example.com",
      password: "12345678",
      name: "Username1",
    },
  });

  // Create dummy pin linked to the user
  const pin = await prisma.pin.create({
    data: {
      title: "Test Pin",
      imageUrl: "https://via.placeholder.com/13",
      description: "A test pin with dummy image",
      authorId: user.id,
    },
  });

  console.log("✅ Seeded:", { user, pin });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
