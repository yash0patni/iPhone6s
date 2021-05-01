import React from 'react'

const InfoBar = ({ lock }) => {
  return (
    <div className="infobar">
      <p>
        <i class="fas fa-signal"></i> Airtel 4G
      </p>
      {lock ? (
        <p>
          <i class="fas fa-lock"></i>
        </p>
      ) : (
        <p>09:15 PM</p>
      )}
      <p>
        100% <i class="fas fa-battery-full"></i>
      </p>
    </div>
  )
}

export default InfoBar
