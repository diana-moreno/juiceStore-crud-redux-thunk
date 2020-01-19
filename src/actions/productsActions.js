import {
  ADD_PRODUCT,
  ADD_PRODUCT_OK,
  ADD_PRODUCT_ERROR,
  BEGIN_PRODUCTS_DOWNLOAD,
  PRODUCTS_DOWNLOAD_OK,
  PRODUCTS_DOWNLOAD_ERROR
} from '../types'
import axiosClient from '../config/axios'
import Swal from 'sweetalert2'

// Crear nuevos productos

export function createNewProductAction(product) {
  return async (dispatch) => {
    // mandar a base de datos o ejecutar el reducer
    console.log(product)
    dispatch(addProduct())
    try {
      // insertar en la API
      await axiosClient.post('/products', product)

      // si todo sale bien, modificar estado
      dispatch(addProductOk(product))

      // Alerta
      Swal.fire(
        'Correct',
        'The product has been added successfully',
        'success'
      )
    } catch (error) {
      console.log(error)
      dispatch(addProductError(true))
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error ocurred. Please, try it again.'
      })
    }
  }
}

// cuando se declara una función aquí, también hay que declararlo en los reducers.
const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true
})

const addProductOk = product => ({ // lo que hay entre paréntesis es el action
  type: ADD_PRODUCT_OK,
  payload: product
})

const addProductError = state => ({
  type: ADD_PRODUCT_ERROR,
  payload: state
})
// esta es la función que se tiene que utilizar en el componente, así los datos del componente se pueden pasar a las acciones y después se ejecutan con dispatch.
//
// payload: el que modifica el state
// dispatch: es el que manda ejecutar las acciones

// función que descarga los productos de la base de datos
export function retrieveProductsAction() {
  return async (dispatch) => {
    dispatch(downloadProducts())

    try {
      const response = await axiosClient.get('/products')
      console.log(response.data)
      dispatch( downloadProductsOk(response.data))
    } catch(error) {
      dispatch(downloadProductsError())
    }
  }
}

const downloadProducts = () => ({
  type: BEGIN_PRODUCTS_DOWNLOAD,
  payload: true
})

const downloadProductsOk = products => ({
  type: PRODUCTS_DOWNLOAD_OK,
  payload: products
})

const downloadProductsError = () => ({
  type: PRODUCTS_DOWNLOAD_ERROR,
  payload: true
})