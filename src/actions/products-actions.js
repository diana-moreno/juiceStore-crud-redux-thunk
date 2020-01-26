import {
  ADD_PRODUCT,
  ADD_PRODUCT_OK,
  ADD_PRODUCT_ERROR,
  BEGIN_PRODUCTS_DOWNLOAD,
  PRODUCTS_DOWNLOAD_OK,
  PRODUCTS_DOWNLOAD_ERROR,
  RETRIEVE_PRODUCT_DELETE,
  PRODUCT_DELETED_OK,
  PRODUCT_DELETED_ERROR,
  RETRIEVE_PRODUCT_EDIT,
  BEGIN_EDIT_PRODUCT,
  PRODUCT_EDITED_OK,
  PRODUCT_EDITED_ERROR
} from '../types'
import Swal from 'sweetalert2'
import {
  retrieveProductsDB,
  addProductDB,
  deleteProductDB,
  editProductDB
} from '../api-calls'


// Download products actions
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

export function retrieveProductsAction() {
  return async (dispatch) => {
    dispatch(downloadProducts())
    try {
      const {data} = await retrieveProductsDB()
      dispatch(downloadProductsOk(data))
    } catch(error) {
      dispatch(downloadProductsError())
    }
  }
}


// Create new products
const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true
})

const addProductOk = product => ({
  type: ADD_PRODUCT_OK,
  payload: product
})

const addProductError = state => ({
  type: ADD_PRODUCT_ERROR,
  payload: state
})

export function createNewProductAction(product) {
  return async (dispatch) => {
    dispatch(addProduct())
    try {
      await addProductDB(product)
      dispatch(addProductOk(product))
      // Alert
      Swal.fire({
        title: 'Added!',
        text: 'The product has been added successfully',
        icon: 'success',
        confirmButtonColor: '#62a086'
      })
    } catch (error) {
      dispatch(addProductError(true))
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error ocurred. Please, try it again.'
      })
    }
  }
}


// Delete products
const retrieveProductDelete = id => ({
  type: RETRIEVE_PRODUCT_DELETE,
  payload: id
})

const deleteProductOk = () => ({
  type: PRODUCT_DELETED_OK
})

const deleteProductError = () => ({
  type: PRODUCT_DELETED_ERROR,
  payload: true
})

export function deleteProductAction(id) {
  return async (dispatch) => {
    dispatch(retrieveProductDelete(id))
    try {
      await deleteProductDB(id)
      dispatch(deleteProductOk())
      // Alert
       Swal.fire({
        title: 'Deleted!',
        text: 'The product has been deleted.',
        icon: 'success',
        confirmButtonColor: '#62a086'
      })
    } catch(error) {
      dispatch(deleteProductError())
    }
  }
}


// Edit product
const retrieveProductAction = product => ({
  type: RETRIEVE_PRODUCT_EDIT,
  payload: product
})

export function retrieveProductEdit(product) {
  return (dispatch) => {
    dispatch(retrieveProductAction(product))
  }
}

const editProduct = () => ({
  type: BEGIN_EDIT_PRODUCT
})

const editProductOk = product => ({
  type: PRODUCT_EDITED_OK,
  payload: product
})

const editProductError = () => ({
  type: PRODUCT_EDITED_ERROR,
  payload: true
})

export function editProductAction(product) {
  return async (dispatch) => {
    dispatch(editProduct(product))
    try {
      await editProductDB(product)
      dispatch(editProductOk(product))
      // Alert
      Swal.fire({
        title: 'Updated!',
        text: 'The product has been updated.',
        icon: 'success',
        confirmButtonColor: '#62a086'
      })
    } catch (error) {
      dispatch(editProductError())
    }
  }
}
