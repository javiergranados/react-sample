import React from 'react'
import './UserOutput.css'

const paragraphStyle = {
  'fontWeight': 'bold'
}

const UserOutput = props => {
  return (
    <div className='UserOutput'>
      <p>Paragraph 1: {props.username}</p>
      <p style={paragraphStyle}>Paragraph 2</p>
    </div>
  )
}

export default UserOutput
