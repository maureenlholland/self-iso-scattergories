import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SetTimer.css';

export default class SetTimer extends Component {
  state = {
    timer: 90,
  }

  // on roll die click, set timer in redux

  render() {
    return (
      <>
        <h2>Set Timer</h2>
        <form>
          <label>Countdown time in seconds
            <input type="number" value={this.state.timer} onChange={(e) => this.setState({ timer: e.target.value })}></input>
          </label>
        </form>
        <p>You can edit this after each round.</p>
        {/* add condition: when timer is saved, show next step */}
        <Link to="/roll-die">Roll Die</Link>
      </>
    );
  }
}
