import {Component} from 'react'
import './index.css'

class RevolutionsCounter extends Component {
  state = {
    count: 0,
    alert:
      'Useful when doing pradakshinas in temple or while chanting God name, just click the round button to count your chants/pradakshinas',
  }

  onIncrement = () => {
    let btnEle = document.getElementById('btnInc')
    const {count} = this.state
    if (count !== 108 && count >= 0) {
      this.setState(prevState => ({count: prevState.count + 1, alert: ''}))
      btnEle.textContent = ''
    } else if (count === 108) {
      this.setState({
        alert: '108 Pradakshin/chanting Completed Successfully, God Bless You',
      })
    }
  }
  onReset = () => {
    let btnEle = document.getElementById('btnInc')
    this.setState({
      count: 0,
      alert:
        'Useful when doing pradakshinas in temple or while chanting God name, just click the round button to count your chants/pradakshinas',
    })
    btnEle.textContent = 'Click Me!!!'
  }

  render() {
    const {count, alert} = this.state

    return (
      <div className="container">
        <h1 className="alert">{alert}</h1>
        <h1 className="heading">Pradakshin/chanting Counter</h1>
        <button className="butt" onClick={this.onIncrement}>
          {count}
          <br />
          <span id="btnInc">Click Me!</span>
        </button>
        <button className="btn-reset" onClick={this.onReset}>
          Reset
        </button>
        {/* <div className="footer">{used}</div> */}
      </div>
    )
  }
}

export default RevolutionsCounter
