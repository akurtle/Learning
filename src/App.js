import './App.css';
import { Routes,Route,BrowserRouter} from 'react-router-dom' 
import Main from './main/Main';
import Home from './main/Home';
import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import Topics from './main/Topics';
import Courses from './course/Courses';



function App() {
  return (
    <div className='flex flex-col h-screen'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/learning/src/main/Topics.js' element={<Topics/>}/>
          <Route path='/learning/src/course/Courses.js' element={<Courses/>}/>
        </Routes>
    </div>
  );
}

export default App;
