import React from 'react'
import PropTypes from 'prop-types'

export default class Message extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }

  render() {
    return (<div
      className="message"
      style={{ alignSelf: this.props.name === 'bot' ? 'flex-start' : 'flex-end' }}>
      <strong> {this.props.name} : </strong>
      {this.props.content}
    </div>)
  }
}