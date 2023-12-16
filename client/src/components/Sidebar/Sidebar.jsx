import React, { useContext, useState } from "react";
import "./Sidebar.scss";
import logo from "../../assets/logo.png";
import { iconsArray } from "../../data/icons";
import { IoLogOutOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Context } from "../../utils/context";

const Sidebar = () => {
  const {menuIcon,SetMenuIcon}=useContext(Context)
  const [selectedicon, Setselectedicon] = useState("home");
  const navigate=useNavigate()

  const handleClick=(item)=>{
    Setselectedicon(item.menu)
    SetMenuIcon(!menuIcon)
    navigate("/dashboard"+item.path)
  }
  return (
    <div className={`sidebar ${menuIcon ? "active":""}`}>
      <div className="side-container">
        <div className="up-sec">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="menu">
            <ul>
              {iconsArray.map((item, index) => (
                <li
                  key={index}
                  className={selectedicon === item.menu ? "highlight" : ""}
                  onClick={()=>handleClick(item)}
                >
                  {item.icon}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="down-sec">
          <div className="expand">
            <IoLogOutOutline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
