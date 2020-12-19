import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

export default class Index extends React.Component {
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