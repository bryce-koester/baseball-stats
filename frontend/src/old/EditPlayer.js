import React from 'react'

function EditPlayer({ editForm, handlePlayerUpdate, handleChange }) {
    let {id, name, age, velocity} = editForm

// PATCH request; calls handlePlayerUpdate to push changes to the page
    function handleEditForm(e) {
        // e.preventDefault();
        // fetch(`http://localhost:9292/Players/${id}`, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type" : "application/json"
        //     },
        //     body: JSON.stringify(editForm),
        // })
        //     .then(resp => resp.json())
        //     .then(updatedPlayer => {
        // handlePlayerUpdate(updatedPlayer)
        console.log('http://localhost:9292/Players/${id}, handlePlayerUpdate()')
    }

return (
    <div>
        <h4>Edit Player</h4>
        <form onSubmit={handleEditForm}>
            <input type="text" name="name" value={name} onChange={handleChange}/>
            <input type="text" name="age" value={age} onChange={handleChange}/>
            <input type="text" name="velocity" value={velocity} onChange={handleChange}/>
            <button type="submit">Submit Changes</button>
        </form>
    </div>
)
}
export default EditPlayer