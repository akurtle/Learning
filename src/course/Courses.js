import React from 'react'
import { useLocation } from 'react-router-dom'
import {fetchData } from '../data/Fetch';


function Courses() {
    let state = useLocation();
    const currCourse = state.state.category;

  return (
    <div>{currCourse}</div>
  )
}

export default Courses;