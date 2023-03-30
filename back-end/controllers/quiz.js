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
    createQuestion(req, res) {
        const { question, goodAnswer, answer2, answer3, answer4, quiz } = req.body
        Question.create({
            data: {
                question: question,
                answer: {
                    connect: [
                        { id: goodAnswer },
                        { id: answer2 },
                        { id: answer3 },
                        { id: answer4 },
                    ]
                },
                quiz: {
                    connect: {
                        // trouver un moyen de récupérer l'id du quiz
                        id: quiz
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
    }
}


// export default {
//     register(req, res) {
//         const { name, email, password } = req.body
//         // égal à
//         // const name = req.body.name

//         User.create({
//             data: {
//                 name: name,
//                 email: email,
//                 password: generateHash(password)
//             }
//         })
//            .then(() => {
//             res.status(201).send({
//                 message: "user crée"
//             })
//            })
//            .catch((error) => {
//             res.status(500).send({
//                 message: error.message || "une erreur lors de la création de l'user"
//             })
//            })
//     }
// }