import React from 'react'
import { pokemons } from './pokemons'
import { ButtonPokeName } from './ButtonPokeName'

export const EjercicioPokemons = () => {
  return (
    <div className='containerPokemon'>
        { pokemons.map(pokemon=>{
    return <div className='cartPokemon'>
<h2>{pokemon.name}</h2>
<p>{pokemon.id}</p>
<img src={pokemon.img} alt="" />
<div><ButtonPokeName name={pokemon.name}/></div>
    </div>
  })}
    </div>

  )
}
