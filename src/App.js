import React from "react";
import Intro from "./components/Intro";
import AddPlayers from "./components/AddPlayers";
import SetTimer from "./components/SetTimer";
import RollDie from "./components/RollDie";
import PlayRound from "./components/PlayRound";
import Leaderboard from "./components/Leaderboard";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/leaderboard">
            <Leaderboard />
          </Route>
          <Route path="/play-round">
            <PlayRound />
          </Route>
          <Route path="/roll-die">
            <RollDie />
          </Route>
          <Route path="/set-timer">
            <SetTimer />
          </Route>
          <Route path="/add-players">
            <AddPlayers />
          </Route>
          <Route path="/">
            <Intro />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
