import React, { useState } from 'react'
import './Registration.scss'
import { Link, useNavigate } from "react-router-dom";
import { setToken } from '../../utils/Auth';

const Registration = () => {
  const [message,SetMessage]=useState(null)
  const navigate=useNavigate()
    const register=async (event)=>{
        event.preventDefault();
        SetMessage(null)

        const formData=new FormData(event.target)
        const jsonData=Object.fromEntries(formData)

        const reqOptions={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(jsonData)
        }

        const req=await fetch('http://127.0.0.1:1337/api/auth/local/register',reqOptions)
        const res=await req.json()

        if(res.error){
          console.log(res.error)
            SetMessage(res.error.message)
            return
        }

        if(res.jwt && res.user){
          setToken(res.jwt);
          navigate("/", { replace: true });
          SetMessage("Successful Registration")
        }
    }
  return (
    <div className="register-sec">
      <div className="register-container">
      <div className="register-right">
          <div className="content">
            <div>
              <h1>Hotel Management Dashboard</h1>
            </div>
            <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quisquam, maxime deleniti. Facilis repudiandae natus expedita
                
              </p>
            </div>
          </div>
        </div>
        <div className="register-left">
          <div className="login">
            <h1>Register</h1>
          </div>
          <div className="icon">
            <img src="./logo.png" alt="" />
          </div>

          <div className="login-form">
            <form onSubmit={register}>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
              </div>
              <button type='submit'>Register</button>
            </form>
          </div>

          
           
          <Link to='/' style={{textDecoration:"none",color:"black"}}>Login</Link>
          
        </div>
        
      </div>
    </div>
  );
}

export default Registration