import React from 'react'
import PropTypes from 'prop-types'
import { TextField, FloatingActionButton } from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'
import Message from './Message'
import './styles/styles.css'

export default class MessageField extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  static propTypes = {
    chatId: PropTypes.number.isRequired,
  }

  state = {
    chats: {
      1: { title: 'Чат 1', messageList: [1] },
      2: { title: 'Чат 2', messageList: [2] },
      3: { title: 'Чат 3', messageList: [3] },
      4: { title: 'Чат 4', messageList: [4] },
      5: { title: 'Чат 3', messageList: [5] },

    },
    messages: {
      1: { text: 'Привет! я бот', sender: 'bot' },
      2: { text: 'Здравствуйте! как дела?', sender: 'bot' },
      3: { text: 'Привет! что нового?', sender: 'bot' },
      4: { text: 'Здравствуйте! как у вас настроение?', sender: 'bot' },
      5: { text: 'Привет! чё кислый такой?', sender: 'bot' },
    },
    input: '',
  }

  componentDidUpdate(prevProps, prevState) {
    const { messages } = this.state
    if (Object.keys(prevState.messages).length < Object.keys(messages).length
      &&
      Object.values(messages)[Object.values(messages).length - 1].sender
      === 'me') {
      setTimeout(() =>
        this.handleSendMessage('Не приставай ко мне, я робот!', 'bot'), 1000)
    }
  }

  handleSendMessage = (message, sender) => {
    const { messages, chats, input } = this.state
    const { chatId } = this.props
    if (input.length > 0 || sender === 'bot') {
      const messageId = Object.keys(messages).length + 1
      this.setState({
        messages: {
          ...messages, [messageId]: { text: message, sender: sender },
        },
        chats: {
          ...chats,
          [chatId]: {
            ...chats [chatId],
            messageList: [...chats [chatId]['messageList'], messageId],
          },
        },
      })
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


  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const { messages, chats } = this.state
    const { chatId } = this.props
    const messageElements = chats [chatId].messageList.map((messageId, index) => (
      <Message
        key={index}
        text={messages [messageId].text}
        sender={messages [messageId].sender}
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