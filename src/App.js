import React from "react";
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

export default function App() {
  // might not need redux at all - use top level state instead
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
          <Route path="/">
            <Intro />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
