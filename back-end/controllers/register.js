import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const { user: User } = prisma;
import bcrypt from 'bcrypt';

function generateHash(password) {
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(password, salt);
  return hash;
}

export default {
  register(req, res) {
    const { name, email, password } = req.body;
    // égal à
    // const name = req.body.name

    User.create({
      data: {
        name: name,
        email: email,
        password: generateHash(password),
      },
    })
      .then(() => {
        res.status(201).send({
          message: 'user crée',
        });
      })
      .catch((error) => {
        res.status(500).send({
          message: error.message || "une erreur lors de la création de l'user",
        });
      });
  },
};
