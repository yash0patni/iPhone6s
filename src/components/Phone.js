import React from 'react'

import classes from './Phone.module.css'

const Phone = () => {
  return (
    <div className={classes.phoneContainer}>
      <div className={classes.numberScreen}>Number Screen</div>
      <div className={classes.dialpad}>
        <div className={classes.buttons}>
          <h3>1</h3>
          <p style={{ color: 'rgba(90, 86, 86, 0.795)' }}>-</p>
        </div>
        <div className={classes.buttons}>
          <h3>2</h3>
          <p>A B C</p>
        </div>
        <div className={classes.buttons}>
          <h3>3</h3>
          <p>D E F</p>
        </div>
        <div className={classes.buttons}>
          <h3>4</h3>
          <p>G H I</p>
        </div>
        <div className={classes.buttons}>
          <h3>5</h3>
          <p>J K L</p>
        </div>
        <div className={classes.buttons}>
          <h3>6</h3>
          <p>M N O</p>
        </div>
        <div className={classes.buttons}>
          <h3>7</h3>
          <p>P Q R S</p>
        </div>
        <div className={classes.buttons}>
          <h3>8</h3>
          <p>T U V</p>
        </div>
        <div className={classes.buttons}>
          <h3>9</h3>
          <p>W X Y Z</p>
        </div>
        <div className={classes.buttons}>
          <h3>*</h3>
          <p></p>
        </div>
        <div className={classes.buttons}>
          <h3>0</h3>
          <p>+</p>
        </div>
        <div className={classes.buttons}>
          <h3>#</h3>
          <p></p>
        </div>
        <div
          className={classes.buttons}
          style={{ backgroundColor: 'black' }}
        ></div>
        <div className={classes.buttons} style={{ backgroundColor: '#46ff00' }}>
          <i class="fas fa-phone-alt"></i>
        </div>
        <div
          className={classes.buttons}
          style={{ backgroundColor: 'black' }}
        ></div>
      </div>
      <div className={classes.phoneBar}>
        <div className={classes.phoneBarButtons}>
          <i class="fas fa-star"></i>
          <p>Favourites</p>
        </div>
        <div className={classes.phoneBarButtons}>
          <i class="fas fa-clock"></i>
          <p>Recents</p>
        </div>
        <div className={classes.phoneBarButtons}>
          <i class="fas fa-user"></i>
          <p>Contacts</p>
        </div>
        <div className={classes.phoneBarButtons} style={{ color: '#3399FF' }}>
          <div style={{ display: 'flex' }}>
            <i class="fas fa-ellipsis-v"></i>
            <i class="fas fa-ellipsis-v"></i>
            <i class="fas fa-ellipsis-v"></i>
          </div>
          <p style={{ display: 'flex' }}>Keypad</p>
        </div>
        <div className={classes.phoneBarButtons}>
          <i class="fas fa-voicemail"></i>
          <p>Voicemail</p>
        </div>
      </div>
    </div>
  )
}

export default Phone
