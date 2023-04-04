import React, { useState } from 'react';
import axios from 'axios';
import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';

const CreateMyQuiz = () => {
    const [name, setName] = useState("");
    const [difficulty, setDifficulty] = useState("NORMAL");
    const token  = localStorage.getItem("token");
    const decodedToken = decodeToken(token);
    const authorId = decodedToken.user.id;
    const Navigate = useNavigate();

    const handleCreateQuiz = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:9000/quiz", {
            name,
            difficulty,
            authorId,
          });
          Navigate("/myQuizes");
        } catch (error) {
          console.log(error);
        }
      };
      
    return (
        <div>
            <form action="" onSubmit={(e) => handleCreateQuiz(e)}>
                <label htmlFor="">Votre nom</label>
                <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                <label htmlFor="">Difficulté du quiz</label>
                <select name='difficulté' onChange={(e) => setDifficulty(e.target.value)} >
                    <option value="NORMAL">NORMAL</option>
                    <option value="SIMPLE">SIMPLE</option>
                    <option value="DIFFICILE">DIFFICILE</option>
                </select>
                <input type="submit" value="envoyer"/>
            </form>
        </div>
    );
};

export default CreateMyQuiz;
