import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import CreateQuiz from './pages/CreateQuiz';
import Home from './pages/Home';
import Login from './pages/Login';
import GetMyQuizes from './pages/MyQuizes';
import Quiz from './pages/Quiz';
import Register from './pages/Register';
import CrudQuestions from './pages/CrudQuestions';
import UpdateQuestion from './pages/UpdateQuestion';
import QuizPlay from './pages/QuizPlay';
import { decodeToken } from 'react-jwt';


const App = () => {

  let isAdmin = false;
  let isUser = false;

  const token = localStorage.getItem("token");
  if(token){
    const decodedToken = decodeToken(token);
    const userRole = decodedToken.user.role;
    if(userRole === "ADMIN"){
      isAdmin = true;
    } else if(userRole === "BASIC"){
      isUser = true;
    }
  }

  if(isAdmin === true){
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
  
          {/* Url inconnue envoie sur Home */}
          <Route path='*' element={<Login/>}/>
  
          {/* inscription */}
          <Route path='/register' element={<Register/>}/>
  
          {/* connection */}
          <Route path='/login' element={<Login/>}/>
  
          {/* Affiche tout les quiz */}
          <Route path='/quiz' element={<Quiz/>}/>
  
          {/* lance un quiz */}
          <Route path='/quiz/:quizId' element={<QuizPlay/>}/>
  
          {/* nul */}
          {/* <Route path='/question' element={<Question/>}/> */}
  
          {/* Créer un quiz */}
          <Route path='/createQuiz' element={<CreateQuiz/>}/>
  
          {/* Mes quiz */}
          <Route path="/myQuizes/" element={<GetMyQuizes/>}/>
  
          {/* mes quiz => gestion questions */}
          <Route path="/myQuizes/:quizId" element={<CrudQuestions/>}/>
  
  
          <Route path="/myQuizes/:quizId/:id" element={<UpdateQuestion/>}/>
  
          {/* Créer une question */}
          <Route path="/myQuizes/createQuestion/:quizId" element={<Home/>}/>
  
          {/* nul */}
          {/* <Route path="/createQuestion" element={<CreateQuestion/>}/> */}
        </Routes>
      </BrowserRouter>
    );
  }else if(isUser === true){
    return (
      <BrowserRouter>
        <Routes>
          {/* Url inconnue envoie sur Quiz */}
          <Route path='*' element={<Quiz/>}/>
          {/* inscription */}
          <Route path='/register' element={<Register/>}/>
          {/* connection */}
          <Route path='/login' element={<Login/>}/>
          {/* Affiche tout les quiz */}
          <Route path='/quiz' element={<Quiz/>}/>
          {/* lance un quiz */}
          <Route path='/quiz/:quizId' element={<QuizPlay/>}/>
        </Routes>
      </BrowserRouter>
    );
  } else{
    return (
      <BrowserRouter>
        <Routes>
          {/* Url inconnue envoie sur Home */}
          <Route path='*' element={<Login/>}/>
          {/* inscription */}
          <Route path='/register' element={<Register/>}/>
          {/* connection */}
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    );
  }

  
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       {/* <Route path='/' element={<Home/>}/> */}

  //       {/* Url inconnue envoie sur Home */}
  //       <Route path='*' element={<Login/>}/>

  //       {/* inscription */}
  //       <Route path='/register' element={<Register/>}/>

  //       {/* connection */}
  //       <Route path='/login' element={<Login/>}/>

  //       {/* Affiche tout les quiz */}
  //       <Route path='/quiz' element={<Quiz/>}/>

  //       {/* lance un quiz */}
  //       <Route path='/quiz/:quizId' element={<QuizPlay/>}/>

  //       {/* nul */}
  //       {/* <Route path='/question' element={<Question/>}/> */}

  //       {/* Créer un quiz */}
  //       <Route path='/createQuiz' element={<CreateQuiz/>}/>

  //       {/* Mes quiz */}
  //       <Route path="/myQuizes/" element={<GetMyQuizes/>}/>

  //       {/* mes quiz => gestion questions */}
  //       <Route path="/myQuizes/:quizId" element={<CrudQuestions/>}/>


  //       <Route path="/myQuizes/:quizId/:id" element={<UpdateQuestion/>}/>

  //       {/* Créer une question */}
  //       <Route path="/myQuizes/createQuestion/:quizId" element={<Home/>}/>

  //       {/* nul */}
  //       {/* <Route path="/createQuestion" element={<CreateQuestion/>}/> */}
  //     </Routes>
  //   </BrowserRouter>
  // );
};

export default App;