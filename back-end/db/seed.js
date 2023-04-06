import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const { question: Question } = prisma;

// async function main() {
//     await Question.create({
//         data:{
//             question: "quel est le drapeau de la croatie ?",
//             answer: {
//                 where: {
//                     id: 1,
//                     id: 2,
//                 }
//             },
//             Quiz: "36015e88-5d02-4be5-924f-63a6118aeb57",
//         },
//     })
//     console.log(Question);
// }

async function main() {
  const question = await prisma.question.findFirst({
    where: {
      id: '36015e88-5d02-4be5-924f-63a6118aeb57',
    },
    include: {
      answer: true,
    },
  });

  console.log(question);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
