import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create dummy user
  const user = await prisma.user.create({
    data: { name: "Test User" }
  });

  // Create dummy pin
  const pin = await prisma.pin.create({
    data: { title: "Test Pin" }
  });

  console.log("✅ Seeded:", { user, pin });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
