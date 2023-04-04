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

    useEffect(() => {
        axios.get("http://localhost:9000/quiz/" + authorId)
        .then(res => {
            setData(res.data);
            setIsDeleted(false);
        })
        .catch(err => console.log(err));
    }, [authorId, isDeleted]);

    useEffect(() => {
        if(data !== [""]){
            const dataLen = data.length
            if (dataLen === 0) {
            return navigate("/createQuiz");
            }
        }
    }, [data, navigate])

    const deleteQuiz = (id) => {
        axios.delete("http://localhost:9000/quiz/" + id)
        .then((setIsDeleted(true)))
        .catch((err) => console.log(err));
      };

    const updateQuiz = (id, updatedQuiz) => {
        axios.put("http://localhost:9000/quiz/" + id, updatedQuiz)
        .then(console.log("quiz " + id + " modifié !"))
        .catch((err) => console.log(err));
    };


    const handleEditClick = (index) => {
        setEditIndex(index);
    };

    const handleEditCancel = () => {
        setEditIndex(null);
    };

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

    
        return (
        <div>
            <ul>
                {data.map((quiz, index) => (
                    <li key={index}>
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
                            // juste des <> vides fonctionnent ? verifier ça
                            <>
                                <div>nom du quiz: {quiz.name}</div>
                                <div>difficulté du quiz: {quiz.difficulty}</div>
                                <Link to={"/myQuizes/createQuestion/" + quiz.id}>
                                    <button>ajouter une question</button>
                                </Link>
                                <Link to={"/myQuizes/" + quiz.id}>
                                    <button>gérer les questions</button>
                                </Link>
                                <button onClick={() => handleEditClick(index)}>modifier</button>
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
