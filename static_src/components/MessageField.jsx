import React from 'react'
import { TextField, FloatingActionButton } from 'material-ui'
import SendIcon from 'material-ui/svg-icons/content/send'
import Message from './Message'
import './styles/styles.css'

export default class MessageField extends React.Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef()
  }

  state = {
    messages: [
      { sender: 'bot', content: 'Привет !' },
      { sender: 'bot', content: 'Как дела ?' },
    ],
    input: '',
  }

  handleClick = (message) => {
    this.sendMessage(message)
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleKeyUp = (event, message) => {
    if (event.keyCode === 13) {
      this.sendMessage(message)
    }
  }

  sendMessage = (message) => {
    this.setState({
      messages: [...this.state.messages, {
        content: message,
        sender: 'me',
      }],
      input: '',
    })
  }

  componentDidMount() {
    this.textInput.current.focus()
  }

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
      const timeout = setTimeout(() =>
          this.setState(
            {
              messages: [...this.state.messages, { sender: 'bot', content: 'Не приставай ко мне, я робот!' }],
            }),
        1000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const messageElements = this.state.messages
      .map((message, index) => (
        <Message key={index} sender={message.sender} content={message.content} />),
      )
    return <div className='layout'>
      <div className='message-field'>
        {messageElements}
      </div>
      <div className='input'>
        <TextField
          ref={this.textInput}
          name='input'
          onChange={this.handleChange}
          value={this.state.input}
          onKeyUp={(event) => this.handleKeyUp(event, this.state.input)} />
        <FloatingActionButton
          onClick={() => this.handleClick(this.state.input)}>
          <SendIcon />
        </FloatingActionButton>
      </div>
    </div>
  }

}