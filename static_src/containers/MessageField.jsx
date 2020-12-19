import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import connect from 'react-redux/es/connect/connect'
import { TextField, FloatingActionButton } from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'
import Index from '../components/Message'
import { sendMessage } from '../actions/messageActions'
import './styles/styles.css'

class MessageField extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  static propTypes = {
    chatId: PropTypes.number.isRequired,
    messages: PropTypes.object.isRequired,
    chats: PropTypes.object.isRequired,
    sendMessage: PropTypes.func.isRequired,
  }

  state = {
    input: '',
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
    this.sendMessage(messageId, message, sender, chatId)
  }

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.props
    if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
      Object.values(messages)[Object.values(messages).length - 1].sender
      === 'me') {
      const timeout = setTimeout(() =>
        this.sendMessage('Не приставай ко мне, я робот!', 'bot'), 1000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  handleSendMessage = (message, sender) => {
    if (this.state.input.length > 0 || sender === 'bot') {
      this.sendMessage(message, sender)
    }
    if (sender === 'me') {
      this.setState({ input: '' })
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      this.handleSendMessage(this.state.input, 'me')
    }
  }

  componentDidMount() {
    this.textInput.current.focus()
  }

  render() {
    const { chatId, messages, chats } = this.props
    const messageElements = chats [chatId].messageList.map(messageId => (
      <Index
        key={messageId}
        text={messages[messageId].text}
        sender={messages[messageId].sender}
      />))

    return [
      <div key='messageElements' className="message-field">
        {messageElements}
      </div>,
      <div key='textInput' style={{ width: '100%', display: 'flex' }}>
        <TextField
          ref={this.textInput}
          name="input"
          fullWidth={true}
          hintText="Введите сообщение"
          style={{ fontSize: '22px' }}
          onChange={this.handleChange}
          value={this.state.input}
          onKeyUp={this.handleKeyUp}
        />
        <FloatingActionButton
          onClick={() => this.handleSendMessage(this.state.input,
            'me')}>
          <SendIcon />
        </FloatingActionButton>
      </div>,
    ]
  }
}

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
  messages: chatReducer.messages,
})
const mapDispatchToProps = dispatch => bindActionCreators({sendMessage}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(MessageField)