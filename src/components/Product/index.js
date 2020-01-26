import React from 'react'
import { useHistory } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { deleteProductAction, retrieveProductEdit } from '../../actions/products-actions'
import './index.css'

const Product = (product) => {
  const { name, price, id } = product
  const dispatch = useDispatch()
  const history = useHistory()

  const confirmDeleteProduct = id => {
    // ask the user for confirmation
    Swal.fire({
      title: 'Are you sure you want to delete the product?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#62a086',
      cancelButtonColor: '#f66b61',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if(result.value) {
        dispatch(deleteProductAction(id))
      }
    })
  }

  // función que redirige de forma programada, es mejor que Link
  const redirectionEdition = product => {
    dispatch(retrieveProductEdit(product))
    history.push(`products/edit/${id}`)
  }

  return (
    <tr>
      <td>{name}</td>
      <td className='prices'>{price} $</td>
      <td className='button-container'>
        <button
          className='button button--edit'
          type='button'
          onClick={() => redirectionEdition(product)}
        >Edit</button>
        <button
          className='button button--delete'
          type='button'
          onClick={() => confirmDeleteProduct(id)}
        >Delete</button>
      </td>
    </tr>
  )
}

export default Product
