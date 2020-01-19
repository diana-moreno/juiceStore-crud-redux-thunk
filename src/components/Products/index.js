import React, { useEffect } from 'react'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import { retrieveProductsAction } from '../../actions/productsActions'
// useSelector es para recoger el state

const Products = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    (() => {
      dispatch(retrieveProductsAction())
    })()
  }, [])

  return (
    <div>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  )
}

export default Products
