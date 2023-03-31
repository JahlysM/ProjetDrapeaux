import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Questions = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:9000/Question/")
        .then((res) => setData(res.data));
    }, [])

    const img = "http://localhost:9000/assets/img/flags/";

    return (
        <div>
            <ul>
                {data.map((flags, index) => 
                    <li key={index}>
                        <p>{flags.question}</p>
                        <p>id:    {flags.id}</p>
                        <p>quiz id:   {flags.quizId}</p>
                        <ul>
                            {flags.answer.map(options => (
                                <li key={options.name}>
                                    <img src={img + options.flag} alt={options.name} />
                                </li>
                            ))}
                        </ul>
                    </li>)}
            </ul>
            test
        </div>
    );
};

export default Questions;