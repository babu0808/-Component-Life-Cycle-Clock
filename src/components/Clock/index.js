import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)

    this.state = {date: new Date()}
    // console.log('Constructor called')
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000)
    // console.log('DidMount called')
  }

  tick = () => {
    this.setState({
      date: new Date(),
    })
  }

  componentWillUnmount = () => {
    clearInterval(this.timerId)
    console.log('Component will unmount')
  }

  render() {
    // console.log('Render called')
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
