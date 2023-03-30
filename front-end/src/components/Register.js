import React, { useState } from 'react';
import axios from 'axios'

const Inscription = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/register", {
            name,
            email,
            password,
        })
    }
    return (
        <div>
                
            <form action="" onSubmit={(e) => handleForm(e)}>
                <label htmlFor="">Votre nom</label>
                <input type="text" placeholder='name' onChange={(e) => setName(e.target.value)} />
                <label htmlFor="">Votre email</label>
                <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Votre mot de passe</label>
                <input type="password" placeholder='mot de passe' onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="envoyer"/>
            </form>
        </div>
    );
};

export default Inscription;
