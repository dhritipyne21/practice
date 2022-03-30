import React,{useState} from "react";
const Listing = () => {
    const movies = ["HP", "DP", "RS", "YY", "YY"]
    return (
        <ul>
            {movies.map((data, idx)=>{
                return(<li key={idx}>{data}</li>)
            })}
        </ul>
    )
}

export default Listing;