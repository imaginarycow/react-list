import React, { Component } from 'react';
import './App.css';
import ListManager from './components/list_manager';

var cohorts = ["VetFIT 2015.1","VetFIT 2015.2","VetFIT 2016.1","VetFIT 2016.2","eFIT 2016","VetFIT 2017.1"];

class App extends Component {
  render() {
    var cohortList = cohorts.map(function(cohort) {
      return <option value={cohort}>{cohort}</option>;
    });
    return (
      <div>
        <h1>{this.props.text}</h1>
        <select>
          {cohortList}
        </select>
        <ListManager title="My Cool List"/>
      </div>

    );
  }
}

export default App;
