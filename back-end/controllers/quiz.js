import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const {quiz: Quiz} = prisma;
const {question: Question} = prisma;



export default {
    findAllQuiz(req, res) {
        Quiz.findMany()
        .then((data) => {
         res.status(200).send(data)
        })
        .catch((error) => {
         res.status(500).send({
             message: error.message || "une erreur lors du findAllQuiz"
         })
        })
    },
    findMyQuiz(req, res) {
        const { id } = req.params
        Quiz.findMany({
            where: {
                authorId : id
            }
        }
        )
        .then((data) => {
         res.status(200).send(data)
        })
        .catch((error) => {
         res.status(500).send({
             message: error.message || "une erreur lors du findMyQuiz"
         })
        })
    },
    createQuiz(req, res) {
        const { name, difficulty, authorId } = req.body
        Quiz.create({
            data: {
                name: name,
                difficulty: difficulty,
                authorId: authorId
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
    deleteQuiz(req, res) {
        const { id } = req.params;

        Quiz.delete({
            where: {
                id: id,
            }
        })
        .then(() => {
            res.status(200).send({
                message: "quiz supprimé"
            })
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message || "une erreur lors de la suppression du quiz: " + id
            })
        })
    },
    // createQuestion(req, res) {
    //     const { question, goodAnswer, answer2, answer3, answer4} = req.body
        
    //     Question.create({
    //         data: {
    //             question: question,
    //             answer: {
    //                 connect: [
    //                     { id: goodAnswer },
    //                     { id: answer2 },
    //                     { id: answer3 },
    //                     { id: answer4 },
    //                 ]
    //             },
    //             quiz: {
    //                 connect: {
    //                     // trouver un moyen de récupérer l'id du quiz
    //                     id: quiz
    //                 }
    //             }
    //         }
    //     })
    //     .then(() => {
    //      res.status(201).send({
    //          message: "Quiz crée"
    //      })
    //     })
    //     .catch((error) => {
    //      res.status(500).send({
    //          message: error.message || "une erreur lors de la création du quiz"
    //      })
    //     })
    // },
    // getAllQuestions(req, res) {
    //     Question.findMany({
    //         include: {
    //             answer: true
    //         }
    //     })
    //     .then((data) => {
    //      res.status(200).send(data)
    //     })
    //     .catch((error) => {
    //      res.status(500).send({
    //          message: error.message || "une erreur lors du getAllQuestions"
    //      })
    //     })
    // },
    async updateQuiz(req, res) {
        const { id } = req.params;
        const { name, difficulty, authorId } = req.body
        try {
            const updatedQuiz = await Quiz.update({
                where: {
                    id
                },
                data: {
                    name,
                    difficulty,
                // authorId: authorId
                }
            });
            res.status(200).send({
                message: "Quiz mis à jour",
                data: updatedQuiz,
            });
        } catch (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la mise à jour du quiz " + id,
            });
        }
    },
}