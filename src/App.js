import React from "react";
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
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>Welcome to self-iso scattergories</h2>
      <p>Instructions coming soon...</p>
    </>
  );
}

function AddPlayers() {
  return <h2>Add players</h2>;
}

function SetTimer() {
  return <h2>Set Timer</h2>;
}

function RollDie() {
  return <h2>Roll Die</h2>;
}

function PlayRound() {
  return <h2>Round</h2>;
}

function Leaderboard() {
  return <h2>Leaderboard</h2>;
}
