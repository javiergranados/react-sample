import React from 'react'

const char = props => {
  const charStyle = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    border: '1px solid black'
  }

  return (
    <div style={charStyle} onClick={props.click}>
      <p>{props.character}</p>
    </div>
  )
}

export default char
