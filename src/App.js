import './App.css';
import { Routes,Route} from 'react-router-dom' 
import Home from './main/Home';
import React from 'react';
import Navbar from './Navbar';
import Topics from './main/Topics';
import Courses from './course/Courses';
import Login from './login/Login';
import Dashboard from './login/Dashboard';



function App() {
  return (
    <div className='flex flex-col h-screen'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/learning/src/main/Topics.js' element={<Topics/>}/>
          <Route path='/learning/src/course/Courses.js' element={<Courses/>}/>
          <Route path='/learning/src/login/Login.js' element={<Login/>}/>
          <Route path='/learning/src/login/Dashboard.js' element={<Dashboard/>}/>
        </Routes>
    </div>
  );
}

export default App;
