import React, { useState, useEffect} from 'react'

function Form() {
    const data= {name:"", email:"",password:""};
    const[inputData,setInputData]= useState(data)
    const[flag,setFlag]= useState(false)
    useEffect(()=>{
        console.log("Registered")
    },[flag])
    const handleData= (e)=>{
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!inputData.name||!inputData.email||!inputData.password){
            alert("All data are mandatory")
        }
        else{
            setFlag(true)
        }
    }
  return (
    <div>
        <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name},You've registered successfully</h2>:""}</pre>
       <form className='container'onSubmit={handleSubmit}>
       <div className='header'>
        <h1>Registration Form</h1>
       </div>
       <div>
         <input type='text' placeholder='Enter your Name' name='name' value={inputData.name} onChange={handleData}></input>
       </div>
       <div>
         <input type='text' placeholder='Enter your Email' name='email' value={inputData.email} onChange={handleData}></input>
       </div>
       <div>
         <input type='text' placeholder='Enter your Password' name='password' value={inputData.password} onChange={handleData}></input>
       </div>
       <div>
       <button type='submit'>Submit</button>
       </div>
       </form>
    </div>
  )
}

export default Form