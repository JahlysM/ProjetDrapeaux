import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import { Link } from 'react-router-dom';

const QuizDetails = () => {
  const { quizId } = useParams();
  const token  = localStorage.getItem("token");
  const decodedToken = decodeToken(token);
  const authorId = decodedToken.user.id;
  const [questions, setQuestions] = useState(null);
  const [isDeleted, setIsDeleted] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:9000/question/` + quizId)
      .then(res => {
        setQuestions(res.data);
        setIsDeleted(false);
      })
      .catch(err => console.log(err));
  }, [quizId, authorId, isDeleted]);
  

  if (!questions) {
    return <div>Loading...</div>;
  };

  const deleteQuestion = (id) => {
    axios.delete("http://localhost:9000/question/" + id)
      .then(() => {
        console.log("quiz " + id + " supprimé");
        setIsDeleted(true); // déclenche le rechargement de la page
      })
      .catch((err) => console.log(err));
  };
  

  const imgUrl = "http://localhost:9000/assets/img/flags/"

  return (
    <div>
        <ul>
            {questions.map((question, index) => 
            <ul key={index}>
                <li>{question.id}</li>
                <li>La question: {question.question}</li>
                <ul>
                  {question.answer.map((option, index) =>
                    <li key={index}><img src= {imgUrl + option.flag} alt={option.name} /></li>
                  )}
                </ul>
                <Link to={"/myQuizes/" + quizId + "/" + question.id}>
                  <button>modifier</button>
                </Link>
                <button onClick={() => deleteQuestion(question.id)}>supprimer</button>
            </ul>
            )}
        </ul>
    </div>
);
};

export default QuizDetails;
