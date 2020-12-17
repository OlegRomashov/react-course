import React from 'react'
import PropTypes from 'prop-types'
import Profile from '../profile/Profile'

export default class Header extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
  }

  static defaultProps = {
    chatId: 1,
  }

  render() {
    return (
      <div className='header'>
        <Profile />
        <span style={{ fontSize: '20px' }}>
          Чат {this.props.chatId}
        </span>
      </div>
    )
  }
}