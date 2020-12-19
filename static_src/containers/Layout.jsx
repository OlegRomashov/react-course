import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'
import MessageField from './MessageField'
import ChatList from './ChatList'
import Header from './Header'
import { sendMessage } from '../actions/messageActions'
import './styles/styles.css'


class Layout extends React.Component {
  static propTypes = {
    chatId: PropTypes.number,
    sendMessage: PropTypes.func.isRequired,
  }

  static defaultProps = {
    chatId: 1,
  }

  state = {}


  render() {
    return (
      <div>
        <Header chatId={this.props.chatId} />
        <div className='layout-canvas'>
          <div className="layout-left-side">
            <ChatList />
          </div>
          <div className="layout-right-side">
            <MessageField
              chatId={this.props.chatId}
              messages={this.state.messages}
              sendMessage={this.sendMessage}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps =
  dispatch => bindActionCreators({ sendMessage }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Layout)