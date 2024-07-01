import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {seconds: 0}

  starttimer = () => {
    const {seconds} = this.state
    this.setState(prev => ({seconds: prev.seconds + 1}))
  }

  convertSecondsToCorrectFormat = () => {
    const {seconds} = this.state
    const minutes = Math.floor(seconds / 60)
    const Seconds = Math.floor(seconds % 60)
    const correctMinutes = minutes < 9 ? `0${minutes}` : minutes
    const correctSeconds = Seconds < 9 ? `0${Seconds}` : Seconds
    return correctMinutes + ':' + correctSeconds
  }

  startevent = () => {
    this.intervalId = setInterval(this.starttimer, 1000)
  }

  stopevent = () => clearInterval(this.intervalId)

  resetevent = () => {
    clearInterval(this.intervalId)
    this.setState({seconds: 0})
  }

  render() {
    const {seconds} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-text horizantal">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="Stopwatch"
                className="stop-watch-icon"
              />
              <p className="description">Timer</p>
            </div>
            <h1 className="time">{this.convertSecondsToCorrectFormat()}</h1>
            <div className="button-container horizantal">
              <button className="timer-btn green" onClick={this.startevent}>
                Start
              </button>
              <button className="timer-btn red" onClick={this.stopevent}>
                Stop
              </button>
              <button className="timer-btn yellow" onClick={this.resetevent}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
