import React from 'react'
import './UserInput.css'

const inputStyle = {
  'borderRadius': '5px',
  'backgroundColor': '#def'
}

const UserInput = props => {
  return (
    <div className='UserInput'>
      <input style={inputStyle} type='text' value={props.username} onChange={props.change} />
    </div>
  )
}

export default UserInput
