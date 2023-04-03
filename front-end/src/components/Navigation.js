import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';

const Navigation = () => {
  const [name, setName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = decodeToken(token);
      const userName = decodedToken.user.name;
      const userRole = decodedToken.user.role;
      if (userName) {
        setName(userName);
      }
      if (userRole === "ADMIN") {
        setIsAdmin(true);
      }
    }
  }, []);

  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    return Navigate("/login");
  }

  return (
    <div className='navigation'>
      <ul>
        {name && !isAdmin &&
          <NavLink to="/quiz" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Quiz</li>
          </NavLink>
        }
        {isAdmin &&
          <>
            <NavLink to="/quiz" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Quiz</li>
            </NavLink>
            <NavLink to="/myQuizes" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Mes quiz</li>
            </NavLink>
            <NavLink to="/createQuiz" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            <li>Créer un quiz</li>
            </NavLink>
          </>
        }
        {!name &&
          <>
            <NavLink to="/register" className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <li>S'inscrire</li>
            </NavLink>
            <NavLink to="/login" className={(nav) => (nav.isActive ? "nav-active" : "")}>
              <li>Se connecter</li>
            </NavLink>
          </>
        }
        {name && (
            <li className='connexion'><button onClick={handleLogout}>déconnexion</button></li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
