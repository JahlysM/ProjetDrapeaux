import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const { user: User } = prisma;
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { signInErrors } from '../utils/error.utils.cjs';

function compareHash(password, hashed) {
  return bcrypt.compareSync(password, hashed);
}

export default {
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const verifUser = await User.findUnique({
        where: {
          email: email,
        },
      });
      const checkPassword = compareHash(password, verifUser.password);
      if (!checkPassword) {
        return res
          .status(401)
          .send({ message: 'le mot de passe est incorrect.' });
      }

      console.log("gg t'es co");
      const token = jwt.sign(
        { user: verifUser },
        process.env.ACCESS_TOKEN_SECRET
      );

      res.header('Authorization', `Bearer ${token}`);
      res.status(200).send({ token: token });
    } catch (err) {
      console.error(err);
      const errors = signInErrors(err);
      res.status(400).send({ errors });
    }
  },
};
