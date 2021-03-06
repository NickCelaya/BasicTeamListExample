import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TeamList from './TeamList'
import TeamSelect from './TeamSelect'
import PlayerInput from './PlayerInput'

class App extends Component {
  constructor() {
    super();

    this.state = {
      team1Roster: ["Joe", "Moe", "Flow"],
      team2Roster: ["Barry", "Harry", "Chuck"],
      selectedTeam: 1,
      tempName: ""
    }

    this.updateSelectedTeam = this.updateSelectedTeam.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  updateSelectedTeam(team) {
    this.setState({
      selectedTeam: team
    })
  }

  addPlayer(player) {
    var { selectedTeam } = this.state;
    if (selectedTeam === 1) {
      var newRoster = this.state.team1Roster.slice();
      newRoster.push(player);
      this.setState({
        team1Roster: newRoster
      })
    } else {
      var newRoster = this.state.team2Roster.slice();
      newRoster.push(player);
      this.setState({
        team2Roster: newRoster
      })
    }
  }

  render() {
    return (
      <div>
        <TeamSelect select={this.updateSelectedTeam} team={this.state.selectedTeam} />
        <PlayerInput team={1} addPlayer={this.addPlayer} />
        <div>
          <TeamList roster={this.state.team1Roster} lastName="Dirt" />
        </div>
        <div>
          <TeamList roster={this.state.team2Roster} lastName="Fairy" />
        </div>
      </div>
    );
  }
}

export default App;
