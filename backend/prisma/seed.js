import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Create a test user
  const hashedPassword = await bcrypt.hash("test123", 10);
  const user = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      password: hashedPassword,
      name: "Test User"
    }
  });

  // Helper to create or connect tags
  async function getTagConnectData(tagNames) {
    const tagConnectData = [];
    for (const tagName of tagNames) {
      const tag = await prisma.tag.upsert({
        where: { name: tagName },
        update: {},
        create: { name: tagName }
      });
      tagConnectData.push({ id: tag.id });
    }
    return tagConnectData;
  }
  // Create test pins with different tags
  const pins = [
    {
      title: "Korean BBQ Recipe",
      imageUrl: "https://example.com/korean-bbq.jpg",
      description: "Delicious Korean BBQ recipe with homemade marinade",
      authorId: user.id,
      tags: ["koreanFood", "BBQ", "recipe", "cooking", "foodie"]
    },
    {
      title: "Italian Pasta Making",
      imageUrl: "https://example.com/pasta.jpg",
      description: "Learn how to make fresh pasta from scratch",
      authorId: user.id,
      tags: ["italianFood", "pasta", "cooking", "recipe", "homemade"]
    },
    {
      title: "Sushi Rolling Guide",
      imageUrl: "https://example.com/sushi.jpg",
      description: "Step by step guide to making perfect sushi rolls",
      authorId: user.id,
      tags: ["japaneseFood", "sushi", "cooking", "recipe", "seafood"]
    }
  ];

  for (const pin of pins) {
    const tagConnectData = await getTagConnectData(pin.tags);
    await prisma.pin.create({
      data: {
        title: pin.title,
        imageUrl: pin.imageUrl,
        description: pin.description,
        author: { connect: { id: user.id } },
        tags: { connect: tagConnectData }
      }
    });
  }

  console.log("Database has been seeded!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
