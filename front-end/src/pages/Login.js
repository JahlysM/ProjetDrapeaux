import React from 'react';
import Connexion from '../components/Login';
import Navigation from '../components/Navigation';

const Login = () => {
    return (
        <div className='login'>
            <Navigation/>
            <Connexion/>
        </div>
    );
};

export default Login;