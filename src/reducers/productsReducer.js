import {
  ADD_PRODUCT,
  ADD_PRODUCT_OK,
  ADD_PRODUCT_ERROR,
  BEGIN_PRODUCTS_DOWNLOAD,
  PRODUCTS_DOWNLOAD_OK,
  PRODUCTS_DOWNLOAD_ERROR
} from '../types'

// cada reducer tiene su propi state

const initialState = {
  products: [],
  error: false,
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {

    case BEGIN_PRODUCTS_DOWNLOAD:
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload
      }

    case ADD_PRODUCT_OK:
      return {
        ...state,
        loading: false, // se cambia directamente??
        products: [...state.products, action.payload]
      }

    case PRODUCTS_DOWNLOAD_ERROR:
    case ADD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case PRODUCTS_DOWNLOAD_OK:
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload
      }

    default:
      return state
  }
}