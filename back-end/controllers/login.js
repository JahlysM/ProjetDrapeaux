import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const {user: User} = prisma;
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

function compareHash(password, hashed){
    return bcrypt.compareSync(password, hashed);
}


export default {
    async login(req, res) {
        const { email, password } = req.body
        // égal à
        // const name = req.body.name
        
        const verifUser = await User.findUnique({
            where: {
                email: email
            }
        })
        const name = verifUser.name
        console.log(name);
        if(!verifUser) {
            return res.status(401).send({ message: "L'adresse e-mail est incorrect." });
        } else {
            const checkPassword = compareHash(password, verifUser.password);
            if(!checkPassword){
                return res.status(401).send({ message: "le mot de passe est incorrect." });
            } else {
                console.log("gg t'es co");
                const token = jwt.sign({ user: verifUser }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });

                res.header('Authorization', `Bearer ${token}`);
                res.status(200).send({ token: token });
            }
        }
    }
}