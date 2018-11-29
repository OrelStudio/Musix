'use strict'

import React from 'react'

class SideButton extends React.Component {
  render() {
    return (
      <a className='text-content-side'>{this.props.children}</a>
    );
  }
}

export default SideButton
