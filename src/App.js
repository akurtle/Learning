import './App.css';
import { Routes,Route,BrowserRouter} from 'react-router-dom' 
import Main from './main/Main';
import Home from './main/Home';
import React,{useState,useEffect} from 'react';
import Navbar from './Navbar';
import Topics from './main/Topics';



function App() {
  return (
    <div className='flex flex-col h-screen'>
        <Navbar/>
        <Routes>
          <Route path='/learning/src/main/Home.js' element={<Home/>}/>
          <Route path='/learning/src/main/Topic.js' element={<Topics/>}/>
        </Routes>
      

    </div>
  );
}

export default App;
