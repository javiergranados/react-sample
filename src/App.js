import React, { Component } from 'react'
import './App.css'
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    userInput: ''
  }

  inputChangeHandler = event => {
    this.setState({ userInput: event.target.value })
  }

  charClickHandler = index => {
    const charList = this.state.userInput.split('')
    charList.splice(index, 1)

    const textUpdated = charList.join('')

    this.setState({ userInput: textUpdated })
  }

  render () {
    const charList = this.state.userInput.split('').map((ch, i) => <Char key={i} character={ch} click={() => this.charClickHandler(i)} />)

    return (
      <div className='App'>
        <header>
          <h1>React Sample 2</h1>
        </header>
        <div>
          <input type='text' value={this.state.userInput} onChange={this.inputChangeHandler} />
          <hr />
          <p>{this.state.userInput}</p>
          <Validation textLength={this.state.userInput.length} />
          {charList}
        </div>
      </div>
    )
  }
}

export default App
