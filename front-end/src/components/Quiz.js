import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GetQuiz = () => {

    const [quiz, setData] = useState([]);
    const [name, setName] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9000/quiz")
        .then((res) => setData(res.data));
    }, []);
    
    useEffect(() => {
        const storageName = localStorage.getItem("user");
        if(storageName) {
        setName(storageName);
        }
    }, [name]);
    

    return (
        <div>
            <p>{name}</p>
            <ul>
                {quiz.map((quiz, index) => 
                <ul key={index}>
                    <li>nom du quiz: {quiz.name}</li>
                    <li>auteur du quiz: {quiz.authorId}</li>
                    <li>id du quiz: {quiz.id}</li>
                    <li>difficulté du quiz: {quiz.difficulty}</li>
                </ul>
                )}
            </ul>
        </div>
    );
};

export default GetQuiz;
