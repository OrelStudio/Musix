'use strict'

import React from 'react'
import PropTypes from 'prop-types'

import SideButton from '../components/Float/SideButton'
import SideBarButton from '../components/Float/SideBarButton'
import PlayButton from '../components/Float/Play'
import Slider from '../components/Float/Slider'

import Timer from '../classes/timer'
import FrameProgress from '../classes/frame'

class Main extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      time: 0
    }
    this.frameProgress = new FrameProgress({
      hours: 2,
      minutes: 30,
      seconds: 21
    })
  }



  componentDidMount () {
    this.timer = new Timer({
      time: 60000,
      onTimeChange: (percent) => {
        this.setState({time: percent})
      }
    })
  }

  render () {
    return (
      <div className='screen-main'>
        <main>
          <div className='left-side'>
            <div className='wrapper'>
              <div className='profile'>
                <div className='profile-image'>
                </div>
                <div className='profile-content'>
                  <div className='profile-name'>
                    {'OrelStudio'}
                  </div>
                  <div className='settings-or-login'>
                    <div className="st-or-log-b">
                      {'settings'}
                    </div>
                  </div>
                </div>
              </div>
              <div className='side-content'>
                <div className='text-content-side'>
                  <div className='text-content-side'>
                    <SideButton>{'Main'}</SideButton>
                    <SideButton>{'Browse'}</SideButton>
                    <SideButton>{'Artists'}</SideButton>
                    <SideButton>{'Albums'}</SideButton>
                    <SideButton>{'Songs'}</SideButton>
                    <SideButton>{'Genres'}</SideButton>
                    <SideButton>{'Playlists'}</SideButton>
                    <SideButton>{'Downloaded Music'}</SideButton>
                  </div>
                </div>
              </div>
              <div className='open-left-side'>
                <SideBarButton />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className='bottom'>
            <div className='music-info'>
              <div className='album-img'>
              </div>
              <div className='music-info-text'>
                <div className='song-name'>
                  {'Rein raus'}
                </div>
                <div className='song-artist'>
                  {'Rammstein'}
                </div>
              </div>
            </div>
            <div className='player'>
              <div className='number-count'>
                {'2:48'}
              </div>
              <Slider fill={FrameProgress.progress(frame)} />
              <div className='number-count-max'>
                {'3:10'}
              </div>
            </div>
            <div className='music-control'>
              <div className='play-buttons'>
                <previous-icon>
                  <i className='fas fa-backward'></i>
                </previous-icon>
                <play-icon>
                  <PlayButton />
                </play-icon>
                <next-icon>
                  <i className='fas fa-forward'></i>
                </next-icon>
              </div>
              <div className='first-volume-line'>
                <div className='second-volume-line'>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Main
