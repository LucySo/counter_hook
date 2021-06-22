/*import react, { Component } from 'react'
export default class App extends Component {
    render() {

        return (
            <div>
                <h2>{this.state.count}</h2>
                <button style={{ backgroundcolor: 'red' }}>+</button>
                <button style={{ backgroundcolor: 'green' }}>-</button>
            </div>
        )
    }
}
*/

import React from 'react'
import Button from 'react-bootstrap/Button'

class Counter extends React.Component {

  render () {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <Button
          variant="danger"
          onClick={this.props.subtractFunction}
        >-</Button>
        <Button
          variant="primary"
          onClick={this.props.addFunction}
        >+</Button>
      </div>
    )
  }
}

export default Counter
