import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([]);

  console.log(data)

  useEffect(() => {
    fetch(`/api/clients?search=${search}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setData("dsojdsopjds"))
  }, [])

  return (
    <div className="App">
      <h1>Veterinarian admin - clients</h1>

      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      <button disabled={search.length < 3 ? true : false}>Search</button>

    </div>
  )
}

export default App
