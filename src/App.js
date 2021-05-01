import React, { useState } from 'react'

import './App.css'
import Bottom from './components/Bottom'
import HomeScreen from './components/HomeScreen'
import InfoBar from './components/InfoBar'
import LockScreen from './components/LockScreen'
import Top from './components/Top'

function App() {
  const [lock, setLock] = useState(true)
  const [homeScreen, setHomeScreen] = useState('AppsList')

  return (
    <div className="phone">
      <Top />
      <div
        className="lock-button"
        onClick={() => {
          setLock(true)
        }}
      ></div>
      <div className="screen">
        <InfoBar lock={lock} />
        {/*<LockScreen lock={lock} />
        <HomeScreen />*/}
        {lock ? (
          <LockScreen lock={lock} />
        ) : (
          <HomeScreen homeScreen={homeScreen} setHomeScreen={setHomeScreen} />
        )}
      </div>
      <Bottom setLock={setLock} setHomeScreen={setHomeScreen} />
    </div>
  )
}

export default App
