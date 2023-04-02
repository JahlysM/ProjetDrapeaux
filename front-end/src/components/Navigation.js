import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navigation = () => {

    
    const [name, setName] = useState("");
    
    useEffect(() => {
        const storageName = localStorage.getItem("user");
        if(storageName) {
        setName(storageName);
        }
    }, [name]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href="/login";
    }


    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                {name ? "" : <NavLink to="/register" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>S'inscrire</li>
                </NavLink>}
                {name ? "" : <NavLink to="/login" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Se connecter</li>
                </NavLink>}
                {name ? <NavLink to="/quiz" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Quiz</li>
                </NavLink> : ""}
                <NavLink to="/question" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Questions</li>
                </NavLink>
                <NavLink to="/createQuiz" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Créer un quiz</li>
                </NavLink>
                <NavLink to="/myQuizes" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Mes quiz</li>
                </NavLink>
                <NavLink to="/createQuestion" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Create question</li>
                </NavLink>
            </ul>
            <button onClick={handleLogout}>déconnexion</button>
            {name ? <li>Connecté en tant que {name}</li> : <li>tu n'es pas connecté</li>}
        </div>
            
    );
};

export default Navigation;