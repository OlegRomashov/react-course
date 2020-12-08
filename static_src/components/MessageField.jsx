import React from 'react'
import Message from './Message'
import './styles/styles.css'

export default class MessageField extends React.Component {
  state = {
    messages: [
      { name: 'bot', content: 'Привет !' },
      { name: 'bot', content: 'Как дела ?' },
    ],
  }
  handleClick = () => {
    this.setState({ messages: [...this.state.messages, { name: 'me', content: 'Нормально!' }] })
  }

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].name === 'me') {
      const timeout = setTimeout(() =>
          this.setState(
            {
              messages: [...this.state.messages, { name: 'bot', content: 'Не приставай ко мне, я робот!' }],
            }),
        1000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  render() {
    const messageElements = this.state.messages.map((message, index) => (
      <Message key={index} name={message.name} content={message.content} />))
    return <div className='layout'>
      <div className='message-field'>
        {messageElements}
      </div>
      <button onClick={this.handleClick}> Отправить сообщение</button>
    </div>
  }

}