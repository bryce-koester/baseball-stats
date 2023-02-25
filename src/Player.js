import React from "react";


function Player({player, player:{id, name, age, velocity}, captureEdit, changeEditState }) {

    return (
          <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{velocity}</td>
              <td><button
                onClick={() => {
                    captureEdit(player);
                    changeEditState(player)
                }}
              >
                Edit</button></td>
          </tr>
    )
  }
  export default Player