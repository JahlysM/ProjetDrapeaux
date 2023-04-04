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
    axios.get(`http://localhost:9000/question/` + quizId)
      .then(res => setQuestions(res.data))
      .catch(err => console.log(err));
  }, [quizId, authorId]);

  if (!questions) {
    return <div>Loading...</div>;
  };

  let goodAnswer = [];
  let badAnswer = [];
  const questionValidation = (clicked, answer, idQuestion) => {
    questions.forEach(function() {
      // la ou est la la réponse dans badIndex pour la supprimer
      let badIndex = badAnswer.indexOf(idQuestion);
      // la ou est la la réponse dans goodIndex pour la supprimer
      let goodIndex = goodAnswer.indexOf(idQuestion);
      // gestion de bonne réponse
      if(clicked === answer){
        if(goodAnswer.includes(idQuestion)){
          console.log("déjà dans le tableau goodAnswer");
        } else if(badAnswer.includes(idQuestion)) {
          goodAnswer.push(idQuestion);
          badAnswer.splice(badIndex, 1);
          console.log("ajout a goodAnswer et enleve de badAnswer");
        } else {
          goodAnswer.push(idQuestion);
          console.log("ajout à goodAnswer");
        }
      // gestion de mauvaise réponse
      } else {
        if(goodAnswer.includes(idQuestion)){
          console.log("mauvaise réponse dans le tableau goodAnswer");
          goodAnswer.splice(goodIndex, 1);
          badAnswer.push(idQuestion);
        } else if(badAnswer.includes(idQuestion)) {
          console.log("déja dans badAnswer");
        } else {
          badAnswer.push(idQuestion);
          console.log("mauvaise réponse pas dans badAnswer");
        }
      }
    },
    console.log(goodAnswer),
    console.log(badAnswer)
    );
  }

  const pushScore = () => {
    let answer = goodAnswer.length + badAnswer.length;
    if (answer === questions.length) {
      console.log("tout répondu");
      console.log(goodAnswer.length);
    } else {
      console.log("il vous reste " + (questions.length - answer) + " questions à répondre");
    }
  };

  const imgUrl = "http://localhost:9000/assets/img/flags/";

  // const handleAnswer = (index) => {
  //   if(2=2) console.log("oui");
  // }

  return (
    <div>
        <Navigation/>
        <ul>
            {questions.map((question, index) => 
            <ul key={index}>
                <li>{question.id}</li>
                <li>La question: {question.question}</li>
                <li> bon id: {question.goodAnswer}</li>
                <ul>
                  {question.answer.map((option, index) =>
                    <li key={index} onClick={() => questionValidation(option.id, question.goodAnswer, question.id, question)}><img src= {imgUrl + option.flag} alt={option.name}/>
                    </li>
                  )}
                </ul>
            </ul>
            )}
        </ul>
        <button onClick={() => pushScore()}>Valider mes choix</button>
    </div>
);
};

export default QuizPlay;
// onClick={() => quizValidation()}