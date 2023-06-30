import React from 'react'

export const ButtonPokeName = ({name}) => {
    const clickPokemon=()=>{
        console.log(name)
    }
  return (
    <div><button onClick={clickPokemon} className='buttonPokemon'>{name}</button></div>
  )
}

