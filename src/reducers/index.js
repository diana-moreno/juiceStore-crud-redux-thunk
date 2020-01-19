import { combineReducers } from 'redux'
import productsReducer from './productsReducer'

export default combineReducers({
  products: productsReducer
})

// si vamos a tener varios reducers, hay que utilizar combineReducers porque solo puede haber uno.