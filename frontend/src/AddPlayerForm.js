import React, { useState } from 'react'
import axios from 'axios'


const AddPlayerForm = ({fetchplayers, setShowAddForm}) => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [velocity, setVelocity] = useState('')

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
            .post('http://localhost:4001/players/create', {
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
            handleplayerCreate(id, name, age, velocity)

            console.info(`player ${name} by ${id} added.`)

            // Reset all input fields
            handleInputsReset()

            //hide form
            setShowAddForm(false)
        }
    }

    const handleCancelForm = () => {
      setShowAddForm(false)
    }

  return (
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
        <div className="form-buttons">
          <button onClick={handleCancelForm} className="btn btn-add">Cancel</button>
          <button onClick={handleplayerSubmit} className="btn btn-add">Add the player</button>  
        </div>
      </div>
  )
}

export default AddPlayerForm