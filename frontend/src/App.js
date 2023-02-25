import './App.css';
import React, { useEffect, useState } from "react";
import Players from './Players';
// import samplePlayers from './sampleData/players.json';

function App() {
  // set state
  const [players, setPlayers] = useState([]);

// first data grab
  useEffect(() => {
    fetch("http://localhost:5000/getData")
      .then((resp) => resp.json())
      .then((data) => {
        setPlayers(data)
      });
    console.log('fetch("http://localhost:5000/getData"), setPlayers(data)')
  }, []);

// update Players on page after edit
  function onUpdatePlayer(updatedPlayer) {
    const updatedPlayers = players.map(
      player => {
        if (player.id === updatedPlayer.id) {
          return updatedPlayer
        } else {return player}
      }
    )
    setPlayers(updatedPlayers)
  }
  return (
    <div className="App">
        <div>
          <p>Players table</p>
          <Players 
          players={players}
          onUpdatePlayer={onUpdatePlayer}
           />
        </div>
    </div>
  );
}

export default App;
