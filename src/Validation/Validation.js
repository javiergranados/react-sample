import React from 'react'

const validation = (props) => {
  let textValidation = 'Text long enough'
  if (props.textLength < 5) {
    textValidation = 'Text too short'
  }

  return (
    <div>
      <p>{textValidation}</p>
    </div>
  )
}

export default validation
