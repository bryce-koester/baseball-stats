import React, {useState} from 'react'
import EditPlayer from './EditPlayer';
import Player from "./Player";
import './App.css'

function Players({players, onUpdatePlayer}) {
    // state for conditional render of edit form
    const [isEditing, setIsEditing] = useState(false);
    // state for edit form inputs
    const [editForm, setEditForm] = useState({
        id: "",
        name: "",
        email: "",
        phone: ""
    })

    // when PATCH request happens; auto-hides the form, pushes changes to display
    function handlePlayerUpdate(updatedPlayer) {
        setIsEditing(false);
        onUpdatePlayer(updatedPlayer);
    }

    // capture user input in edit form inputs
    function handleChange(e) {
        setEditForm({
        ...editForm,
        [e.target.name]: e.target.value
        })
    }

    // needed logic for conditional rendering of the form - shows the Player you want when you want them, and hides it when you don't
    function changeEditState(player) {
        if (player.id === editForm.id) {
            setIsEditing(isEditing => !isEditing) // hides the form
        } else if (isEditing === false) {
             setIsEditing(isEditing => !isEditing) // shows the form
        }
    }

    // capture the Player you wish to edit, set to state
    function captureEdit(clickedPlayer) {
        let filtered = players.filter(player => player.id === clickedPlayer.id)
        setEditForm(filtered[0])
    }
    
    return (
        <div>
            {isEditing?
            (<EditPlayer
                editForm={editForm}
                handleChange={handleChange}
                handlePlayerUpdate={handlePlayerUpdate}
            />) : null}
            <table>
            <thead>
                <tr>
                <th>Player ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Velocity</th>
                <th>Modify Player</th>
                </tr>
            </thead>
            <tbody>
                { players.map(player =>
                    <Player
                    key={player.id}
                    player={player}
                    captureEdit={captureEdit}
                    changeEditState={changeEditState}
                    />) }
            </tbody>
            </table>
      </div>
    )
  }
  
  export default Players