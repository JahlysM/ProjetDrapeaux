import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { decodeToken } from 'react-jwt';
import { Link } from 'react-router-dom';


const GetMyQuizes = () => {

    const [data, setData] = useState([]);
    const token  = localStorage.getItem("token");
    const decodedToken = decodeToken(token);
    const authorId = decodedToken.user.id;
    
    // console.log(authorId);
    useEffect(() => {
        axios.get("http://localhost:9000/quiz/" + authorId)
        .then((res) => setData(res.data));
        // ignore la demande de callback si authorId change
        // eslint-disable-next-line
    }, []);

    const deleteQuiz = (id) => {
        axios.delete("http://localhost:9000/quiz/" + id)
        .then(console.log("quiz " + id + " supprimé"))
        .catch((err) => console.log(err));
    };
    
    return (
        <div>
            <ul>
                {data.map((quiz, index) => 
                <ul key={index}>
                    <li>nom du quiz: {quiz.name}</li>
                    <li>auteur du quiz: {quiz.authorId}</li>
                    <li>id du quiz: {quiz.id}</li>
                    <li>difficulté du quiz: {quiz.difficulty}</li>
                    <Link to={"/myQuizes/" + quiz.id}>
                        <button>gérer les questions</button>
                    </Link>
                    <button onClick={() => deleteQuiz(quiz.id)}>supprimer</button>
                </ul>
                )}
            </ul>
        </div>
    );
};

export default GetMyQuizes;
