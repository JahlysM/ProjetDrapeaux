import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const {answer: Answer} = prisma;



export default {
    getAllFlags(req, res) {
        Answer.findMany()
        .then((data) => {
         res.status(200).send(data)
        })
        .catch((error) => {
         res.status(500).send({
             message: error.message || "une erreur lors du getAllQuestions"
         })
        })
    },
}