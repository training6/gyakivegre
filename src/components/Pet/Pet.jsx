import React from 'react'

const Pet = ({ pet }) => {
  return (
    <div>
      <p>{pet.name}</p>
      <p>{pet.animal}</p>
      <p>{pet.isVaccinated ? 'true' : 'false'}</p>
    </div>
  )
}

export default Pet
