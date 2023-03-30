import React from 'react';
import Navigation from '../components/Navigation';
import Inscription from '../components/Register';

const Register = () => {
    return (
        <div>
            <Navigation/>
            <h1>s'inscrire</h1>
            <Inscription/>
        </div>
    );
};

export default Register;