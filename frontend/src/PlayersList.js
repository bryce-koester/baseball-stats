// Import deps
import React from 'react'

// Import components
import PlayersListRow from './PlayersListRow'

// Import styles
import './styles/players-list.css'


// Create PlayersList component
const PlayersList = ({players, loading, handlePlayerRemove}) => {
  // Show loading message
  if (loading) return <p>Players table is loading...</p>

  return (
    <table className="table">
        <thead>
          <tr>
            <th className="table-head-item" />

            <th className="table-head-item">Id</th>

            <th className="table-head-item">Name</th>

            <th className="table-head-item">Age</th>

            <th className="table-head-item">Velocity</th>

            <th className="table-head-item" />
          </tr>
        </thead>

        <tbody className="table-body">
          {players.length > 0 ? (
            players.map((player, idx) => (
              <PlayersListRow
                key={player.id}
                player={player}
                position={idx + 1}
                handleplayerRemove={handlePlayerRemove}
              />
              )
            )
          ) : (
            <tr className="table-row">
              <td className="table-item" style={{ textAlign: 'center' }} colSpan={6}>There are no players to show. Create one!</td>
            </tr>
          )
        }
        </tbody>
    </table>
  )
}

export default PlayersList