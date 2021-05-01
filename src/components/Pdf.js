import React from 'react'

import resume from '../docs/Yash_Patni_Resume.pdf'

const Pdf = () => {
  return (
    <iframe title="Resume" src={resume} width="100%" height="100%"></iframe>
  )
}

export default Pdf
