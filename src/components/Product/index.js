import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
// Redux
import { useDispatch } from 'react-redux'
import { deleteProductAction } from '../../actions/productsActions'

const Product = ({ name, price, id }) => {

  const dispatch = useDispatch()

  const confirmDeleteProduct = id => {
    // preguntar al usuario
    Swal.fire({
      title: 'Are you sure you want to delete the product?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if(result.value) {
        // pasarlo al action
        dispatch(deleteProductAction(id))
        console.log(id)
      }
    })
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <td>{id}</td>
        <Link to={`/products/edit/${id}`}>Edit</Link>
        <button
          type='button'
          onClick={() => confirmDeleteProduct(id)}
          >Delete</button>
      </td>
    </tr>
  )
}

export default Product
