import React, { Component } from 'react'
import './App.css'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'myuser'
  }

  usernameHandler = event => {
    this.setState({
      username: event.target.value
    })
  }

  render () {
    return (
      <div className='App'>
        <header>
          <h1>React Sample</h1>
        </header>
        <div>
          <UserInput username={this.state.username} change={this.usernameHandler} />
          <UserOutput username={this.state.username} />
          <UserOutput username={this.state.username} />
        </div>
      </div>
    )
  }
}

export default App
