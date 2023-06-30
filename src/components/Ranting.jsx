import React from 'react'
import Ejercicio2 from './Ejercicio2'

export default function Ranting({rating}) {
  const star= []
  for (let i = 1; i<= 5; i++) {
    // star.push(<i class="fa-solid fa-star"></i>)
    i<= rating ? star.push(<i class="fa-solid fa-star"></i>): star.push(<i class="fa-regular fa-star"></i>)

  }
return (
<div>{star}</div>
) 
  
}
