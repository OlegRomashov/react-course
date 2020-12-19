import update from 'react-addons-update'
import { SEND_MESSAGE } from '../actions/messageActions'
import { ADD_CHAT } from '../actions/chatActions'

const initialStore = {
  chats: {
    1: { title: 'Чат 1', messageList: [1] },
    2: { title: 'Чат 2', messageList: [2] },
    3: { title: 'Чат 3', messageList: [3] },
    4: { title: 'Чат 4', messageList: [4] },
    5: { title: 'Чат 5', messageList: [5] },
  },
  messages: {
    1: { text: 'Привет! я бот', sender: 'bot' },
    2: { text: 'Здравствуйте! как дела?', sender: 'bot' },
    3: { text: 'Привет! что нового?', sender: 'bot' },
    4: { text: 'Здравствуйте! как у вас настроение?', sender: 'bot' },
    5: { text: 'Привет! чё кислый такой?', sender: 'bot' },
  },
}

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      return update(store, {
        chats: {
          $merge: {
            [action.chatId]: {
              title: store.chats [action.chatId].title,
              messageList: [...store.chats [action.chatId].messageList,
                action.messageId],
            },
          },
        },
      })
    }
    case ADD_CHAT: {
      const chatId = Object.keys(store.chats).length + 1
      return update(store, {
        chats: {
          $merge: {
            [chatId]: {
              title: action.title, messageList: [],
            },
          },
        },
      })
    }
    default :
      return store
  }
}