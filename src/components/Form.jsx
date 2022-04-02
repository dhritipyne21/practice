import React,{useState} from "react";

const Form = () => {
    
    const [formData,setFormData] = useState({city:""})
    const handleClick = (e) => {
        e.preventDefault()
        console.log(formData.city)
    }
    return (
    <>
    <div>Form</div>
    <form activity ="">
        <input  type = ""
            name=""
            value = {formData.city}
            onChange={(e)=>{setFormData({...formData, city: e.target.value})}}
        />
        <button type = "submit" onClick={(e)=>{handleClick(e)}}>Submit</button>
    </form>
    <h5>{formData.city}</h5>
    </>
    )
}

export default Form