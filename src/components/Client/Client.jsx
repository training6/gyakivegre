import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import Pet from '../Pet/Pet'

const Client = ({ item }) => {

  return (
    <div>
      <h4>{item.name}</h4>
      {item.pets.map(pet => <Pet key={uuidv4()} pet={pet} />)}
    </div>
  )
}

export default Client
