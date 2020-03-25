import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './PlayRound.css';
import { cards } from '../data/cards';
import Timer from './Timer';

export default class PlayRound extends Component {
  state = {
    playStatus: 'off',
    alarmSounded: false,
  }

  startPlay = () => {
    this.setState({ playStatus: 'on' });
  }

  endPlay = () => {
    alert('Pencils down!!!');
    this.setState({ playStatus: 'off', alarmSounded: true });
  }

  render() {
    return (
      <>
        <h2>Round 1: (Letter)</h2>
        <div>
          {this.state.playStatus === 'off' && !this.state.alarmSounded && (
            <p>Everybody has pencil and paper? <button onClick={this.startPlay}>Start Timer</button></p>
          )}
          <ol>
            {cards[0].map((category => <li key={category.toLowerCase().replace(' ', '-')}>{category}</li>))}
          </ol>
        </div>
        <div>
          {this.state.playStatus === 'on' && <Timer seconds={30} soundAlarm={this.endPlay} />}
          {this.state.alarmSounded && (
            <div>
              <h3>Player Scores</h3>
              <ul>
                <li>Name <form><label>Score: <input type="number" /></label><input type="submit" value="Save" /></form></li>
                <li>Name <form><label>Score: <input type="number" /></label><input type="submit" value="Save" /></form></li>
              </ul>
              <Link to="/leaderboard">View Leaderboard</Link>
            </div>
          )}
        </div>
      </>
    );
  }
}