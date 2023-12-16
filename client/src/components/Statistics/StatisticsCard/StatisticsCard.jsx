import React from 'react'
import './StatisticsCard.scss'

const StatisticsCard = ({text,color,logo,data}) => {
  return (
    <div className='card-container'>
        <div className='card-left' style={{backgroundColor:color}}>
            {logo}
        </div>
        <div className='card-right'>
            <span className='card-title'>
                {text}
            </span>
            <span className='card-count'>
                {data}
            </span>
        </div>
    </div>
  )
}

export default StatisticsCard