import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'
import Subheader from 'material-ui/Subheader'
import SendIcon from 'material-ui/svg-icons/content/send'

export default class ChatList extends React.Component {
  render() {
    return <div>
      <List>
        <Subheader>Последние чаты</Subheader>
        <Link to='/chat/1/'>
          <ListItem primaryText="Brendan Lim" leftIcon={<SendIcon />} />
        </Link>
        <Link to='/chat/2/'>
          <ListItem primaryText="Eric Hoffman" leftIcon={<SendIcon />} />
        </Link>
        <Link to='/chat/3/'>
          <ListItem primaryText="Grace Ng" leftIcon={<SendIcon />} />
        </Link>
        <Link to='/chat/4/'>
          <ListItem primaryText="Kerem Suer" leftIcon={<SendIcon />} />
        </Link>
        <Link to='/chat/5/'>
          <ListItem primaryText="Raquel Parrado" leftIcon={<SendIcon />} />
        </Link>
      </List>
    </div>
  }
}