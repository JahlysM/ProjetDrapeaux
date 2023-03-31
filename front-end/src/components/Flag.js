import React from 'react';

const Flag = ({ flags }) => {
    const imgUrl = "http://localhost:9000/assets/img/flags/"
    return (
        <li className='card'>
            <img src={imgUrl + flags.flag} alt={flags.name} />
            <div className='infos'>
                <h2>{flags.name}</h2>
                <h4>{flags.continentId}</h4>
                <p>{flags.continent.name}</p>
            </div>
        </li>
    );
};

export default Flag;