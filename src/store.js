import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'// utilizar redux de manera asíncrona
import reducer from './reducers'

// solamente hay un store por aplicación

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), // applyMiddleware se requiere porque vamos a utilizar thunk
    typeof window === 'object' &&
    typeof window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
)

export default store