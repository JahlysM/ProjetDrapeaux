import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Flag from './Flag';

const CreateQuestion = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Afrique", "Europe", "Amérique", "Asie", "Océanie"];

    useEffect(() => {
        axios.get("http://localhost:9000/flags")
        .then((res) => setData(res.data));
    }, [])

    // console.log(data);

    return (
        <div className='countries'>
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
            <h1>countries</h1>
            <ul>
                {data
                .filter((continent) => continent.continent.name.includes(selectedRadio))
                .slice(0, rangeValue)
                .map((flags, index) => 
                <Flag key={index} flags={flags}/>)}
            </ul>
        </div>
    );
};

export default CreateQuestion;