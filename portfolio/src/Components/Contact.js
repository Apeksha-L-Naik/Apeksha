import React from 'react'
import {useState,useEffect} from 'react'
import img7 from './Images/contact.jpg'

function Contact() {
  const data= {name:" ", email:" ",message:" "};
    const[inputData,setInputData]= useState(data)
    const[flag,setFlag]= useState(false)
    useEffect(()=>{
      console.log("Registered")
  },[flag])
    const handleChange= (e)=>{
      setInputData({...inputData, [e.target.name]:e.target.value})
      console.log(inputData)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!inputData.name||!inputData.email||!inputData.message){
        alert("All data are mandatory")
    }
    else{
        setFlag(true)
    }
}
  return (
    <>
     <pre>{(flag)?<h2 className='ui-define'>Hello {inputData.name},You'r message is sent</h2>:""}</pre>
     <div className='im7'>
      <img src={img7} alt=''/>
    </div>
    <div className='contact' onSubmit={handleSubmit}>
      <p>Name</p>
      <input type='text' name='name' placeholder='Enter your name' value={inputData.name} onChange={handleChange}/>
      <p>Email</p>
      <input type='text' name='email' placeholder='Enter your email' value={inputData.email} onChange={handleChange}/>
      <div className='area'>
        <p>Send a message here</p>
      <textarea placeholder='Enter Text' name='message' value={inputData.message} onChange={handleChange}></textarea>
      </div>
      <div className='btn'>
        <button>Submit</button>
      </div>
    </div>
    </>
  )
}

export default Contact