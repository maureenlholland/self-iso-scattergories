import React from 'react';
import { Link } from "react-router-dom";
import './PlayRound.css';
import { cards } from '../data/cards';

export default function PlayRound() {
  // alert function: when timer hits zero overlay with notice to put pencils down. button to count scores.
    return (
      <>
        <h2>Round 1: (Letter)</h2>
        <div>
          <p>Everybody has pencil and paper? <button>Start Timer</button></p>
          <ol>
            {cards[0].map((category => <li key={category.toLowerCase().replace(' ', '-')}>{category}</li>))}
          </ol>
        </div>
        <div>
          {/* condition: before alert show timer, after show leaderboard */}
          <div>Timer counts down here. Add pause button.</div>
          <div>
            <h3>Player Scores</h3>
            <ul>
              <li>Name <form><label>Score: <input type="number" /></label><input type="submit" value="Save" /></form></li>
              <li>Name <form><label>Score: <input type="number" /></label><input type="submit" value="Save" /></form></li>
            </ul>
            <Link to="/leaderboard">View Leaderboard</Link>
          </div>
        </div>
      </>
    );
  }