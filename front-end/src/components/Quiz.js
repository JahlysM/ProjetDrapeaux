import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            <ul>
                {quiz.map((quiz, index) => 
                <ul key={index}>
                    <li>nom du quiz: {quiz.name}</li>
                    <li>difficulté du quiz: {quiz.difficulty}</li>
                    <Link to={"/quiz/" + quiz.id}>
                        <button>Lancer le quiz</button>
                    </Link>
                </ul>
                )}
            </ul>
        </div>
    );
};

export default GetQuiz;
