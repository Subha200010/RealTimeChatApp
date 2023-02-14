import React, { useState } from 'react';
import './Join.css';
import logo from'../logos/logo1.png';
import {Link} from 'react-router-dom';
let user;
const sendUser =()=>{
  user=document.getElementById('JoinInput').value; 
  document.getElementById('JoinInput').value="";
}

const Join =()=>{

   
   
   const[name, setname]=useState("")
  //  console.log(name);



  return (
    <div className="JoinPage">
       <div className="JoinContainer">
        <img src={logo} alt="logo" />
        <h1>HEY!!</h1>
        <input onChange={(e)=>setname(e.target.value)} placeholder ="Enter your Id"type="text" id='JoinInput' />
       <Link onClick={(event)=>!name?event.preventDefault():null} to="/chat" > <button onClick={sendUser} className='JoinLogIn'>Log in </button> </Link>


       </div>
    </div>
  )
}

export default Join
export {user}
