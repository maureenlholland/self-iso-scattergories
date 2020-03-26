import React from 'react';
import { Link } from "react-router-dom";
import './Leaderboard.css';

export default function Leaderboard({ players, round }) {
  // check if this is final round
  // if not show everything
  // else drumroll and dramatic reveal from last to first
    return (
      <>
        <h2>Leaderboard</h2>
        <ol>
        {players.map(player => {
            return (
              <li key={player.name.toLowerCase().replace(' ', '-')}>
                {player.name}: { player.totalScore}
              </li>
            );
          })}
        </ol>
        {round <= 3 ? (
          <>
            <Link to="set-timer">Edit timer?</Link>
            <Link to="roll-die">Roll die</Link>
          </>
        ) : (
          <Link to="/">Start a new game?</Link>
        )}
      </>
    );
  }