import React from "react";
import "./TaskCard.scss";
import img from "../../assets/profile.avif";
import { IoFlag } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const TaskCard = ({ data1 }) => {
  const getAreaColor = (area) => {
    switch (area) {
      case "Front Office":
        return "office-color";
      case "Kitchen":
        return "kitchen-color";
      case "Guest Room":
        return "guest-room-color";
      default:
        return "";
    }
  };

  const areaColorClass = getAreaColor(data1.attributes.area);

  return (
    <div className="task-card">
      <div className="task-left">
        <div className="task-prof">
          <img src={img} alt="profile-pic" />
        </div>
      </div>
      <div className="task-right">
        <div className="area">
          <span className={`area-block ${areaColorClass}`}>
            {data1.attributes.area}
          </span>
        </div>
        <div className="task-assigned">
          <div className="name">{data1.attributes.name}</div>
          {data1.attributes.status === "Completed" ? (
            <div className="compl-new">completed all task</div>
          ) : (
            <div className="compl-new">get a new task</div>
          )}
          <span className="task-id">#{data1.attributes.task_id}</span>
        </div>
        <div className="task-name">
          <span className="task">{data1.attributes.task}</span>
          <span
            className={`status ${
              data1.attributes.status === "Completed" ? "completed" : "new"
            }`}
          >
            {data1.attributes.status === "Completed" ? (
              <FaCheckCircle />
            ) : (
              <IoFlag />
            )}
            {data1.attributes.status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
