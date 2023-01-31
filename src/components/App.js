import React, { useState } from "react";

function App() {
  const[isMouseOver, setMouseOver] = useState(false);
  const[name, setName]= useState();
  const[clientName, setclientName] = useState(false);
function mouseOver(){
  setMouseOver(true);
}
function mouseOut(){
  setMouseOver(false);
}
function handleChange(event){
  setName(event.target.value);
}
function buttonClicked(event){
  setclientName(name)
}
  return (
    <div className="container">
    <h1>Jambo {name}</h1>
    <input onChange={handleChange} type="text" placeholder="What is your name?" value={name}></input>
    <button style={{ backgroundColor: isMouseOver ? "black" : "white" }} onMouseOver={mouseOver} onMouseOut={mouseOut} onClick={buttonClicked} >Submit</button>
    </div>
    //Show hidden elements on hover
  );
}

export default App;
