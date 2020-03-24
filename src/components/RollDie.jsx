import React from 'react';
import { Link } from "react-router-dom";
import './RollDie.css';

export default function RollDie() {
    return (
      <>
        <h2>Roll Die</h2>
        <button>Roll me</button>
        {/* condition: only show below when die is rolled */}
        <p>Start Round 1 with letter M or roll again.</p>
        <Link to="/play-round">Play Round 1!</Link>
      </>
    );
  }