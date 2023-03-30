import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { decodeToken } from "react-jwt";
import { useNavigate } from 'react-router-dom';

const Connexion = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState('');

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/login', { email, password });
      setToken(response.data.token);
      // response.data.token et non token car il est lu trop vite
      localStorage.setItem('token', response.data.token);
      
    } catch (error) {
      console.log(error);
    }
  };

  const Navigate = useNavigate();
  useEffect(() => {
    if(token) {
      const decodedToken = decodeToken(token);
      localStorage.setItem('user', decodedToken.user.name);
    }
    const storageUsername = localStorage.getItem("user");
    if(storageUsername) {
      setName(storageUsername);
      return Navigate("/quiz");
    };
  }, [token, name]);
  
    

    return (
        <div>
            {name ? <p>bienvenue, {name}</p> : <p>tu n'es pas log</p>}
            <form action="" onSubmit={(e) => handleLogin(e)}>
                <label htmlFor="">Votre email</label>
                <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Votre mot de passe</label>
                <input type="password" placeholder='mot de passe' onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="envoyer"/>
            </form>
        </div>
    );
};

export default Connexion;