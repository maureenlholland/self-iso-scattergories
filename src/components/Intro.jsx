import React from 'react';
import { Link } from "react-router-dom";
import AddPlayers from './AddPlayers';
import './Intro.css';

export default function Intro() {
    // on load, shuffle cards 
    return (
      <>
        <h2>Welcome to self-iso scattergories</h2>
        <AddPlayers />
        <p>Ready for the next step?</p>
        <Link to="/set-timer">Set Timer</Link>
      </>
    );
  }