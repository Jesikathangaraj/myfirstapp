// import './App.css';
import Button from "./Protfolio/Button";
// import Sidebar from './Protfolio/Sidebar';
// import Mainpage from './Protfolio/Mainpage';
// function App(){
//   return (
//   <div><Button/>
//   <Sidebar/>
//   <Mainpage/>
//   </div>
//   )

// }
// export default App;


import "./App.css";
import { useState } from "react";
function App(){
  
  const navlist=[
    {title:"About"},
    {title:"Skills"},
    {title:"Experience"}
  ];

    const [input,setInput]=useState("");
    const [data,setData]=useState(navlist);
  
  function onFormSubmit(e){
    e.preventDefault();
    console.log(input);
  }
  return(
  <div className="Sidebar">
    <h1>hello</h1>
  <form onSubmit={(e)=>{onFormSubmit(e)}}>
   
    <input type="text" onChange={(e)=>{setInput(e.target.value)}} value={input}/>
    <input type="submit"/>
    </form>
    {input}
    {data.map((val)=>{
      return(<button>
        {val.title}
      </button>)
    })}
  </div>
  )
  
  
} 
export default App;

