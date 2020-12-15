import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import SendIcon from 'material-ui/svg-icons/content/send'
import MessageField from './MessageField'

export default class ChatList extends React.Component {
  render() {
    const { chats } = this.state
    const chatElements = chats.map((chatId, index) => (
      <Link to='/chat/{chatId}/'>
        key = {index}
        <ListItem primaryText="Чат {chatId}" leftIcon={<SendIcon />} />
      </Link>
    ))
    return
      <List>
        <Subheader>Последние чаты</Subheader>
        {chatElements}
      </List>
  }
}