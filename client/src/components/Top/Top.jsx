import React, { useContext } from 'react'
import './Top.scss'
import { LiaBellSolid } from "react-icons/lia";
import profile from '../../assets/profile.avif'
import { Context } from '../../utils/context';
import { PiSignOutBold } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { removeToken } from '../../utils/Auth';
import { IoMenu } from "react-icons/io5";





const Top = () => {
    const {user,menuIcon,SetMenuIcon}=useContext(Context)
    const navigate=useNavigate()
  const handleLogout = () => {
    removeToken();
    navigate("/", { replace: true });
  };

  const handleMenu=()=>{
    SetMenuIcon(!menuIcon)
  }
  return (
    <div className='top-container'>
        <div className='top-left'>
            <div className='h-text'>Welcome <span>{user}</span></div>
            <p>Don't forget to check your activity</p>
        </div>

        <div className='top-right'>
            <div className='menu'>
            <IoMenu className='menu-icon' onClick={()=>handleMenu()}/>
            <div className='noti'>
                <LiaBellSolid/>                
            </div>
            </div>
                
            <div className='user'>
                <div className='user-info'>
                    {user}

                    <span>Owner</span>
                </div>
                <div className="user-logo">
                    <img src={profile} alt="" />
                </div>
                <div className='logout'>
                    <PiSignOutBold onClick={handleLogout}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top