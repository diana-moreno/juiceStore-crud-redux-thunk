import React from 'react'
import { Link } from 'react-router-dom'

// Redux
import { useDispatch } from 'react-redux'
import { deleteProductAction } from '../../actions/productsActions'

const Product = ({ name, price, id }) => {

  const dispatch = useDispatch()

  const confirmDeleteProduct = id => {
    // preguntar al usuario

    // pasarlo al action
    dispatch(deleteProductAction(id))
    console.log(id)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>
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
