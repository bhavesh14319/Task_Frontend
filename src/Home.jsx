import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
  return (
    <div>
        <div style={{maxWidth:"100%",display:"flex",justifyContent:"space-between",background:"#f2f2f2",padding:"20px"}}>
        <button onClick={()=>{navigate("/1")}}>Query1</button>
        <button onClick={()=>{navigate("/2")}}>Query2</button>
        <button onClick={()=>{navigate("/3")}}>Query3</button>
        <button onClick={()=>{navigate("/4")}}>Query4</button>
        <button onClick={()=>{navigate("/5")}}>Query5</button>
      </div>
      
    </div>
  )
}

export default Home
