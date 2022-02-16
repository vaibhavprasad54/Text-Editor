import React, { useState } from 'react';


export default function TextForm(props) {

    const [text, setText] = useState('');

    const upperCase = () => {
        // console.log("Uppercase was  clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase", "success");
    }

    const lowerCase = () => {
        // console.log("Uppercase was  clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase", "success");
    }

    const clearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("onChange was  invoked");
        setText(event.target.value);
    }

    const textBold = () => {
        var element = document.getElementById("myBox");
        element.style.fontWeight = "bold";
        props.showAlert("Converted to Bold!", "success");
    }

    const textUnderline = () => {
        var element = document.getElementById("myBox");
        element.style.textDecoration = "underline";
        props.showAlert("Text underlined!", "success");
    }

    const removeExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!", "success");
    }

  return (
      <>
      <div className="container my-3" style={{color: props.mode ==='light'? 'black': 'whitesmoke'}}>
       <form>
           <h3>{props.heading}</h3>
        <div className="form-group my-1">
         {/* <label for="myBox">{props.heading}</label> */}
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light'? 'whitesmoke': '#181a1c', color: props.mode ==='light'? 'black': 'whitesmoke'}} id="myBox" rows="8"></textarea>
        </div>
       </form>
       <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={upperCase}>Uppercase</button>
       <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={lowerCase}>Lowercase</button>
       <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={textBold}>Bold</button>
       <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={textUnderline}>Underline</button>
       <button disabled={text.length===0} className="button btn btn-primary mx-1 my-1" onClick={removeExtraSpaces}>Remove Extra Spaces</button>
       <button disabled={text.length===0} className="button btn btn-danger mx-1 my-1" onClick={clearText}>Clear</button>
      </div>

      <div className="container my-3" style={{color: props.mode ==='light'? 'black': 'whitesmoke'}}>
          <h3>Your text Summary</h3>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p> {0.0008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
      </>
  )
}

