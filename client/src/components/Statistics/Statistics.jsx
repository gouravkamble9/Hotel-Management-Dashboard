import React, { useContext, useEffect} from "react";
import StatisticsCard from "./StatisticsCard/StatisticsCard";
import "./Statistics.scss";
import { FaBed } from "react-icons/fa";
import { BiSolidLogIn } from "react-icons/bi";
import { BiSolidLogOut } from "react-icons/bi";
import { getToken } from "../../utils/Auth";
import { Context } from "../../utils/context";

const Statistics = () => {
  const {
    arrived,
    booked,
    checkin,
    Setarrived,
    SetCustomerData,
    Setbooked,
    Setcheckin,
  } = useContext(Context);


  const reqOptions={
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      Authorization:`Bearer ${getToken()}`
    }
  }

  const getCustomers=async ()=>{
    try {
        const response=await fetch('http://127.0.0.1:1337/api/customers',reqOptions)
        const {data}=await response.json()
        if(data && data.length>0){
          SetCustomerData(data)
          const data1=data.filter((item)=>item?.attributes?.booking_status==='arrived')?.length
          const data2=data.filter((item)=>item?.attributes?.booking_status==='booked')?.length
          const data3=data.filter((item)=>item?.attributes?.booking_status==='check-in')?.length
          Setarrived(data1)
          Setbooked(data2)
          Setcheckin(data3)
      }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
      getCustomers()
  },[])


  return (
    <div className="stat-container">
      <StatisticsCard
        text={"Total Arrived"}
        color={"#11b983"}
        logo={<BiSolidLogOut />}
        data={arrived}
      />
      <StatisticsCard
        text={"Total Booked"}
        color={"#ffa972"}
        logo={<FaBed />}
        data={booked}
      />
      <StatisticsCard
        text={"Total Check in"}
        color={"#048ed5"}
        logo={<BiSolidLogIn />}
        data={checkin}
      />
    </div>
  );
};

export default Statistics;
