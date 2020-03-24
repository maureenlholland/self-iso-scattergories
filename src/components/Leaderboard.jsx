import React from 'react';
import { Link } from "react-router-dom";
import './Leaderboard.css';

export default function Leaderboard() {
  // on load, if round 3, let the total score be mystery until added and "Find out winner" is clicked
  // update buttons only used once, no longer shown once updated?
    return (
      <>
        <h2>Leaderboard</h2>
        <ol>
          <li>Name: 5 <button>Update score</button></li>
          <li>Name: 7 <button>Update score</button></li>
        </ol>
        <Link to="set-timer">Edit timer?</Link>
        <Link to="roll-die">Roll die</Link>
      </>
    );
  }