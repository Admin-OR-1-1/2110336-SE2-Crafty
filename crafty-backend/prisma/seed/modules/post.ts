import { PrismaClient } from '@prisma/client'

export const postSeed = async () => {
  const prisma = new PrismaClient()

  Array.from({ length: 20 }).forEach(async (_, i) => {
    await prisma.post.create({
      data: {
        title: `The title of the post ${i}`,
        detail: `The detail of the post ${i}`,
        content: `The content of the post ${i}`,
        price: 100 + i,
        photoUrl: `https://picsum.photos/seed/${Math.random()
          .toString(36)
          .substring(2, 15)}/${
          // random Int between 8 to 30
          Math.floor(Math.random() * (30 - 8 + 1)) + 8
        }00/1000`,
        reviews: {
          create: {
            desc: `The review of the post ${i}`,
            rate: Math.floor(Math.random() * 5) + 1,
            sender: `The sender of the post ${i}`,
          },
        },
      },
    })
  })
}
