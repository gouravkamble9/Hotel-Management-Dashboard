import React, { useContext } from "react";
import "./Task.scss";
import { getToken } from "../../utils/Auth";
import { useRef } from 'react';
import { GoHome } from "react-icons/go";
import { useNavigate } from "react-router-dom";


const Task = () => {
  const formRef = useRef(null);
  const navigate=useNavigate()

  const handleSubmit = async (event) => {

    event.preventDefault();
    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);


    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({data:{...jsonData}}),
    };

    const req = await fetch("http://127.0.0.1:1337/api/tasks", reqOptions);
    const res = await req.json();

    if (res.data) {
        formRef.current.reset()
        
    }

    if (res.error) {
      console.log(res.error)
      return;
    }
  };

  const handleClick=()=>{
    navigate("/dashboard")
  }

  return (
    <>
    <GoHome onClick={handleClick} className="home-icon"/>
    <div className="task-form-container">
      <div className="form-container">
        <h2>Assign Task</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="input-wrapper">
              <label htmlFor="taskId">Task ID</label>
              <input
                type="text"
                id="taskId"
                name="task_id"
                // value={taskData.taskId}
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="name">Assigned Person</label>
              <input
                type="text"
                id="name"
                name="name"
                // value={taskData.name}
                // onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-wrapper">
              <label htmlFor="area">Area</label>
              <select
                id="area"
                name="area"
                // value={taskData.area}
                // onChange={handleInputChange}
              >
                <option value="">Select Area</option>
                <option value="Front Office">Front Office</option>
                <option value="Guest Room">Guest Room</option>
                <option value="Kitchen">Kitchen</option>
              </select>
            </div>

            <div className="input-wrapper">
              <label htmlFor="task">Task</label>
              <input
                type="text"
                id="task"
                name="task"
                // value={taskData.task}
                // onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="input-row">
            <div className="input-wrapper">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                // value={taskData.date}
                // onChange={handleInputChange}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="taskStatus">Task Status</label>
              <select
                id="taskStatus"
                name="status"
                // value={taskData.taskStatus}
                // onChange={handleInputChange}
              >
                <option value="new">New</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      
    </div>
    </>
  );
};

export default Task;
