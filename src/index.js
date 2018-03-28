'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

var sideButton = React.createClass({
  render: function() {
    return (
      <button>className="text-content-side">{this.props.children}</button>
    );
  }
});

ReactDOM.render(
  <div>
    <sideButton>Home</sideButton>
    <sideButton>Browse</sideButton>
    <sideButton>Artists</sideButton>
    <sideButton>Albums</sideButton>
    <sideButton>Songs</sideButton>
    <sideButton>Genres</sideButton>
    <sideButton>Playlists</sideButton>
    <sideButton>Downloaded Music</sideButton>
  </div>,
  document.getElementById('HSideButton')
);
