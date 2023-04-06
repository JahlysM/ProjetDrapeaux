import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { decodeToken } from "react-jwt";

const QuizDetails = () => {
  const { quizId } = useParams();
  const token = localStorage.getItem("token");
  const decodedToken = decodeToken(token);
  const authorId = decodedToken.user.id;
  const [questions, setQuestions] = useState(null);
  const [isDeleted, setIsDeleted] = useState(null);
  const [updatedQuestion, setUpdatedQuestion] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:9000/question/` + quizId)
      .then((res) => {
        setQuestions(res.data);
        setIsDeleted(false);
      })
      .catch((err) => console.log(err));
  }, [quizId, authorId, isDeleted]);

  if (!questions) {
    return <div>Loading...</div>;
  }

  const deleteQuestion = (id) => {
    axios
      .delete("http://localhost:9000/question/" + id)
      .then(() => {
        console.log("quiz " + id + " supprimé");
        setIsDeleted(true); // déclenche le rechargement de la page
      })
      .catch((err) => console.log(err));
  };

  const updateQuestion = (id) => {
    axios
      .patch("http://localhost:9000/question/" + id, updatedQuestion)
      .then(() => {
        console.log("question " + id + " modifiée");
      })
      .catch((err) => console.log(err));
  };

  const handleQuestionChange = (e, questionId) => {
    const updatedQuestionIndex = questions.findIndex(
      (question) => question.id === questionId
    );
    const updatedQuestions = [...questions];
    updatedQuestions[updatedQuestionIndex].question = e.target.value;
    setQuestions(updatedQuestions);
    setUpdatedQuestion(updatedQuestions[updatedQuestionIndex]);
  };

  const imgUrl = "http://localhost:9000/assets/img/flags/";

  return (
    <div>
      <ul className="AnswerContainer">
        {questions.map((question, index) => (
          <ul key={index} className="AnswerParent">
            <li>
              <input
                className="QuestionCrud"
                type="text"
                value={question.question}
                onChange={(e) => handleQuestionChange(e, question.id)}
              />
            </li>
            <ul className="Answer">
              {question.answer.map((option, index) => (
                <li key={index}>
                  <img src={imgUrl + option.flag} alt={option.name} />
                </li>
              ))}
            </ul>
            <button onClick={() => updateQuestion(question.id)}>
              modifier
            </button>
            <button onClick={() => deleteQuestion(question.id)}>
              supprimer
            </button>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default QuizDetails;
