
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Typewriter=({text,delay,infinite})=>{

    const [currText,setCurrText]=useState("")
    const [currIndex,setCurrIndex]=useState(0)
  
  
    useEffect(()=>{
        let timeout;
        if(currIndex<text.length){
            const timeout = setTimeout(()=>{
                setCurrText(prevText=>prevText+text[currIndex])
                setCurrIndex(prevIndex=>prevIndex+1)
            },delay)
  
            return ()=>clearTimeout(timeout)
        }
        else if(infinite){
            setTimeout(()=>{
                setCurrIndex(0)
                setCurrText("")
            },delay*100)
        }
    },[currIndex,text,delay,infinite])
    return <span>{currText}</span>
  
  }

function Home() {
  return (
    <div className='flex h-screen'>     
        
        <div className='flex flex-col flex-1 justify-center items-center'>
            <div className='text-7xl justify-center items-center'>
                <Typewriter className text="Welcome to learning!     
                Click next to learn more." delay={100} infinite/>
            </div>
            <div>
                <Link className="mt-11 text-2xl inline-block border
                 border-b-blue-100 rounded-full py-2 px-4 
                 bg-slate-500 transition-all bg-gradient-to-r from-indigo-500 hover:shadow-black 
                 hover:bg-blue-700 text-white ml-2" 
                 to="/learning/src/main/Topics.js">Next</Link>
            </div>       
        </div>
    </div>
  )
}

export default Home