import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { decodeToken } from 'react-jwt';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const GetMyQuizes = () => {
    const [data, setData] = useState([""]);
    const token  = localStorage.getItem("token");
    const decodedToken = decodeToken(token);
    const [editIndex, setEditIndex] = useState(null);
    const authorId = decodedToken.user.id;
    const [isDeleted, setIsDeleted] = useState(null);
    const navigate = useNavigate();

    // récupère tout les quiz de user
    useEffect(() => {
        axios.get("http://localhost:9000/quiz/myQuizes/" + authorId)
        .then(res => {
            setData(res.data);
            setIsDeleted(false);
        })
        .catch(err => console.log(err));
    }, [authorId, isDeleted]);

    // renvoie vers la page de création de quiz si user n'a pas de quiz
    useEffect(() => {
        if(data !== [""]){
            const dataLen = data.length
            if (dataLen === 0) {
            return navigate("/createQuiz");
            }
        }
    }, [data, navigate])

    // supprimer un quiz
    const deleteQuiz = (id) => {
        axios.delete("http://localhost:9000/quiz/" + id)
        .then((setIsDeleted(true)))
        .catch((err) => console.log(err));
      };

    // enregistrer les modifications 
    const updateQuiz = (id, updatedQuiz) => {
        axios.put("http://localhost:9000/quiz/" + id, updatedQuiz)
        .then(console.log("quiz " + id + " modifié !"))
        .catch((err) => console.log(err));
    };


    // lancer l'édition
    const handleEditClick = (index) => {
        setEditIndex(index);
    };

    // annuler l'édition
    const handleEditCancel = () => {
        setEditIndex(null);
    };

    // enregistrer les modifications du quiz sélectionné en appelant updateQuiz
    const handleEditSubmit = (e, index, quiz) => {
        e.preventDefault();
        const updatedQuiz = {
            id: quiz,
            name: e.target.elements.name.value,
            difficulty: e.target.elements.difficulty.value,
        };
        updateQuiz(quiz, updatedQuiz);
        setData(data.map((a, b) => b === index ? updatedQuiz : a));
        setEditIndex(null);
    };

    // mets un quiz en ligne
    const publishQuiz = (id) => {
        axios.patch("http://localhost:9000/quiz/" + id)
        .then(navigate("/quiz"))
        .catch((err) => console.log(err));
      };
    
        return (
        <div>
            <ul>
                {/* liste les quiz */}
                {data.map((quiz, index) => (
                    <li key={index}>
                        {/* vérifie si user est en train d'éditer un quiz */}
                        {editIndex === index ? (
                            <form onSubmit={(e) => handleEditSubmit(e, index, quiz.id)}>
                                <input type="text" name="name" defaultValue={quiz.name} />
                                <select name="difficulty" defaultValue={quiz.difficulty}>
                                    <option value="DIFFICILE">DIFFICILE</option>
                                    <option value="SIMPLE">SIMPLE</option>
                                    <option value="NORMAL">NORMAL</option>
                                </select>
                                <button type="submit">valider</button>
                                <button type="button" onClick={handleEditCancel}>annuler</button>
                            </form>
                        ) : (
                            <>
                                <p>nom du quiz: {quiz.name}</p>
                                <p>difficulté du quiz: {quiz.difficulty}</p>
                                {/* vérifie si le quiz est déjà en ligne */}
                                {quiz.isOnline 
                                ? <p>quiz déjà en ligne</p> 
                                : 
                                <>
                                    {/* Si le quiz a déjà au moins 1 question */}
                                    {quiz.Question
                                    && quiz.Question.length > 0 
                                    ? <>
                                    <button onClick={() => publishQuiz(quiz.id)}>mettre en ligne</button> 
                                    <Link to={"/myQuizes/" + quiz.id}>
                                        <button>gérer les questions</button>
                                    </Link>
                                    </>
                                    : <p>Ajoutez au moins 1 question pour mettre le quiz en ligne</p>
                                    }
                                    <Link to={"/myQuizes/createQuestion/" + quiz.id}>
                                        <button>ajouter une question</button>
                                    </Link>
                                    <button onClick={() => handleEditClick(index)}>modifier</button>
                                </>
                                }
                                <button onClick={() => deleteQuiz(quiz.id)}>supprimer</button>
                                
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );    
};

export default GetMyQuizes;
