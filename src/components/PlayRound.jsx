import React from 'react';
import { Link } from "react-router-dom";
import './PlayRound.css';

export default function PlayRound() {
  // alert function: when timer hits zero overlay with notice to put pencils down. button to count scores.
    return (
      <>
        <h2>Round 1: (Letter)</h2>
        <div>
          <p>Everybody has pencil and paper? <button>Start Timer</button></p>
          <ol>
            <li>Musician</li>
            <li>Athlete</li>
            <li>Painter</li>
            <li>Writer</li>
            <li>Politician</li>
            <li>Actor/Actress</li>
            <li>Comedian</li>
            <li>Someone you know</li>
            <li>Royal family member</li>
            <li>Celebrity animal</li>
          </ol>
        </div>
        <div>
          {/* condition: before alert show timer, after show leaderboard */}
          <div>Timer counts down here. Add pause button.</div>
          <p>When all scores are counted, add them to the <Link to="/leaderboard">Leaderboard</Link></p>
        </div>
      </>
    );
  }