import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const {quiz: Quiz} = prisma;



export default {
    // findAllQuiz(req, res) {
    //     Quiz.findMany()
    //     .then((data) => {
    //      res.status(200).send(data)
    //     })
    //     .catch((error) => {
    //      res.status(500).send({
    //          message: error.message || "une erreur lors du findAllQuiz"
    //      })
    //     })
    // },
    findAllQuiz(req, res) {
        const { id } = req.params;
        Quiz.findMany({
          where: {
            isOnline: true,
          },
          include: {
            quizScore: {
              take: 1,
              where: {
                userId: id,
              },
            },
          },
        })
          .then((data) => {
            const quizWithScore = data.map((quiz) => ({
              ...quiz,
              score: quiz.quizScore.length > 0 ? quiz.quizScore[0].score : null,
              maxScore: quiz.quizScore.length > 0 ? quiz.quizScore[0].maxScore : null,
            }));
            res.status(200).send(quizWithScore);
          })
          .catch((error) => {
            res.status(500).send({
              message: error.message || "une erreur lors du findAllQuiz",
            });
          });
      },
      
    findMyQuiz(req, res) {
        const { id } = req.params
        Quiz.findMany({
            where: {
                authorId : id
            },
            include: {
                Question: true
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
    async deleteQuiz(req, res) {
        const { id } = req.params;
        const quiz = Quiz.findUnique({
          where: id,
          include: { questions: true },
        });
      
        if (!quiz) {
          throw new Error(`Quiz with id ${id} not found`);
        }
      
        // Supprime toutes les questions associées au quiz
        const deleteQuestionsPromise = prisma.question.deleteMany({
          where: { quizId: id },
        });
      
        // Supprime le quiz
        const deleteQuizPromise = Quiz.delete({
          where: { id },
        });
      
        // Exécute les opérations de suppression dans une transaction
        await prisma.$transaction([deleteQuestionsPromise, deleteQuizPromise]).then(console.log("supprimé"));
      },
    async updateQuiz(req, res) {
        const { id } = req.params;
        const { name, difficulty } = req.body
        try {
            const updatedQuiz = await Quiz.update({
                where: {
                    id
                },
                data: {
                    name,
                    difficulty,
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
    async publishQuiz(req, res) {
        const { id } = req.params;
        try {
            const updatedQuiz = await Quiz.update({
                where: {
                    id
                },
                data: {
                    isOnline: true
                }
            });
            res.status(200).send({
                message: "Quiz mis en ligne",
                data: updatedQuiz,
            });
        } catch (error) {
            res.status(500).send({
                message: error.message || "Une erreur est survenue lors de la publication du quiz " + id,
            });
        }
    },
}