import React, { useContext, useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./Staff.scss";
import TaskCard from "../Task/TaskCard";
import { Context } from "../../utils/context";
import { getToken } from "../../utils/Auth";

const Staff = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const {task,SetTask,filteredTask,SetFilteredTask}=useContext(Context)

  const reqOptions={
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      Authorization:`Bearer ${getToken()}`
    }
  }
  
  const getTask=async ()=>{
    try {
  
      const req=await fetch('http://127.0.0.1:1337/api/tasks',reqOptions)
      const res=await req.json()
  
      if(res.data){
        SetTask(res.data)
        handleDateChange("refresh")
      }
  
    } catch (error) {
        console.log(error)
    }
  }

  const handleDateChange = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === "forward") {
      newDate.setDate(newDate.getDate() + 1);
    } if(direction==="backward") {
      newDate.setDate(newDate.getDate() - 1);
    }else{
      newDate.setDate(newDate.getDate());
    }
    setCurrentDate(newDate);
  };

  const getDayOfWeek = (date) => {
    return date.getDay();
  };

  const filterTask=()=>{
      const filteredTasks = task.filter(tasks => {
      const taskDate = new Date(tasks.attributes.date);
      return (
        taskDate.getDate() === currentDate.getDate() &&
        taskDate.getMonth() === currentDate.getMonth() &&
        taskDate.getFullYear() === currentDate.getFullYear()
      );
    });
    
      SetFilteredTask(filteredTasks)
    
  }

  
  useEffect(() => {
    getTask();
    filterTask();
  }, []); // Run only on initial component mount

  useEffect(() => {
    filterTask(); // Update filteredTask when currentDate changes
  }, [currentDate]);

  return (
    <div className="staff-container">
      <div className="staff-head">
        <h4>Staff Schedule</h4>
        <span>See all</span>
      </div>
      <div className="date">
        <div>
          <span>
            {new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
              currentDate
            )}
            ,&nbsp;
          </span>
          {new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
          }).format(currentDate)}
        </div>
        <div className="arrow">
          <IoIosArrowBack onClick={() => handleDateChange("backward")} />
          <IoIosArrowForward onClick={() => handleDateChange("forward")} />
        </div>
      </div>
      <div className="day-container">
        <div className="day">
          <ul>
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thr</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
        </div>
        <div className="day-num">
          <ul>
          {[1, 2, 3, 4, 5, 6,7].map((item,index) => (
              <li key={index} className={getDayOfWeek(currentDate) === index ? 'highlight' : ''}>
                {item
                }
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="task-container">
        {
          filteredTask?.map((filtask,id)=>(
            <TaskCard data1={filtask} key={id}/>
          ))
          }
      </div>
    </div>
  );
};

export default Staff;
