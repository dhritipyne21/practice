import React,{ useState } from "react";
import Child from "./Child";

const Parent =()=>{

    const [name,setName] = useState('Kate');

    return(
        <>JSX 
        <Child kuchbhi={name}> </Child>
        </>//jsx fragment
        
    )
}
export default Parent;