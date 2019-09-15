import React, { Component } from 'react'
import DatePicker from '../../components/DatePicker/DatePicker'
import NotificationSystem from '../../components/NotificationSystem/NotificationSystem'

export default class Test extends Component {
  render() {
    return (
      <React.Fragment>
      {
        this.props.location.state && !this.props.location.state.ok ? <NotificationSystem location={this.props.location} history={this.props.history} /> : ""
      }
      <div style={{textAlign: 'center'}} className="test">
        <h2 style={{marginTop: '8rem', textAlign: 'center'}} className="heading-1">Welcome to the test site!</h2>
        <DatePicker type="range" placeholder="Outbound Date" placeholder2="Return Date" />
      </div>
      </React.Fragment>
    )
  }
}
