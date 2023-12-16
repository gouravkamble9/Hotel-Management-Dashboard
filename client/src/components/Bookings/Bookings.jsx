import React, { useEffect, useState } from "react";
import "./Bookings.scss";
import { getToken } from "../../utils/Auth";
import pro from '../../assets/profile.avif'

const Bookings = () => {

  
const [booking,Setbooking]=useState([])

const reqOptions={
  method:'GET',
  headers:{
    'Content-Type':'application/json',
    Authorization:`Bearer ${getToken()}`
  }
}

const getbookings=async ()=>{
  try {

    const req=await fetch('http://127.0.0.1:1337/api/bookings',reqOptions)
    const res=await req.json()

    if(res.data){
      Setbooking(res.data)

    }

  } catch (error) {
      console.log(error)
  }
}

useEffect(()=>{
    getbookings()
},[])


  return (
    <div className="bookingContent">
      <h4>Booking List</h4>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Guest Name</th>
            <th>Mobile</th>
            <th>Room Type</th>
            <th>Checkin</th>
            <th>Checkout</th>
            <th>Payment</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {
            booking?.map((item,id)=>(
              <tr key={id}>
              <td>{item.attributes.booking_id}</td>
              <td>
                <div className="user-prof">
                  <div className="img-con">
                    <img src={pro} alt="" />
                  </div>
                  <span className="name">{item.attributes.name}</span>
                </div>
              </td>
              <td>{item.attributes.mobile}</td>
              <td>{item.attributes.room_type}</td>
              <td>{item.attributes.checkin}</td>
              <td>{item.attributes.checkout}</td>
              <td>
                <div className={`pay ${item.attributes.payment==='paid' ? 'paid' : ''}`}>{item.attributes.payment}</div>
              </td>
            </tr>
            ))
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
