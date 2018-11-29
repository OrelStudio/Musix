'use strict';

import React from 'react'
import classNames from 'classnames'

class PlayButton extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        isPlaying: false
     }
  }

  toggleStatus (flag = !this.state.isPlaying) {
    this.setState({isPlaying: flag})
  }

  render () {
    const {isPlaying} = this.state
    return (
      <span onClick={() => this.toggleStatus()}>
        <i className={classNames('fas', {
        'fa-play': !this.state.isPlaying,
        'play-icon': !this.state.isPlaying,
        'fa-pause': this.state.isPlaying,
        'pause-icon': this.state.isPlaying
        })} />
      </span>
    )
  }
}

// <i className='fas fa-play'></i>
// <i className='fas fa-pause'></i>
export default PlayButton
