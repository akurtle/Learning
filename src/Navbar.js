import React,{useState,useEffect} from 'react'
import { Link  } from 'react-router-dom'
import Login from './login/Login';
import { getAuth ,signOut} from 'firebase/auth';
import UserProfileDropdown from './components/UserProfileDropdown';
import { useNavigate } from 'react-router-dom'


function Navbar() {

  const [isAuth,setIsAuth]= useState(localStorage.getItem("isAuth"));
  const [isName,setName]= useState("")
  const [isEmail,setEmail]= useState("")
  const [isUrl,setUrl]= useState()

  const auth = getAuth();
  const user = auth.currentUser;
  
  
  let navigate = useNavigate();

  useEffect(() => {
    if(user){
      setName(user.displayName);
      setUrl(user.photoURL);
      setEmail(user.email);
    }
    else{
      setIsAuth(false)
    }
  }, [user])


  
  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.setItem("isAuth",false)
      setIsAuth(false)
      window.location.pathname="/"
    })
  }
  
  
 

  return (
    <div className='flex flex-col'>
    <ul className="flex justify-between items-center h-20">
        <li className="mr-3">
            <Link className="inline-block border bg-gradient-to-r
             from-indigo-500 border-b-blue-100 rounded-full py-2 px-4
              bg-blue-500 hover:bg-blue-700 text-white ml-2" 
              to="/">Home</Link>
        </li>
        <li className="mr-3">
            {!isAuth
            ?(<Login setIsAuth={setIsAuth} 
              className="inline-block py-2 px-4
              border-b-blue-100  transition-all   
              ease-in duration-1000 hover:bg-gradient-to-r from-indigo-500 rounded-full" >
              Log in
             </Login>):
(             <UserProfileDropdown isUrl={isUrl} isName={isName} isEmail={isEmail} sO={signUserOut}/>)             }
        </li>
    </ul>
</div>
  )
}


export default Navbar;