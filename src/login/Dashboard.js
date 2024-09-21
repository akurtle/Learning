import React,{useState,useEffect} from 'react'
import { getAuth,signOut } from 'firebase/auth';
import { useLocation,useNavigate } from 'react-router-dom';


function Dashboard({props}) {

  const [isName,setName]= useState("")
  const [isEmail,setEmail]= useState("")
  const [isUrl,setUrl]= useState()
  const [isAuth,setIsAuth]= useState(localStorage.getItem("isAuth"));


  const [selectedSection, setSelectedSection] = useState("Account");

  const toggle = (event) => {
    setSelectedSection(event.target.id); 
  }

  const auth = getAuth();
  const user = auth.currentUser;
  


  useEffect(() => {
    if(user){
      setName(user.displayName);
      setUrl(user.photoURL);
      setEmail(user.email);
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
    <div className='flex flex-row justify-center items-center h-full absolute left-[25%]'>
      <div id='left-side'>
        <ul className='flex flex-col gap-8'>
          <li onClick={toggle} id="Account" className='inline-block border bg-gradient-to-r
             from-indigo-500 border-b-blue-100 rounded-full py-2 px-4
              bg-blue-500 hover:bg-blue-700 text-white ml-2 cursor-default'>
            Account Information
          </li>
          <li onClick={toggle} id="Courses" className='inline-block border bg-gradient-to-r
             from-indigo-500 border-b-blue-100 rounded-full py-2 px-4
              bg-blue-500 hover:bg-blue-700 text-white ml-2 cursor-default'>
            Courses
          </li>
          <li onClick={toggle} id="Settings" className='inline-block border bg-gradient-to-r
             from-indigo-500 border-b-blue-100 rounded-full py-2 px-4
              bg-blue-500 hover:bg-blue-700 text-white ml-2 cursor-default'>
            Settings
          </li>
          <li onClick={signUserOut} id="LogOut" className='inline-block border bg-gradient-to-r
             from-indigo-500 border-b-blue-100 rounded-full py-2 px-4
              bg-blue-500 hover:bg-blue-700 text-white ml-2 cursor-default'>
            Log out
          </li>
        </ul>
      </div>
      <hr className='rotate-90 w-56 '></hr>
      <div id="right-side">
        {selectedSection === "Account" && (
          <div id='showingAccount'>
            <ul className='flex flex-col gap-5'>
              <li><img className='rounded-full' src={isUrl} alt="User avatar"></img></li>
              <li>Username: {isName}</li>
              <li>Email: {isEmail}</li>
            </ul>
          </div>
        )}
        {selectedSection === "Courses" && (
          <div id='showingCourses'>
            <div>Courses content here</div>
          </div>
        )}
        {selectedSection === "Settings" && (
          <div id='showingSettings'>
            <div>Settings</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard