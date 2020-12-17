import { createStore } from 'redux'
import initRedusers from './../reducers'

function initStore() {
  const innitialStore = {}

  return createStore(
    initRedusers,
    innitialStore,
  )
}

export default initStore