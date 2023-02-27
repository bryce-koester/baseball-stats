// Import deps
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Import components
import PlayersList from './PlayersList'

// Import styles
import './styles/Players.css'

// Create Players component
const Players = () => {
  // Prepare states
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [velocity, setVelocity] = useState('')
  const [players, setplayers] = useState([])
  const [loading, setLoading] = useState(true)

  // Fetch all players on initial render
  useEffect(() => {
    fetchplayers()
  }, [])

  // Fetch all players
  const fetchplayers = async () => {
    // Send GET request to 'players/all' endpoint
    axios
      .get('http://localhost:5000/players/all')
      .then(response => {
        // Update the players state
        setplayers(response.data)

        // Update loading state
        setLoading(false)
      })
      .catch(error => console.error(`There was an error retrieving the player list: ${error}`))
  }

  // Reset all input fields
  const handleInputsReset = () => {
    setId('')
    setName('')
    setAge('')
    setVelocity('')
  }

  // Create new player
  const handleplayerCreate = () => {
    // Send POST request to 'players/create' endpoint
    axios
      .post('http://localhost:5000/players/create', {
        id: id,
        name: name,
        age: age,
        velocity: velocity
      })
      .then(res => {
        console.log(res.data)

        // Fetch all players to refresh
        // the players on the Players list
        fetchplayers()
      })
      .catch(error => console.error(`There was an error creating the ${name} player: ${error}`))
  }

  // Submit new player
  const handleplayerSubmit = () => {
    // Check if all fields are filled
    if (id.length > 0 && name.length > 0 && age.length > 0 && velocity.length > 0) {
      // Create new player
      handleplayerCreate()

      console.info(`player ${name} by ${id} added.`)

      // Reset all input fields
      handleInputsReset()
    }
  }

  // Remove player
  const handleplayerRemove = (id, name) => {
    // Send PUT request to 'players/delete' endpoint
    axios
      .put('http://localhost:5000/players/delete', { id: id })
      .then(() => {
        console.log(`player ${name} removed.`)

        // Fetch all players to refresh
        // the players on the Players list
        fetchplayers()
      })
      .catch(error => console.error(`There was an error removing the ${name} player: ${error}`))
  }

  // Reset player list (remove all players)
  const handleListReset = () => {
    // Send PUT request to 'players/reset' endpoint
    axios.put('http://localhost:5000/players/reset')
    .then(() => {
      // Fetch all players to refresh
      // the players on the Players list
      fetchplayers()
    })
    .catch(error => console.error(`There was an error resetting the player list: ${error}`))
  }

  return (
    <div className="player-list-wrapper">
      {/* Form for creating new player */}
      <div className="player-list-form">
        <div className="form-wrapper" onSubmit={handleplayerSubmit}>
          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="name">Enter name:</label>
              <input className="form-input" type="text" id="name" name="name" value={name} onChange={(e) => setName(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="id">Enter id:</label>
              <input className="form-input" type="text" id="id" name="id" value={id} onChange={(e) => setId(e.currentTarget.value)} />
            </fieldset>
          </div>

          <div className="form-row">
            <fieldset>
              <label className="form-label" htmlFor="age">Enter Age:</label>
              <input className="form-input" type="text" id="age" name="age" value={age} onChange={(e) => setAge(e.currentTarget.value)} />
            </fieldset>

            <fieldset>
              <label className="form-label" htmlFor="velocity">Enter velocity:</label>
              <input className="form-input" type="text" id="velocity" name="velocity" value={velocity} onChange={(e) => setVelocity(e.currentTarget.value)} />
            </fieldset>
          </div>
        </div>

        <button onClick={handleplayerSubmit} className="btn btn-add">Add the player</button>
      </div>

      {/* Render Players list component */}
      <PlayersList players={players} loading={loading} handleplayerRemove={handleplayerRemove} />

      {/* Show reset button if list contains at least one player */}
      {players.length > 0 && (
        <button className="btn btn-reset" onClick={handleListReset}>Reset players list.</button>
      )}
    </div>
  )
}

export default Players