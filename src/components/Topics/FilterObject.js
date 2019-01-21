import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      unfiltered: [
        {
          name: 'Jimmy Joe',
          title: 'Hack0r',
          age: 12,
        },
        {
          name: 'Jeremy Schrader',
          age: 24,
          hairColor: 'brown'
        },
        {
          name: 'Carly Armstrong',
          title: 'CEO',
        }
      ],

      userInput: '',
      filtered: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterObjects(prop) {
    var unfiltered = this.state.unfiltered;
    var filtered = [];
    
    for ( var i = 0; i < unfiltered.length; i++ ) {
      if ( unfiltered[i].hasOwnProperty(prop) ) {
        filtered.push(unfiltered[i]);
      }
    }

    this.setState({ filtered: filtered });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.unfiltered, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterObjects(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filtered, null, 10) } </span>
      </div>
    )
  }
}