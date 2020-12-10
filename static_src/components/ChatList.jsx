import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import SendIcon from 'material-ui/svg-icons/content/send'

export default class ChatList extends React.Component {
  render() {
    return <div className='chatList'>
      <List>
        <Subheader>Последние чаты</Subheader>
        <ListItem
          primaryText="Brendan Lim"
          leftIcon={<SendIcon />}
        />
        <ListItem
          primaryText="Eric Hoffman"
          leftIcon={<SendIcon />}
        />
        <ListItem
          primaryText="Grace Ng"
          leftIcon={<SendIcon />}
        />
        <ListItem
          primaryText="Kerem Suer"
          leftIcon={<SendIcon />}
        />
        <ListItem
          primaryText="Raquel Parrado"
          leftIcon={<SendIcon />}
        />
      </List>
    </div>
  }
}