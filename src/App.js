import React, { Component } from "react";
import Intro from "./components/Intro";
import SetTimer from "./components/SetTimer";
import RollDie from "./components/RollDie";
import PlayRound from "./components/PlayRound";
import Leaderboard from "./components/Leaderboard";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import shuffle from 'shuffle-array';
import { cards } from './data/cards';
import './App.css';

export default class App extends Component {
  state = {
    cards: shuffle(cards),
    players: [],
    round: 1,
    letter: '',
    seconds: 5,
  }

  addPlayers = (players) => {
    this.setState({ players: players.map(player => ({ name: player, totalScore: 0 }) ) });
  }

  setTimer = (seconds) => {
    this.setState({ seconds })
  }

  setLetter = (letter) => {
    this.setState({ letter })
  }

  addScores = (scores) => {
    return this.state.players.map(player => ({ ...player, totalScore: player.totalScore + scores[player.name] }));
  }

  nextRound = (scores) => {
    const updatedPlayers = this.addScores(scores).sort((a, b) => b.totalScore - a.totalScore);
    this.setState(({ round }) => ({ round: round + 1, players: updatedPlayers }));
  }

  render() {
    const { players, cards, round, seconds, letter } = this.state;

    return (
      <div className="wrapper">
        <Router>
          <div>
            <Switch>
              <Route path="/leaderboard">
                <Leaderboard players={players} round={round} />
              </Route>
              <Route path="/play-round">
                <PlayRound
                  letter={letter}
                  round={round}
                  card={cards[round -1]}
                  seconds={seconds}
                  players={players}
                  nextRound={this.nextRound}
                />
              </Route>
              <Route path="/roll-die">
                <RollDie
                  round={round}
                  letter={letter}
                  setLetter={this.setLetter}
                />
              </Route>
              <Route path="/set-timer">
                <SetTimer seconds={seconds} setTimer={this.setTimer} />
              </Route>
              <Route path="/">
                <Intro addPlayers={this.addPlayers} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    ); 
  }
}
