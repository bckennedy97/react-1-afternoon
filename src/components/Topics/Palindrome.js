import React, {Component} from "react";

export default class Palindrome extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          userInput: "",
          palindrome: ""
        }
      }
    
      handleChange(val) {
        this.setState({ userInput: val });
      }
    
      palindromeCheck(prop) {
        var lowercaseStr = prop.toLowerCase();
        var reverseStr = lowercaseStr.split('').reverse().join(''); 
        if(reverseStr === lowercaseStr){
            this.setState({palindrome: true});
        }else{
            this.setState({palindrome: false})
        }
    }  
    
    
      render() {
        return (
          <div className="puzzleBox evenAndOddPB">
            <h4> Palindromes </h4>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => { this.palindromeCheck(this.state.userInput) }}> Check </button>
            <span className="resultsBox"> Palindrome: { JSON.stringify(this.state.palindrome) } </span>
          </div>
        )
      }
    }