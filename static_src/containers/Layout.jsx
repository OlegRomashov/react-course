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

  state = {
    // chats: {
    //   1: { title: 'Чат 1', messageList: [1] },
    //   2: { title: 'Чат 2', messageList: [2] },
    //   3: { title: 'Чат 3', messageList: [3] },
    //   4: { title: 'Чат 4', messageList: [4] },
    //   5: { title: 'Чат 5', messageList: [5] },
    // },
    messages: {
      1: { text: 'Привет! я бот', sender: 'bot' },
      2: { text: 'Здравствуйте! как дела?', sender: 'bot' },
      3: { text: 'Привет! что нового?', sender: 'bot' },
      4: { text: 'Здравствуйте! как у вас настроение?', sender: 'bot' },
      5: { text: 'Привет! чё кислый такой?', sender: 'bot' },
    },
    input: '',
  }

  // addChat = (title) => {
  //   const { chats } = this.state
  //   const chatId = Object.keys(chats).length + 1
  //   this.setState({
  //     chats: {
  //       ...chats,
  //       [chatId]: { title: title, messageList: [] },
  //     },
  //   })
  // }

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state
    if (Object.keys(prevState.messages).length < Object.keys(messages).length
      &&
      Object.values(messages)[Object.values(messages).length - 1].sender
      === 'me') {
      const timeout = setTimeout(() =>
        this.sendMessage('Не приставай ко мне, я робот!', 'bot'), 1000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  sendMessage = (message, sender) => {
    const { messages } = this.state
    const { chatId } = this.props
    const messageId = Object.keys(messages).length + 1
    this.setState({
      messages: {
        ...messages,
        [messageId]: { text: message, sender: sender },
      },
    })
    this.props.sendMessage(messageId, message, sender, chatId)
  }

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