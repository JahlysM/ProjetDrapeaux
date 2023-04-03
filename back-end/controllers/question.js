import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const {question: Question} = prisma;



export default {
    createQuestion(req, res) {
        const { question, goodAnswer, answer2, answer3, answer4} = req.body;
        // récupère l'id du quiz dans l'url
        const { quizId } = req.params;
        Question.create({
            data: {
                // question
                question: question,
                goodAnswer: goodAnswer,
                // tableau de réponses
                answer: {
                    // connection à la table answer
                    connect: [
                        // bonne réponse
                        { id: goodAnswer },
                        // autres options
                        { id: answer2 },
                        { id: answer3 },
                        { id: answer4 },
                    ]
                },
                // quiz auquel connecter la question
                quiz: {
                    // Se connecter au quiz
                    connect: {
                        id: quizId,
                    }
                }
            }
        })
        .then(() => {
         res.status(201).send({
             message: "Quiz crée"
         })
        })
        .catch((error) => {
         res.status(500).send({
             message: error.message || "une erreur lors de la création du quiz"
         })
        })
    },
    getAllQuestions(req, res) {
        Question.findMany({
            include: {
                answer: true
            }
        })
        .then((data) => {
         res.status(200).send(data)
        })
        .catch((error) => {
         res.status(500).send({
             message: error.message || "une erreur lors du getAllQuestions"
         })
        })
    },
    getMyQuestions(req, res) {
        const { id2 } = req.params
        Question.findMany({
            where: {
                quizId: id2
            },
            include: {
                answer: true
            }
        })
        .then((data) => {
         res.status(200).send(data)
        })
        .catch((error) => {
         res.status(500).send({
             message: error.message || "une erreur lors du getMyQuestions" + id
         })
        })
    },
    deleteQuestion(req, res) {
    const { id } = req.params
    // récupèrer l'id du quiz où se trouve la question
    Question.delete({
    where: {
        id
    }
})
   .then(() => {
    res.status(200).send({
        message: "question supprimée"
    })
   })
   .catch((error) => {
    res.status(500).send({
        message: error.message || "une erreur lors de la suppression de la question " + id
    })
   })
    },
    async updateQuestion(req, res) {
        const { id } = req.params;
        const { question, answer2, answer3, answer4, goodAnswer } = req.body;
        
        try {
            const updatedQuestion = await Question.update({
                where: {
                    id
                },
                data: {
                    question: question,
                    goodAnswer: goodAnswer,
                    answer: {
                        connect: [
                            { id: goodAnswer },
                            { id: answer2 },
                            { id: answer3 },
                            { id: answer4 },
                        ],
                    },
                },
            });
            
            res.status(200).send({
                message: "Question mis à jour",
                data: updatedQuestion,
            });
        } catch (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour de la question " + id,
            });
        }
    },
}



