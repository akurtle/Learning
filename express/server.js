const express = require("express");
const bodyParser = require('body-parser');
const app=express()
const cors = require('cors');

const PORT=8000;


const categoryMappings = {
    'Finance': 'Finance %26 Accounting',
    'Health': 'Health %26 Fitness',
    'Photography':'Photography %26 Video',
    'Teaching':'Teaching %26 Academics',
    'IT':'IT %26 Software'
    
  };

app.use(bodyParser.json());




app.get(`/apiUdemy`,(req,res)=>{
    let data = req.query.category
    console.log(req.query)
    if( (data.trim()) in categoryMappings){   
        data = categoryMappings[req.query.category.trim()]
    }

    fetch(`https://www.udemy.com/api-2.0/courses/?page=${req.query.page}&page_size=10&category=${data}`,{
       headers:{
           "Accept": "application/json, text/plain, */*",
           "Authorization": "Basic QnUzUnd6YlRKYTk5ZG5qcndrVlBGZUJ6MWJJTlhicHk0andNRmt3cTpuTENHUTkydGpvV1NsS3JpajNCWG5jZnFLUjhwbjhrZWgxN0t5QnBkOXBzdDZvNE9vNGtIdVNWVVowYlIyYmxSSFlRYVR2OHVSTUVOcUNSNFpoc1VjSEZqa0E3OWljTVUzRTg3cTJJSWxzS21hUFowVkVnODk3V05qS0xpVHRJSQ==",
           "Content-Type": "application/json"
         }
    })
   .then(response=>response.json())
   .then(dataToSend=>res.json(dataToSend))
})







app.listen(PORT,()=>{
    console.log("Server listening on port:",PORT)
})