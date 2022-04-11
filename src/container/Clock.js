import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time : new Date()
        }
        console.log(" 1 constructure")
    }
  render() {
    console.log(" 2 render");
    return (
      <div>
          
          {this.state.time.totimestring()}
      </div>
    )
  }
}
