import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Questions = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:9000/Question/e5dcd5dd-715b-421b-abf6-3b09500e1e24")
        .then((res) => setData(res.data));
    }, [])

    const img = "http://localhost:9000/assets/img/flags/";

    return (
        <div>
            <ul>
                {data.map((flags, index) => 
                    <li key={index}>
                        <p>{flags.question}</p>
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