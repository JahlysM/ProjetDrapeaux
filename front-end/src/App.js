import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateQuiz from './pages/CreateQuiz';
import Home from './pages/Home';
import Login from './pages/Login';
import GetMyQuizes from './pages/MyQuizes';
import Question from './pages/Question';
import Quiz from './pages/Quiz';
import Register from './pages/Register';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* Url inconnue envoie sur Home */}
        <Route path='*' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/question' element={<Question/>}/>
        <Route path='/createQuiz' element={<CreateQuiz/>}/>
        <Route path='/myQuizes' element={<GetMyQuizes/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;