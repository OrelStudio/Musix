'use strict'

import React from 'react'
import classNames from 'classnames'


class SideBarButton extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        flag: false
     }
  }

  toggleStatus (isClicked = !this.state.flag) {
    this.setState({flag: isClicked})
    console.log(isClicked)
  }

  render() {
    const {flag} = this.state
    return (
      <span onClick={() => this.toggleStatus()}>
        <i className={classNames('fas', {'fa-angle-left': this.state.flag})}></i>
      </span>
    )
  }
}

export default SideBarButton
