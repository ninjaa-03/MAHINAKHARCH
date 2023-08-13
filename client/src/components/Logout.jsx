import React, { useEffect } from 'react'
import "./Logout.css"
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();
    useEffect(()=>{
        makelogout();
    })
    const makelogout = async()=>{
        const res =await fetch("logout",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            Credentials:"include"
        })

        if(res.status == 200) 
        {
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
