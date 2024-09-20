import "./Sidebar.css";
import Navbar from"./Navbar";
import { useState }from"react";
function Mainpage() {
    const [number,SetNumber]=useState(1)
    function sub(){
        SetNumber(number-1)
    }
    function add(){
        SetNumber(number+1)
    }
    return (
        <div className="Sidebar">
        {/* <Navbar />
        <h1>Hi I'm JAMES MABE</h1> */}
        <button onClick={sub}>decrement</button>
        <button onClick={add}>increment</button>
        {number}
        </div>
    )
}
export default Mainpage;