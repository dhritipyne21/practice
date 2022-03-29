import React, {useState} from "react";


const EventListener =()=>{

    const [name,setName] = useState('Kate');

    return(
        <>{name}
        <button onClick={()=>setName("Hello Kate")}>Change Name</button>
        </>
        
    )
}
export default EventListener;