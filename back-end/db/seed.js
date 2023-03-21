import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const {question: Question} = prisma;



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
    const question = await prisma.question.create({
      data: {
        question: "Quel est le drapeau de la Blegique ?",
        answer: {
          connect: [
            { id: "1" }, // Remplacez "67890" par l'ID de votre réponse
            { id: "10" }  // Remplacez "12345" par l'ID de votre autre réponse
          ]
        },
        quiz: {
          connect: {
            id: "36015e88-5d02-4be5-924f-63a6118aeb57"
          }
        }
      },
      include: {
        answer: true
      }
    });
    
    console.log(question);
  }
  
main()
.catch(e => {
    console.error(e.message);
})
.finally(async () => {
    await prisma.$disconnect();
})

// Anna
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQzNWViMjlmLTI0ZDctNDgwNS1hYjdjLTE1MTUwMmIxMGMzNCIsIm5hbWUiOiJhbm5hIiwiZW1haWwiOiJoYW1pZGFvbWFyb3ZhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEyJEY2VmZibTFQa3FSL3JaTTdQVkdEei5UNGRmVFhlLkM1dGguZ2VXblpxY3I3ZXQ5LkwwVnVpIiwicm9sZSI6IkJBU0lDIiwiaWF0IjoxNjc5MTczNjc4fQ.Ssr1vccmKWr8AZaZY5BEk3UuYm3DPv1kYwL1-IgAVko"

// Sam
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU1OTQyOTk5LTBiNDktNGE4Ny1hNjM2LWIxMTYwNDUwOGZmYiIsIm5hbWUiOiJzYW0iLCJlbWFpbCI6InNhbUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMiRkbXU2bnIxTXJHUzZIUkFhQ0RjVThPcWdCUUxYbXRIUU4vTk1DVWl1end0RmlRMWtGV0p1VyIsInJvbGUiOiJCQVNJQyIsImlhdCI6MTY3OTE3ODIzM30.m8GPHdjLAzde26mIAqbrAOJE-7pzwSMK762NWma3M2o"

// API key: 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