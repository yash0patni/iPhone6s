import React from 'react'

const Bottom = ({ setLock, setHomeScreen }) => {
  return (
    <div
      onClick={() => {
        setLock(false)
        setHomeScreen('AppsList')
      }}
      className="home-button"
    ></div>
  )
}

export default Bottom
