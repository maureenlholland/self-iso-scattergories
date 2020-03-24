import React from 'react';
import { Link } from "react-router-dom";
import './SetTimer.css';

export default function SetTimer() {
    return (
      <>
        <h2>Set Timer</h2>
        <form>
          <label>Countdown time in seconds<input type="number" placeholder="90"></input></label>
          <input type="Submit" value="Save" />
        </form>
        <p>You can edit this after each round.</p>
        {/* add condition: when timer is saved, show next step */}
        <Link to="/roll-die">Roll Die</Link>
      </>
    );
  }