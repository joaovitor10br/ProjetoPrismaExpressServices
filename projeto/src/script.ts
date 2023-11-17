import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const newuser = await prisma.user.create({
    data: {
        email: 'joaovitor@gmail.com'
    }
  })

  console.log(newuser)
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