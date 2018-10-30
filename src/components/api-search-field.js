import React, { Component } from 'react';

export default class ApiSearchField extends Component {

  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.timeoutDuration = 1500;
    this.timeoutTimer    = null;

    this.state = {
      loading: false
    }

  }

  handleChange(event){
    
    this.resetTimer();
    const value = event.target.value;
    
    if(!value) return false;

    this.timeoutTimer = setTimeout(() => {
      this.props.search(value);
    }, this.timeoutDuration);

  }

  resetTimer(){

    if(typeof this.timeoutTimer === 'number'){
      clearTimeout(this.timeoutTimer);
    }
  }

  render(){
    return(
      <input type="text" onChange={this.handleChange} />
    )
  }

}
