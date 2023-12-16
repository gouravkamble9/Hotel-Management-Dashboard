import React from 'react'
import { Link } from 'react-router-dom'

const Favourite = () => {
  return (
    <div className='flex'>Favourite
    <Link to="/dashboard" style={{fontSize:"25px"}}>Home</Link>
    </div>
  )
}

export default Favourite