import React from 'react'
import { removeToken } from '../../utils/Auth';
import { useNavigate } from 'react-router-dom';
import './Dashboard.scss'
import Top from '../../components/Top/Top';
import Statistics from '../../components/Statistics/Statistics';
import Bookings from '../../components/Bookings/Bookings';
import Staff from '../../components/Staff/Staff';

const Dashboard = () => {
  
  return (
    <div className='dashboard'>
        <div className='boxa a'>
          <Top/>
        </div>
        <div className='boxb b'>
          <Statistics/>
        </div>
        <div className='boxc c'>
          <Bookings/>
        </div>
        <div className='boxd d'>
          <Staff/>
        </div>
    </div>
  )
}

export default Dashboard