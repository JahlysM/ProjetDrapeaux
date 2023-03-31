import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { decodeToken } from 'react-jwt';

const QuizDetails = () => {
  const { quizId } = useParams();
  const token  = localStorage.getItem("token");
  const decodedToken = decodeToken(token);
  const authorId = decodedToken.user.id;
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:9000/quiz/` + authorId + "/" + quizId)
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err));
  }, [quizId, authorId]);

  if (!questions) {
    return <div>Loading...</div>;
  }

  const deleteQuestion = (id) => {
    axios.delete("http://localhost:9000/question/" + id)
    .then(console.log("quiz " + id + " supprimé"))
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
                <button onClick={() => deleteQuestion(question.id)}>supprimer</button>
            </ul>
            )}
        </ul>


        {/* {ts ? <ul> {ts.map((question, index) => <ul key={index}>   <li>question: {question.question}</li> <ul>{question.answer.map((options, index) => <li key={index}>{options.name}</li>)}</ul>   </ul>)}</ul> : ""} */}
    </div>
);
};

export default QuizDetails;
