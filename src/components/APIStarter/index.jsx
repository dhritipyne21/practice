import React,{useState, useEffect} from "react";

const APIStarter = () => {

    const [happy,setHappy] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setHappy(json))
    },[])
   
    return (
        <ul>
        {happy.map((data)=> <li key = {data.id}>{data.title}</li>)}
        </ul>
    )
}

export default APIStarter