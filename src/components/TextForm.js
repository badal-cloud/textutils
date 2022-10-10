import React,{useState} from "react";


export default function TextForm(props) {

  const handleUpClick=()=>{
     // console.log("uppercase was clicked")
      let newText=text.toUpperCase();
      setText(newText);
  }

  const handleOnChange=(event)=>{
   // console.log("Onchange")
    setText(event.target.value)
}
  const [text,setText] = useState('Enter text here');
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7">
          </textarea>
       
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to uppercase
          </button>
    </div>
  );
}
