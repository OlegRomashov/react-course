import React from 'react'
import Message from './Message'

export default class MessageField extends React.Component {
  state = {
    messages: [
      { name: 'robot', content: 'Привет !' },
      { name: 'robot', content: 'Как дела ?' },
    ],
  }
  handleClick = () => {
    this.setState({ messages: [...this.state.messages, { name: 'I', content: 'Нормально!' }] })
  }

  componentDidUpdate() {
    if (this.state.messages[this.state.messages.length - 1].name === 'I') {
      const timeout = setTimeout(() =>
          this.setState(
            {
              messages: [...this.state.messages, { name: 'robot', content: 'Не приставай ко мне, я робот!' }],
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
    return <div>
      {messageElements}
      <button onClick={this.handleClick}> Отправить сообщение</button>
    </div>
  }

}