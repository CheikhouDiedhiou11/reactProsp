import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App">
      <h1>Player List</h1>
      <PlayersList />
    </div>
  );
}

export default App;
