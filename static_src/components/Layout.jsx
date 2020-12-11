import React from 'react'
import Header from './Header'
import ChatList from './ChatList'
import MessageField from './MessageField'


export default class Layout extends React.Component {

  render() {
    return <div>
      <Header />
      <div className='body'>
        <ChatList />
        <MessageField />
      </div>
    </div>
  }
}