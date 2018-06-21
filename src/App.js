import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    text: ''
  }

  inputChangeHandler = (event) => {
    this.setState({ text: event.target.value })
  }

  render () {
    return (
      <div className='App'>
        <header>
          <h1>React Sample 2</h1>
        </header>
        <div>
          <input type='text' onChange={this.inputChangeHandler} />
          <hr />
          <p>{this.state.text}</p>
        </div>
      </div>
    )
  }
}

export default App
