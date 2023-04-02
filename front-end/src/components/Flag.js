import React, { useState } from 'react';

const Flag = ({ flags, index, onFlagClick }) => {
    const imgUrl = "http://localhost:9000/assets/img/flags/";
    const [goodAnswer, setGoodAnswer] = useState(null);

    const handleFlagClick = () => {
        setGoodAnswer(flags.name);
        onFlagClick(flags.name); // Appelle la fonction de rappel avec le nom du drapeau cliqué
    }
    

    
    return (
        <li className='card' key={index} onClick={handleFlagClick}>
            <img src={imgUrl + flags.flag} alt={flags.name} key={index}/>
            <div className='infos' key={index}>
                <h2>{flags.name}</h2>
                <h4>{flags.continentId}</h4>
                <p>{flags.continent.name}</p>
            </div>
        </li>
    );
};

export default Flag;