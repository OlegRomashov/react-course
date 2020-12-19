import { createStore } from 'redux'
import initRedusers from './../reducers'

function initStore() {
  const innitialStore = {}

  return createStore(
    initRedusers,
    innitialStore,
    window.__REDUX_DEVTOOLS_EXTENSION__ ?
      window.__REDUX_DEVTOOLS_EXTENSION__() : () => {
      },
  )
}

export default initStore