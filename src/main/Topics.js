import React from 'react'
import { Link } from 'react-router-dom'
import {categories} from '../data/Fetch'

function Topics() {




  return (
    <div className='flex flex-col gap-5 h-screen justify-center items-center'>
    <div className='search'>
      <input type="text" className='border border-black rounded-full py-2 px-4'></input>
    </div>
      <div className='flex h-1/3 w-[900px] items-center flex-wrap justify-center '>
          {categories.map((e)=>
          <Link key={e.key} className='cursor-pointer text-4xl inline-block border border-b-blue-100 rounded-full py-3 m-1 px-5
            bg-violet-700 transition-all bg-gradient-to-r from-indigo-500
            hover:shadow-black hover:bg-blue-700 text-white font-light- ml-2' 
            id='topics'
            to={{pathname:"/learning/src/course/Courses.js"}}
            
            state={{category:e.name}}
            >{e.name}</Link>)}
      </div>
    </div>
  )
}

export default Topics