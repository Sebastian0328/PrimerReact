import React from 'react'
import Ranting from './Ranting'
export const User = ({people : {name, rating, gender, job, city}}) => {
    
  return (
    <div className='people'>
                <h3>{name} </h3>
                <div><Ranting rating={rating}/></div>
                <p>{gender}</p>
                <p>{job}</p>
                <h4>{city}</h4>

            </div>
  )
}
