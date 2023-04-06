import React, { useEffect, useState } from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { Link } from "react-router-dom";

const GetQuiz = () => {
  const [quiz, setData] = useState([]);
  const [name, setName] = useState([]);
  const token = localStorage.getItem("token");
  const decodedToken = decodeToken(token);
  const userId = decodedToken.user.id;

  useEffect(() => {
    axios
      .get("http://localhost:9000/quiz/" + userId)
      .then((res) => setData(res.data));
  }, [userId]);

  useEffect(() => {
    const storageName = localStorage.getItem("user");
    if (storageName) {
      setName(storageName);
    }
  }, [name]);

  return (
    <div className="container">
      <ul className="blocks">
        {quiz.map((quiz, index) => (
          <ul key={index}>
            <li>Nom du quiz: {quiz.name}</li>
            <li>Difficulté du quiz: {quiz.difficulty}</li>
            {quiz.score ? (
              <>
                <li>{"Score: " + quiz.score + " / " + quiz.maxScore}</li>
              </>
            ) : (
              <Link to={"/quiz/" + quiz.id}>
                <button>Lancer le quiz</button>
              </Link>
            )}
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default GetQuiz;
