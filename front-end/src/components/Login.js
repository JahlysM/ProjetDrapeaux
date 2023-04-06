import React, { useState, useEffect } from "react";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/login", {
        email,
        password,
      });
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);

      console.log("Reponse", response);
      if (response.data.errors) {
        if (response.data.errors.email) {
          setErrors({ ...errors, email: response.data.errors.email });
        }
        if (response.data.errors.password || response.data.message) {
          setErrors({ ...errors, password: response.data.errors.password });
        }
        return;
      } else {
        setErrors({ email: "", password: "" });
        console.log("OK");
        window.location = "/quiz";
      }
    } catch (error) {
      console.log(error);
      setErrors({
        email: "",
        password: error.response?.data?.errors?.password || "",
      });
    }
  };

  useEffect(() => {
    if (token) {
      const decodedToken = decodeToken(token);
      const authorName = decodedToken.user.name;
      if (authorName) {
        return navigate("/quiz");
      }
    }
  }, [navigate, token]);

  return (
    <div className="SeLogin">
      <form action="" onSubmit={(e) => handleLogin(e)}>
        <div className="yourEmail">
          <label>Votre email</label>
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error">{errors.email}</div>
        </div>
        <div className="yourPassword">
          <label>Votre mot de passe</label>
          <input
            type="password"
            placeholder="mot de passe"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error">{errors.password}</div>
          <input type="submit" value="envoyer" />
        </div>
      </form>
    </div>
  );
};

export default Connexion;
