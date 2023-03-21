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
                email
            }
        })
        if(!verifUser) {
            console.log('mauvais mail');
        } else {
            const checkPassword = compareHash(password, verifUser.password);
            if(!checkPassword){
                console.log("mauvais password");
            } else {
                console.log("gg t'es co");
                const accessToken = jwt.sign(verifUser, process.env.ACCESS_TOKEN_SECRET);
                res.json({ accessToken: accessToken })
            }
        }
    }
}