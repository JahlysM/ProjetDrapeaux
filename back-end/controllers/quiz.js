import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const {quiz: Quiz} = prisma;



export default {
    findMyQuiz(req, res) {
        Quiz.findMany({
            where: {
                authorId : req.user.id
            }
        }
        )
        .then((data) => {
         res.status(200).send(data)
        })
        .catch((error) => {
         res.status(500).send({
             message: error.message || "une erreur lors du findQuiz"
         })
        })
    },
}