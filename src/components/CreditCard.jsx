import React from 'react'
import { data } from '../App'
export const CreditCard = () => {
  return (
  <div className="boxcards">
    {data.map((cards, i) => {
      return <div className="cards" id={cards.cssClass} >

        <h3>{cards.type}</h3>
        <h2>{"***********" + cards.number.slice(13)}</h2>
        <div>
          <p>EXP: {cards.expirationMonth}/{cards.expirationYear}</p>
          <p>{cards.bank}</p>
        </div>
        <p>{cards.owner}</p>

      </div>
    })}
  </div>

  )
}
