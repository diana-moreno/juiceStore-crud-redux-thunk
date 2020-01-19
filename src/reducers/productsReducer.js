import { ADD_PRODUCT, ADD_PRODUCT_OK, ADD_PRODUCT_ERROR } from '../types'

// cada reducer tiene su propi state

const initialState = {
  products: [],
  error: false,
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: true
      }

    default:
      return state
  }
}