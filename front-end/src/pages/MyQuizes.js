import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { decodeToken } from 'react-jwt';
import Navigation from '../components/Navigation';

const GetMyQuizes = () => {

    const [data, setData] = useState([]);

    const token  = localStorage.getItem("token");
    const decodedToken = decodeToken(token);
    const authorId = decodedToken.user.id;
    
    console.log(authorId);

    useEffect(() => {
        axios.get("http://localhost:9000/quiz/" +authorId)
        .then((res) => setData(res.data));
    }, []);

    return (
        <div>
            <Navigation/>
            <ul>
                {data.map((quiz, index) => 
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

export default GetMyQuizes;
