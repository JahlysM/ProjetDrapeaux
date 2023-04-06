import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const {score: Score} = prisma;

export default {
    createScore(req, res) {
        const { score, maxScore } = req.body
        const { id, quizId } = req.params;

        Score.create({
            data: {
                score,
                maxScore,
                quiz: {
                    connect: {
                        id: quizId,
                    }
                },
                user: {
                    connect: {
                        id: id,
                    }
                },
            }
        })
        .then(() => {
            res.status(201).send({
                message: "Score enregistré"
            })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || "une erreur lors de l'enregistrement du score"
            })
        })
    }
}