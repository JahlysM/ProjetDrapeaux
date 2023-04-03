import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import Navigation from '../components/Navigation';

const QuizPlay = () => {
  const { quizId } = useParams();
  const token  = localStorage.getItem("token");
  const decodedToken = decodeToken(token);
  const authorId = decodedToken.user.id;
  const [questions, setQuestions] = useState(null);
  

  useEffect(() => {
    axios.get(`http://localhost:9000/question/` + authorId + "/" + quizId)
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err));
  }, [quizId, authorId]);

  if (!questions) {
    return <div>Loading...</div>;
  };


  const imgUrl = "http://localhost:9000/assets/img/flags/"

  return (
    <div>
        <Navigation/>
        <ul>
            {questions.map((question, index) => 
            <ul key={index}>
                <li>{question.id}</li>
                <li>La question: {question.question}</li>
                <ul>
                  {question.answer.map((option, index) =>
                    <li key={index}><img src= {imgUrl + option.flag} alt={option.name}/></li>
                  )}
                </ul>
            </ul>
            )}
        </ul>
        <button>Valider mes choix</button>
    </div>
);
};

export default QuizPlay;
// onClick={() => quizValidation()}