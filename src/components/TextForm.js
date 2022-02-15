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
        <div className="form-group">
         {/* <label for="myBox">{props.heading}</label> */}
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='light'? 'whitesmoke': '#181a1c', color: props.mode ==='light'? 'black': 'whitesmoke'}} id="myBox" rows="8"></textarea>
        </div>
       </form>
       <div className="button btn btn-primary mt-3" onClick={upperCase}>Uppercase</div>
       <div className="button btn btn-primary mt-3 ms-3" onClick={lowerCase}>Lowercase</div>
       <div className="button btn btn-primary mt-3 ms-3" onClick={textBold}>Bold</div>
       <div className="button btn btn-primary mt-3 ms-3" onClick={textUnderline}>Underline</div>
       <div className="button btn btn-primary mt-3 ms-3" onClick={removeExtraSpaces}>Remove Extra Spaces</div>
       <div className="button btn btn-danger mt-3 ms-3" onClick={clearText}>Clear</div>
      </div>

      <div className="container my-3" style={{color: props.mode ==='light'? 'black': 'whitesmoke'}}>
          <h3>Your text Summary</h3>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p> {0.0008 * text.split(" ").length} Minutes read</p>
          <h3>Preview</h3>
          <p>{text}</p>
      </div>
      </>
  )
}
