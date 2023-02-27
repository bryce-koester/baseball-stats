// Import deps
import React from 'react'


// Create PlayerListRow component
const PlayersListRow = ({position, player, handlePlayerRemove}) => (
  <tr className="table-row">
    <td className="table-item">
      {position}
    </td>

    <td className="table-item">
      {player.id}
    </td>

    <td className="table-item">
      {player.name}
    </td>

    <td className="table-item">
      {player.age}
    </td>

    <td className="table-item">
      {player.velocity}
    </td>

    <td className="table-item">
      <button
        className="btn btn-remove"
        onClick={() => handlePlayerRemove(player.id, player.name)}>
        Remove player
      </button>
    </td>
  </tr>
)

export default PlayersListRow