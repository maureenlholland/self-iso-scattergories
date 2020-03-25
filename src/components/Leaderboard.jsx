import React from 'react';
import { Link } from "react-router-dom";
import './Leaderboard.css';

export default function Leaderboard() {
  // check if this is final round
  // if not show everything
  // else drumroll and dramatic reveal from last to first
    return (
      <>
        <h2>Leaderboard</h2>
        <ol>
          <li>Name: 5</li>
          <li>Name: 7</li>
        </ol>
        <Link to="set-timer">Edit timer?</Link>
        <Link to="roll-die">Roll die</Link>
      </>
    );
  }