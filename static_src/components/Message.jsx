import React from 'react'
import PropTypes from 'prop-types'

export default class Message extends React.Component {
  static propTypes = {
    sender: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className={this.props.sender === 'bot' ? 'messageAll' : 'messageMe'}>
        <strong> {this.props.sender} : </strong>
        {this.props.text}
      </div>
    )
  }
}