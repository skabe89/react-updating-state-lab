// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {

  constructor(){
    super();
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleResolutionEvent = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  handleBitrateEvent = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  render(){
    return(
    <div>
      <button onClick={ this.handleBitrateEvent } className='bitrate'>Bitrate</button>
      <button onClick={ this.handleResolutionEvent } className='resolution'>Resolution</button>
    </div>  
    )
  }
}

export default YouTubeDebugger
