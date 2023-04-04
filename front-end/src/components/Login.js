import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { decodeToken } from "react-jwt";
import { useNavigate } from 'react-router-dom';

const Connexion = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState('');
    const navigate = useNavigate();

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

  useEffect(() => {
    if(token) {
      const decodedToken = decodeToken(token);
      const authorName = decodedToken.user.name;
      if(authorName){
        return navigate("/quiz");
      }
    }
  });

    return (
      <div>
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