import React, { useState } from 'react';
import axios from 'axios';
import { decodeToken } from 'react-jwt';

const CreateMyQuiz = () => {
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("");
    // const [authorId, setAuthorId] = useState("");

    const token  = localStorage.getItem("token");
    const decodedToken = decodeToken(token);
    const authorId = decodedToken.user.id;
    
    console.log(authorId);

    const handleCreateQuiz = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/quiz", {
            name,
            difficulty,
            authorId,
        })
    }
    return (
        <div>
            <form action="" onSubmit={(e) => handleCreateQuiz(e)}>
                <label htmlFor="">Votre nom</label>
                <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                <label htmlFor="">Votre email</label>
                <input type="text" placeholder='difficulté' onChange={(e) => setDifficulty(e.target.value)} />
                {/* <label htmlFor="">Votre mot de passe</label>
                <input type="text" placeholder='auteur' onChange={(e) => setAuthorId(e.target.value)} /> */}
                <input type="submit" value="envoyer"/>
            </form>
        </div>
    );
};

export default CreateMyQuiz;
