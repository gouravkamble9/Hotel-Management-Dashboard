import React from 'react'
import { Link } from 'react-router-dom'

const Message = () => {
  return (
    <div className='flex'>Message
    <Link to="/dashboard" style={{fontSize:"25px"}}>Home</Link>
    </div>
  )
}

export default Message