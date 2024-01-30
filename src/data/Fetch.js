// Fetching data from udemy,youtube and other blogs

import axios from "axios"


let categories=[
    {key:1,name:"Business"},
    {key:2,name:"Design"},
    {key:3,name:"Development"},
    {key:4,name:"Finance"},
    {key:5,name:"Health"},
    {key:6,name:"Fitness"},
    {key:7,name:"IT"},
    {key:8,name:"Software"},
    {key:9,name:"Lifestyle"},
    {key:10,name:"Marketing"},
    {key:11,name:"Music"},
    {key:12,name:"Office Productivity"},
    {key:13,name:"Personal Development"},
    {key:14,name:"Photography & Video"},
    {key:15,name:"Teaching & Academics"},    
]

async function fetchData(category){
    try {
        let request = await axios.get(`https://www.udemy.com/api-2.0/courses/?page=1&page_size=10&category=${category}`)
        let data = request.result;
        
        console.log(request)
        let courseTitle=[];
        data.array.forEach(element => {
            if(element._class==="course"){
                courseTitle.push(element.title)
            }
        });
        console.log(courseTitle)
        let courseHeadline=[];
        
    } catch (error) {
        
    }
}

fetchData("Development");

export {categories,fetchData}