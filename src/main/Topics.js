import React from 'react'
import { Link } from 'react-router-dom'
import {categories} from '../data/Fetch'

function Topics() {
  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='flex h-1/3 w-[900px] items-center flex-wrap justify-center '>
          {categories.map((e)=>
          <Link key={e.key} className='cursor-default text-4xl inline-block border border-b-blue-100 rounded-full py-2 px-4
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