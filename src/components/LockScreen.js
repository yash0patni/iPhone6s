import React from 'react'

const LockScreen = ({ lock }) => {
  let cn = 'lock-screen'
  if (!lock) cn += ' inactive'
  return (
    <div className={cn}>
      <h1>09:15</h1>
      <p>Saturday, 24 April</p>
      <h6>Press Home to unlock</h6>
    </div>
  )
}

export default LockScreen
