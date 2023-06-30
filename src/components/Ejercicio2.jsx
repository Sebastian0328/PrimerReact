import React from 'react'
import { people } from './people'
import Ranting  from './Ranting'
import { User } from './User'


export default function Ejercicio2() {
    return <div className='containerPeole'>
        {people.map(users => {
            return<User people={users}/>
        })}
    </div>


}