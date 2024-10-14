import axios from 'axios'
import React, { useState } from 'react'

const ApiHandling = () => {
    const [response1data, setresponse1data] = useState();
    const [Reset1,setReset1] = useState(false);
    const [Reset2,setReset2] = useState(false);

    
    const handleGet1 = () => {
        axios.get("https://jsonplaceholder.typicode.com/users") //request 
        .then(res1=>{
            console.log("response1.................",res1.data[2].name)
            setresponse1data(res1.data[2].name)
            setReset1(true);
        })
    }
    
    const [response2Data, setresponse2Data] = useState();
    const handleGet2 = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts") // request from frontend to api with an help of axios
        .then(res2=>{
            console.log("response2.....................",res2.data[3].body)
            setresponse2Data(res2.data[3].body);
            setReset2(true);
        })
    }
    const handleReset1 = () => {
        setresponse1data("");
        setReset1(false);
    }
    const handleReset2 = () => {
        setresponse2Data("");
        setReset2(false);
    }
  return (
    <div><h1>Welcome to Api Handling!!!</h1>
    <button onClick={handleGet1}>Get1</button>
    <h2>{response1data}</h2>
    {Reset1 && (<button onClick={handleReset1}>reset1</button>)}
    <br></br>
    <button onClick={handleGet2}>Get2</button>
    <h2>{response2Data}</h2>
    {Reset2 && (<button onClick={handleReset2}>reset2</button>)}
    </div>
  )
}

export default ApiHandling