import React from 'react'

import classes from './Safari.module.css'

const Safari = () => {
  return (
    <div className={classes.frameContainer}>
      <iframe
        title="Browser"
        className={classes.frame}
        scrolling="auto"
        src="https://yash0patni.github.io"
        height="100%"
      ></iframe>
    </div>
  )
}

export default Safari
