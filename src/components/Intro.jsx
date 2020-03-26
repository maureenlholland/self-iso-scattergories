import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Intro.css';

export default class Intro extends Component {
  state = {
    player: '',
    players: [],
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({ player: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState(({ player, players }) => ({ players: [...players, player], player: '' }));
  };
  
  render() {
    return (
      <>
        <h1>Welcome to self-iso scattergories</h1>
        <div className="fb intro">
          <div className="add-players">
            <h2>Add Players</h2>
            <form className="cta">
              <label>Name<input value={this.state.player} type="text" onChange={(e) => this.onChange(e)}></input></label>
              <input type="submit" onClick={(e) => this.onSubmit(e)} value="Add Player" />
            </form>
            <div className="cta">
              <p>Ready for the next step?</p>
              <Link to="/set-timer" onClick={() => this.props.addPlayers(this.state.players)}>Set Timer</Link>
            </div>
          </div>
          <ul className="list-players">
            {this.state.players.map(name => <li key={name.toLowerCase().replace(' ', '-')} >{name}</li>)}
          </ul>
        </div>
      </>
    );
  }
}