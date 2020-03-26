import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './PlayRound.css';
import Timer from './Timer';

export default class PlayRound extends Component {
  state = {
    playStatus: 'off',
    alarmSounded: false,
    scores: {},
  }

  startPlay = () => {
    this.setState({ playStatus: 'on' });
  }

  endPlay = () => {
    alert('Pencils down!!!');
    this.setState({ playStatus: 'off', alarmSounded: true });
  }

  setScore = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const score = +e.target.value;
    this.setState(({ scores }) =>  ({ scores: { ...scores, [name]: score } }));
  }

  render() {
    return (
      <>
        <h2>Round {this.props.round}: {this.props.letter}</h2>
        <div>
          {this.state.playStatus === 'off' && !this.state.alarmSounded && (
            <p>Everybody has pencil and paper? <button onClick={this.startPlay}>Start Timer</button></p>
          )}
          {(this.state.playStatus === 'on' || this.state.alarmSounded) && (
            <ol>
              {this.props.card.map((category => <li key={category.toLowerCase().replace(' ', '-')}>{category}</li>))}
            </ol>
          )}
        </div>
        <div>
          {this.state.playStatus === 'on' && <Timer seconds={this.props.seconds} soundAlarm={this.endPlay} />}
          {this.state.alarmSounded && (
            <div>
              <h3>Player Scores</h3>
              <ul>
                {this.props.players.map(player => {
                  return (
                    <li key={player.name.toLowerCase().replace(' ', '-')}>
                      {player.name}
                      <form>
                        <label>Score: <input value={this.state.value} name={player.name} onChange={this.setScore} type="number" /></label>
                      </form>
                    </li>
                  );
                })}
              </ul>
              <Link to="/leaderboard" onClick={() => this.props.nextRound(this.state.scores)}>View Leaderboard</Link>
            </div>
          )}
        </div>
      </>
    );
  }
}