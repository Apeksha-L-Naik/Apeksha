import React from 'react'
import './Signin.css';
import { useState ,} from 'react';
import { NavLink } from 'react-router-dom';

const Signin = () => {

  const [action,setAction] = useState("Login");
  const data = ({name:"",email:"",password:""});
  
  const [inputData,setInputData] = useState(data);

  
  const handleData= (e)=>{
    setInputData({...inputData, [e.target.name]:e.target.value})
    console.log(inputData)
}

  return (
    <>
    
    <div className='container'  >
        <div className='login'>
          <h2>{action}</h2>
        </div>
        <div className='underline'></div>
         <div className='inputs'>
          {action==="Login"?<div></div>:<div className='input1'>
          <input type='text'name='name' value={inputData.name} onChange={handleData} placeholder='Enter Name'></input>
        </div>}
        <div className='input2'>
          <input type='text' name='email' value={inputData.email} onChange={handleData} placeholder='Enter Email'></input>
        </div>
        <div className='input3'>
          <input type='text' name='password' value={inputData.password} onChange={handleData} placeholder='Enter Password'></input>
        </div>
         </div>
         {action==='Signup'?<div></div>:<div className='forget'>forget password?<span>Click Here</span></div>}

         <div className='submit'>
          <div className={action==='Login'?'sub gray':'sub'}  onClick={()=>{setAction("Signup")}}>Signup</div>
          <div className={action==='Signup'?'sub gray':'sub'}  onClick={()=>{setAction("Login")}}>Login</div>
         </div>         
    </div>
    <NavLink to='/course' className='start'>START</NavLink>
    </>
  )
}

export default Signin