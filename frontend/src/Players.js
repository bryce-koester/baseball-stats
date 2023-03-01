// Import deps
import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

// Import components
import PlayersList from './PlayersList'
import AddPlayerForm from './AddPlayerForm'

// Import styles
import './styles/Players.css'

// Create Players component
const Players = () => {
  // Prepare states
  const [players, setplayers] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)

  // Fetch all players on initial render
  useEffect(() => {
    fetchplayers()
  }, [])

  const wrapperSetShowAddForm = useCallback(val => {
    setShowAddForm(val)
  }, [setShowAddForm])

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

  const handleShowAddForm = () => {
    setShowAddForm(true)
  }

  return (
    <div className="player-list-wrapper">
      {/* Open add player form */}
      
    
      {/* Render Form for creating new player */}
      {showAddForm ? 
      <AddPlayerForm fetchplayers={fetchplayers} setShowAddForm={wrapperSetShowAddForm}></AddPlayerForm> : 
      <button onClick={handleShowAddForm} className="btn btn-add">Add new player</button>}
      
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