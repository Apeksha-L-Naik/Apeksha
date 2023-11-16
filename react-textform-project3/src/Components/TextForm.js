import React, { useState } from 'react'

export default function TextForm() {
    const handleUpClick= () =>{
        // console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        
    }
    const handleloClick= () =>{
        // console.log("Ulower case was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick= () =>{
        // console.log("Ulower case was clicked" + text);
        let newText = " ";
        setText(newText)
    }
    const handleOnChange= (event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text,setText] = useState("Enter Text");
    // setText("new text")
  return (
    <>
    <div className='area'>
        <h3>Enter Text Here</h3>
        <textarea className='text' value={text} onChange={handleOnChange}></textarea>
    </div>
    <div>

    <button className='btn' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn' onClick={handleloClick}>Convert to Lowercase</button>
    <button className='btn' onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className='area'>
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").filter((element)=>{return element.length!== 0}).length} and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h3>Preview</h3>
        <p className='pre'>{text.length>0?text:"Enter text above to preview it"}</p>
    </div>
    </>
    
  )
}