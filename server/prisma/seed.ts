import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'


const prisma = new PrismaClient()

const main = async () => {
  const match = await prisma.users.upsert({
    where: { email: 'machiren111@gmail.com' },
    update: {},
    create: {
      name: 'マッチ',
      email: `machiren111@gmail.com`,
      age: 21,
      password: await hash('machiren', 10)
    },
  })

  const testUser = await prisma.users.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: `test@example.com`,
      name: 'test',
      age: 21,
      password: await hash('test', 10)
    },
  })
  console.log({ match, testUser })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })