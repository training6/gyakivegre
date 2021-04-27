import React, { useState } from 'react'

const Pet = ({ pet }) => {
  const [vac, setVac] = useState(pet.isVaccinated)
  const [res, setRes] = useState(true)

  function toggle() {
    setVac(prevVac => !prevVac)
    setRes(false)

    fetch('/api/pets/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: pet.name,
        isVaccinated: !vac
      })
    }).then(response => setRes(true))
      .catch(error => setRes(false))
  }

  return (
    <div>
      <p>{pet.name}</p>
      <p>{pet.animal}</p>
      <p>is vacinated: {
        res
          ? vac
            ? 'true'
            : 'false'
          : '...'
      }</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  )
}

export default Pet
