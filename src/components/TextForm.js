import React,{useState} from "react";


export default function TextForm(props) {

  const handleUpClick=()=>{
     // console.log("uppercase was clicked")
      let newText=text.toUpperCase();
      setText(newText);
  }
  const handleLoClick=()=>{
    // console.log("uppercase was clicked")
     let newText=text.toLowerCase();
     setText(newText);
 }
 const handleClearClick=()=>{
  // console.log("uppercase was clicked")
   let newText="";
   setText(newText);
}
  const handleOnChange=(event)=>{
   // console.log("Onchange")
    setText(event.target.value)
}

const handleCopy=()=>{
   var text=document.getElementById("myBox");
   text.select();
   navigator.clipboard.writeText(text.value);

}

const handleExtraSpace =()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
}

const  handleColor=()=>{
   if(myStyle.color==='black')
   {
    setmyStyle({
       color: 'red'
     
    })
    
   }
   else {
    setmyStyle({
      color: 'black'
    })
  }
}
const [myStyle, setmyStyle]=useState({
   color:'black'
})


  const [text,setText] = useState('Enter text here');
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
                <textarea className="form-control" value={text} style={myStyle} onChange={handleOnChange} id="myBox" rows="7">
          </textarea>
       
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
            Remove Extra Space
          </button>
          <button className="btn btn-primary mx-2"  onClick={handleColor}>
            Change Red Color
          </button>
    </div>
    <div className="container my-4">
       <h2> Your text summary</h2>
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <h2>Preview</h2>
       <p>{text}</p>
    </div>
    </>
  );
}
