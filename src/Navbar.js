import React,{useState,useEffect} from 'react'
import { Link ,Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex flex-col'>
    <ul className="flex justify-between items-center h-20">
        <li className="mr-3">
            <Link className="inline-block border bg-gradient-to-r from-indigo-500 border-b-blue-100 rounded-full py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white ml-2" to="/">Home</Link>
        </li>
        <li className="mr-3">
            <Link className="inline-block py-2 px-4 border-b-blue-100  transition-all   ease-in duration-1000 hover:bg-gradient-to-r from-indigo-500 rounded-full" href="#">Log in</Link>
        </li>
    </ul>
</div>
  )
}

export default Navbar