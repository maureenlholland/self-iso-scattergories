import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './RollDie.css';
import { die } from '../data/die';

export default class RollDie extends Component {
  state = {
    letter: ''
  }

  rollDie = () => {
    this.setState({ letter: die[Math.floor(Math.random() * die.length)] })
  };							 

  render() {
    return (
      <>
        <h2>Roll Die</h2>
        <button onClick={this.rollDie}>Roll me</button>
        {this.state.letter && (
          <p><Link to="/play-round" onClick={() => this.props.setLetter(this.state.letter)}>Start Round {this.props.round} with letter {this.state.letter}</Link> or roll again.</p>
        )}
      </>
    );
  }
}