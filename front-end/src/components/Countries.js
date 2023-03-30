import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Flag from './Flag';

const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9000/flags")
        .then((res) => setData(res.data));
    }, [])

    // console.log(data);

    return (
        <div className='countries'>
            <h1>countries</h1>
            <ul>
                {data.map((flags, index) => 
                <Flag key={index} flags={flags}/>)}
            </ul>
        </div>
    );
};

export default Countries;