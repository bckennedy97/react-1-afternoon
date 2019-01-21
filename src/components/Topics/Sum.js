import React, {Component} from "react";

export default class Sum extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          numberOne: 0,
          numberTwo: 0,
          sum: 0,
        }
      }
    
      handleChangeOne(val) {
        this.setState({ numberOne: val });
      }
      handleChangeTwo(val) {
        this.setState({ numberTwo: val });
      }
    
    
      sumOfNumbers() {
        this.setState({sum: parseInt(this.state.numberOne,10)+parseInt(this.state.numberTwo,10)});
    }  
    
    
      render() {
        return (
          <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" onChange={ (e) => this.handleChangeOne(e.target.value) }></input>
            <input className="inputLine" onChange={ (e) => this.handleChangeTwo(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => { this.sumOfNumbers() }}> Add </button>
            <span className="resultsBox"> Sum: {this.state.sum} </span>
          </div>
        )
      }
    }