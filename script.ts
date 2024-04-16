import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create new user
  /* const user = await prisma.user.create({
        data: {
        name: "Alice",
        email: "alice@prisma.io",
        },
    });
    const users = await prisma.user.findMany(); */

  //Create new user with post
  /*   const user = await prisma.user.create({
        data: {
            name: "Bob",
            email: "bob@prisma.io",
            posts: {
            create: {
                title: "Hello World",
            },
            },
        },
        });
       console.log(user); */

  //Retrieve the Post records that belong to a User
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(usersWithPosts, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
