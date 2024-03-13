import { PrismaClient } from '@prisma/client'

import { userSeed } from './modules/user'
import { chatSeed } from './modules/chat'
const prisma = new PrismaClient()
async function main() {
  await userSeed()
  await chatSeed()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
