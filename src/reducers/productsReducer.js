import {
  ADD_PRODUCT,
  ADD_PRODUCT_OK,
  ADD_PRODUCT_ERROR,
  BEGIN_PRODUCTS_DOWNLOAD,
  PRODUCTS_DOWNLOAD_OK,
  PRODUCTS_DOWNLOAD_ERROR,
  RETRIEVE_PRODUCT_DELETE,
  PRODUCT_DELETED_OK,
  PRODUCT_DELETED_ERROR
} from '../types'

// cada reducer tiene su propi state

const initialState = {
  products: [],
  error: false,
  loading: false,
  deleteProduct: null
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

    case ADD_PRODUCT_ERROR:
    case PRODUCTS_DOWNLOAD_ERROR:
    case PRODUCT_DELETED_ERROR:
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
    case RETRIEVE_PRODUCT_DELETE:
      return {
        ...state,
        deleteProduct: action.payload
      }
    case PRODUCT_DELETED_OK:
      return {
        ...state,
        products: state.products.filter(product => product.id !== state.deleteProduct),
        deleteProduct: null
      }

    default:
      return state
  }
}