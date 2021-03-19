// Code DigitalClicker Component Here

import React, { Component } from 'react'

class DigitalClicker extends Component {

  constructor(){
    super();
    this.state = {
      timesClicked: 0
    } 
  }

  handleClick = () => {
   this.setState(prevState => {
     return {
     timesClicked: prevState.timesClicked + 1}
    })
  }

  render(){
    // const{ title, content } = this.props;
    return(
      <button onClick={ this.handleClick }>{ this.state.timesClicked }</button>
    )
  }
}

export default DigitalClicker
