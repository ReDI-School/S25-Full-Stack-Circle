// Script to seed initial categories into the database
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const categories = [
  {
    title: "Art",
    description:
      "Paintings, drawings, sculptures and other beautiful creations",
    imageUrl: "https://picsum.photos/300/150?random=2"
  },
  {
    title: "Beauty",
    description: "Makeup, skincare, hair and other beauty topics",
    imageUrl: "https://picsum.photos/300/150?random=3"
  },
  {
    title: "Design",
    description: "Graphic design, interior design and other creative designs",
    imageUrl: "https://picsum.photos/300/150?random=4"
  },
  {
    title: "DIY and Crafts",
    description: "Do it yourself projects and crafting ideas",
    imageUrl: "https://picsum.photos/300/150?random=5"
  },
  {
    title: "Food and Drink",
    description: "Recipes, cooking tips, and food inspiration",
    imageUrl: "https://picsum.photos/300/150?random=6"
  },
  {
    title: "Home Decor",
    description: "Ideas to decorate and style your home",
    imageUrl: "https://picsum.photos/300/150?random=7"
  },
  {
    title: "Men's Fashion",
    description: "Clothing, accessories and style for men",
    imageUrl: "https://picsum.photos/300/150?random=8"
  },
  {
    title: "Women's Fashion",
    description: "Clothing, accessories and style for women",
    imageUrl: "https://picsum.photos/300/150?random=9"
  },
  {
    title: "Travel",
    description: "Destinations, travel tips and vacation inspiration",
    imageUrl: "https://picsum.photos/300/150?random=10"
  },
  {
    title: "Technology",
    description: "Gadgets, software, and tech innovations",
    imageUrl: "https://picsum.photos/300/150?random=11"
  },
  {
    title: "Nature",
    description: "Beautiful landscapes, plants, and animals",
    imageUrl: "https://picsum.photos/300/150?random=12"
  },
  {
    title: "Photography",
    description: "Photography inspiration, tips and techniques",
    imageUrl: "https://picsum.photos/300/150?random=13"
  }
];

async function main() {
  console.log("Starting to seed categories...");

  for (const category of categories) {
    // Check if category already exists to avoid duplicates
    const existing = await prisma.category.findFirst({
      where: {
        title: {
          equals: category.title,
          mode: "insensitive"
        }
      }
    });

    if (!existing) {
      const created = await prisma.category.create({
        data: category
      });
      console.log(`Created category: ${created.title}`);
    } else {
      console.log(`Category "${category.title}" already exists, skipping`);
    }
  }

  console.log("Category seeding completed!");
}

main()
  .catch(e => {
    console.error("Error seeding categories:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
