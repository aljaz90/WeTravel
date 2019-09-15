import React, { Component } from 'react'
import DatePicker from '../../components/DatePicker/DatePicker'

export default class Test extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}} className="test">
        <h2 style={{marginTop: '8rem', textAlign: 'center'}} className="heading-1">Welcome to the test site!</h2>
        <DatePicker type="range" placeholder="Outbound Date" placeholder2="Return Date" />
      </div>
    )
  }
}
