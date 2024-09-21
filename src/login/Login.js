import React from 'react'
import {auth, provider} from '../login/firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login({setIsAuth}) {

  let navigate = useNavigate();

  const signInWithGoogle= () => {

    signInWithPopup(auth,provider).then(()=>{
      localStorage.setItem('isAuth',true);
      setIsAuth(true);
      navigate("/")
    })

  }

  

  return (
    <div className='flex justify-center items-center h-screen'>
      <button className='inline-block py-2 px-4 border-b-blue-100  transition-all   ease-in duration-1000 hover:bg-gradient-to-r from-indigo-500 rounded-full' onClick={signInWithGoogle}>
        Login
      </button>
    </div>
  )
}

export default Login