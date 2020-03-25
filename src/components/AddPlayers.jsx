import React, { Component } from 'react';
import './AddPlayers.css';

export default class AddPlayers extends Component {
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
        <h2>Add Players</h2>
        <form>
          <label>Name<input value={this.state.player} type="text" onChange={(e) => this.onChange(e)}></input></label>
          <input type="submit" onClick={(e) => this.onSubmit(e)} value="Add Player" />
        </form>
        <ul>
          {this.state.players.map(name => <li key={name.toLowerCase().replace(' ', '-')} >{name}</li>)}
        </ul>
      </>
    );
  }
}