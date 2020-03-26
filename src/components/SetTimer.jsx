import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SetTimer.css';

export default class SetTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        seconds: props.seconds,
    };
  }

  render() {
    return (
      <>
        <h2>Set Timer</h2>
        <form>
          <label className="label-input">Countdown time in seconds
            <input type="number" value={this.state.seconds} onChange={(e) => this.setState({ seconds: e.target.value })}></input>
          </label>
        </form>
        <div className="cta">
          <p>You can edit this after each round.</p>
          <Link to="/roll-die" onClick={() => this.props.setTimer(this.state.seconds)}>Roll Die</Link>
        </div>
      </>
    );
  }
}
