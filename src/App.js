import React, { Component } from 'react'

// this.setState({ name: })

export default class App extends Component {

  state = {
    name: '',
    age: 17
  }

  render() {
    const isLegalAge = this.state.age >= 18

    return (
      <div>
        <h1>{this.state.name}</h1>
        <div>
          <input type="text" placeholder="Name" value={this.state.name} onChange={event => this.setState({ name: event.target.value })} />
        </div>
        <div>
          <input type="number" placeholder="Age" value={this.state.age} onChange={event => this.setState({ age: event.target.value })} />
        </div>

        <div hidden={!isLegalAge}>
          <p>Hey, I'm 18</p>
          <button>Continue</button>
        </div>


      </div>
    )
  }
}
