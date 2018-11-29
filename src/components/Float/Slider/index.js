'use strict'

import React from 'react'
import PropTypes from 'prop-types'

class Slider extends React.Component {
  constructor (props) {
    super(props)
    this.fill = null
  }

  componentDidMount () {
    const {fill} = this.props
    this.fill.style.width = `${fill}%`
  }

  componentDidUpdate (props) {
    if (props.fill !== this.props.fill) {
      this.fill.style.width = `${fill}%`
    }
  }

  render () {
    return (
      <div className='slider first-player-line'>
        <div className='fill second-player-line' ref={(element) => { this.fill = element }} />
      </div>
    )
  }
}

Slider.propTypes = {
  fill: PropTypes.number
}

Slider.defaultProps = {
  fill: 0
}

export default Slider
