import { PrismaClient } from "@prisma/client";
// script used to cleanup categories in the database
const prisma = new PrismaClient();

async function main() {
  console.log("Cleaning up categories...");

  // First, remove category references from pins
  await prisma.pin.updateMany({
    data: {
      categoryId: null
    }
  });

  // Then delete all categories
  await prisma.category.deleteMany({});

  console.log("Categories cleaned up successfully!");
}

main()
  .catch(e => {
    console.error("Error cleaning up categories:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
