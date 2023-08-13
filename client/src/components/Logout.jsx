import React, { useContext, useEffect } from 'react'
import "./Logout.css"
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";

function Logout() {
    const navigate = useNavigate();
    const {state, dispatch} = useContext(UserContext);
    useEffect(()=>{
        makelogout();
    })
    const makelogout = async()=>{
        const res =await fetch("/api/logout",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            Credentials:"include"
        })

        if(res.status === 200) 
        {
         dispatch({type:"USER",payload:false})
          navigate("/login");
        }
    }
  return (
    <>
        <div className='logout'>
            Logging Out User.
        </div>
    </>
  )
}

export default Logout
