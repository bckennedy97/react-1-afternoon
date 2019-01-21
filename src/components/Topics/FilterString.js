import React, { Component } from 'react';

export default class FilterString extends Component {

  constructor() {
    super();

    this.state = {
        unfiltered: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
      userInput: '',
      filtered: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterString(prop) {
    var unfiltered = this.state.unfiltered;
    var filtered = [];
    
    for ( var i = 0; i < unfiltered.length; i++ ) {
      if ( unfiltered[i].includes(prop) ) {
        filtered.push(unfiltered[i]);
      }
    }

    this.setState({ filtered: filtered });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.unfiltered, null, 10) } </span>
        <input className="inputLine"onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterString(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filtered, null, 10) } </span>
      </div>
    )
  }
}