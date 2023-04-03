import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const {user: User} = prisma;
import bcrypt from "bcrypt";

function generateHash(password){
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export default {
    getAll(req, res) {
        User.findMany()
           .then((data) => {
            res.status(200).send(data)
           })
           .catch((error) => {
            res.status(500).send({
                message: error.message || "une erreur lors du getAll"
            })
           })
    },
    get(req, res) {
        const { id } = req.params

        User.findUnique({
            where: {
                id: id,
            },
        })
           .then((data) => {
            data
            ? res.status(200).send(data)
            : res.status(404).send({
                message: "cannot find user with id = " + id
            })
           })
           .catch((error) => {
            res.status(500).send({
                message: error.message || "une erreur lors du get de l'user " + id
            })
           })
    },
    update(req, res) {
        const { id } = req.params
        const { name, email, password } = req.body

        User.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                email: email,
                password: generateHash(password)
            }
        })
           .then(() => {
            res.status(200).send({
                message: "user mis à jour"
            })
           })
           .catch((error) => {
            res.status(500).send({
                message: error.message || "une erreur lors de l'update de l'user " + id
            })
           })
    },
    delete(req, res) {
        
        const { id } = req.params

        User.delete({
            where: {
                id: id,
            }
        })
           .then(() => {
            res.status(200).send({
                message: "user supprimé"
            })
           })
           .catch((error) => {
            res.status(500).send({
                message: error.message || "une erreur lors de la suppression de l'user " + id
            })
           })
    },
}