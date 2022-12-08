// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputText: ''}

  onCountText = event => {
    this.setState({
      inputText: event.target.value,
    })
  }

  render() {
    const {inputText} = this.state
    const noOfLetters = inputText.length
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="heading">Calculate the letters you enter </h1>
          <div className="input-card">
            <label htmlFor="input" className="enter-phrase">
              Enter the phrase
            </label>
            <input
              className="input-element"
              type="input"
              id="input"
              placeholder="Enter the phrase"
              onChange={this.onCountText}
              value={inputText}
            />
          </div>
          <div className="no-of-letters-card">
            <p className="no-of-letters">No.of letters: {noOfLetters}</p>
          </div>
        </div>
        <div className="image-container">
          <img
            src="
https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="clock-image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
