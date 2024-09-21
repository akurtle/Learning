
import React, { useEffect,useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { HiArrowNarrowLeft,HiArrowNarrowRight } from "react-icons/hi";

let category;

function Loader(){
  return(
    <div className='flex justify-center items-center h-screen'>
      <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900'></div>
    </div>
  )
}
function Courses() {


  let state=useLocation()

  
  category = state.state.category


  const urlUdemyHead = "https://www.udemy.com"
  

  const [backEndDataUdemy,setBackEndDataUdemy] = useState([{}])

  const [currPage,setCurrPage] = useState(1)

  const [loader,setLoader] = useState(false)

  function leftArrow(){
    if(currPage!=1){
      setCurrPage(currPage-1) 
    }
  }

  function rightArrow(){
    console.log(currPage)
    setCurrPage(currPage+1)
    
  }


  useEffect(() => {
    const getDataBackUdemy = async () => {
      try {
        setLoader(true);
        const response = await fetch(`/apiUdemy?page=${currPage}&category=${category}`, {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        setBackEndDataUdemy(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    };

    getDataBackUdemy();
  }, [currPage, category]);


  console.log(backEndDataUdemy);
  return (
    <div className='flex flex-col h-screen'>
      <div className='flex justify-center font-sans text-[50px]'>{state.state.category}</div>
      <div className='flex flex-col flex-1 justify-center items-center'>
        {loader ? (
          <Loader />
        ) : (
          backEndDataUdemy.results && backEndDataUdemy.results.map((e) => (
            <div key={e.id} className='flex flex-1 flex-col justify-center items-center'>
              <img className='pt-10 rounded-full' src={e.image_480x270} alt="course_image" />
              <a href={urlUdemyHead + e.url} className='flex flex-1 justify-center items-center pb-2 mb-4 text-[20px]'>{e.title}</a>
            </div>
          ))
        )}
        <div className='inline-flex gap-3'>
          <HiArrowNarrowLeft className='size-8' disabled={currPage === 1} onClick={leftArrow} />
          <div className='text-2xl'>{currPage}</div>
          <HiArrowNarrowRight className='size-8' onClick={rightArrow} />
        </div>
      </div>
    </div>
  )
}


export {category}
export default Courses;