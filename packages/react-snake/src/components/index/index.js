import React from 'react'
import Game from '../game'

import store from '../../stores/index'
import { $ } from 'omis'
require('../../utils/css').add(require('./_index.css'))


export default $({
  render() {
    const { store } = $
    const { paused } = store.data
    return <div className="container">
      <h1>[P]REACT + OMIS SNAKE</h1>

      <Game></Game>

      <div className="ctrl">
        <div className="btn cm-btn cm-btn-dir up" onClick={store.turnUp}><i></i><em></em><span>Up</span></div>
        <div className="btn cm-btn cm-btn-dir down" onClick={store.turnDown}><i></i><em></em><span>Down</span></div>
        <div className="btn cm-btn cm-btn-dir left" onClick={store.turnLeft}><i></i><em></em><span >Left</span></div>
        <div className="btn cm-btn cm-btn-dir right" onClick={store.turnRight}><i></i><em></em><span >Right</span></div>
        <div className="btn cm-btn space" onClick={store.toggleSpeed}><i></i><span >Gear</span></div>
        <div className="btn reset small" onClick={store.reset}><i ></i><span >Reset</span></div>
        <div className="btn pp small" onClick={store.pauseOrPlay}><i></i><span >{paused ? 'Play' : 'Pause'}</span></div>
      </div>
    </div>
  },
  useSelf: ['paused'],
  store
})

