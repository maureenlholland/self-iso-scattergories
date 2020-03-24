import React from 'react';
import './AddPlayers.css';

export default function AddPlayers() {
    return (
      <>
        <h2>Add Players</h2>
        <form>
          <label>Name<input type="text"></input></label>
          <input type="submit" value="Add Player" />
        </form>
      </>
    );
  }