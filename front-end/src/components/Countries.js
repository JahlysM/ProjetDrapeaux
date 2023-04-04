import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState("");
    const [selectedFlag, setSelectedFlag] = useState(""); // nouvel état pour stocker le nom du drapeau sélectionné
    const [question, setQuestion] = useState("");
    const [goodAnswer, setGoodAnswer] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    // remplacer ca par un include a l'appel en base de donnée
    const radios = ["Afrique", "Europe", "Amérique", "Asie", "Océanie"];
    const { quizId } = useParams();
    const imgUrl = "http://localhost:9000/assets/img/flags/";
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:9000/flags")
        .then((res) => setData(res.data));
    }, [])

    // fonction pour gérer le clic sur un drapeau
    const handleFlagClick = (flags) => {
        setSelectedFlag({name: flags.name, flag: flags.flag, id: flags.id}); // stocker le nom et le drapeau sélectionnés dans selectedFlag
    }

    // NOTE : changer la fonction pour faire en sorte que quand le flag est stocké il passe en display none
    const handleFlagSelected = () => {
        if(!goodAnswer) {
            setGoodAnswer(selectedFlag);
        } else if(!answer2 && goodAnswer.flag !== selectedFlag.flag) {
            setAnswer2(selectedFlag);
        } else if(!answer3 && goodAnswer.flag !== selectedFlag.flag && selectedFlag.flag !== answer2.flag) {
            setAnswer3(selectedFlag);
        } else if(!answer4 && goodAnswer.flag !== selectedFlag.flag && selectedFlag.flag !== answer2.flag  && selectedFlag.flag !== answer3.flag) {
            setAnswer4(selectedFlag);
        }
    }

    const handleQuestion = () => {
        const input = document.querySelector('#questionInput'); // Récupérer l'ID de l'input
        setQuestion(input.value);
    }

    const handleCreateQuestion = () => {
        axios.post("http://localhost:9000/question/" + quizId, {
            question: question,
            goodAnswer: goodAnswer.id,
            answer2: answer2.id,
            answer3: answer3.id,
            answer4: answer4.id,
        })
        .then(() => {
            // redirection vers la page souhaitée
            return Navigate("/myQuizes/" + quizId);
        });
    }


    return (
        <div className='countries'>
            {/* afficher le nom du drapeau sélectionné au dessus de la liste */}
            {question && (!goodAnswer
                ? <h2>Sélectionnez la bonne réponse</h2>
                : (!answer2
                    ? <h2>Sélectionnez la première mauvaise réponse</h2> 
                    : (!answer3
                        ? <h2>Sélectionnez la deuxième mauvaise réponse</h2>
                        : (!answer4
                            ? <h2>Sélectionnez la dernière mauvaise réponse</h2>
                            : <div>
                                <h3>{"question: " + question}</h3>
                                <ul>
                                    <li><img src={imgUrl + goodAnswer.flag} alt={goodAnswer.name} /></li>
                                    <li><img src={imgUrl + answer2.flag} alt={answer2.name}/></li>
                                    <li><img src={imgUrl + answer3.flag} alt={answer3.name}/></li>
                                    <li><img src={imgUrl + answer4.flag} alt={answer4.name}/></li>
                                </ul>
                                <button onClick={handleCreateQuestion}>valider</button>
                                <button>modifier</button>
                            </div>
                        )
                    )
                ))
            }

            {!question 
                ? <div><h2>écrivez votre question</h2> <input type="text" placeholder='Question' id='questionInput'/> <button onClick={handleQuestion}>valider</button></div>
                : (!answer4 && selectedFlag && <div><p>Vous avez sélectionné le drapeau : {selectedFlag.name}</p> <button onClick={handleFlagSelected}>Valider</button></div>)
            }
            
            <ul className="radio-container">
                <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)}/>
                {radios.map((continent, index) => (
                    <li key={index}>
                        <input type="radio" id={continent} name="continentRadio" checked={continent === selectedRadio} onChange={(e) => setSelectedRadio(e.target.id)}/>
                        <label htmlFor={continent}>{continent}</label>
                    </li>
                ))}
            </ul>
            {selectedRadio && <button onClick={() => setSelectedRadio("")}>Annuler la recherche</button>}
            <ul>
                {data
                .filter((continent) => continent.continent.name.includes(selectedRadio))
                .slice(0, rangeValue)
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((flags) => (
                    <li className='card' key={flags.id} onClick={() => handleFlagClick(flags)} >
                        <img src={imgUrl + flags.flag} alt={flags.name}/> {/* ajouter l'événement onClick pour chaque image de drapeau */}
                        <div className='infos'>
                            <h2>{flags.name}</h2>
                            <h4>{flags.continentId}</h4>
                            <p>{flags.continent.name}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Countries;
